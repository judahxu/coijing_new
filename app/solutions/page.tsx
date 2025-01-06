'use client'
import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Users, BarChart3, Truck, GraduationCap, Home, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SolutionPage = () => {
  const [activeSection, setActiveSection] = useState('smart-customer');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const { t } = useTranslation('solutions');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsNavSticky(offset > 440);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      id: 'smart-customer',
      icon: Users,
      path: 'solutions.smart-customer'
    },
    {
      id: 'data-driven',
      icon: BarChart3,
      path: 'solutions.data-driven'
    },
    {
      id: 'smart-logistics',
      icon: Truck,
      path: 'solutions.smart-logistics'
    },
    {
      id: 'smart-education',
      icon: GraduationCap,
      path: 'solutions.smart-education'
    },
    {
      id: 'smart-life',
      icon: Home,
      path: 'solutions.smart-life'
    },
    {
      id: 'smart-healthcare',
      icon: Heart,
      path: 'solutions.smart-healthcare'
    }
  ];

  const handleChatClick = () => {
    window?.voiceflow?.chat?.open()
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-white mb-4">
              {t('banner.title')}
            </h1>
            <p className="text-lg text-white/90">
              {t('banner.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-white border-b ${
        isNavSticky ? 'fixed top-[8px] left-0 right-0 z-50 shadow-md' : ''
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center ${
                  activeSection === solution.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveSection(solution.id)}
              >
                <solution.icon className="w-4 h-4 mr-2" />
                {t(`${solution.path}.title`)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Solutions Content */}
      <div className="container mx-auto px-6 py-12">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className={`mb-16 ${
              activeSection === solution.id ? 'block' : 'hidden'
            }`}
          >
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <div className="flex items-center mb-6">
                <solution.icon className="w-8 h-8 text-blue-600 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t(`${solution.path}.title`)}
                  </h2>
                  <p className="text-gray-600 mt-2">{t(`${solution.path}.description`)}</p>
                </div>
              </div>

              {/* Pain Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {(t(`${solution.path}.painPoints`, { returnObjects: true }) as string[]).map((point: string, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <div className="flex items-center mb-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">{t('common.painPoints')} {index + 1}</h3>
                    </div>
                    <p className="text-gray-600">{point}</p>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {t('common.benefits')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(t(`${solution.path}.benefits`, { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-blue-50 rounded-lg"
                    >
                      <ArrowRight className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-800">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="border-t mt-8 pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {t('common.applications')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {(t(`${solution.path}.applications`, { returnObjects: true }) as string[]).map((app: string, index: number) => (
                    <div
                      key={index}
                      className="p-6 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-medium text-gray-900 mb-2">
                        {app}
                      </h4>
                      <a 
                        className="text-blue-600 hover:text-blue-700 flex items-center text-sm" 
                        href={`${app === 'AI智能客服系统' || app === 'AI Customer Service System' ? 'https://iris.coijing.com' : '/contact'}`} 
                        target={`${app === 'AI智能客服系统' || app === 'AI Customer Service System' ? '_blank' : '_self'}`}
                      >
                        {t('common.learnMore')}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('common.contact.title')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('common.contact.subtitle')}
            </p>
            <button 
              onClick={handleChatClick} 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('common.contact.button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;