import { describe, expect, it } from 'vitest';
import handler, { inquiryText, validatePayload } from '../api/contact.js';

function nodeRes() {
  const res: any = { statusCode: 200, headers: {} as Record<string, string>, body: '' };
  res.writeHead = (code: number, headers: Record<string, string>) => {
    res.statusCode = code;
    res.headers = headers;
  };
  res.setHeader = (k: string, v: string) => {
    res.headers[k] = v;
  };
  res.end = (body?: string) => {
    if (body) res.body = body;
  };
  return res;
}

const basePayload = {
  inquiryType: 'workflow',
  description: 'We copy Excel rows into WhatsApp every morning.',
  name: 'Jane Smith',
  contactInfo: 'jane@company.com',
};

describe('contact api', () => {
  it('rejects non-POST methods', async () => {
    const res = nodeRes();
    await handler({ method: 'GET', headers: {}, url: '/api/contact' }, res);
    expect(res.statusCode).toBe(405);
  });

  it('honeypot passes silently without delivery', async () => {
    const res = nodeRes();
    await handler(
      { method: 'POST', headers: {}, url: '/api/contact', body: { ...basePayload, website: 'bot' } },
      res
    );
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.body)).toEqual({ ok: true });
  });

  it('rejects invalid payloads', async () => {
    const res = nodeRes();
    await handler(
      { method: 'POST', headers: {}, url: '/api/contact', body: { ...basePayload, name: '' } },
      res
    );
    expect(res.statusCode).toBe(400);
  });

  it('accepts catalog fields in validation', () => {
    expect(
      validatePayload({ ...basePayload, productRange: 'Cold rooms', targetMarkets: 'North Africa' })
    ).toBe(true);
  });

  it('includes catalog fields in the delivery email text', () => {
    const text = inquiryText({
      ...basePayload,
      productRange: 'Cold rooms and condensing units',
      targetMarkets: 'North Africa, Middle East',
    });
    expect(text).toContain('Products: Cold rooms and condensing units');
    expect(text).toContain('Target Markets: North Africa, Middle East');
  });

  it('omits catalog lines when not provided', () => {
    const text = inquiryText({ ...basePayload });
    expect(text).not.toContain('Products:');
  });
});
