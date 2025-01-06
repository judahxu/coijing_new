'use client'
import React from 'react';
import { ChevronRight, MessageSquare, Database, Network, Cpu } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useTranslation } from 'react-i18next';

interface SolutionCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const Hero: React.FC<{ onChatClick: () => void }> = ({ onChatClick }) => {
  const { t } = useTranslation('home');
  
  return (
    <div className="relative bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              {t('hero.title.prefix')}{' '}
              <span className="text-blue-600">{t('hero.title.highlight')}</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <button onClick={onChatClick} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  {t('hero.cta')}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-blue-100 rounded-lg overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
                  <img src="/zhinengti.gif" className="w-full h-full object-cover" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionCard = ({ icon: Icon, title, description }: SolutionCardProps) => {
  const { t } = useTranslation('home');
  return (
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href={`${title===t('solutions.cards.customerExperience.title')?'https://iris.coijing.com':'#'}`} 
         target={`${title===t('solutions.cards.customerExperience.title')?'_blank':'_self'}`} 
         className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700">
        {t('solutions.learnMore')}
        <ChevronRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

const Solutions = () => {
  const { t } = useTranslation('home');
  
  const solutions = [
    {
      icon: MessageSquare,
      title: t('solutions.cards.customerExperience.title'),
      description: t('solutions.cards.customerExperience.description')
    },
    {
      icon: Database,
      title: t('solutions.cards.dataDecision.title'),
      description: t('solutions.cards.dataDecision.description')
    },
    {
      icon: Network,
      title: t('solutions.cards.logistics.title'),
      description: t('solutions.cards.logistics.description')
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t('solutions.title')}</h2>
          <p className="mt-4 text-xl text-gray-600">{t('solutions.subtitle')}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TechFeature = ({ icon: Icon, title, description }: SolutionCardProps) => (
  <div className="flex flex-col items-center p-6 text-center">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="h-8 w-8 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TechStack = () => {
  const { t } = useTranslation('home');
  
  const features = [
    {
      icon: MessageSquare,
      title: t('tech.features.llm.title'),
      description: t('tech.features.llm.description')
    },
    {
      icon: Cpu,
      title: t('tech.features.rpa.title'),
      description: t('tech.features.rpa.description')
    },
    {
      icon: Database,
      title: t('tech.features.data.title'),
      description: t('tech.features.data.description')
    },
    {
      icon: Network,
      title: t('tech.features.iot.title'),
      description: t('tech.features.iot.description')
    }
  ];

  return (
    <section id="tech" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t('tech.title')}</h2>
          <p className="mt-4 text-xl text-gray-600">{t('tech.subtitle')}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <TechFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection: React.FC<{ onChatClick: () => void }> = ({ onChatClick }) => {
  const { t } = useTranslation('home');
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t('contact.title')}</h2>
          <p className="mt-4 text-xl text-gray-600">{t('contact.subtitle')}</p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <button onClick={onChatClick} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                {t('contact.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Homepage = () => {
  const handleChatClick = () => {
    // 检查 voiceflow 对象是否已加载
      window?.voiceflow?.chat?.open()
  };
  return (
    <div className="min-h-screen bg-white">
      <Navigation  variant="home" />
      <main>
        <Hero onChatClick={handleChatClick}  /> 
        <Solutions />
        <TechStack />
        <ContactSection onChatClick={handleChatClick}  />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Homepage;