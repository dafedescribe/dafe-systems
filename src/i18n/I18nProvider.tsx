import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { detectLanguage, resolveLanguage, type LanguageCode } from './languages';
import { translate, type TranslationKey } from './translations';

const STORAGE_KEY = 'dafedescribe-language';

type I18nContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: (key: TranslationKey | string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') return 'en';
  return resolveLanguage(window.localStorage.getItem(STORAGE_KEY), window.navigator.languages || [window.navigator.language]);
}

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(getInitialLanguage);

  const setLanguage = (nextLanguage: LanguageCode) => {
    setLanguageState(nextLanguage);
    if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t: (key: TranslationKey | string) => translate(language, key) }), [language]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used inside I18nProvider');
  return context;
}

export { detectLanguage };
