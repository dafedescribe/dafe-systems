import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import handler from '../api/auth.js';

const src = readFileSync(new URL('../api/auth.js', import.meta.url), 'utf8');

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

describe('oauth proxy', () => {
  it('never embeds the client secret in responses', () => {
    expect(src).not.toMatch(/CLIENT_SECRET[^;]*res\.(send|writeHead)/s);
    expect(src).toContain('client_secret');
  });
  it('uses a fixed redirect URI (no open redirect)', () => {
    expect(src).toContain("REDIRECT_URI = `${SITE}/api/auth/callback`");
    expect(src).toContain("const SITE = 'https://www.dafe.name.ng'");
  });
  it('requests minimum scope', () => {
    expect(src).toContain("set('scope', 'public_repo')");
  });

  it('starts login with a plain-Node 302 (no Express helpers)', async () => {
    process.env.GITHUB_CLIENT_ID = 'test-id';
    process.env.GITHUB_CLIENT_SECRET = 'test-secret';
    const res = nodeRes();
    await handler({ url: '/api/auth', headers: {} }, res);
    delete process.env.GITHUB_CLIENT_ID;
    delete process.env.GITHUB_CLIENT_SECRET;
    expect(res.statusCode).toBe(302);
    expect(res.headers.Location).toContain('https://github.com/login/oauth/authorize');
    expect(res.headers.Location).toContain('scope=public_repo');
    expect(res.headers['Set-Cookie']).toContain('gh_oauth_state=');
  });

  it('rejects callback without code using plain-Node response', async () => {
    process.env.GITHUB_CLIENT_ID = 'test-id';
    process.env.GITHUB_CLIENT_SECRET = 'test-secret';
    const res = nodeRes();
    await handler({ url: '/api/auth/callback', headers: {} }, res);
    delete process.env.GITHUB_CLIENT_ID;
    delete process.env.GITHUB_CLIENT_SECRET;
    expect(res.statusCode).toBe(400);
    expect(res.body).toContain('missing code');
  });

  it('fails loudly when OAuth env is missing', async () => {
    const res = nodeRes();
    await handler({ url: '/api/auth' }, res);
    expect(res.statusCode).toBe(500);
    expect(res.body).toContain('GITHUB_CLIENT_ID');
  });

  it('locks postMessage to the site origin', async () => {
    process.env.GITHUB_CLIENT_ID = 'test-id';
    process.env.GITHUB_CLIENT_SECRET = 'test-secret';
    const res = nodeRes();
    await handler({ url: '/api/auth/callback', headers: {} }, res);
    delete process.env.GITHUB_CLIENT_ID;
    delete process.env.GITHUB_CLIENT_SECRET;
    expect(res.body).toContain("'https://www.dafe.name.ng'");
    expect(res.body).not.toContain("'*'");
  });
});
