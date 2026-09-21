import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const cv = () => readFileSync(new URL('../public/cv.html', import.meta.url), 'utf8');

describe('public CV', () => {
  it('uses accurate contact, positioning, and degree details', () => {
    const source = cv();
    expect(source).toContain('Workflow Automation &amp; Systems Engineer');
    expect(source).toContain('+234 913 248 0302');
    expect(source).toContain('dafedescribe@gmail.com');
    expect(source).toContain('B.Eng. Mechanical Engineering');
    expect(source).not.toContain('+234 814 879 4458');
    expect(source).not.toContain('odafe.amalega@gmail.com');
  });

  it('labels portfolio evidence precisely', () => {
    const source = cv();
    expect(source).toContain('PROTOTYPE');
    expect(source).toContain('INTERNAL BUILD');
    expect(source).toContain('TRAINING');
  });

  it('uses the same typography families as the public site', () => {
    const source = cv();
    expect(source).toContain('fonts.googleapis.com');
    expect(source).toContain('Source Serif 4');
    expect(source).toContain('Hanken Grotesk');
    expect(source).toContain('IBM Plex Mono');
  });
});
