---
name: Modern Engineering Systems Studio
description: High-craft, modern engineering portfolio and commercial systems builder for DafeDeScribe (Odafe Amalega)
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
  gold: "#B45309"
  gold-dark: "#92400E"
  gold-light: "#FDE68A"
  gold-wash: "#FEF3C7"
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
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
components:
  catalogue-sheet:
    backgroundColor: "{colors.paper-bright}"
    border: "1px solid {colors.rule}"
    boxShadow: "0 1px 3px rgba(15, 23, 42, 0.04)"
    rounded: "{rounded.lg}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#FFFFFF"
    border: "1px solid {colors.ink}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.rule}"
    rounded: "{rounded.md}"
---

# Modern Engineering Systems Studio Design System

The visual language of DafeDeScribe reflects high-caliber, production-grade software craftsmanship. It combines the rigorous precision of an engineering office with modern, responsive product design.

## Palette & Surface Architecture

- **Canvas & Surfaces**:
  - Main Canvas (`#FAFAF9`): Clean, light slate neutral canvas with crisp readability.
  - Bright Surface (`#FFFFFF`): Elevated cards, technical specifications, and project breakdowns.
  - Soft Inset (`#F8FAFC`): Inset comparison panels, parameter tables, and diagnostics.
  - Neutral Accent (`#F1F5F9`): Code blocks, secondary buttons, and subtle badges.
- **Slate Ink**:
  - Primary Slate (`#0F172A`): Deep slate for primary headlines, high-contrast buttons, and structural navigation.
  - Secondary Slate (`#334155`): Explanatory text, subheadings, and data values.
  - Muted Slate (`#64748B`): Context metadata, helper text, and secondary timestamps.
- **Borders & Rules**:
  - Light Slate Rule (`#E2E8F0`): Subtle 1px dividing lines between content and cards.
  - Medium Slate Rule (`#CBD5E1`): Interactive hover boundaries and active tabs.
- **Warm Amber Accent**:
  - Amber (`#B45309`): Used purposefully for active links, workflow status indicators, and key operational badges.

## Typography

1. **Editorial & Headline Display**: `Source Serif 4`
   - Expresses academic and engineering pedigree without marketing exaggeration.
2. **Body & Interface**: `Hanken Grotesk`
   - High legibility, neutral mid-century grotesk.
3. **Telemetry & Technical Data**: `IBM Plex Mono`
   - Used for module IDs, technical specifications, and status chips.

## Elevation & Geometry

- **Subtle Elevation**: Replaced harsh brutalist drop-shadows with refined multi-layer elevations (`box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04)`).
- **Proportional Corners**: Cards and buttons utilize clean `6px` to `8px` rounded corners.
- **Human Authoritative Voice**: Clean, cohesive paragraphs presenting verified facts and concrete engineering capabilities.
