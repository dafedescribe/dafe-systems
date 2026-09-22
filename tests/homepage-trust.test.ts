import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { HomePage } from '../src/pages/HomePage';
import { I18nProvider } from '../src/i18n/I18nProvider';

const read = (path: string) => readFileSync(new URL(path, import.meta.url), 'utf8');

describe('homepage trust presentation', () => {
  it('leads with organization experience and keeps the uploaded portrait secondary', () => {
    const markup = renderToStaticMarkup(
      React.createElement(I18nProvider, null, React.createElement(HomePage)),
    );

    const trustPosition = markup.indexOf('Experience across industrial, education &amp; technical environments');
    const portraitPosition = markup.indexOf('founder-profile-compact');

    expect(trustPosition).toBeGreaterThan(-1);
    expect(portraitPosition).toBeGreaterThan(-1);
    expect(trustPosition).toBeLessThan(portraitPosition);
  });

  it('renders prominent full-colour organization marks', () => {
    const markup = renderToStaticMarkup(
      React.createElement(I18nProvider, null, React.createElement(HomePage)),
    );

    expect(markup.match(/width="88"/g)).toHaveLength(4);
    expect(markup.match(/height="88"/g)).toHaveLength(4);
    expect(markup).not.toContain('grayscale');
  });

  it('uses the approved founder portrait with explicit dimensions', () => {
    const portrait = read('../src/components/FounderPortrait.tsx');
    expect(portrait).toContain('replicate-image-style-precisely-20260919112129.jpeg');
    expect(portrait).toContain('width={1024}');
    expect(portrait).toContain('height={1024}');
  });

  it('presents all four environments without a client endorsement claim', () => {
    const trust = read('../src/components/TrustRail.tsx');
    expect(trust).toContain('Experience across industrial, education &amp; technical environments');
    expect(trust).toContain('AppClick');
    expect(trust).toContain('New Edition');
    expect(trust).toContain('SR Construction');
    expect(trust).toContain('Dangote Cement');
    expect(trust.toLowerCase()).not.toContain('trusted by');
  });

  it('integrates identity and trust before selected operational evidence', () => {
    const home = read('../src/pages/HomePage.tsx');
    expect(home).toContain('<FounderPortrait />');
    expect(home).toContain('<TrustRail />');
    expect(home.indexOf('<TrustRail />')).toBeLessThan(home.indexOf('id="home-selected-work"'));
  });

  it('keeps the mobile header controls inside a 390px viewport', () => {
    const navbar = read('../src/components/Navbar.tsx');
    expect(navbar).toContain('className="hidden sm:block"');
    expect(navbar).not.toContain('className="hidden sm:inline-flex btn-primary');
  });

  it('uses a flat editorial ledger for the hero workflow', () => {
    const diagram = read('../src/components/ProcessDiagram.tsx');
    const heroBranch = diagram.slice(0, diagram.indexOf('// RFQ Architecture Diagram'));
    expect(heroBranch).toContain('divide-y divide-stone-300');
    expect(heroBranch).not.toContain('rounded-lg');
    expect(heroBranch).not.toContain('rounded-full');
  });

  it('qualifies prototype and internal-build outcomes on the homepage', () => {
    const home = read('../src/pages/HomePage.tsx');
    expect(home).toContain('Target: reduce estimator preparation');
    expect(home).toContain('Target: replace 10+ hours');
    expect(home).toContain('Build goal: keep approved quotations visible');
    expect(home).not.toContain('project.result}</dd>');
  });
});
