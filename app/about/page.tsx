'use client';
import React, { useState, useEffect } from 'react';
import { Award, Users, Target, Building } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const [activeSection] = useState('company');
  const [isNavSticky, setIsNavSticky] = useState(false);
  const { t } = useTranslation('about');

  const partners: { name: string; logo: string; color: string }[] = [
    {
      name:'河南多鲸信息技术有限公司',
      logo:'/duojing.png',
      color:'cadetblue'
    },
    {
      name:'河南微潮汐信息技术有限公司',
      logo:'/vchaoxi.png',
      color:'beige'
    },
    {
      name:'多鲸资本',
      logo:'/ziben.png',
      color:'white'
    },
    {
      name:'河南邻取智能科技有限公司',
      logo:'/linqugui.png',
      color:'darkseagreen'
    },

  ];  

  // 监听滚动来控制导航栏
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavSticky(scrollPosition > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleChatClick = () => {
    // 检查 voiceflow 对象是否已加载
      window?.voiceflow?.chat?.open()
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-white w-full z-50 ${
        isNavSticky ? 'fixed top-[20px] shadow-md' : ''
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex space-x-8 py-4">
            {Object.entries(t('nav', { returnObjects: true })).map(([key, value]) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  className={`text-gray-600 hover:text-blue-600 ${
                    activeSection === key ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Company Introduction */}
      <section id="company" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="/intro.png"
                alt="Company Overview"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('company.title')}</h2>
              <p className="text-gray-600 mb-6">
                {t('company.description')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{t('company.stats.clients.number')}</div>
                  <div className="text-gray-600">{t('company.stats.clients.label')}</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{t('company.stats.patents.number')}</div>
                  <div className="text-gray-600">{t('company.stats.patents.label')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('vision.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(t('vision.sections', { returnObjects: true })).map(([key, section]) => (
              <div key={key} className="bg-white p-8 rounded-lg shadow-sm">
                {key === 'vision' && <Target className="w-12 h-12 text-blue-600 mb-4" />}
                {key === 'mission' && <Users className="w-12 h-12 text-purple-600 mb-4" />}
                {key === 'values' && <Award className="w-12 h-12 text-teal-600 mb-4" />}
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <p className="text-gray-600">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section id="advantage" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('advantage.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(t('advantage.items', { returnObjects: true })).map(([key, item], index) => (
              <div key={key} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  {index === 0 && <Building className="w-12 h-12 text-blue-600" />}
                  {index === 1 && <Users className="w-12 h-12 text-purple-600" />}
                  {index === 2 && <Target className="w-12 h-12 text-teal-600" />}
                  {index === 3 && <Award className="w-12 h-12 text-orange-600" />}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('nav.partners')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((obj) => (
              <div key={obj.name} className={`p-8 rounded-lg shadow-sm flex items-center justify-center`} style={{'background':obj.color}}>
                <img
                  src={obj.logo}
                  alt={obj.name}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('contact.title')}</h2>
          <p className="mb-8 text-lg">{t('contact.subtitle')}</p>
          <button onClick={handleChatClick} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            {t('contact.button')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;