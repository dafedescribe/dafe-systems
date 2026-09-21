# Site-wide Editorial Distillation

## Objective

Turn the public site into one coherent, direct commercial portfolio. Reduce scroll fatigue, remove repeated explanations, and preserve depth only on pages where visitors deliberately request it: project details and technical notes.

Success means a qualified prospect can answer four questions quickly:

1. What operational problems does Odafe solve?
2. Is there credible evidence that he can solve them?
3. Is this relevant to my organisation?
4. How do I start a conversation?

## Scope

This pass covers the global navigation and footer plus the public routes for Home, Industry, Automation, Work, Teaching, About, and Contact. It also establishes shared visual rules that the RFQ, Tender, Quotation, Commercial Reporting, Project Detail, Notes, and Article pages continue to use.

No factual claims, client endorsements, case-study outcomes, form delivery behaviour, localisation behaviour, or existing public URLs will be invented or removed.

## Chosen Direction

Use a single **Technical Workbench Editorial** system across the site:

- warm paper canvas, slate ink, restrained amber;
- Source Serif display type, Hanken Grotesk body type, and IBM Plex Mono only for real metadata;
- thin rules and changing information density instead of rounded card grids and broad shadows;
- compact, evidence-led sections instead of repeated explanatory panels;
- organisation marks used as factual experience context, never as implied endorsement;
- the supplied portrait used quietly on About and as a secondary identity detail, never as the main proof device.

The redesign is a distillation, not a new brand. Existing content remains the source of truth, but only the strongest version of each message appears on overview pages.

## Information Architecture

### Global navigation

Primary navigation becomes:

- Industry
- Work
- Teaching
- Notes
- About
- Show Me the Workflow

Automation remains a live route and remains discoverable from Industry, the footer, internal links, and search, but no longer competes as a top-level navigation category with Industry. The CV and language controls remain available without visually competing with the primary inquiry action.

The footer stops duplicating every route. It groups a short commercial path, a proof/learning path, and direct contact details.

### Home — persuade

The homepage becomes a five-part decision path:

1. Direct operational promise, trust marks, and primary inquiry action.
2. Three selected systems with scope and one useful outcome each.
3. A compact three-step engagement method.
4. A restrained teaching capability strip.
5. One closing inquiry prompt.

Remove the long process explanation, the separate three-column problem catalogue, repeated project metadata, and duplicate process language. Target reduction: roughly 35–45 percent of current page height.

### Industry — persuade

Industry becomes the canonical commercial-services overview:

1. Commercial problem and direct CTA.
2. Compact order-lifecycle schematic.
3. Four workflow capabilities presented as ruled rows, not cards.
4. A short fit statement naming relevant organisations and operational signals.
5. Closing CTA.

The four specialist routes remain available for visitors who need exact RFQ, tender, quotation, or reporting detail.

### Automation — persuade / explain

Automation is retained as a concise capability page rather than a second services overview:

1. Explain the deterministic, human-controlled automation approach.
2. Show one representative intake architecture.
3. Name a short set of signals that indicate automation fit.
4. Link to Industry and selected work.
5. End with one inquiry action.

Remove the long candidate-workflow inventory and repeated sales copy already covered by Industry.

### Work — experience / evidence

Work becomes easier to scan:

1. Keep the compact project directory and filters.
2. Feature only three representative projects in expanded form.
3. Show remaining projects as concise ruled rows linked to their detail pages.
4. Keep scope labels explicit: internal build, prototype, training, or verified outcome.

Project Detail pages retain technical depth because the visitor explicitly requested it.

### Teaching — persuade

Teaching becomes a distinct secondary offer:

1. Clear proposition and AppClick context.
2. Three learning pillars.
3. Four representative modules in compact rows.
4. Audience and delivery information condensed into one section.
5. Training inquiry CTA.

Remove duplicated topic grids and overlapping audience cards.

### About — trust

About becomes a human credibility page rather than a CV inside a large card:

1. Compact identity introduction with the supplied portrait.
2. Short narrative: industrial engineering, systems work, and teaching.
3. Organisation context and representative proof.
4. Capabilities and credentials as ruled lists.
5. Links to Work, CV, and Contact.

### Contact — operate

The contact page remains deliberately simple:

- preserve the two inquiry modes and existing delivery wiring;
- keep the first visible request focused on describing the workflow;
- tighten vertical gaps and remove the large empty tail before the footer;
- state what happens after submission and keep WhatsApp as the fallback;
- preserve accessible labels, validation, status, and touch targets.

### Notes and detail pages — read

Notes, Article Detail, Project Detail, and specialist Industry pages retain more depth. They receive shared typography, spacing, and surface consistency, but are not forced into the short sales-page structure.

## Shared Components and Layout

Introduce small reusable primitives only where repetition is real:

- `EditorialPageHeader` for breadcrumb/index, title, summary, and actions;
- `EditorialSection` for consistent ruled section spacing;
- `CompactCta` for closing actions without oversized card treatment;
- existing `ProcessDiagram`, `WorkflowEvidence`, `TrustRail`, and `FounderPortrait` remain specialised components.

Avoid a large configurable page-builder component. Each route retains explicit markup so content hierarchy remains easy to inspect.

Desktop major-section spacing falls from repeated 80–96px gaps to a varied 48–72px rhythm. Mobile major-section spacing uses 40–56px. Dense evidence rows may use 20–32px. Open space is reserved for the hero, decisive proof, and final action.

## Content Rules

- One primary claim per page.
- One primary CTA label per page.
- No page repeats the complete methodology already explained elsewhere.
- Overview pages summarise; detail pages substantiate.
- No invented statistics, clients, partnerships, or commercial outcomes.
- Prototype and internal-build labels remain adjacent to the evidence they qualify.
- Teaching is visible but does not compete with the commercial workflow offer on Home or Industry.

## Responsive Behaviour

- At 390px, all layouts use one reading column with no horizontal overflow.
- Navigation retains a 44px minimum touch target and moves secondary controls into the mobile menu when necessary.
- Ruled data rows stack labels before values while preserving evidence order.
- Organisation marks remain legible, but do not force two-column content below a useful width.
- Tables and project directories gain an intentional narrow-screen representation rather than relying on clipping.

## Accessibility and Interaction

- Preserve the global skip link and semantic landmark structure.
- Maintain visible focus states, real buttons/links, form labels, error recovery, and submission status.
- Motion remains optional and respects reduced-motion preferences.
- Color is not the sole carrier of state or scope.
- No text smaller than 11px for functional metadata.

## Testing and Verification

Implementation follows test-first behaviour checks:

- navigation exposes the simplified primary route set while Automation remains reachable;
- Home renders the shortened decision sequence and exactly three featured systems;
- Work renders three expanded featured projects and compact remaining entries;
- About uses the approved portrait without making it the dominant proof element;
- Contact preserves both inquiry modes, submission wiring, accessible labels, and fallback contact;
- representative overview pages no longer use the old `rounded-xl` and `shadow-sm` card grammar;
- all existing routing, localisation, metadata, and form tests remain green.

Visual verification is one bounded desktop/mobile pass across Home, Industry, Work, About, Teaching, and Contact, followed by at most one consolidated correction pass. Production build, TypeScript, complete tests, detector scan, and horizontal-overflow checks must pass before completion.

## Out of Scope

- New backend services, CMS, authentication, analytics, or lead scoring.
- New case-study claims or synthetic testimonials.
- Deleting public specialist routes or changing established URLs.
- Rewriting article bodies or project-detail technical evidence unless required for shared layout consistency.
- A new logo, color palette, or visual brand.
