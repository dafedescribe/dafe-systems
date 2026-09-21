---
name: DafeDeScribe Technical Workbench Editorial
description: A warm, evidence-led engineering dossier for an independent systems practice.
colors:
  paper: "#FAFAF9"
  paper-bright: "#FFFFFF"
  paper-warm: "#F8FAFC"
  paper-deep: "#F1F5F9"
  ink: "#0F172A"
  ink-secondary: "#334155"
  ink-muted: "#64748B"
  rule: "#E2E8F0"
  rule-strong: "#CBD5E1"
  amber: "#B45309"
  amber-dark: "#92400E"
  amber-light: "#FEF3C7"
  amber-wash: "#FFFBEB"
typography:
  display:
    fontFamily: "'Source Serif 4', Georgia, Cambria, serif"
    fontSize: "clamp(3.25rem, 6.2vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Source Serif 4', Georgia, Cambria, serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  body:
    fontFamily: "'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  data:
    fontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "4px"
  control: "6px"
  surface: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.paper-bright}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-secondary:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  evidence-ledger:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px 0"
---

# Design System: DafeDeScribe Technical Workbench Editorial

## Overview

**Creative North Star: "The Technical Workbench Editorial"**

DafeDeScribe reads like an engineering dossier with a human author: warm paper, decisive editorial type, factual operating evidence, and fine rules that organize rather than decorate. It is precise and commercially calm, not a generic SaaS dashboard or an AI spectacle.

The identity stays personal through one supplied portrait, a named founder, and factual experience context. Proof is carried by workflow inputs, outputs, scope labels, and documented outcomes; visual polish never substitutes for evidence.

**Key Characteristics:**

- Warm paper and slate ink with restrained burnt amber.
- Asymmetric editorial compositions paced by open space and thin rules.
- One decisive human portrait and authentic organization marks.
- Flat evidence ledgers instead of repeated rounded cards.
- Explicit scope language: prototype, internal build, training, target, and build goal.

## Colors

The palette is mostly paper and slate; amber is a scarce action and evidence accent.

### Primary

- **Workbench Amber** (`#B45309`): Primary actions, references, active states, and evidence markers.
- **Deep Amber** (`#92400E`): Hover states and strong accent borders.

### Neutral

- **Warm Paper** (`#FAFAF9`): Main reading canvas.
- **Bright Sheet** (`#FFFFFF`): Controls and contained technical surfaces.
- **Slate Ink** (`#0F172A`): Headlines, primary copy, and dark closing bands.
- **Secondary Slate** (`#334155`): Supporting copy.
- **Muted Slate** (`#64748B`): Metadata and secondary descriptions.
- **Fine Rule** (`#E2E8F0`): Structural dividers and ledger rows.

**The Scarce Amber Rule.** Amber identifies action, state, or evidence; it does not flood whole sections.

## Typography

**Display Font:** Source Serif 4 (with Georgia fallback)<br>
**Body Font:** Hanken Grotesk (with system sans fallback)<br>
**Data Font:** IBM Plex Mono (with system monospace fallback)

The serif carries authority and editorial warmth. The grotesk keeps operational explanations plain and readable. Monospace is functional notation, never a costume for “technical.”

### Hierarchy

- **Display** (500, `clamp(3.25rem, 6.2vw, 6rem)`, `0.94`): Homepage thesis only.
- **Headline** (400, `2.25–3rem`, `1.02`): Section propositions.
- **Title** (400–600, `1.25–1.875rem`): Projects, workflow stages, and subsection names.
- **Body** (400, `0.875–1.25rem`, `1.6`): Explanations with a practical 65–75ch maximum measure.
- **Data** (600, minimum `0.6875rem` on mobile): References, sequence numbers, statuses, inputs, outputs, and measurements.

**The Evidence Type Rule.** IBM Plex Mono is reserved for real data, references, scope, status, and controls; never place decorative eyebrow copy above a heading.

## Layout

The public site uses a centered `1440px` maximum canvas with `24px` mobile gutters, increasing to `48px` and `64px`. Major sections use roughly `64–80px` vertical spacing and 1px ruled boundaries. Desktop compositions are asymmetric 12-column grids; at narrow widths they become a single reading sequence: proposition, action, portrait, trust, method, evidence, training, close.

Evidence is structured as rows and definition lists. At 390px, no content may widen the viewport, controls retain 44px touch targets, marks remain legible, and functional metadata never falls below 11px.

## Elevation & Depth

The system is flat by default. Structural depth comes from paper contrast, rules, overlap, and the portrait's offset frame. Controls may use a quiet `0 1px 2px` shadow; catalogue surfaces may rise to `0 4px 12px -2px rgba(15, 23, 42, 0.06)` on hover. Wide halos and hard offset shadows are outside the system.

**The Ruled Surface Rule.** Prefer one boundary—usually a fine rule—over a bordered card plus a broad shadow.

## Shapes

Editorial and evidence surfaces are square. Controls use a restrained `6px` radius and legacy compact surfaces may use `8px`. Circles are limited to true status points or deliberately cropped ornamental geometry; pills are reserved for small controls and genuine states.

## Components

### Buttons

- **Primary:** Workbench amber, white text, 1px deep-amber border, `6px` radius, and short color/shadow transition.
- **Secondary:** Bright sheet, slate ink, strong fine-rule border, and the same geometry.
- **Focus:** 2px amber outline with 2px offset.

### Inputs / Fields

- Bright sheet with a 1px fine-rule border and `6px` radius.
- Focus shifts the border to amber and adds a restrained 3px amber ring.
- Labels name the requested information directly; error copy names recovery.

### Evidence Ledgers

- Square, flat rows divided by 1px rules.
- References and scope sit apart from the serif title and plain-language explanation.
- Prototype goals say **Target**; internal experiments say **Build goal** unless a result is documented.

### Trust Rail

- Authentic marks sit in equal 48px square cells and may desaturate at rest.
- The heading names experience and context; never imply client endorsement.

### Navigation

- White translucent surface, fine bottom rule, restrained mono index labels, and a clear amber active state.
- At mobile widths, the workflow CTA is removed from the bar and remains available inside the navigation drawer to protect width and focus.

## Do's and Don'ts

### Do:

- **Do** lead with the operational problem and show how information moves.
- **Do** use thin rules, changing density, and open space to pace long pages.
- **Do** pair every organization mark with an accurate role or context.
- **Do** keep the supplied portrait natural, rectangular, and clearly captioned.
- **Do** qualify prototypes and internal builds at the point of evidence.

### Don't:

- **Don't** use generic SaaS card stacks or status pills as the main page grammar.
- **Don't** add decorative pre-heading eyebrows or monospace marketing slogans.
- **Don't** use gradients, glass, busy diagrams, or continuous motion to imply technical sophistication.
- **Don't** describe employment, exposure, education, or prototypes as client endorsement.
- **Don't** present targets or modelled outcomes as completed commercial results.
