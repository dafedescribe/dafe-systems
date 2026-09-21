# DafeDeScribe

Portfolio and inquiry site for DafeDeScribe — workflow automation, industrial systems, and practical technical education.

## Run locally

Prerequisite: Node.js.

1. Install dependencies: `npm install`
2. Start the app: `npm run dev`

Useful checks:

- `npm test` — run the test suite.
- `npm run lint` — run the TypeScript check.
- `npm run build` — build and prerender the site.

The contact API requires the Gmail environment variables documented in [the owner playbook](docs/owner-playbook.md). Keep the app password server-side only.

## Upload site assets from the Codespace

Start the local-only asset intake page:

```bash
npm run upload:site
```

Open `http://127.0.0.1:8787` (or the forwarded Codespace port). Drop in images, PDFs, Word documents, or Markdown/MDX notes. Files are written directly into `public/uploads/`, `public/docs/`, or `content/notes/`. Stop the server with `Ctrl+C` when finished.
