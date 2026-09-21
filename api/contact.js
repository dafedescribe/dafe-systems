const MAX_BODY_BYTES = 32 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function requiredString(value, max = 4000) {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= max;
}

function headerSafe(value) {
  return value.replace(/[\r\n]/g, ' ').trim();
}

function base64Url(value) {
  return Buffer.from(value, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

function rfc822({ to, replyTo, subject, body }) {
  const headers = [
    `To: ${headerSafe(to)}`,
    `Subject: ${headerSafe(subject)}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset="UTF-8"',
  ];
  if (replyTo) headers.push(`Reply-To: ${headerSafe(replyTo)}`);
  return `${headers.join('\r\n')}\r\n\r\n${body}`;
}

function parseBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body !== 'string') return null;
  if (Buffer.byteLength(req.body, 'utf8') > MAX_BODY_BYTES) return null;
  try {
    return JSON.parse(req.body);
  } catch {
    return null;
  }
}

function validatePayload(payload) {
  if (!payload || !['workflow', 'teaching'].includes(payload.inquiryType)) return false;
  if (!requiredString(payload.description, 8000)) return false;
  if (!requiredString(payload.name, 160)) return false;
  if (!requiredString(payload.organization, 240)) return false;
  if (!requiredString(payload.contactInfo, 240)) return false;
  if (payload.currentTools !== undefined && !requiredString(payload.currentTools, 1000)) return false;
  if (payload.optionalNote !== undefined && !requiredString(payload.optionalNote, 2000)) return false;
  return true;
}

async function getAccessToken() {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  const data = await response.json();
  if (!response.ok || !data.access_token) throw new Error('Google token exchange failed');
  return data.access_token;
}

function inquiryText(payload) {
  const label = payload.inquiryType === 'teaching' ? 'Technical training inquiry' : 'Commercial workflow inquiry';
  return [
    label,
    '',
    `Name: ${payload.name}`,
    `Organisation: ${payload.organization}`,
    `Contact: ${payload.contactInfo}`,
    `Current tools: ${payload.currentTools || 'Not specified'}`,
    '',
    payload.inquiryType === 'teaching' ? 'Training goal:' : 'Repeated workflow:',
    payload.description,
    '',
    'Additional note:',
    payload.optionalNote || 'Not provided',
  ].join('\n');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader?.('Allow', 'POST');
    return sendJson(res, 405, { error: 'method not allowed' });
  }

  const contentLength = Number(req.headers?.['content-length'] ?? 0);
  if (contentLength > MAX_BODY_BYTES) return sendJson(res, 413, { error: 'request too large' });

  const payload = parseBody(req);
  if (payload?.website) return sendJson(res, 200, { ok: true });
  if (!validatePayload(payload)) return sendJson(res, 400, { error: 'required inquiry fields are missing or invalid' });

  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, CONTACT_TO_EMAIL } = process.env;
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN || !CONTACT_TO_EMAIL) {
    return sendJson(res, 500, { error: 'contact delivery is not configured' });
  }

  try {
    const accessToken = await getAccessToken();
    const replyTo = EMAIL_RE.test(payload.contactInfo.trim()) ? payload.contactInfo.trim() : undefined;
    const raw = rfc822({
      to: CONTACT_TO_EMAIL,
      replyTo,
      subject: `${payload.inquiryType === 'teaching' ? 'Training' : 'Workflow'} inquiry from ${payload.name}`,
      body: inquiryText(payload),
    });
    const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raw: base64Url(raw) }),
    });
    if (!response.ok) throw new Error(`Gmail send failed with ${response.status}`);
    return sendJson(res, 200, { ok: true });
  } catch (error) {
    console.error('Contact delivery failed:', error instanceof Error ? error.message : 'unknown error');
    return sendJson(res, 502, { error: 'message delivery failed; please use WhatsApp instead' });
  }
}
