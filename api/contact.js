import nodemailer from 'nodemailer';

const MAX_BODY_BYTES = 32 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function requiredString(value, max = 4000) {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= max;
}

function optionalString(value, max) {
  return value === undefined || value === null || value === '' || requiredString(value, max);
}

function headerSafe(value) {
  return value.replace(/[\r\n]/g, ' ').trim();
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
  if (!requiredString(payload.contactInfo, 240)) return false;
  if (!optionalString(payload.organization, 240)) return false;
  if (!optionalString(payload.currentTools, 1000)) return false;
  if (!optionalString(payload.optionalNote, 2000)) return false;
  if (!optionalString(payload.productRange, 240)) return false;
  if (!optionalString(payload.targetMarkets, 240)) return false;
  return true;
}

export { validatePayload, inquiryText };

function inquiryText(payload) {
  const label = payload.inquiryType === 'teaching' ? 'Technical training inquiry' : 'Commercial workflow inquiry';
  return [
    label,
    '',
    `Name: ${payload.name}`,
    `Organisation: ${payload.organization || 'Not provided'}`,
    `Contact: ${payload.contactInfo}`,
    `Current tools: ${payload.currentTools || 'Not specified'}`,
    ...(payload.productRange ? [`Products: ${payload.productRange}`] : []),
    ...(payload.targetMarkets ? [`Target Markets: ${payload.targetMarkets}`] : []),
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

  const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_TO_EMAIL } = process.env;
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD || !CONTACT_TO_EMAIL) {
    return sendJson(res, 500, { error: 'contact delivery is not configured' });
  }

  try {
    const replyTo = EMAIL_RE.test(payload.contactInfo.trim()) ? payload.contactInfo.trim() : undefined;
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: GMAIL_USER,
      to: CONTACT_TO_EMAIL,
      replyTo,
      subject: `${payload.inquiryType === 'teaching' ? 'Training' : 'Workflow'} inquiry from ${headerSafe(payload.name)}`,
      text: inquiryText(payload),
    });
    return sendJson(res, 200, { ok: true });
  } catch (error) {
    console.error('Contact delivery failed:', error instanceof Error ? error.message : 'unknown error');
    return sendJson(res, 502, { error: 'message delivery failed; please use WhatsApp instead' });
  }
}
