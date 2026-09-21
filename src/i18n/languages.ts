export type LanguageCode = 'en' | 'fr' | 'pt' | 'es' | 'de' | 'tr';

export const LANGUAGE_OPTIONS: Array<{ code: LanguageCode; label: string; nativeLabel: string }> = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'fr', label: 'French', nativeLabel: 'Français' },
  { code: 'pt', label: 'Portuguese', nativeLabel: 'Português' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español' },
  { code: 'de', label: 'German', nativeLabel: 'Deutsch' },
  { code: 'tr', label: 'Turkish', nativeLabel: 'Türkçe' },
];

const supportedCodes = new Set<LanguageCode>(LANGUAGE_OPTIONS.map(({ code }) => code));

export function detectLanguage(preferences: readonly string[] = []): LanguageCode {
  for (const preference of preferences) {
    const baseLanguage = preference.toLowerCase().split('-')[0].split('_')[0] as LanguageCode;
    if (supportedCodes.has(baseLanguage)) return baseLanguage;
  }
  return 'en';
}

export function resolveLanguage(savedLanguage: string | null | undefined, preferences: readonly string[] = []): LanguageCode {
  if (savedLanguage && supportedCodes.has(savedLanguage as LanguageCode)) {
    return savedLanguage as LanguageCode;
  }
  return detectLanguage(preferences);
}
