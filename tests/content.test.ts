import { existsSync, mkdirSync, mkdtempSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import * as React from 'react';
import { getAllNotes, getNote, getNoteComponent } from '../src/content/notes';
import { mdxComponents } from '../src/content/mdx-components';
import { ReadingProgress, ShareRow, TableOfContents } from '../src/components/article-chrome';
import { WorkPage } from '../src/pages/WorkPage';
import { extractNotes } from '../scripts/extract-notes';

const repoRoot = join(__dirname, '..');

describe('notes content', () => {
  it('loads notes with unique slugs', () => {
    const notes = getAllNotes();
    const slugs = notes.map((n) => n.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('excludes drafts and sorts newest first', () => {
    const notes = getAllNotes();
    for (let i = 1; i < notes.length; i++) {
      expect(notes[i - 1].date.getTime()).toBeGreaterThanOrEqual(notes[i].date.getTime());
    }
  });

  it('returns undefined for unknown slug', () => {
    expect(getNote('no-such-post')).toBeUndefined();
  });

  it('manifest matches content files (re-run prebuild after editing)', () => {
    const fresh = extractNotes(join(repoRoot, 'content', 'notes'));
    const stored = JSON.parse(readFileSync(join(repoRoot, 'src', 'content', 'notes-manifest.json'), 'utf8'));
    expect(fresh).toEqual(stored);
  });

  it('keeps every legacy slug (URL freeze)', () => {
    const slugs = getAllNotes()
      .map((n) => n.slug)
      .sort();
    expect(slugs).toEqual(
      [
        'api-vs-browser-automation',
        'automate-tender-monitoring',
        'explaining-apis-to-nontechnical-learners',
        'how-to-process-rfqs-email-pdf-excel',
        'million-rows-python',
        'n8n-vs-python',
        'rfq-automation-for-manufacturers',
      ].sort()
    );
  });

  it('preserves body text (spot-check first paragraphs)', () => {
    const rfq = readFileSync(
      join(repoRoot, 'content', 'notes', 'rfq-automation-for-manufacturers.mdx'),
      'utf8'
    );
    expect(rfq).toContain('When software vendors pitch "AI-powered sales automation"');
    const n8n = readFileSync(join(repoRoot, 'content', 'notes', 'n8n-vs-python.mdx'), 'utf8');
    expect(n8n).toContain('One of the most persistent debates in workflow engineering');
  });

  it('renders a full migrated post with pull quote', async () => {
    const Body = getNoteComponent('n8n-vs-python');
    const html = renderToStaticMarkup(React.createElement(Body, { components: mdxComponents }));
    expect(html).toContain('One of the most persistent debates in workflow engineering');
    expect(html).toContain('border-amber-600');
    expect(html).toContain('Choose the tool that minimizes operational friction');
  });

  it('every published cover exists in public/ and fits the upload budget', () => {
    for (const n of getAllNotes()) {
      const file = join(repoRoot, 'public', n.cover);
      expect(existsSync(file), `missing cover for ${n.slug}: ${n.cover}`).toBe(true);
      expect(statSync(file).size, `${n.cover} over 2 MB`).toBeLessThanOrEqual(2 * 1024 * 1024);
    }
  });

  it('TOC renders anchors matching heading ids', () => {
    const html = renderToStaticMarkup(
      React.createElement(TableOfContents, {
        headings: [
          { text: 'Fixture heading', id: 'fixture-heading' },
          { text: 'Second section', id: 'second-section' },
        ],
      })
    );
    expect(html).toContain('href="#fixture-heading"');
    expect(html).toContain('Second section');
  });

  it('ShareRow links the absolute canonical URL', () => {
    const html = renderToStaticMarkup(
      React.createElement(ShareRow, { title: 'Some post', path: '/notes/some-post' })
    );
    expect(html).toContain(encodeURIComponent('https://www.dafe.name.ng/notes/some-post'));
    expect(html).toContain('wa.me/?text=');
  });

  it('ReadingProgress renders a zero-scale fixed bar initially', () => {
    const html = renderToStaticMarkup(React.createElement(ReadingProgress));
    expect(html).toContain('fixed');
    expect(html).toContain('scaleX(0)');
  });

  it('rich components render with design classes', () => {
    const html = renderToStaticMarkup(
      React.createElement(mdxComponents.PullQuote, null, 'Remember this line')
    );
    expect(html).toContain('border-amber-600');
    expect(html).toContain('Remember this line');
    const fig = renderToStaticMarkup(
      React.createElement(mdxComponents.Figure, {
        src: '/uploads/2026-09/x.webp',
        alt: 'Descriptive alt text here',
      })
    );
    expect(fig).toContain('loading="lazy"');
    expect(fig).toContain('alt="Descriptive alt text here"');
  });

  it('skips invalid drafts instead of breaking the build', () => {
    const dir = mkdtempSync(join(tmpdir(), 'notes-'));
    writeFileSync(
      join(dir, 'half-written.mdx'),
      '---\ntitle: "Too short"\ndraft: true\n---\n\nWIP body.\n'
    );
    expect(extractNotes(dir)).toEqual([]);
  });

  it('rejects oversize covers naming file and bytes', () => {
    const dir = mkdtempSync(join(tmpdir(), 'notes-'));
    const pub = mkdtempSync(join(tmpdir(), 'public-'));
    mkdirSync(join(pub, 'uploads'));
    writeFileSync(join(pub, 'uploads', 'huge.webp'), Buffer.alloc(2 * 1024 * 1024 + 1));    writeFileSync(
      join(dir, 'big-post.mdx'),
      '---\ntitle: "A post with an oversize cover image here"\ncluster: "Automation Architecture"\ndate: 2026-09-19\nsummary: "A summary long enough to pass the minimum forty character requirement."\ncover: "/uploads/huge.webp"\ncoverAlt: "Alt text long enough to pass validation here"\ntargetServiceUrl: "/automation"\ntargetServiceLabel: "Explore custom automation workflows"\ndraft: false\n---\n\nBody.\n'
    );
    expect(() => extractNotes(dir, pub)).toThrow(/huge\.webp.*2097153/);
  });

  it('accepts uppercase image extensions from phones', () => {
    const dir = mkdtempSync(join(tmpdir(), 'notes-'));
    const pub = mkdtempSync(join(tmpdir(), 'public-'));
    mkdirSync(join(pub, 'uploads'));
    writeFileSync(join(pub, 'uploads', 'photo.JPG'), Buffer.alloc(10));
    writeFileSync(
      join(dir, 'phone-post.mdx'),
      '---\ntitle: "A post with a phone photo cover here"\ncluster: "Automation Architecture"\ndate: 2026-09-19\nsummary: "A summary long enough to pass the minimum forty character requirement."\ncover: "/uploads/photo.JPG"\ncoverAlt: "Alt text long enough to pass validation here"\ntargetServiceUrl: "/automation"\ntargetServiceLabel: "Explore custom automation workflows"\ndraft: false\n---\n\nBody.\n'
    );
    expect(extractNotes(dir, pub).map((n) => n.slug)).toEqual(['phone-post']);
  });
});

describe('work catalogue', () => {
  it('renders each project constraint in the catalogue cards', () => {
    const html = renderToStaticMarkup(React.createElement(WorkPage));
    expect(html).toContain('Memory limits on standard local hardware');
  });
});
