'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';

const LanguageContext = createContext<{
  language: string;
  setLanguage: (lang: string) => void;
}>({
  language: 'zh',
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>('zh');
  const [i18n, setI18n] = useState<typeof i18next | null>(null);

  useEffect(() => {
    // 从cookie获取语言设置
    const cookies = document.cookie.split(';');
    const localeCookie = cookies.find(c => c.trim().startsWith('NEXT_LOCALE='));
    const savedLanguage = localeCookie ? localeCookie.split('=')[1].trim() : 'zh';

    // 初始化i18next
    const i18nInstance = i18next.createInstance();
    i18nInstance
      .use(initReactI18next)
      .use(resourcesToBackend((language: string, namespace: string) => 
        import(`../i18n/locales/${language}/${namespace}.json`)))
      .init({
        ...getOptions(),
        lng: savedLanguage,
      })
      .then(() => {
        setI18n(i18nInstance);
        setLanguage(savedLanguage);
      });
  }, []);

  const handleSetLanguage = (newLang: string) => {
    // 设置cookie
    document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=${60 * 60 * 24 * 365}`;
    // 更新状态
    setLanguage(newLang);
    // 更新i18next
    if (i18n) {
      i18n.changeLanguage(newLang);
    }
  };

  if (!i18n) {
    return null; // 或者显示加载状态
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);