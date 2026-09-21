# Global Contact Delivery & Language Support

> Implementation note: the original OAuth design was simplified after review. The shipped implementation uses Gmail SMTP with a Gmail App Password; see `docs/owner-playbook.md` for the current setup.

**Date:** 2026-09-21  
**Status:** Implemented; SMTP delivery supersedes the original OAuth design
**Scope:** DafeDeScribe public contact flow and first multilingual site layer

## Goal

Make the public inquiry form deliver real messages to Odafe's Gmail inbox and make the site feel intentionally global without hiding language controls or mistranslating user-submitted operational details.

## Current Problems

- `src/pages/ContactPage.tsx` only changes local React state on submit; it sends no message.
- WhatsApp is the only working delivery path.
- GitHub OAuth exists for the CMS and must not be reused for Gmail.
- Public copy is hardcoded in English with no browser-language detection, selector, translation catalog, or localized metadata.

## Decisions

### Contact delivery

- Add a dedicated `/api/contact` Vercel serverless endpoint.
- Use Gmail API `users.messages.send` with a Google OAuth refresh token.
- Use a separate Google OAuth client and credentials from the GitHub CMS OAuth.
- Store `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`, and `CONTACT_TO_EMAIL` in Vercel environment variables.
- Send submissions to `CONTACT_TO_EMAIL`; set `Reply-To` only when the visitor supplied a valid email address.
- Preserve WhatsApp as a secondary CTA with the same form data prefilled.
- Return success to the browser only after Gmail accepts the message.
- Do not persist inquiry contents in the repository or browser storage.

### Abuse and validation

- Accept `POST` only and reject oversized JSON bodies.
- Validate required fields server-side, including inquiry type, name, organisation, contact, and the relevant workflow/training description.
- Add a honeypot field in the form; silently reject obvious bot submissions.
- Escape all user content through the email encoder; never interpolate raw content into HTML.
- Return generic user-facing errors while logging only operational error details server-side.

### Language

- Detect the initial language from `navigator.languages` on the client.
- Supported languages in the first pass: English (`en`), French (`fr`), Portuguese (`pt`), Spanish (`es`), German (`de`), and Turkish (`tr`).
- Unsupported languages fall back to English.
- Add a visible language selector that overrides detection and persists the preference in `localStorage`.
- Keep user-entered form content in its original language; only interface copy is translated.
- Start with shared chrome plus Home, About, Tender Monitoring, and Contact surfaces.
- Keep technical Notes and long-form case-study copy English until reviewed translations exist.
- Set `<html lang>` to the active language.
- Keep canonical URLs stable in this phase; add localized routes and `hreflang` only when translated SEO pages are available.

## Data flow

```text
Contact form
  -> client validation + language-aware labels
  -> POST /api/contact
  -> server validation + honeypot check
  -> Google OAuth refresh-token exchange
  -> Gmail API users.messages.send
  -> success state + WhatsApp fallback
```

## Files expected to change

- `src/pages/ContactPage.tsx` — submit to API, loading/error states, honeypot, language copy.
- `src/i18n/*` — language definitions, translation catalog, browser detection, persistence.
- `src/App.tsx` or an app-level provider — expose active language to shared pages.
- `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/pages/HomePage.tsx`, `src/pages/AboutPage.tsx`, `src/pages/TenderPage.tsx` — replace first-pass visible copy with translation keys.
- `src/main.tsx` — initialize/update document language.
- `api/contact.js` — Gmail delivery endpoint.
- `tests/contact.test.ts`, `tests/i18n.test.ts` — API and language regression coverage.
- `README.md` or `docs/owner-playbook.md` — Google OAuth/Vercel setup instructions without committing secrets.

## Non-goals

- No reuse of GitHub OAuth credentials or CMS tokens.
- No database, CRM, newsletter, or automated translation API in the first pass.
- No translation of user-provided inquiry content.
- No URL migration or framework migration.
- No claims of “global coverage” without evidence; copy will describe international tender research and supported languages precisely.

## Acceptance criteria

1. A valid workflow or training inquiry reaches the configured Gmail inbox through `/api/contact`.
2. Missing Gmail configuration returns a clear server error without exposing secrets.
3. Gmail rejection or network failure leaves the form usable and offers WhatsApp fallback.
4. The form no longer displays “Inquiry Received” before delivery succeeds.
5. Browser language selects a supported translation on first visit; manual selection overrides it on later visits.
6. Unsupported browser languages fall back to English.
7. `<html lang>` reflects the active language.
8. Existing tests, lint, production build, and prerendering continue to pass.
