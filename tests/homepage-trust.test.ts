import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const read = (path: string) => readFileSync(new URL(path, import.meta.url), 'utf8');

describe('homepage trust presentation', () => {
  it('uses the approved founder portrait with explicit dimensions', () => {
    const portrait = read('../src/components/FounderPortrait.tsx');
    expect(portrait).toContain('whatsapp-image-2026-09-21-at-1-01-24-pm-1.jpeg');
    expect(portrait).toContain('width={608}');
    expect(portrait).toContain('height={1080}');
  });

  it('presents all four environments without a client endorsement claim', () => {
    const trust = read('../src/components/TrustRail.tsx');
    expect(trust).toContain('Experience across industrial, education & technical environments');
    expect(trust).toContain('AppClick');
    expect(trust).toContain('New Edition');
    expect(trust).toContain('SR Construction');
    expect(trust).toContain('Dangote Cement');
    expect(trust.toLowerCase()).not.toContain('trusted by');
  });

  it('integrates identity and trust before operational evidence', () => {
    const home = read('../src/pages/HomePage.tsx');
    expect(home).toContain('<FounderPortrait />');
    expect(home).toContain('<TrustRail />');
    expect(home.indexOf('<TrustRail />')).toBeLessThan(home.indexOf('industrialEvidence.map'));
  });
});
