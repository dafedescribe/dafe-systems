import { afterEach, describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import handler from '../api/contact.js';

const contactPageSource = readFileSync(new URL('../src/pages/ContactPage.tsx', import.meta.url), 'utf8');

const envKeys = [
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'GOOGLE_REFRESH_TOKEN',
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

  it('refreshes OAuth and sends a Gmail message', async () => {
    process.env.GOOGLE_CLIENT_ID = 'client-id';
    process.env.GOOGLE_CLIENT_SECRET = 'client-secret';
    process.env.GOOGLE_REFRESH_TOKEN = 'refresh-token';
    process.env.CONTACT_TO_EMAIL = 'odafe@example.com';
    const calls: { input: string; init: RequestInit }[] = [];
    globalThis.fetch = async (input, init = {}) => {
      calls.push({ input: String(input), init });
      if (calls.length === 1) return new Response(JSON.stringify({ access_token: 'access-token' }), { status: 200 });
      return new Response(JSON.stringify({ id: 'message-id' }), { status: 200 });
    };

    const res = nodeRes();
    await handler({ method: 'POST', headers: {}, body: JSON.stringify(validBody()) }, res);

    expect(res.statusCode).toBe(200);
    expect(calls).toHaveLength(2);
    expect(calls[0].input).toContain('oauth2.googleapis.com/token');
    expect(calls[1].input).toContain('gmail.googleapis.com');
    expect(String(calls[1].init.body)).toContain('raw');
    expect(String(calls[1].init.body)).not.toContain('client-secret');
  });
});

describe('contact page wiring', () => {
  it('posts inquiries to the Gmail-backed contact endpoint', () => {
    expect(contactPageSource).toContain("fetch('/api/contact'");
    expect(contactPageSource).toContain('website');
    expect(contactPageSource).toContain('isSubmitting');
  });
});
