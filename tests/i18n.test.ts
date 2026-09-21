import { describe, expect, it } from 'vitest';
import { detectLanguage, LANGUAGE_OPTIONS, resolveLanguage } from '../src/i18n/languages';
import { translate } from '../src/i18n/translations';

describe('language preferences', () => {
  it('supports English, French, Portuguese, Spanish, German, and Turkish', () => {
    expect(LANGUAGE_OPTIONS.map((option) => option.code)).toEqual(['en', 'fr', 'pt', 'es', 'de', 'tr']);
  });

  it('detects the first supported browser language', () => {
    expect(detectLanguage(['ja-JP', 'tr-TR', 'en-US'])).toBe('tr');
    expect(detectLanguage(['fr-CA'])).toBe('fr');
  });

  it('falls back to English and prefers a saved supported language', () => {
    expect(detectLanguage(['ja-JP'])).toBe('en');
    expect(resolveLanguage('de', ['en-US'])).toBe('de');
    expect(resolveLanguage('ja', ['en-US'])).toBe('en');
  });
});

describe('translations', () => {
  it('returns translated copy and falls back to English for missing keys', () => {
    expect(translate('tr', 'nav.contact')).toBe('İLETİŞİM');
    expect(translate('fr', 'missing.key')).toBe(translate('en', 'missing.key'));
  });
});
