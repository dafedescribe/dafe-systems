# Homepage Trust & CV Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an editorial, trust-led homepage with founder imagery and visible environment logos, replace the public CV with an accurate evidence-led document, and validate both through browser and prospect-persona simulations.

**Architecture:** The homepage remains a React route but delegates the logo treatment and founder portrait to focused presentational components. The CV is authored as a standalone print-safe HTML document and exported to the existing `/cv.pdf` path, while source-level tests protect trust labels, image selection, contact accuracy, and project-status language. Playwright verifies the integrated experience on desktop and mobile after unit/build checks pass.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Vite, Vitest, static HTML/CSS, headless Chrome PDF export, Playwright CLI.

**Spec:** `docs/superpowers/specs/2026-09-21-homepage-trust-cv-redesign.md`

## Global Constraints

- Frame logos as “Experience across industrial, education & technical environments,” never “trusted by” or “clients.”
- Use `public/uploads/whatsapp-image-2026-09-21-at-1-01-24-pm-1.jpeg` as the founder portrait.
- Keep RFQ intake, tender monitoring, and quotation coordination as the first substantial evidence content.
- Use warm paper, oversized Source Serif display text, thin rules, restrained burnt orange, and monospace evidence labels.
- Do not add decorative charts, continuous animation, or generic AI-product graphics.
- Motion must respect `prefers-reduced-motion`.
- CV contact details must be `+234 913 248 0302`, `dafedescribe@gmail.com`, `https://www.dafe.name.ng`, and `linkedin.com/in/odafe-amalega`.
- Degree must be stated as B.Eng. Mechanical Engineering.
- Separate portfolio prototypes/internal builds from paid professional experience.
- No horizontal overflow at 390px.

---

### Task 1: Trust Presentation Components

**Files:**
- Create: `src/components/FounderPortrait.tsx`
- Create: `src/components/TrustRail.tsx`
- Create: `tests/homepage-trust.test.ts`

**Interfaces:**
- Produces: `FounderPortrait: React.FC` with no props.
- Produces: `TrustRail: React.FC` with no props.
- Consumes: four existing assets under `public/uploads/` and the selected portrait asset.

- [ ] **Step 1: Write the failing trust component test**

```ts
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const portrait = readFileSync(new URL('../src/components/FounderPortrait.tsx', import.meta.url), 'utf8');
const trust = readFileSync(new URL('../src/components/TrustRail.tsx', import.meta.url), 'utf8');

describe('homepage trust presentation', () => {
  it('uses the approved founder portrait with explicit dimensions', () => {
    expect(portrait).toContain('whatsapp-image-2026-09-21-at-1-01-24-pm-1.jpeg');
    expect(portrait).toContain('width={608}');
    expect(portrait).toContain('height={1080}');
  });

  it('presents all four environments without a client endorsement claim', () => {
    expect(trust).toContain('Experience across industrial, education & technical environments');
    expect(trust).toContain('AppClick');
    expect(trust).toContain('New Edition');
    expect(trust).toContain('SR Construction');
    expect(trust).toContain('Dangote Cement');
    expect(trust.toLowerCase()).not.toContain('trusted by');
  });
});
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- tests/homepage-trust.test.ts`

Expected: FAIL because both component files do not exist.

- [ ] **Step 3: Implement the founder portrait component**

Create a semantic `figure` containing the approved image, fixed intrinsic dimensions, `loading="eager"`, `fetchPriority="high"`, an editorial rule/frame treatment, and a caption identifying “Odafe Amalega · Workflow Automation & Systems Engineer.” Use `object-cover` and an intentional `object-position` so the mobile crop keeps the face visible.

- [ ] **Step 4: Implement the trust rail component**

Create a ruled section with the exact approved heading and four logo records:

```ts
const environments = [
  { name: 'AppClick', context: 'Technical instruction', logo: '/uploads/images-2.jpeg' },
  { name: 'New Edition', context: 'Education & internal systems', logo: '/uploads/logo.jpg' },
  { name: 'SR Construction', context: 'Construction context', logo: '/uploads/src-logopng.png' },
  { name: 'Dangote Cement', context: 'Industrial exposure', logo: '/uploads/download-1.png' },
];
```

Each image must have meaningful alt text, `width` and `height`, and `loading="lazy"`. The layout must scroll or wrap cleanly without reducing logo marks below 40px.

- [ ] **Step 5: Run the focused test and confirm GREEN**

Run: `npm test -- tests/homepage-trust.test.ts`

Expected: PASS.

- [ ] **Step 6: Commit the trust components**

```bash
git add src/components/FounderPortrait.tsx src/components/TrustRail.tsx tests/homepage-trust.test.ts
git commit -m "add homepage founder and trust components"
```

### Task 2: Homepage Editorial Redesign

**Files:**
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/index.css`
- Modify: `src/components/ProcessDiagram.tsx`
- Modify: `tests/homepage-trust.test.ts`

**Interfaces:**
- Consumes: `FounderPortrait` and `TrustRail` from Task 1.
- Consumes: existing `PROJECTS` workflow evidence and `ProcessDiagram`.
- Produces: revised `/` page with the trust rail immediately after the hero.

- [ ] **Step 1: Extend the failing homepage integration test**

Add assertions:

```ts
const home = readFileSync(new URL('../src/pages/HomePage.tsx', import.meta.url), 'utf8');

it('integrates identity and trust before operational evidence', () => {
  expect(home).toContain('<FounderPortrait />');
  expect(home).toContain('<TrustRail />');
  expect(home.indexOf('<TrustRail />')).toBeLessThan(home.indexOf('industrialEvidence.map'));
});
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- tests/homepage-trust.test.ts`

Expected: FAIL because the homepage has not imported or rendered the new components.

- [ ] **Step 3: Rebuild the hero composition**

Replace the existing hero/schematic split with a 12-column editorial composition:

- content spans 7 columns;
- portrait spans 5 columns;
- hero display type uses `clamp()` via a `.hero-display` class;
- warm radial wash is provided by `.editorial-hero`;
- location, availability, and primary actions remain visible without scrolling on a typical desktop;
- copy stays outcome-led and avoids tool lists in the first paragraph.

- [ ] **Step 4: Place the trust rail immediately after the hero**

Render `<TrustRail />` before focus areas and before workflow evidence. Remove the duplicate logo grid from the homepage if one exists; retain the About-page version as deeper background evidence.

- [ ] **Step 5: Replace generic card rhythm with ruled records**

Convert the three focus areas and industrial evidence list from repeated floating cards to:

- a ruled three-column capability ledger;
- full-width case-study records separated by horizontal rules;
- status, title, short workflow, result, and link aligned on a consistent baseline;
- a single warm highlight surface for the active conversion section.

Keep the existing project data and precise status labels unchanged.

- [ ] **Step 6: Quiet the workflow schematic**

Move `ProcessDiagram type="hero-schematic"` below the trust rail as supporting evidence. Remove pulsing decoration, use static status markers, and ensure all decorative icons have `aria-hidden="true"` where they add no independent meaning.

- [ ] **Step 7: Add restrained motion and reduced-motion handling**

Add CSS classes for a short opacity/translate entrance sequence using only `opacity` and `transform`. Under `@media (prefers-reduced-motion: reduce)`, set animation and transition durations to `0.01ms` and disable transforms.

- [ ] **Step 8: Run focused and existing persona tests**

Run: `npm test -- tests/homepage-trust.test.ts tests/target-persona.test.ts tests/workflow-evidence.test.ts`

Expected: PASS.

- [ ] **Step 9: Commit the homepage redesign**

```bash
git add src/pages/HomePage.tsx src/index.css src/components/ProcessDiagram.tsx tests/homepage-trust.test.ts
git commit -m "redesign homepage around identity and trust"
```

### Task 3: Accurate Evidence-Led CV

**Files:**
- Create: `public/cv.html`
- Replace: `public/cv.pdf`
- Create: `tests/cv.test.ts`

**Interfaces:**
- Produces: `/cv.html` as editable, print-safe source.
- Produces: `/cv.pdf` as the navbar download target.
- Consumes: confirmed contact details and documented project/status data from the spec.

- [ ] **Step 1: Write the failing CV source test**

```ts
import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

describe('public CV', () => {
  it('uses accurate contact, positioning, and degree details', () => {
    const cv = readFileSync(new URL('../public/cv.html', import.meta.url), 'utf8');
    expect(cv).toContain('Workflow Automation &amp; Systems Engineer');
    expect(cv).toContain('+234 913 248 0302');
    expect(cv).toContain('dafedescribe@gmail.com');
    expect(cv).toContain('B.Eng. Mechanical Engineering');
    expect(cv).not.toContain('+234 814 879 4458');
    expect(cv).not.toContain('odafe.amalega@gmail.com');
  });

  it('labels portfolio evidence precisely', () => {
    const cv = readFileSync(new URL('../public/cv.html', import.meta.url), 'utf8');
    expect(cv).toContain('PROTOTYPE');
    expect(cv).toContain('INTERNAL BUILD');
    expect(cv).toContain('TRAINING');
  });
});
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- tests/cv.test.ts`

Expected: FAIL because `public/cv.html` does not exist.

- [ ] **Step 3: Author the two-page print-safe CV source**

Create semantic standalone HTML with:

- header and correct contact links;
- 3–4 line summary focused on workflow automation and operational systems;
- selected systems section containing RFQ prototype, tender-monitoring prototype, quotation internal build, million-row internal build, and AppClick training evidence;
- experience section covering independent systems work, AppClick instruction, New Edition technology teaching/IT training, Dangote Cement NYSC exposure, and relevant automation/research work;
- capabilities grouped under Workflow Automation, Data & Engineering, Integration, and Training;
- education/certifications with Mechanical Engineering stated accurately;
- `@page { size: A4; margin: 12mm; }`, print-safe colors, selectable text, no portrait, and no multi-column reading-order traps.

- [ ] **Step 4: Run the CV source test and confirm GREEN**

Run: `npm test -- tests/cv.test.ts`

Expected: PASS.

- [ ] **Step 5: Export the PDF**

Start the Vite server and run:

```bash
google-chrome --headless --disable-gpu --no-pdf-header-footer --print-to-pdf=public/cv.pdf http://127.0.0.1:3000/cv.html
```

Expected: `public/cv.pdf` exists, is two A4 pages, and contains selectable text.

- [ ] **Step 6: Verify CV visually and functionally**

Open `/cv.html` and `/cv.pdf` with Playwright/Chrome. Confirm no clipped sections, correct page breaks, working mail/phone/site links, and consistent warm editorial styling.

- [ ] **Step 7: Commit the CV**

```bash
git add public/cv.html public/cv.pdf tests/cv.test.ts
git commit -m "replace public CV with evidence-led version"
```

### Task 4: Browser QA & Persona Simulation

**Files:**
- Create: `docs/persona-simulation-2026-09-21.md`
- Modify only if defects found: `src/pages/HomePage.tsx`, `src/index.css`, `src/components/FounderPortrait.tsx`, `src/components/TrustRail.tsx`, `public/cv.html`, `public/cv.pdf`

**Interfaces:**
- Consumes: completed homepage and CV.
- Produces: a concise simulation report with pass/fail and fixed shared blockers.

- [ ] **Step 1: Run desktop browser inspection**

Use Playwright at 1440×1000. Check hero identity, trust rail, logo loading, workflow evidence, CTA visibility, CV link, and console errors. Capture screenshots under `output/playwright/`.

- [ ] **Step 2: Run mobile browser inspection**

Use Playwright at 390×844. Check reading order, menu operation, portrait crop, logo wrap/scroll behavior, touch targets, and horizontal overflow.

- [ ] **Step 3: Run four persona simulations**

For each approved persona, record:

```md
### Persona Name
- First impression:
- Trust signals found:
- Likely objection:
- CTA clarity:
- Verdict: PASS | FAIL
```

The four personas are industrial managing director, operations lead, training buyer, and international prospect.

- [ ] **Step 4: Fix shared blockers in one batch**

If the same blocker appears for two or more personas, patch it before completion. Regenerate the PDF if its source changes.

- [ ] **Step 5: Perform one confirmation browser pass**

Recheck only the surfaces affected by the defect batch. Confirm zero console errors and no horizontal overflow.

- [ ] **Step 6: Commit QA findings and fixes**

```bash
git add docs/persona-simulation-2026-09-21.md output/playwright src public/cv.html public/cv.pdf
git commit -m "verify redesigned portfolio across target personas"
```

### Task 5: Final Verification & Delivery

**Files:**
- Modify only if verification uncovers defects.

**Interfaces:**
- Consumes: all previous tasks.
- Produces: a tested, committed, pushed `main` branch.

- [ ] **Step 1: Run the complete automated suite**

Run: `npm test`

Expected: all tests pass.

- [ ] **Step 2: Run TypeScript and production build sequentially**

Run: `npm run lint && npm run build`

Expected: TypeScript exits 0; Vite and prerender complete successfully.

- [ ] **Step 3: Check repository integrity**

Run: `git diff --check && git status --short`

Expected: no whitespace errors; only intentionally generated browser artifacts are present before the final commit.

- [ ] **Step 4: Push using the working GitHub credential path**

Run: `env -u GITHUB_TOKEN git push origin main`

Expected: local `main` advances remote `main` without a 403.
