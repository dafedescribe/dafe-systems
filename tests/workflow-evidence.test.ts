import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const homeSource = readFileSync(new URL('../src/pages/HomePage.tsx', import.meta.url), 'utf8');
const workSource = readFileSync(new URL('../src/pages/WorkPage.tsx', import.meta.url), 'utf8');
const detailSource = readFileSync(new URL('../src/pages/ProjectDetailPage.tsx', import.meta.url), 'utf8');
const workflowSource = readFileSync(new URL('../src/components/WorkflowEvidence.tsx', import.meta.url), 'utf8');

describe('workflow evidence presentation', () => {
  it('leads with industrial workflow evidence on the homepage', () => {
    expect(homeSource).toContain('industrial-rfq-intake');
    expect(homeSource).toContain('tender-monitoring-engine');
    expect(homeSource).toContain('commercial-quotation-tracker');
    expect(homeSource).toContain('How I work');
  });

  it('uses precise evidence language instead of blanket verified claims', () => {
    expect(workSource).toContain('Documented Builds');
    expect(workSource).not.toContain('Verified Builds');
  });

  it('shows the input, process, output, and result on case-study pages', () => {
    expect(detailSource).toContain('WorkflowEvidence');
    expect(workflowSource).toContain('Input');
    expect(workflowSource).toContain('Process');
    expect(workflowSource).toContain('Output');
    expect(workflowSource).toContain('Result');
  });
});
