import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const homeSource = readFileSync(new URL('../src/pages/HomePage.tsx', import.meta.url), 'utf8');
const contactSource = readFileSync(new URL('../src/pages/ContactPage.tsx', import.meta.url), 'utf8');
const translationSource = readFileSync(new URL('../src/i18n/translations.ts', import.meta.url), 'utf8');

describe('target persona positioning', () => {
  it('makes the location and global working range explicit', () => {
    expect(homeSource).toContain("t('home.location')");
    expect(translationSource).toContain('Ibadan, Nigeria');
    expect(translationSource).toContain('Working globally');
  });

  it('keeps the first inquiry step focused on the prospect\'s operational pain', () => {
    expect(contactSource).toContain('What keeps getting repeated?');
    expect(contactSource).not.toMatch(/id="user-company"[\s\S]{0,300}required/);
    expect(contactSource).toContain('No polished brief or RFP needed');
  });

  it('uses the supplied organization marks as proof, not decoration', () => {
    const aboutSource = readFileSync(new URL('../src/pages/AboutPage.tsx', import.meta.url), 'utf8');
    const trustSource = readFileSync(new URL('../src/components/TrustRail.tsx', import.meta.url), 'utf8');
    expect(aboutSource).toContain('<TrustRail />');
    expect(trustSource).toContain('/uploads/images-2.jpeg');
    expect(trustSource).toContain('/uploads/logo.jpg');
    expect(trustSource).toContain('/uploads/src-logopng.png');
    expect(trustSource).toContain('/uploads/download-1.png');
    expect(trustSource.toLowerCase()).not.toContain('trusted by');
  });
});
