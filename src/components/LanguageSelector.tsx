import React from 'react';
import { LANGUAGE_OPTIONS } from '../i18n/languages';
import { useI18n } from '../i18n/I18nProvider';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useI18n();

  return (
    <label className="inline-flex items-center gap-2 text-xs font-mono-tech text-slate-600">
      <span className="sr-only">{t('nav.language')}</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as typeof language)}
        aria-label={t('nav.language')}
        className="min-h-[36px] rounded-md border border-slate-200 bg-white px-2 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <option key={option.code} value={option.code}>{option.nativeLabel}</option>
        ))}
      </select>
    </label>
  );
};
