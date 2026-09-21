import { afterEach, describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';

const { createTransport, sendMail } = vi.hoisted(() => ({
  createTransport: vi.fn(),
  sendMail: vi.fn(),
}));

vi.mock('nodemailer', () => ({
  default: { createTransport },
}));

import handler from '../api/contact.js';

const contactPageSource = readFileSync(new URL('../src/pages/ContactPage.tsx', import.meta.url), 'utf8');

const envKeys = [
  'GMAIL_USER',
  'GMAIL_APP_PASSWORD',
  'CONTACT_TO_EMAIL',
] as const;

const originalFetch = globalThis.fetch;
const originalEnv = Object.fromEntries(envKeys.map((key) => [key, process.env[key]]));

function nodeRes() {
  const res: any = { statusCode: 200, headers: {} as Record<string, string>, body: '' };
  res.writeHead = (code: number, headers: Record<string, string>) => {
    res.statusCode = code;
    res.headers = headers;
  };
  res.end = (body?: string) => {
    if (body) res.body = body;
  };
  return res;
}

function validBody() {
  return {
    inquiryType: 'workflow',
    description: 'We manually reconcile incoming tender documents across three spreadsheets.',
    name: 'Jane Smith',
    organization: 'Apex Industrial Supplies',
    contactInfo: 'jane@example.com',
    currentTools: 'Excel and Gmail',
    optionalNote: 'Please reply with an initial feasibility note.',
    website: '',
  };
}

afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const key of envKeys) {
    const value = originalEnv[key];
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
});

describe('contact endpoint', () => {
  it('rejects non-POST requests', async () => {
    const res = nodeRes();
    await handler({ method: 'GET', headers: {} }, res);
    expect(res.statusCode).toBe(405);
  });

  it('rejects missing required inquiry fields', async () => {
    const res = nodeRes();
    await handler({ method: 'POST', headers: {}, body: JSON.stringify({}) }, res);
    expect(res.statusCode).toBe(400);
    expect(res.body).toContain('required');
  });

  it('silently accepts honeypot submissions without calling Google', async () => {
    let calls = 0;
    globalThis.fetch = async () => {
      calls += 1;
      return new Response('{}', { status: 200 });
    };
    const res = nodeRes();
    await handler({ method: 'POST', headers: {}, body: JSON.stringify({ ...validBody(), website: 'bot' }) }, res);
    expect(res.statusCode).toBe(200);
    expect(calls).toBe(0);
  });

  it('returns a configuration error without calling Google', async () => {
    const res = nodeRes();
    await handler({ method: 'POST', headers: {}, body: JSON.stringify(validBody()) }, res);
    expect(res.statusCode).toBe(500);
    expect(res.body).toContain('not configured');
  });

  it('sends a Gmail message through SMTP using an app password', async () => {
    process.env.GMAIL_USER = 'odafe@example.com';
    process.env.GMAIL_APP_PASSWORD = 'app-password';
    process.env.CONTACT_TO_EMAIL = 'odafe@example.com';
    sendMail.mockResolvedValue({ messageId: 'message-id' });
    createTransport.mockReturnValue({ sendMail });

    const res = nodeRes();
    await handler({ method: 'POST', headers: {}, body: JSON.stringify(validBody()) }, res);

    expect(res.statusCode).toBe(200);
    expect(createTransport).toHaveBeenCalledWith(expect.objectContaining({
      host: 'smtp.gmail.com',
      secure: true,
      auth: { user: 'odafe@example.com', pass: 'app-password' },
    }));
    expect(sendMail).toHaveBeenCalledWith(expect.objectContaining({
      from: 'odafe@example.com',
      to: 'odafe@example.com',
      replyTo: 'jane@example.com',
    }));
  });
});

describe('contact page wiring', () => {
  it('posts inquiries to the Gmail-backed contact endpoint', () => {
    expect(contactPageSource).toContain("fetch('/api/contact'");
    expect(contactPageSource).toContain('website');
    expect(contactPageSource).toContain('isSubmitting');
  });
});
