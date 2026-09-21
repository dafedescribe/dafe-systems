# Global Contact Delivery & Language Support Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver contact inquiries to Gmail through a separate Google OAuth channel and add browser-detected, manually overrideable support for English, French, Portuguese, Spanish, German, and Turkish.

**Architecture:** Add a small Vercel serverless `/api/contact` endpoint that exchanges a stored Google refresh token for an access token and sends a Gmail API message. Add a lightweight React language context with a static translation catalog, browser detection, local preference persistence, and a shared selector; keep user-entered inquiry text untouched and leave long-form notes English until reviewed translations exist.

**Tech Stack:** Vite 6, React 19, TypeScript, Vercel serverless functions, Gmail API OAuth 2.0, Vitest, existing custom router and Tailwind v4.

**Spec:** `docs/superpowers/specs/2026-09-21-global-contact-and-language.md`

## Global Constraints

- Keep GitHub OAuth exclusively for CMS login; Gmail uses separate Google OAuth credentials.
- Store `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`, and `CONTACT_TO_EMAIL` only in Vercel environment variables.
- The form must show success only after Gmail accepts the message.
- WhatsApp remains an alternate delivery path.
- Supported languages are English (`en`), French (`fr`), Portuguese (`pt`), Spanish (`es`), German (`de`), and Turkish (`tr`).
- Unsupported browser languages fall back to English; a visible selector overrides detection and persists the preference.
- User-entered inquiry content is never machine-translated or stored in the repository/browser.
- Existing URLs, Vite SPA routing, MDX content, and CMS behavior remain unchanged.
- `npm test`, `npm run lint`, and `npm run build` must pass before completion.

---

### Task 1: Gmail contact endpoint

**Files:**
- Create: `api/contact.js`
- Create: `tests/contact.test.ts`

**Interfaces:**
- Consumes: JSON `POST /api/contact` payload `{ inquiryType, description, name, organization, contactInfo, currentTools?, optionalNote?, website? }`.
- Produces: HTTP `200 { ok: true }` after Gmail accepts the message; `400` for invalid input; `405` for other methods; `500` for missing configuration; `502` for token/Gmail failures.

- [ ] **Step 1: Write failing endpoint tests**

Add a plain-Node response helper and mock `globalThis.fetch` in `tests/contact.test.ts`. Cover these exact behaviors:

```ts
it('rejects non-POST requests', async () => {
  const res = nodeRes();
  await handler({ method: 'GET', headers: {} }, res);
  expect(res.statusCode).toBe(405);
});

it('rejects missing required inquiry fields', async () => {
  const res = nodeRes();
  await handler({ method: 'POST', headers: {}, body: JSON.stringify({}) }, res);
  expect(res.statusCode).toBe(400);
  expect(res.body).toContain('required');
});

it('returns a configuration error without calling Google', async () => {
  const res = nodeRes();
  await handler({ method: 'POST', headers: {}, body: validBody() }, res);
  expect(res.statusCode).toBe(500);
  expect(res.body).toContain('not configured');
});

it('refreshes OAuth and sends a Gmail message', async () => {
  process.env.GOOGLE_CLIENT_ID = 'client-id';
  process.env.GOOGLE_CLIENT_SECRET = 'client-secret';
  process.env.GOOGLE_REFRESH_TOKEN = 'refresh-token';
  process.env.CONTACT_TO_EMAIL = 'odafe@example.com';
  const calls: RequestInit[] = [];
  globalThis.fetch = async (_input, init) => {
    calls.push(init ?? {});
    return new Response(JSON.stringify({ access_token: 'access-token' }), { status: 200 });
  };
  const res = nodeRes();
  await handler({ method: 'POST', headers: {}, body: JSON.stringify(validBody()) }, res);
  expect(res.statusCode).toBe(200);
  expect(calls).toHaveLength(2);
  expect(String(calls[1].body)).toContain('raw');
});
```

Use a valid body with an email contact so the endpoint can assert `Reply-To` behavior. Restore environment variables and `globalThis.fetch` after each test.

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `npm test -- tests/contact.test.ts`

Expected: FAIL because `api/contact.js` does not exist yet.

- [ ] **Step 3: Implement minimal Gmail delivery**

Implement these helpers in `api/contact.js`:

```js
const MAX_BODY_BYTES = 32 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function requiredString(value, max = 4000) {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= max;
}

function base64Url(value) {
  return Buffer.from(value, 'utf8').toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function rfc822({ to, replyTo, subject, body }) {
  const headers = [`To: ${to}`, `Subject: ${subject}`, 'Content-Type: text/plain; charset="UTF-8"'];
  if (replyTo) headers.push(`Reply-To: ${replyTo}`);
  return `${headers.join('\r\n')}\r\n\r\n${body}`;
}
```

Validate the method, body size, JSON, required fields, and honeypot. Exchange the refresh token at `https://oauth2.googleapis.com/token` with `grant_type=refresh_token`, then call `https://gmail.googleapis.com/gmail/v1/users/me/messages/send` with `{ raw: base64Url(rfc822(...)) }`. Return generic JSON errors; never include secrets or raw inquiry contents in error responses.

- [ ] **Step 4: Run the focused test to verify it passes**

Run: `npm test -- tests/contact.test.ts`

Expected: all contact endpoint tests pass.

- [ ] **Step 5: Commit the endpoint**

```bash
git add api/contact.js tests/contact.test.ts
git commit -m "feat(contact): send inquiries through Gmail API"
```

### Task 2: Wire the Contact page to the endpoint

**Files:**
- Modify: `src/pages/ContactPage.tsx`
- Modify: `tests/contact.test.ts`

**Interfaces:**
- Consumes: the `/api/contact` request/response contract from Task 1.
- Produces: loading, success, and recoverable error states; WhatsApp fallback remains available.

- [ ] **Step 1: Add a failing render test for real submission behavior**

Add a test-level contract assertion that the page source contains `fetch('/api/contact'` and does not mark `submitted` before the fetch resolves. If the component is rendered with the existing server renderer, assert the form contains a honeypot input and the submit button has a loading-safe label path.

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `npm test -- tests/contact.test.ts`

Expected: FAIL because the page currently only calls `setSubmitted(true)`.

- [ ] **Step 3: Implement the client submission flow**

Add `isSubmitting` and `submitError` state. Build the payload from the active inquiry type and fields, include the hidden `website` honeypot, call `/api/contact`, and only call `setSubmitted(true)` after `response.ok`. On failure, keep the form populated, show an inline error with a next step, and retain the WhatsApp link. Add `aria-live="polite"` to the status region and disable the submit button only while the request is in flight.

- [ ] **Step 4: Run tests, lint, and build**

Run: `npm test -- tests/contact.test.ts && npm run lint && npm run build`

Expected: all commands pass and the prerender script still completes.

- [ ] **Step 5: Commit the form wiring**

```bash
git add src/pages/ContactPage.tsx tests/contact.test.ts
git commit -m "feat(contact): connect inquiry form to delivery endpoint"
```

### Task 3: Add language state and detection

**Files:**
- Create: `src/i18n/languages.ts`
- Create: `src/i18n/translations.ts`
- Create: `src/i18n/I18nProvider.tsx`
- Create: `src/components/LanguageSelector.tsx`
- Create: `tests/i18n.test.ts`
- Modify: `src/App.tsx`
- Modify: `src/main.tsx`
- Modify: `src/components/Navbar.tsx`

**Interfaces:**
- Consumes: browser `navigator.languages`, optional `localStorage` key `dafedescribe-language`.
- Produces: `LanguageCode`, `SUPPORTED_LANGUAGES`, `I18nProvider`, `useI18n()`, and `t(key)` with English fallback.

- [ ] **Step 1: Write failing language tests**

Test the pure functions before writing the provider:

```ts
it('chooses Turkish from browser language preferences', () => {
  expect(detectLanguage(['tr-TR', 'en-US'])).toBe('tr');
});

it('falls back to English for unsupported languages', () => {
  expect(detectLanguage(['ja-JP'])).toBe('en');
});

it('uses a saved language before browser detection', () => {
  expect(resolveLanguage('de', ['tr-TR', 'en-US'])).toBe('de');
});

it('falls back to English when a translation key is missing', () => {
  expect(translate('tr', 'missing.key')).toBe(translate('en', 'missing.key'));
});
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `npm test -- tests/i18n.test.ts`

Expected: FAIL because the i18n modules do not exist.

- [ ] **Step 3: Implement the language catalog and provider**

Define the six language codes and display labels. Implement `detectLanguage(preferences: readonly string[])`, `resolveLanguage(saved, preferences)`, and `translate(language, key)`. Use `navigator.languages` only in an effect-safe initializer; guard `window` and `localStorage` for prerendering. The provider updates `document.documentElement.lang` whenever the active language changes.

Store translations as typed nested or dotted-key records. Include complete first-pass copy for shared navigation, selector labels, homepage hero/CTA, About identity/proof, Tender Monitoring hero/CTA, and Contact form/status/error copy in all six languages.

- [ ] **Step 4: Add the selector and app-level provider**

Wrap `App` with `I18nProvider`, add `LanguageSelector` to the desktop and mobile navbar, and render a native `<select>` with an accessible label. Persist manual selection under `dafedescribe-language`; never persist inquiry text.

- [ ] **Step 5: Run the focused language tests**

Run: `npm test -- tests/i18n.test.ts`

Expected: all detection, persistence-resolution, and fallback tests pass.

- [ ] **Step 6: Commit the language foundation**

```bash
git add src/i18n src/components/LanguageSelector.tsx src/App.tsx src/main.tsx src/components/Navbar.tsx tests/i18n.test.ts
git commit -m "feat(i18n): add detected language preferences"
```

### Task 4: Translate the first global-facing surfaces

**Files:**
- Modify: `src/pages/HomePage.tsx`
- Modify: `src/pages/AboutPage.tsx`
- Modify: `src/pages/TenderPage.tsx`
- Modify: `src/pages/ContactPage.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/SeoHead.tsx`
- Modify: `index.html`
- Modify: `tests/i18n.test.ts`

**Interfaces:**
- Consumes: `useI18n().t`, active language state, and the six-language catalog from Task 3.
- Produces: translated first-pass public surfaces, language-aware document metadata, and unchanged English fallback behavior.

- [ ] **Step 1: Add failing surface assertions**

Render the shared selector plus the homepage and contact surface with a test language context. Assert Turkish and French labels are present and `document.documentElement.lang` is updated through the provider behavior.

- [ ] **Step 2: Run the focused test to verify it fails**

Run: `npm test -- tests/i18n.test.ts`

Expected: FAIL because the pages still render hardcoded English strings.

- [ ] **Step 3: Replace first-pass hardcoded UI copy with translation keys**

Translate visible UI copy only. Keep project titles, technical case-study claims, and MDX note bodies unchanged. Pass translated title and description values into `SeoHead`; ensure client updates do not create invalid JSON-LD or canonical URLs. Use `translate="no"` for DafeDeScribe, Odafe Amalega, AppClick, API names, and code/technical identifiers.

- [ ] **Step 4: Run all checks**

Run: `npm test && npm run lint && npm run build`

Expected: all tests pass, TypeScript is clean, sitemap/prerender completes, and `/notes` routes remain English and unchanged.

- [ ] **Step 5: Commit the translated surfaces**

```bash
git add src/pages src/components src/i18n index.html tests/i18n.test.ts
git commit -m "feat(i18n): translate global-facing site surfaces"
```

### Task 5: Document Google OAuth setup and final verification

**Files:**
- Modify: `docs/owner-playbook.md`
- Modify: `README.md`
- Modify: `tests/prerender.test.ts`

**Interfaces:**
- Consumes: deployed `/api/contact`, Vercel environment variables, and the language provider.
- Produces: repeatable owner setup instructions and final release evidence.

- [ ] **Step 1: Document the Google Cloud setup**

Document the exact required environment variables, Gmail API enablement, OAuth consent screen, redirect-independent refresh-token generation, Vercel environment targets, and a safe test procedure. Never include live secrets or refresh tokens.

- [ ] **Step 2: Add final integration assertions**

Assert the contact endpoint path is included in the source contract, the HTML still has `lang="en"` as the safe static fallback, and the translation provider updates language only at runtime.

- [ ] **Step 3: Run the complete verification suite**

Run:

```bash
npm test
npm run lint
npm run build
git diff --check
```

Expected: 0 test failures, 0 TypeScript errors, successful production build/prerender, and no whitespace errors.

- [ ] **Step 4: Commit documentation and report deployment prerequisites**

```bash
git add README.md docs/owner-playbook.md tests/prerender.test.ts
git commit -m "docs: document Gmail contact and language setup"
```

Report that deployment still requires the Google OAuth values in Vercel; code alone cannot send mail until those variables are configured.
