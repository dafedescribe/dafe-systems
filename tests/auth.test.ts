import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const src = readFileSync(new URL('../api/auth.js', import.meta.url), 'utf8');

describe('oauth proxy', () => {
  it('never embeds the client secret in responses', () => {
    expect(src).not.toMatch(/CLIENT_SECRET[^;]*res\.(send|writeHead)/s);
    expect(src).toContain('client_secret');
  });
  it('uses a fixed redirect URI (no open redirect)', () => {
    expect(src).toContain("REDIRECT_URI = 'https://www.dafe.name.ng/api/auth/callback'");
  });
  it('requests minimum scope', () => {
    expect(src).toContain("set('scope', 'repo')");
  });
});
