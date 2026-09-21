import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import startHandler from '../api/auth.js';
import callbackHandler from '../api/auth/callback.js';

const authSrc = readFileSync(new URL('../api/auth.js', import.meta.url), 'utf8');
const callbackSrc = readFileSync(new URL('../api/auth/callback.js', import.meta.url), 'utf8');
const libSrc = readFileSync(new URL('../api/_oauth.js', import.meta.url), 'utf8');

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

function withEnv(fn: () => Promise<void>) {
  return (async () => {
    process.env.GITHUB_CLIENT_ID = 'test-id';
    process.env.GITHUB_CLIENT_SECRET = 'test-secret';
    try {
      await fn();
    } finally {
      delete process.env.GITHUB_CLIENT_ID;
      delete process.env.GITHUB_CLIENT_SECRET;
    }
  })();
}

describe('oauth proxy', () => {
  it('never embeds the client secret in responses', () => {
    for (const src of [authSrc, callbackSrc, libSrc]) {
      expect(src).not.toMatch(/CLIENT_SECRET[^;]*res\.(send|writeHead)/s);
    }
    expect(callbackSrc).toContain('client_secret');
  });

  it('uses a fixed redirect URI (no open redirect)', () => {
    expect(libSrc).toContain('REDIRECT_URI = `${SITE}/api/auth/callback`');
    expect(libSrc).toContain("const SITE = 'https://www.dafe.name.ng'");
  });

  it('requests minimum scope', () => {
    expect(authSrc).toContain("set('scope', 'public_repo')");
  });

  it('starts login with a plain-Node 302 (no Express helpers)', async () => {
    const res = nodeRes();
    await withEnv(async () => {
      await startHandler({ url: '/api/auth', headers: {} }, res);
    });
    expect(res.statusCode).toBe(302);
    expect(res.headers.Location).toContain('https://github.com/login/oauth/authorize');
    expect(res.headers.Location).toContain('scope=public_repo');
    expect(res.headers['Set-Cookie']).toContain('gh_oauth_state=');
  });

  it('rejects callback without code using plain-Node response', async () => {
    const res = nodeRes();
    await withEnv(async () => {
      await callbackHandler({ url: '/api/auth/callback', headers: {} }, res);
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toContain('missing code');
  });

  it('rejects callback with forged state', async () => {
    const res = nodeRes();
    await withEnv(async () => {
      await callbackHandler(
        { url: '/api/auth/callback?code=abc&state=forged', headers: { cookie: 'gh_oauth_state=real' } },
        res
      );
    });
    expect(res.statusCode).toBe(400);
    expect(res.body).toContain('state mismatch');
  });

  it('fails loudly when OAuth env is missing', async () => {
    const res = nodeRes();
    await startHandler({ url: '/api/auth', headers: {} }, res);
    expect(res.statusCode).toBe(500);
    expect(res.body).toContain('GITHUB_CLIENT_ID');
  });

  it('locks postMessage to the site origin', async () => {
    const res = nodeRes();
    await withEnv(async () => {
      await callbackHandler({ url: '/api/auth/callback', headers: {} }, res);
    });
    expect(res.body).toContain("'https://www.dafe.name.ng'");
    expect(res.body).not.toContain("'*'");
  });
});
