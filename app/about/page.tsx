'use client';
import React, { useState, useEffect } from 'react';
import { Award, Users, Target, Building } from 'lucide-react';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isNavSticky, setIsNavSticky] = useState(false);
  setActiveSection('company');

  // 监听滚动来控制导航栏
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavSticky(scrollPosition > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            用智能体重塑企业未来
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            可爱鲸致力于构建以智能体为核心的智慧中枢，让企业和个人自然融入智能时代
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-white w-full z-50 ${
        isNavSticky ? 'fixed top-[20px] shadow-md' : ''
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex space-x-8 py-4">
            <li>
              <a
                href="#company"
                className={`text-gray-600 hover:text-blue-600 ${
                  activeSection === 'company' ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                公司简介
              </a>
            </li>
            <li>
              <a
                href="#vision"
                className={`text-gray-600 hover:text-blue-600 ${
                  activeSection === 'vision' ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                愿景使命
              </a>
            </li>
            <li>
              <a
                href="#advantage"
                className={`text-gray-600 hover:text-blue-600 ${
                  activeSection === 'advantage' ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                核心优势
              </a>
            </li>
            <li>
              <a
                href="#partners"
                className={`text-gray-600 hover:text-blue-600 ${
                  activeSection === 'partners' ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                合作伙伴
              </a>
            </li>
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
              <h2 className="text-3xl font-bold mb-6">关于可爱鲸</h2>
              <p className="text-gray-600 mb-6">
                可爱鲸是一家专注于开发智能体（AI Agents）的科技公司，致力于通过融合大语言模型（LLM）、RPA（机器人流程自动化）、IoT（物联网）和大数据分析等前沿技术，为多行业提供全场景智能化解决方案。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600">企业客户</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">技术专利</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">愿景使命</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">愿景</h3>
              <p className="text-gray-600">
                构建以智能体为核心的智慧中枢，让企业和个人自然融入智能时代。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">使命</h3>
              <p className="text-gray-600">
                用智能体重新定义未来生产力。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Award className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">价值观</h3>
              <p className="text-gray-600">
                创新、专业、合作、成长。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section id="advantage" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心优势</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '技术创新力',
                description: '以AI+RPA为核心，融合IoT与大数据技术，构建高度集成、模块化的智能体方案。',
                icon: <Building className="w-12 h-12 text-blue-600" />
              },
              {
                title: '全场景覆盖',
                description: '覆盖多个高潜力行业，从企业管理到设备联动，为多元场景提供完整解决方案。',
                icon: <Users className="w-12 h-12 text-purple-600" />
              },
              {
                title: '商业落地性',
                description: '成功的标杆案例彰显产品实用价值，确保解决方案的实际效果。',
                icon: <Target className="w-12 h-12 text-teal-600" />
              },
              {
                title: '生态系统建设',
                description: '与行业领导者合作，构建从数据采集、智能分析到执行优化的闭环生态。',
                icon: <Award className="w-12 h-12 text-orange-600" />
              }
            ].map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">合作伙伴</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
              <div key={partner} className="bg-white p-8 rounded-lg shadow-sm flex items-center justify-center">
                <img
                  src={`/api/placeholder/120/60`}
                  alt={`Partner ${partner}`}
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
          <h2 className="text-3xl font-bold mb-6">开启智能化升级之旅</h2>
          <p className="mb-8 text-lg">立即与我们取得联系，探讨您的智能化需求</p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            联系我们
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;