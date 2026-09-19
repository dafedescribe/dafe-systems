---
name: Technical Catalogue
description: Precision industrial engineering catalogue aesthetic for independent systems builder DafeDeScribe
colors:
  paper: "#FCFBF7"
  paper-bright: "#FFFFFF"
  paper-warm: "#F5F1E7"
  paper-deep: "#EBE5D8"
  ink: "#181816"
  ink-secondary: "#33312C"
  ink-muted: "#77736A"
  rule: "#D9D4C8"
  rule-strong: "#AAA397"
  gold: "#B58A2A"
  gold-dark: "#795B18"
  gold-light: "#E6D8AF"
  gold-wash: "#F6F0DC"
typography:
  display:
    fontFamily: "'Source Serif 4', Georgia, Cambria, serif"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Hanken Grotesk', -apple-system, BlinkMacSystemFont, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "2px"
components:
  catalogue-sheet:
    backgroundColor: "{colors.paper-bright}"
    border: "1px solid {colors.rule}"
    boxShadow: "4px 4px 0 rgba(24, 24, 22, 0.08)"
    rounded: "{rounded.none}"
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "#FFFFFF"
    border: "1px solid {colors.gold-dark}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "1px solid {colors.ink}"
    rounded: "{rounded.none}"
---

# Technical Catalogue Design System

The visual language of DafeDeScribe combines industrial product catalogues, engineering specification sheets, architectural documentation, and professional tender files. The site feels tangible, restrained, and almost printable.

## Palette & Surface Architecture

- **Canvas & Paper Stock**:
  - Main Canvas (`#FCFBF7`): Uncoated tactile engineering paper with a faint 24px radial registration grid.
  - Bright Paper (`#FFFFFF`): Elevated specification sheets and case study plates.
  - Warm Paper (`#F5F1E7`): Inset comparison panels, diagnostic lists, and dossier metadata.
  - Deep Paper (`#EBE5D8`): Archive sections, terminal footers, and structural dockets.
- **Ink**:
  - Primary Ink (`#181816`): High-contrast graphite black for headings, master rules, and borders.
  - Secondary Ink (`#33312C`): Supporting labels, subheaders, and technical table content.
  - Muted Ink (`#77736A`): Explanatory paragraphs, metadata timestamps, and diagram captions.
- **Rules**:
  - Standard Dividing Rule (`#D9D4C8`): 1px hair-rules separating sections and data rows.
  - Double Technical Rule: 3px primary ink rule + 2px space + 1px primary ink rule.
- **Brand Gold (Technical Marking Ink Only)**:
  - Gold (`#B58A2A`): Strictly used as an engineer's marking pen — active reference codes, automated node states, registration highlights, and primary CTAs. Never used for body copy, never rendered as gradients or shiny foil.

## Typography

1. **Editorial & Document Display**: `Source Serif 4`
   - Dignified, academic, technical authority. Used for section titles, case study headlines, and narrative prompts.
2. **Body & Interface**: `Hanken Grotesk`
   - Clean, neutral mid-century grotesk. High legibility on mobile and desktop without SaaS friendliness clichés.
3. **Telemetry & Technical Data**: `IBM Plex Mono`
   - Used for reference IDs (`REF. DS-001`), navigation indexes (`01 INDUSTRY`), code extracts, table cells, and status badges.

## Layout & Proportions

- **12-Column Asymmetric Spreads**: Wide desktop viewports use catalogue splits (e.g., 7-column narrative / 5-column live operational schematic).
- **Hard Edges**: Border-radius is strictly `0` (or at most `2px` on small badges). Rounded SaaS cards (`rounded-xl` / `rounded-2xl`) and floating pills are banned.
- **Zero AI-Card Anti-patterns**: Thick left-border tabs (`border-l-4`) are prohibited; plates use crisp 1px borders with top registration markers (`border-t-2 border-t-[#B58A2A] border-x border-b border-[#D9D4C8]`).

## Themed Browser Surfaces

- **Focus Rings**: `outline: 2px solid var(--gold); outline-offset: 2px`
- **Text Selection**: Background `#E6D8AF` (gold light), color `#181816`
- **Caret**: `caret-color: var(--gold)`
- **Scrollbars**: Track `#F5F1E7`, thumb `#AAA397` with `#F5F1E7` border
- **Numerals**: `font-variant-numeric: tabular-nums` for all tables, counters, and technical references
