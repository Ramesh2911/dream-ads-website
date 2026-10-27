#!/usr/bin/env bash
set -euo pipefail

# cPanel HTTPS deploy for dream-ads-website (Next.js, Fileman-based).
#
# Auth modes (token preferred — WHMCS SSO 403s GitHub-runner IPs):
#   CPANEL_API_TOKEN  -> UAPI/API2 file ops via `Authorization: cpanel user:token`
#   CPANEL_SSO_*      -> used for the cloudlinux-selector CGI (run-script/restart),
#                        which rejects API tokens (403). Browser UA headers are
#                        sent to WHMCS to dodge curl-UA WAF blocks.
#
# Uploads: Fileman plain overwrite / fresh create ONLY — never delete (cPanel's
# async trash queue can eat a freshly re-uploaded file). Subdirs via API2 mkdir.
# run-script `tar` extracts are NOT used: they land in the CageFS-cached view
# and never reach the live lsnode worker.

CPANEL_HOST="${CPANEL_HOST:-server.shodns.in:2083}"
CPANEL_USER="${CPANEL_USER:-dreamads}"
WHMCS_URL="${WHMCS_URL:-https://manage.shohost.com}"
WHMCS_PRODUCT_ID="${WHMCS_PRODUCT_ID:-2942}"
CPANEL_HOME="${CPANEL_HOME:-/home/dreamads}"
APP_ROOT="${APP_ROOT:-website}"
REMOTE_DIR="${CPANEL_HOME}/${APP_ROOT}"
VERIFY_URL="${VERIFY_URL:-https://dreamads.in/}"
VERIFY_GREP="${VERIFY_GREP:-<title>Dream Ads}"
MARKER_VALUE="${MARKER_VALUE:-${GITHUB_RUN_ID:-}}"
SKIP_SETUP="${SKIP_SETUP:-0}"

CURL_UA=(-A 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
  -H 'Accept-Language: en-US,en;q=0.9')

JAR="$(mktemp)"
BODY="$(mktemp)"
trap 'rm -f "$JAR" "$BODY"' EXIT

log() { echo "[deploy] $*"; }
die() { echo "::error::$*"; exit 1; }

CURL_AUTH=()
BASE_API=""
BASE_CGI=""
CGI_OK=0

whmcs_login() {
  local token url cpsess
  token=$(curl -fsS "${CURL_UA[@]}" -c "$JAR" -b "$JAR" "$WHMCS_URL/index.php/login" \
    | grep -o 'name="token" value="[^"]*"' | head -1 | sed 's/.*value="//; s/"$//' || true)
  [ -n "$token" ] || return 1
  curl -fsS "${CURL_UA[@]}" -c "$JAR" -b "$JAR" -X POST "$WHMCS_URL/index.php/login" \
    --data-urlencode "username=${CPANEL_SSO_EMAIL}" \
    --data-urlencode "password=${CPANEL_SSO_PASSWORD}" \
    --data "token=${token}&submit=+" -o /dev/null || return 1
  url=$(curl -sL "${CURL_UA[@]}" -c "$JAR" -b "$JAR" \
    "$WHMCS_URL/clientarea.php?action=productdetails&id=${WHMCS_PRODUCT_ID}&dosinglesignon=1&app=FileManager_Home" \
    -o /dev/null -w '%{url_effective}')
  cpsess=$(grep -o 'cpsess[0-9]*' <<<"$url" | head -1 || true)
  [ -n "$cpsess" ] || return 1
  BASE_CGI="https://${CPANEL_HOST}/${cpsess}"
  curl -fsS -b "$JAR" "$BASE_CGI/execute/Fileman/list_files?dir=${CPANEL_HOME}" | grep -q '"status": *1' || return 1
  log "WHMCS SSO session: $cpsess"
}

setup_auth() {
  if [ -n "${CPANEL_API_TOKEN:-}" ]; then
    CURL_AUTH=(-H "Authorization: cpanel ${CPANEL_USER}:${CPANEL_API_TOKEN}")
    BASE_API="https://${CPANEL_HOST}"
    log "auth: cPanel API token (file ops)"
    [ -n "${CPANEL_SSO_EMAIL:-}" ] && [ -n "${CPANEL_SSO_PASSWORD:-}" ] \
      || die "CPANEL_SSO_EMAIL/CPANEL_SSO_PASSWORD required for the restart CGI (set both secrets)"
    whmcs_login \
      || die "WHMCS SSO login failed from this host (WAF/IP block?) — restart needs a cPanel session; aborting BEFORE any file changes"
    CGI_OK=1
  else
    [ -n "${CPANEL_SSO_EMAIL:-}" ] && [ -n "${CPANEL_SSO_PASSWORD:-}" ] \
      || die "need CPANEL_API_TOKEN or CPANEL_SSO_EMAIL/CPANEL_SSO_PASSWORD"
    whmcs_login || die "WHMCS SSO login failed"
    CURL_AUTH=(-b "$JAR")
    BASE_API="$BASE_CGI"
    CGI_OK=1
    log "auth: WHMCS SSO session"
  fi
}

api() { curl -fsS "${CURL_AUTH[@]}" --retry 3 --retry-delay 2 "$@"; }

ensure_dir() { # <absolute-remote-dir>
  local parent name
  parent=$(dirname "$1")
  name=$(basename "$1")
  api "$BASE_API/json-api/cpanel?api.version=2&cpanel_jsonapi_module=Fileman&cpanel_jsonapi_func=mkdir&dir=$(printf '%s' "$parent" | jq -sRr @uri)&name=$(printf '%s' "$name" | jq -sRr @uri)" \
    >/dev/null || true
}

dir_files() { # <remote-dir> -> newline list of file names (one level)
  api "$BASE_API/execute/Fileman/list_files?showhiddenfiles=1&dir=$(printf '%s' "$1" | jq -sRr @uri)" \
    | jq -r '.data[] | select(.type=="file") | .file' || true
}

verify_present() { # <remote-dir> <basename>  (dotfiles never appear in listings)
  case "$2" in
    .*)
      api "$BASE_API/execute/Fileman/get_file_content?dir=$(printf '%s' "$1" | jq -sRr @uri)&file=$(printf '%s' "$2" | jq -sRr @uri)" \
        | jq -e '.status == 1' >/dev/null 2>&1
      ;;
    *)
      dir_files "$1" | grep -qxF "$2"
      ;;
  esac
}

upload_batch() { # <remote-dir> <local-file>...
  local remote="$1"; shift
  local args=() f resp n="$#" missing=""
  for f in "$@"; do
    args+=(-F "file=@${f};filename=$(basename "$f")")
  done
  resp=$(curl -fsS "${CURL_AUTH[@]}" --retry 3 --retry-delay 2 -X POST "$BASE_API/execute/Fileman/upload_files" \
    -F "dir=$remote" -F overwrite=1 "${args[@]}" || true)
  if ! jq -e ".data.succeeded >= $n and .data.failed == 0" <<<"$resp" >/dev/null 2>&1; then
    log "batch response not clean for $remote (n=$n): $(jq -c '.data.uploads // .errors // empty' <<<"$resp" 2>/dev/null | head -c 300)"
  fi
  # cPanel can claim success without the file landing — verify each name
  for f in "$@"; do
    verify_present "$remote" "$(basename "$f")" || missing="$missing $(basename "$f")"
  done
  if [ -n "$missing" ]; then
    log "batch phantom for $remote — retrying per-file:$missing"
    for f in "$@"; do
      verify_present "$remote" "$(basename "$f")" && continue
      local i
      for i in 1 2 3 4 5; do
        curl -fsS "${CURL_AUTH[@]}" --retry 3 --retry-delay 2 -X POST "$BASE_API/execute/Fileman/upload_files" \
          -F "dir=$remote" -F overwrite=1 -F "file=@${f};filename=$(basename "$f")" >/dev/null || true
        verify_present "$remote" "$(basename "$f")" && break
        sleep 2
      done
      verify_present "$remote" "$(basename "$f")" \
        || die "upload vanished after retries: $remote/$(basename "$f")"
    done
  fi
  log "uploaded -> $remote ($n files, verified present)"
}

upload_tree() { # <local-dir> <remote-dir> [find-expr...]
  local ldir="$1" rdir="$2"; shift 2
  [ -d "$ldir" ] || die "missing $ldir"
  ensure_dir "$rdir"
  local cur="" target f rel reldir
  local -a group=()
  flush() {
    [ "${#group[@]}" -gt 0 ] && upload_batch "$cur" "${group[@]}"
    group=()
  }
  while IFS= read -r f; do
    rel="${f#"$ldir"/}"
    reldir=$(dirname "$rel")
    target="$rdir"
    if [ "$reldir" != "." ]; then
      target="$rdir/$reldir"
      ensure_dir "$target"
    fi
    if [ "$target" != "$cur" ]; then
      flush
      cur="$target"
    fi
    group+=("$f")
    [ "${#group[@]}" -ge 40 ] && flush
  done < <(find "$ldir" -type f "$@" | LC_ALL=C sort)
  flush
  return 0
}

cgi() { # <form-body>
  curl -fsS -b "$JAR" -X POST \
    "$BASE_CGI/3rdparty/cloudlinux/cloudlinux-selector.cgi?cgiaction=sendRequest" \
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

verify_page() {
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

verify_marker() {
  [ -n "$MARKER_VALUE" ] || { log "no MARKER_VALUE/GITHUB_RUN_ID — skipping marker check"; return 0; }
  local i code body
  for i in $(seq 1 15); do
    code=$(curl -s -o "$BODY" -w '%{http_code}' --max-time 30 "https://dreamads.in/_deploy-marker.txt" || true)
    body=$(cat "$BODY" 2>/dev/null | tr -d '[:space:]' || true)
    if [ "$code" = "200" ] && [ "$body" = "$MARKER_VALUE" ]; then
      log "marker OK: _deploy-marker.txt = $MARKER_VALUE"
      return 0
    fi
    log "marker attempt $i: http=$code body='$body' want='$MARKER_VALUE'"
    sleep 5
  done
  die "deploy marker not live — files did not reach the server"
}

main() {
  [ -f package.json ] || die "package.json not found in cwd"
  [ -d .next ] || die ".next/ not found — run npm run build first"
  setup_auth

  # configs first (npm install reads package.json/lock)
  ensure_dir "$REMOTE_DIR"
  local -a roots=(package.json package-lock.json)
  local f
  for f in next.config.mjs server.js tsconfig.json next-env.d.ts tailwind.config.js \
           postcss.config.mjs .env.local; do
    [ -f "$f" ] && roots+=("$f")
  done
  upload_batch "$REMOTE_DIR" "${roots[@]}"

  if [ "$SKIP_SETUP" != "1" ]; then
    if [ "$CGI_OK" = "1" ]; then
      run_script setup
      sleep 3
    else
      log "WARN: skipping npm setup (no cPanel session) — dependency changes will NOT apply"
    fi
  fi

  upload_tree .next "$REMOTE_DIR/.next" -not -path '.next/cache/*'
  upload_tree app "$REMOTE_DIR/app"
  upload_tree components "$REMOTE_DIR/components"
  upload_tree lib "$REMOTE_DIR/lib"
  upload_tree public "$REMOTE_DIR/public"

  if [ "$CGI_OK" = "1" ]; then
    restart_app
  else
    log "WARN: restarting app (no cPanel session) — live worker may serve stale code until next restart"
  fi

  sleep 3
  verify_page
  verify_marker
  log "deploy complete"
}

main "$@"
