// components/Navigation.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch'
import { useTranslation } from 'react-i18next'

interface NavigationProps {
  variant?: 'default' | 'home';
}

const Navigation = ({ variant = 'default' }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation('nav'); // 指定使用nav命名空间
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/solutions', label: 'solutions' },
    { href: '/tech', label: 'tech' },
    { href: '/cases', label: 'cases' },
    { href: '/about', label: 'about' },
    { href: '/contact', label: 'contact' },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      variant != 'home' 
        ? isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        : 'bg-white shadow-md'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" className="h-10 w-auto" alt="" />
            {/* <span className={`text-2xl font-bold ${variant == 'home'?'text-blue-600': isScrolled ? 'text-blue-600' : 'text-white'}`}>
              可爱鲸
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  variant == 'home'
                    ? isActive(item.href)
                      ? 'text-blue-600 font-medium border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                    : isActive(item.href)
                    ? isScrolled
                      ? 'text-blue-600 font-medium border-b-2 border-blue-600'
                      : 'text-white font-medium border-b-2 border-white'
                    : isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-100'
                } transition-colors py-1`}
              >
                {t(item.label)}
              </Link>
            ))}
            <LanguageSwitch variant={variant} isScrolled={isScrolled} />
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.label)}
                </Link>
              ))}
              <LanguageSwitch />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;