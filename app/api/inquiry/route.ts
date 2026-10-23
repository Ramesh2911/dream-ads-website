import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX_BYTES = 6 * 1024 * 1024; // 5MB file + envelope

function jsonError(message: string, status: number) {
  return NextResponse.json({ success: false, message }, { status });
}

export async function POST(req: NextRequest) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return jsonError('Invalid form submission', 400);
  }

  const size = Number(req.headers.get('content-length') || 0);
  if (size && size > MAX_BYTES) return jsonError('Payload too large (max 5MB attachment)', 413);

  const backendUrl = process.env.BACKEND_URL || 'http://localhost:5000';
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;

  // Forward multipart body straight to the Dream Ads backend (handles multer + storage).
  try {
    const res = await fetch(`${backendUrl}/api/inquiries`, {
      method: 'POST',
      body: form,
      signal: AbortSignal.timeout(15000),
    });
    const data = await res.json().catch(() => null);
    if (res.ok && data) {
      return NextResponse.json(data, { status: res.status });
    }
    if (res.status !== 502 && res.status !== 503 && res.status !== 504) {
      // Backend reachable but rejected (validation/auth) — relay its message.
      return NextResponse.json(
        data ?? { success: false, message: 'Submission rejected by server' },
        { status: res.status }
      );
    }
    throw new Error('backend unavailable');
  } catch {
    // Fallback: optional webhook (JSON, attachment metadata only).
    if (webhookUrl) {
      try {
        const payload: Record<string, unknown> = {};
        form.forEach((v, k) => {
          if (typeof v === 'string') {
            if (k === 'estimate') {
              try {
                payload.estimate = JSON.parse(v);
              } catch {
                payload.estimate = v;
              }
            } else payload[k] = v;
          } else {
            payload.attachmentName = v.name;
            payload.attachmentType = v.type;
          }
        });
        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(10000),
        });
        if (res.ok) {
          return NextResponse.json({ success: true, message: 'Inquiry submitted' }, { status: 201 });
        }
      } catch {
        /* fall through to 502 */
      }
    }
    return jsonError('Could not reach the inquiry service — please try again shortly', 502);
  }
}
