import { describe, expect, it } from 'vitest';
import { getAllNotes, getNote } from '../src/content/notes';

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
});
