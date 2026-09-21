# Homepage Trust & CV Redesign

## Objective

Redesign the public homepage and CV so an industrial or international prospect immediately sees a credible person, relevant operational experience, documented workflow evidence, and a low-friction path to contact. The visual language will adapt the strongest qualities of the local upload page: warm paper, oversized editorial typography, fine rules, restrained orange, monospace evidence labels, and asymmetric composition.

## Audience & Success Criteria

The primary visitors are industrial managing directors, operations leaders, technical-training buyers, and international collaborators.

The redesign succeeds when:

- the founder is visibly identifiable without making the site feel like a personal lifestyle page;
- the homepage displays the four supplied environment logos above the fold or directly below the hero;
- the logos are framed as experience and operating context, not as unsupported client endorsements;
- industrial workflow evidence remains more prominent than tools or generic capability claims;
- graphical elements improve scanning and do not resemble a busy AI dashboard;
- the downloadable CV has accurate contact details, a focused positioning statement, concrete evidence, and ATS-readable structure;
- desktop and mobile browser checks pass for navigation, readability, logo visibility, CV access, and contact conversion.

## Visual Direction

The homepage becomes a “technical workbench editorial” surface.

- Background: warm paper with a subtle radial wash derived from the upload page.
- Typography: large Source Serif display text, Hanken Grotesk body copy, IBM Plex Mono evidence labels.
- Structure: thin horizontal and vertical rules, open space, numbered modules, fewer card containers.
- Accent: restrained burnt orange for status, links, and evidence markers.
- Motion: one quiet entrance sequence at most; disabled under reduced-motion preferences.
- Graphics: functional workflow notation only. No decorative charts, orbiting shapes, gradients associated with generic AI products, or continuous animation.

## Direction Contract

This direction was approved in the project brainstorm before the Impeccable review workflow was introduced, so no Impeccable seed key exists. The approval source is this committed specification and the user's explicit instruction to proceed inline.

- **World:** a warm technical workbench editorial—part engineering dossier, part independent-practice profile.
- **First viewport:** the operational proposition and founder identity share the frame; a supplied portrait makes the practice accountable, while the first action asks about the prospect's workflow.
- **Visitor path:** proposition → contextual experience marks → operating method → evidence ledger → working process → training proof → inquiry.
- **Signature interaction:** one restrained first-view entrance; the rest of the page relies on ruled reading rhythm and direct links rather than decorative motion.
- **Cross-surface reach:** the same warm paper, editorial serif, restrained amber, factual labels, and thin rules continue into the two-page CV.
- **Honest risk:** an editorial system can become too quiet or text-dense; portrait, logo context, workflow notation, and clear actions must keep it human and scannable.

## Homepage Architecture

### 1. Hero

Use an asymmetric editorial layout:

- left: founder label, location/global-delivery line, large outcome-led headline, concise operational positioning, primary and secondary actions;
- right: a framed founder portrait with a short identity caption and a compact “available globally / based in Ibadan” status block;
- selected portrait: `public/uploads/whatsapp-image-2026-09-21-at-1-01-24-pm-1.jpeg` because it combines formal dress, direct expression, warmth, and crop flexibility;
- retain the existing workflow schematic only as a quieter secondary element below the first trust section, not as the main hero visual.

### 2. Trust Rail

Place directly after the hero. Show AppClick, New Edition, SR Construction, and Dangote Cement in a unified ruled strip.

Label: “Experience across industrial, education & technical environments.”

Each logo receives a factual descriptor:

- AppClick — technical instruction;
- New Edition — education & internal systems;
- SR Construction — construction context;
- Dangote Cement — industrial exposure.

The section must not say “clients,” “trusted by,” or imply commercial engagement where the evidence only supports employment, training, or exposure.

### 3. Operational Evidence

Keep RFQ intake, tender monitoring, and quotation coordination as the first substantial content. Present them as ruled evidence records rather than repeated generic cards. Each record shows status, input, process summary, output, and stated result.

### 4. Engagement & Training

Retain “How I work” as a three-step progression and make applied training a distinct evidence block. Both use the same ruled workbench language and avoid adding more card grids.

### 5. Global Trust & Contact

End with a compact global-delivery band and a direct contact action. Preserve language selection and WhatsApp fallback.

## CV Redesign

Create an editable HTML source and generate a replacement `public/cv.pdf` from it.

Positioning title: “Workflow Automation & Systems Engineer.”

Contact details:

- Ibadan, Nigeria — available globally;
- `+234 913 248 0302`;
- `dafedescribe@gmail.com`;
- `https://www.dafe.name.ng`;
- `linkedin.com/in/odafe-amalega`.

Content hierarchy:

1. concise professional summary focused on operational workflow automation;
2. evidence-led selected systems, clearly labelled as prototype, internal build, training, or professional experience;
3. relevant professional experience;
4. capabilities and tools;
5. education and certifications.

Accuracy rules:

- degree is B.Eng. Mechanical Engineering;
- do not repeat conflicting phone numbers or email addresses from older source documents;
- avoid unsupported client, adoption, revenue, or production claims;
- separate portfolio builds from paid client work;
- omit a portrait and complex columns so the document remains ATS-readable;
- target two clean pages with selectable text and working links.

## Responsive & Accessibility Requirements

- Hero becomes a single-column reading sequence on narrow screens: identity, headline, actions, portrait, trust rail.
- Logo rail wraps without shrinking marks below readable size.
- Portrait has fixed dimensions/aspect ratio to prevent layout shift and meaningful alt text.
- All controls retain visible focus states and 44px minimum touch targets.
- Motion respects `prefers-reduced-motion`.
- Text and logo treatment meet readable contrast requirements.
- No horizontal overflow at 390px.

## Persona Simulation

After implementation, evaluate the finished browser UI through four scenarios:

1. Industrial managing director checking operational understanding and commercial-risk awareness.
2. Operations lead looking for a comparable workflow, evidence, and an easy inquiry path.
3. Training buyer checking instructional credibility and practical curriculum evidence.
4. International prospect checking identity, location, communication options, and global-delivery confidence.

For each persona, record first impression, trust signals found, likely objections, CTA clarity, and pass/fail. Any shared blocker across two or more personas must be fixed before completion.

## Verification

- run repository unit tests, TypeScript checks, and production build;
- use Playwright against desktop and 390px mobile viewports;
- inspect homepage, CV link, Work filters, About page, and Contact flow;
- check browser console errors and horizontal overflow;
- confirm the selected portrait and all four logos load on the homepage;
- inspect the generated CV visually and confirm selectable text/contact links;
- commit and push only after the final verification pass.
