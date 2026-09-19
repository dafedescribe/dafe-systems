import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import * as React from 'react';
import { getAllNotes, getNote } from '../src/content/notes';
import { mdxComponents } from '../src/content/mdx-components';

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
});
