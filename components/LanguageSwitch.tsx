// components/LanguageSwitch.tsx
'use client';
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../app/i18n/LanguageContext';

interface LanguageSwitchProps {
  variant?: 'default' | 'home';
  isScrolled?: boolean;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ variant = 'default', isScrolled = false }) => {
  const { language, setLanguage } = useLanguage();
  
  const handleLanguageChange = () => {
    const newLang = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={handleLanguageChange}
      className={`flex items-center space-x-1 px-2 py-1 rounded-md ${
        variant == 'home'
          ? 'text-gray-700'
          : isScrolled
          ? 'text-blue-600'
          : 'text-white'
      }`}
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'zh' ? '简体中文' : 'English'}</span>
    </button>
  );
};

export default LanguageSwitch;