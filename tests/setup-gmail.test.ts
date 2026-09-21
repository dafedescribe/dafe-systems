import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const setupSource = readFileSync(new URL('../scripts/setup-gmail.mjs', import.meta.url), 'utf8');

describe('Gmail setup helper', () => {
  it('guides the owner through the three server-side contact variables', () => {
    expect(setupSource).toContain('GMAIL_USER');
    expect(setupSource).toContain('GMAIL_APP_PASSWORD');
    expect(setupSource).toContain('CONTACT_TO_EMAIL');
    expect(setupSource).toContain('.env.local');
    expect(setupSource).toContain('myaccount.google.com/apppasswords');
  });
});
