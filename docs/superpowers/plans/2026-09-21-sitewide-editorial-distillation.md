# Site-wide Editorial Distillation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver one coherent, shorter, evidence-led public website that moves qualified prospects from relevance to proof to inquiry without duplicated explanations or card-grid fatigue.

**Architecture:** Keep the existing React/Vite router, content data, form wiring, localisation, and public URLs. Add three small editorial layout primitives, then rewrite the overview routes explicitly around those primitives while preserving detailed project, specialist-service, and article routes. Use server-rendered markup tests for information architecture and source-level guardrails for the retired visual grammar.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS utilities, Vitest, React DOM server rendering, custom router, Playwright CLI.

**Spec:** `docs/superpowers/specs/2026-09-21-sitewide-editorial-distillation.md`

## Global Constraints

- Preserve every existing public URL, form delivery path, localisation path, metadata contract, and factual scope label.
- Do not invent client endorsements, statistics, partnerships, or commercial outcomes.
- Use warm paper, slate ink, restrained amber, Source Serif 4, Hanken Grotesk, and IBM Plex Mono according to `DESIGN.md`.
- Overview pages summarise; project details, specialist services, and articles substantiate.
- Functional metadata must be at least 11px, controls at least 44px on touch layouts, and all representative routes must fit a 390px viewport without horizontal overflow.
- Keep explicit page markup; do not introduce a configurable page-builder abstraction.

---

### Task 1: Shared editorial shell and simplified navigation

**Files:**
- Create: `src/components/EditorialPageHeader.tsx`
- Create: `src/components/EditorialSection.tsx`
- Create: `src/components/CompactCta.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Footer.tsx`
- Create: `tests/sitewide-editorial.test.ts`

**Interfaces:**
- Produces: `EditorialPageHeader({ indexLabel, eyebrow, title, summary, children })`
- Produces: `EditorialSection({ id, label, title, intro, children, className })`
- Produces: `CompactCta({ eyebrow, title, copy, actionLabel, actionTo, secondaryLabel?, secondaryTo? })`
- Navigation keeps `/automation` reachable from the footer while removing it from the primary `navLinks` array.

- [ ] **Step 1: Write failing shell and navigation tests**

```ts
import { renderToStaticMarkup } from 'react-dom/server';
import { Navbar } from '../src/components/Navbar';
import { Footer } from '../src/components/Footer';
import { I18nProvider } from '../src/i18n/I18nProvider';
import { RouterProvider } from '../src/router/Router';

const renderShell = (node: React.ReactNode) => renderToStaticMarkup(
  React.createElement(I18nProvider, null,
    React.createElement(RouterProvider, { initialPath: '/' }, node),
  ),
);

it('keeps the primary navigation focused and automation discoverable in the footer', () => {
  const nav = renderShell(React.createElement(Navbar));
  const footer = renderShell(React.createElement(Footer));
  expect(nav).not.toContain('href="/automation"');
  expect(nav).toContain('href="/industry"');
  expect(nav).toContain('href="/work"');
  expect(footer).toContain('href="/automation"');
});
```

- [ ] **Step 2: Run the focused test and confirm RED**

Run: `npm test -- tests/sitewide-editorial.test.ts`

Expected: FAIL because the test file/primitives do not exist and Automation is still a primary link.

- [ ] **Step 3: Implement the three primitives and simplify shell content**

Implement narrow typed components with semantic `<header>` / `<section>` markup, ruled boundaries, `py-12 sm:py-16` section rhythm, and no `rounded-xl` or `shadow-sm`. Change Navbar numbering to Industry, Work, Teaching, Notes, About; retain Contact CTA, language, CV, and accessible mobile drawer. Reduce Footer to three compact groups and `mt-16`.

- [ ] **Step 4: Run focused tests and TypeScript**

Run: `npm test -- tests/sitewide-editorial.test.ts && npm run lint`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/EditorialPageHeader.tsx src/components/EditorialSection.tsx src/components/CompactCta.tsx src/components/Navbar.tsx src/components/Footer.tsx tests/sitewide-editorial.test.ts
git commit -m "unify the public editorial shell"
```

### Task 2: Distil the homepage decision path

**Files:**
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/components/TrustRail.tsx`
- Modify: `src/components/FounderPortrait.tsx`
- Modify: `tests/homepage-trust.test.ts`
- Modify: `tests/sitewide-editorial.test.ts`

**Interfaces:**
- Consumes: `EditorialSection` and `CompactCta` from Task 1.
- Produces: page landmarks `home-selected-work`, `home-method`, `home-training`, and `home-contact`.

- [ ] **Step 1: Add failing homepage sequence tests**

```ts
it('renders the five-part homepage path with exactly three featured systems', () => {
  const html = renderPage(React.createElement(HomePage));
  expect(html).toContain('id="home-selected-work"');
  expect(html).toContain('id="home-method"');
  expect(html).toContain('id="home-training"');
  expect(html).toContain('id="home-contact"');
  expect(html.match(/data-featured-system="true"/g)).toHaveLength(3);
});

it('does not repeat the retired homepage catalogue sections', () => {
  const html = renderPage(React.createElement(HomePage));
  expect(html).not.toContain('Start with the operational problem.');
  expect(html).not.toContain('The software follows the work—not the other way around.');
});
```

- [ ] **Step 2: Run homepage tests and confirm RED**

Run: `npm test -- tests/homepage-trust.test.ts tests/sitewide-editorial.test.ts`

Expected: FAIL on missing landmarks and retired sections still present.

- [ ] **Step 3: Rewrite Home into five sections**

Keep the approved hero, trust marks, and compact portrait. Replace the process diagram, focus-area catalogue, and expanded evidence ledger with exactly three compact featured-system rows using existing `industrialEvidence`; add a three-step engagement ledger, one short AppClick training strip, and `CompactCta`. Preserve prototype/internal-build qualification next to each featured result.

- [ ] **Step 4: Run focused tests**

Run: `npm test -- tests/homepage-trust.test.ts tests/sitewide-editorial.test.ts`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/pages/HomePage.tsx src/components/TrustRail.tsx src/components/FounderPortrait.tsx tests/homepage-trust.test.ts tests/sitewide-editorial.test.ts
git commit -m "distil the homepage decision path"
```

### Task 3: Separate Industry from Automation

**Files:**
- Modify: `src/pages/IndustryPage.tsx`
- Modify: `src/pages/AutomationPage.tsx`
- Modify: `tests/sitewide-editorial.test.ts`

**Interfaces:**
- Consumes: all Task 1 editorial primitives and existing `ProcessDiagram`.
- Produces: Industry capability rows linking to all four specialist routes; Automation links back to Industry and Work.

- [ ] **Step 1: Add failing route-purpose tests**

```ts
it('makes Industry the complete commercial services overview', () => {
  const html = renderPage(React.createElement(IndustryPage));
  for (const route of ['/industry/rfq-automation', '/industry/tender-monitoring', '/industry/quotation-workflows', '/industry/commercial-reporting']) {
    expect(html).toContain(`href="${route}"`);
  }
  expect(html).not.toContain('rounded-xl');
  expect(html).not.toContain('shadow-sm');
});

it('keeps Automation concise and points to Industry and Work', () => {
  const html = renderPage(React.createElement(AutomationPage));
  expect(html).toContain('href="/industry"');
  expect(html).toContain('href="/work"');
  expect(html).not.toContain('Candidate processes for automation');
});
```

- [ ] **Step 2: Run focused tests and confirm RED**

Run: `npm test -- tests/sitewide-editorial.test.ts`

Expected: FAIL on old card classes and Automation inventory.

- [ ] **Step 3: Rewrite both pages around their distinct jobs**

Industry: header, lifecycle schematic, four ruled capability rows, fit signals, compact CTA. Automation: header, deterministic approach, one intake architecture, six short fit signals, links to Industry and Work, compact CTA. Reuse all factual copy; do not add outcomes.

- [ ] **Step 4: Run focused tests and lint**

Run: `npm test -- tests/sitewide-editorial.test.ts && npm run lint`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/pages/IndustryPage.tsx src/pages/AutomationPage.tsx tests/sitewide-editorial.test.ts
git commit -m "separate services from automation approach"
```

### Task 4: Make Work evidence scannable

**Files:**
- Modify: `src/pages/WorkPage.tsx`
- Modify: `tests/sitewide-editorial.test.ts`
- Preserve: `src/pages/ProjectDetailPage.tsx`

**Interfaces:**
- Consumes: existing `projects` content and Task 1 editorial primitives.
- Produces: exactly three entries marked `data-featured-project="true"`; remaining projects render as `data-project-directory-entry="true"` links.

- [ ] **Step 1: Add failing Work density test**

```ts
it('expands three projects and keeps the remaining work compact', () => {
  const html = renderPage(React.createElement(WorkPage));
  expect(html.match(/data-featured-project="true"/g)).toHaveLength(3);
  expect(html.match(/data-project-directory-entry="true"/g)?.length).toBeGreaterThan(0);
  expect(html).not.toContain('rounded-xl');
});
```

- [ ] **Step 2: Run focused test and confirm RED**

Run: `npm test -- tests/sitewide-editorial.test.ts`

Expected: FAIL because six projects are expanded and markers are absent.

- [ ] **Step 3: Implement the evidence hierarchy**

Retain filters and directory. Select the row-processing pipeline, industrial RFQ system, and tender monitoring system as the three expanded representative builds. Render the rest as compact ruled links with reference, scope, title, field, and year. Preserve project detail URLs and labels.

- [ ] **Step 4: Run focused and content tests**

Run: `npm test -- tests/sitewide-editorial.test.ts tests/content.test.ts tests/workflow-evidence.test.ts`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/pages/WorkPage.tsx tests/sitewide-editorial.test.ts
git commit -m "make the work catalogue easier to scan"
```

### Task 5: Distil Teaching and About

**Files:**
- Modify: `src/pages/TeachingPage.tsx`
- Modify: `src/pages/AboutPage.tsx`
- Modify: `tests/sitewide-editorial.test.ts`
- Preserve: `src/components/FounderPortrait.tsx`

**Interfaces:**
- Consumes: Task 1 editorial primitives and approved portrait path.
- Produces: four representative teaching modules and a compact About identity region containing `FounderPortrait`.

- [ ] **Step 1: Add failing Teaching/About tests**

```ts
it('limits Teaching to four representative modules without duplicate topic grids', () => {
  const html = renderPage(React.createElement(TeachingPage));
  expect(html.match(/data-teaching-module="true"/g)).toHaveLength(4);
  expect(html).not.toContain('Technical subjects covered');
  expect(html).not.toContain('rounded-xl');
});

it('uses the approved portrait quietly on About', () => {
  const html = renderPage(React.createElement(AboutPage));
  expect(html).toContain('replicate-image-style-precisely-20260919112129.jpeg');
  expect(html).toContain('about-identity');
  expect(html).not.toContain('Active Inquiries Open');
  expect(html).not.toContain('rounded-xl');
});
```

- [ ] **Step 2: Run focused tests and confirm RED**

Run: `npm test -- tests/sitewide-editorial.test.ts`

Expected: FAIL on module markers, portrait absence, and old card grammar.

- [ ] **Step 3: Rewrite Teaching and About**

Teaching: header with AppClick context, three learning pillars, four existing module rows, one condensed audience/delivery section, compact inquiry CTA. About: two-column identity intro with compact portrait, three-paragraph narrative, organisation context, ruled capability and credential lists, links to Work/CV/Contact. Remove decorative availability pill and giant enclosing card.

- [ ] **Step 4: Run focused, CV, and persona tests**

Run: `npm test -- tests/sitewide-editorial.test.ts tests/cv.test.ts tests/target-persona.test.ts`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/pages/TeachingPage.tsx src/pages/AboutPage.tsx tests/sitewide-editorial.test.ts
git commit -m "distil teaching and founder credibility"
```

### Task 6: Tighten Contact without changing delivery

**Files:**
- Modify: `src/pages/ContactPage.tsx`
- Modify: `tests/contact.test.ts`
- Modify: `tests/sitewide-editorial.test.ts`

**Interfaces:**
- Preserves: existing workflow/training mode state, required fields, Gmail endpoint, WhatsApp fallback, validation, and status messages.
- Produces: visible response expectation copy and a shorter editorial form layout.

- [ ] **Step 1: Add failing conversion-safety test**

```ts
it('sets a response expectation while preserving direct fallback', () => {
  const source = read('../src/pages/ContactPage.tsx');
  expect(source).toContain('I reply personally');
  expect(source).toContain('https://wa.me/2349132480302');
  expect(source).not.toContain('rounded-xl');
});
```

- [ ] **Step 2: Run contact tests and confirm RED**

Run: `npm test -- tests/contact.test.ts tests/sitewide-editorial.test.ts`

Expected: FAIL because response expectation is absent and the old form surface remains.

- [ ] **Step 3: Restyle only the presentation layer**

Use the shared header, a ruled mode switch, a flat form boundary, tighter `py-10 sm:py-14` rhythm, and a concise response expectation beside WhatsApp. Do not change submit handler logic, endpoint, field names, validation, success/error behavior, or accessibility labels.

- [ ] **Step 4: Run contact and integration tests**

Run: `npm test -- tests/contact.test.ts tests/setup-gmail.test.ts tests/i18n.test.ts tests/sitewide-editorial.test.ts`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/pages/ContactPage.tsx tests/contact.test.ts tests/sitewide-editorial.test.ts
git commit -m "tighten the workflow inquiry path"
```

### Task 7: Apply the shared grammar to remaining public routes

**Files:**
- Modify: `src/pages/RfqPage.tsx`
- Modify: `src/pages/TenderPage.tsx`
- Modify: `src/pages/QuotationPage.tsx`
- Modify: `src/pages/CommercialReportingPage.tsx`
- Modify: `src/pages/NotesPage.tsx`
- Modify: `src/pages/ProjectDetailPage.tsx`
- Modify: `src/pages/ArticleDetailPage.tsx`
- Modify: `src/pages/LabPage.tsx`
- Modify: `src/pages/NotFoundPage.tsx`
- Modify: `tests/sitewide-editorial.test.ts`

**Interfaces:**
- Consumes: Task 1 primitives where appropriate.
- Preserves: all specialist page evidence, article content, project detail evidence, metadata, and URLs.

- [ ] **Step 1: Add failing legacy-grammar guardrail**

```ts
it('removes the legacy card grammar from public route sources', () => {
  for (const file of overviewAndDetailPageFiles) {
    const source = read(file);
    expect(source, file).not.toContain('rounded-xl');
    expect(source, file).not.toContain('shadow-sm');
  }
});
```

- [ ] **Step 2: Run guardrail test and confirm RED**

Run: `npm test -- tests/sitewide-editorial.test.ts`

Expected: FAIL with exact legacy class locations.

- [ ] **Step 3: Replace card surfaces mechanically but intentionally**

Convert broad rounded/shadowed containers to flat paper or transparent ruled sections. Standardise outer widths and section rhythm. Keep article reading measure, project evidence structure, specialist-page content, lab labels, and 404 actions unchanged. Do not shorten substantive detail-page content in this task.

- [ ] **Step 4: Run full automated suite**

Run: `npm test && npm run lint`

Expected: all tests PASS and TypeScript reports no errors.

- [ ] **Step 5: Commit**

```bash
git add src/pages tests/sitewide-editorial.test.ts
git commit -m "align remaining routes to the editorial system"
```

### Task 8: Bounded visual verification and release checks

**Files:**
- Modify only if the first visual pass reveals a concrete defect in a changed file.
- Create: `output/playwright/sitewide-editorial-desktop.png`
- Create: `output/playwright/sitewide-editorial-mobile.png`

**Interfaces:**
- Verifies the complete implementation; introduces no new product behavior.

- [ ] **Step 1: Run the Impeccable detector once**

Run:

```bash
/workspaces/codespaces-blank/.agents/skills/impeccable/scripts/impeccable detect --json src/components src/pages
```

Expected: no blocking findings; document advisories and fix only findings introduced by this work.

- [ ] **Step 2: Run one desktop/mobile browser batch**

Start Vite on `127.0.0.1:3100`. Inspect Home, Industry, Automation, Work, Teaching, About, Contact, one specialist page, one project detail, and one article at 1440×900 and 390×844. For every route verify `document.documentElement.scrollWidth === innerWidth`, loaded images, visible focus treatment, and the intended content hierarchy.

- [ ] **Step 3: Apply at most one consolidated visual correction batch**

Fix only observed defects, rerun their focused tests, and capture one desktop homepage plus one 390px mobile homepage confirmation screenshot in `output/playwright/`.

- [ ] **Step 4: Run final verification**

Run:

```bash
npm test
npm run lint
npm run build
git diff --check
```

Expected: all tests PASS, TypeScript clean, production build succeeds, and no whitespace errors.

- [ ] **Step 5: Commit and push**

```bash
git add -A
git commit -m "complete the sitewide editorial redesign"
env -u GITHUB_TOKEN git push origin main
```
