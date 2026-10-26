#!/usr/bin/env bash
set -euo pipefail

# cPanel HTTPS deploy for dream-ads-website (Next.js).
# Required env: CPANEL_SSO_EMAIL, CPANEL_SSO_PASSWORD (WHMCS client credentials)
# Artifacts expected in cwd: package.json + deploy.tgz (source, .next w/o cache, configs, .env.local)

CPANEL_HOST="${CPANEL_HOST:-server.shodns.in:2083}"
WHMCS_URL="${WHMCS_URL:-https://manage.shohost.com}"
WHMCS_PRODUCT_ID="${WHMCS_PRODUCT_ID:-2942}"
CPANEL_HOME="${CPANEL_HOME:-/home/dreamads}"
APP_ROOT="${APP_ROOT:-website}"
REMOTE_DIR="${CPANEL_HOME}/${APP_ROOT}"
VERIFY_URL="${VERIFY_URL:-https://dreamads.in/}"
VERIFY_GREP="${VERIFY_GREP:-<title>Dream Ads}"

: "${CPANEL_SSO_EMAIL:?CPANEL_SSO_EMAIL is required}"
: "${CPANEL_SSO_PASSWORD:?CPANEL_SSO_PASSWORD is required}"

JAR="$(mktemp)"
BODY="$(mktemp)"
trap 'rm -f "$JAR" "$BODY"' EXIT

log() { echo "[deploy] $*"; }
die() { echo "::error::$*"; exit 1; }

login() {
  local token url cpsess
  token=$(curl -fsS -c "$JAR" -b "$JAR" "$WHMCS_URL/index.php/login" \
    | grep -o 'name="token" value="[^"]*"' | head -1 | sed 's/.*value="//; s/"$//' || true)
  [ -n "$token" ] || die "WHMCS CSRF token not found"
  curl -fsS -c "$JAR" -b "$JAR" -X POST "$WHMCS_URL/index.php/login" \
    --data-urlencode "username=$CPANEL_SSO_EMAIL" \
    --data-urlencode "password=$CPANEL_SSO_PASSWORD" \
    --data "token=${token}&submit=+" -o /dev/null
  url=$(curl -sL -c "$JAR" -b "$JAR" \
    "$WHMCS_URL/clientarea.php?action=productdetails&id=${WHMCS_PRODUCT_ID}&dosinglesignon=1&app=FileManager_Home" \
    -o /dev/null -w '%{url_effective}')
  cpsess=$(grep -o 'cpsess[0-9]*' <<<"$url" | head -1 || true)
  [ -n "$cpsess" ] || die "cPanel SSO did not yield a session (final url: $url)"
  BASE="https://${CPANEL_HOST}/${cpsess}"
  curl -fsS -b "$JAR" "$BASE/execute/Fileman/list_files?dir=${CPANEL_HOME}" | grep -q '"status": *1' \
    || die "cPanel API auth check failed"
  log "cPanel session: $cpsess"
}

upload() { # <local-path> <remote-filename> <remote-dir>
  local resp
  resp=$(curl -fsS -b "$JAR" -X POST "$BASE/execute/Fileman/upload_files" \
    -F "dir=$3" -F "file=@$1;filename=$2" -F overwrite=1)
  jq -e '.data.succeeded >= 1 and .data.failed == 0' <<<"$resp" >/dev/null \
    || die "upload of $2 failed: $resp"
  log "uploaded $3/$2"
}

cgi() { # <form-body>
  curl -fsS -b "$JAR" -X POST \
    "$BASE/3rdparty/cloudlinux/cloudlinux-selector.cgi?cgiaction=sendRequest" \
    -H 'Content-Type: application/x-www-form-urlencoded' --data "$1"
}

run_script() { # <script-name>
  local resp decoded rc
  resp=$(cgi "command=cloudlinux-selector&method=run-script&params%5Binterpreter%5D=nodejs&params%5Bapp-root%5D=${APP_ROOT}&params%5Bscript-name%5D=$1")
  decoded=$(jq -r '.data // empty' <<<"$resp" | base64 -d 2>/dev/null || true)
  [ -n "$decoded" ] || die "run-script $1 returned no data: $resp"
  printf '%s\n' "$decoded"
  rc=$(grep -oE 'returncode: *[0-9]+' <<<"$decoded" | grep -oE '[0-9]+' | head -1 || true)
  [ "${rc:-1}" = "0" ] || die "run-script $1 returned rc=${rc:-unknown}"
}

restart_app() {
  local resp
  resp=$(cgi "command=cloudlinux-selector&method=restart&params%5Binterpreter%5D=nodejs&params%5Bapp-root%5D=${APP_ROOT}")
  log "restart: $resp"
  case "$resp" in
    *'"result":"error"'*|*Exception*|*Traceback*) die "restart failed: $resp" ;;
  esac
}

verify() {
  local i code body
  for i in $(seq 1 15); do
    code=$(curl -s -o "$BODY" -w '%{http_code}' --max-time 30 "$VERIFY_URL" || true)
    body=$(cat "$BODY" 2>/dev/null || true)
    if [ "$code" = "200" ] && grep -q "$VERIFY_GREP" <<<"$body"; then
      log "verify OK: $VERIFY_URL"
      return 0
    fi
    log "verify attempt $i: http=$code"
    sleep 5
  done
  die "verification failed for $VERIFY_URL"
}

main() {
  [ -f package.json ] || die "package.json not found in cwd"
  [ -f deploy.tgz ] || die "deploy.tgz not found in cwd"
  login
  upload package.json package.json "$REMOTE_DIR"
  upload deploy.tgz deploy.tgz "$REMOTE_DIR"
  run_script setup
  sleep 3
  restart_app
  sleep 5
  verify
  log "deploy complete"
}

main "$@"
