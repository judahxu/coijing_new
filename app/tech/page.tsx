'use client'
import React, { useState } from 'react';
import { Database, Bot, BarChart3, Wifi } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// 定义翻译内容的类型接口

interface TechNavProps {
  activeTech: string;
  setActiveTech: React.Dispatch<React.SetStateAction<string>>;
}

// Banner Component
const Banner = () => {
  const { t } = useTranslation(['tech']);
  
  return (
    <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            {t('tech:hero.title')}
          </h1>
          <p className="text-lg mb-6">
            {t('tech:hero.description')}
          </p>
        </div>
        <div className="hidden md:block w-1/2">
          <div className="w-full h-64 bg-white/10 rounded-lg">
            <img src="/zhinengti1.gif" alt="" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  );
};

// Tech Navigation Component
const TechNav = ({ activeTech, setActiveTech }: TechNavProps) => {
  const { t } = useTranslation(['tech']);
  const techs = [
    { id: 'llm', icon: Bot },
    { id: 'rpa', icon: Database },
    { id: 'data', icon: BarChart3 },
    { id: 'iot', icon: Wifi },
  ];

  return (
    <div className="sticky top-[60px] bg-white shadow-md z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center py-4">
          {techs.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setActiveTech(tech.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                activeTech === tech.id ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              <tech.icon className="w-5 h-5 mr-2" />
              <span>{t(`tech:techs.${tech.id}.name`)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Tech Content Component
const TechContent = ({ activeTech }: { activeTech: string }) => {
  const { t } = useTranslation(['tech']);

  const features = t(`tech:techs.${activeTech}.features`, { returnObjects: true }) as string[];
  const applications = t(`tech:techs.${activeTech}.applications`, { returnObjects: true }) as string[];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">
          {t(`tech:techs.${activeTech}.title`)}
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          {t(`tech:techs.${activeTech}.desc`)}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{t('tech:common.features')}</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{t('tech:common.applications')}</h3>
            <ul className="space-y-3">
              {applications.map((app, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Tech Integration Component
const TechIntegration = () => {
  const { t } = useTranslation(['tech']);
  const advantages = t('tech:integration.advantages', { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('tech:integration.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Page Component
const TechPage = () => {
  const [activeTech, setActiveTech] = useState('llm');

  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <TechNav activeTech={activeTech} setActiveTech={setActiveTech} />
      <TechContent activeTech={activeTech} />
      <TechIntegration />
    </div>
  );
};

export default TechPage;