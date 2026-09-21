# Owner Playbook: Publishing Notes Posts

## Contact form: Gmail delivery

The public contact form sends inquiries through the Vercel `/api/contact` function and Gmail SMTP. It does not expose your Gmail password or app password in the browser.

Configure these server-side Vercel environment variables for Production (and Preview if you want to test there):

- `GMAIL_USER` — the Gmail address that will send the message.
- `GMAIL_APP_PASSWORD` — the 16-character Google App Password, not your normal Gmail password.
- `CONTACT_TO_EMAIL` — inbox that should receive inquiries.

To create the app password, turn on 2-Step Verification for the sending Gmail account, then open [Google App Passwords](https://myaccount.google.com/apppasswords), create one named `DafeDeScribe`, and copy the generated value into `GMAIL_APP_PASSWORD`. Never commit these values to the repository or place them in `VITE_*` variables.

If a prospect cannot submit, the form keeps WhatsApp as a direct fallback. The form only shows “Inquiry Received” after Gmail accepts the message.

## Languages

The site detects the visitor's first supported browser language on first visit. Visitors can override it with the language selector, and their choice is saved in the browser. Supported languages are English, French, Portuguese, Spanish, German, and Turkish. Long-form technical notes remain in English for accuracy; the navigation, calls to action, homepage entry points, and inquiry flow are translated.

Publish a post from your phone in ~5 minutes. No code, no laptop needed.

## Publish a new post

1. Open `https://www.dafe.name.ng/admin` and log in with GitHub.
2. **Notes → New Notes.** Leave **Draft ON** while writing.
3. Fill the fields:
   - **Title** (10–120 chars), **Cluster**, **Date** (publish date).
   - **Summary** (40–300 chars) — this shows on the index page and Google.
   - **Service URL + label** — where the "Operational Context" link points.
4. **Cover image → Choose file.** Landscape, at least 1200px wide, WebP preferred (see cheat sheet). Write the **alt text** — required, describe the image in one sentence.
5. **Body** — write Markdown. Level-2 sections with `## Title` appear in the "On this page" box automatically. Special blocks (paste exactly):
   - Pull quote: `<PullQuote>One line to remember.</PullQuote>`
   - Image: `<Figure src="/uploads/2026-09/my-photo.webp" alt="Describe it" caption="Optional caption" />`
   - Gallery: `<Gallery images={[{ src: "...", alt: "..." }, { src: "...", alt: "..." }]} />`
   - Numbered steps: wrap paragraphs in `<Steps>...</Steps>`
   - Highlight box: `<Callout title="Heads up">...</Callout>`
   - Big number: `<Stat value="42%" label="What it measures" />`
6. **Save** (stays draft). The site rebuilds in ~1 minute.
7. Preview the draft: open the post URL — drafts don't list on `/notes`, but the direct `/notes/your-slug` link renders.
8. Happy? Edit again, flip **Draft OFF**, save. It appears on `/notes`, in the sitemap, and with full preview cards when shared.

## Edit or unpublish

- **Edit:** open the post in `/admin`, change, save. Live in ~1 minute.
- **Unpublish:** flip **Draft ON**, save. The page and its sitemap entry disappear on next build.
- **Rollback anything:** GitHub → repo → commit history → Revert on the bad commit.

## Image cheat sheet (phone photos)

1. Shoot landscape. Crop to 16:9 in the Photos app.
2. Export at ≤1600px wide ( decline "Actual size" Share options).
3. Convert to WebP: open squoosh.app → drop photo → WebP, quality 80 → download. Must stay **under 2 MB** or the build rejects it and names the file.
4. Upload via the Cover field or the media button in the Body editor.

## What NOT to do

- Don't rename a published post's file (the filename is the URL — renaming breaks the link).
- Don't paste raw `<div>`/`<span>` HTML into the body; use the blocks above.
- Don't upload PNG screenshots straight from the phone (huge) — WebP first.

## If the build fails after saving

Vercel emails on failed deploys. 9 times out of 10 it's frontmatter: a missing cover, alt text under 10 characters, or a Service URL not starting with `/industry`, `/automation`, `/work`, `/teaching`, or `/contact`. The error names the file and field — fix it in `/admin` and save again.
