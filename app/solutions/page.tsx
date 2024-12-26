'use client'
import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Users, BarChart3, Truck, GraduationCap, Home, Heart } from 'lucide-react';

const SolutionPage = () => {
  const [activeSection, setActiveSection] = useState('smart-customer');
  const [isNavSticky, setIsNavSticky] = useState(false);

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
      title: '智能客户体验',
      description: '打造个性化、全渠道的客户服务与营销体验，优化客户旅程与满意度。',
      painPoints: [
        '客户服务响应慢',
        '个性化程度低',
        '服务体验不连贯'
      ],
      benefits: [
        '智能客服24/7响应',
        '千人千面的个性化服务',
        '全渠道一致的服务体验'
      ],
      applications: [
        'AI智能客服系统',
        '个性化推荐引擎',
        '客户生命周期管理平台'
      ]
    },
    {
      id: 'data-driven',
      icon: BarChart3,
      title: '数据驱动决策',
      description: '利用AI分析与预测，提供实时洞察与优化建议，提升决策的科学性与准确性。',
      painPoints: [
        '决策效率低',
        '数据分析不及时',
        '预测准确度低'
      ],
      benefits: [
        '数据实时分析',
        '智能决策支持',
        '精准预测分析'
      ],
      applications: [
        '实时数据监控平台',
        '智能生产计划系统',
        '市场趋势预测工具'
      ]
    },
    {
      id: 'smart-logistics',
      icon: Truck,
      title: '智能物流与供应链',
      description: '优化物流调度、库存管理及供应链全链条的智能化升级，降低运营成本。',
      painPoints: [
        '库存管理效率低',
        '物流成本高',
        '供应链协同困难'
      ],
      benefits: [
        '智能库存优化',
        '物流成本降低',
        '供应链可视化'
      ],
      applications: [
        '智能库存管理系统',
        '运输路径优化助手',
        '供应链协同平台'
      ]
    },
    {
      id: 'smart-education',
      icon: GraduationCap,
      title: '智能教育与成长助手',
      description: '提供以AI智能体为核心的解决方案，聚焦个性化学习、教育规划和能力提升。',
      painPoints: [
        '教育资源分配不均',
        '学习效果难评估',
        '个性化教育难实现'
      ],
      benefits: [
        '个性化学习路径',
        '实时学习评估',
        '智能教育规划'
      ],
      applications: [
        '智能学习助手',
        '家庭教育智能顾问',
        '智能考试备考助手'
      ]
    },
    {
      id: 'smart-life',
      icon: Home,
      title: '智慧生活与家庭服务',
      description: '将智能体能力延伸至日常生活场景，为家庭与个人用户提供便利、舒适和安全的智能体验。',
      painPoints: [
        '生活场景割裂',
        '设备管理复杂',
        '服务体验不连贯'
      ],
      benefits: [
        '一站式生活服务',
        '智能家居联动',
        '便捷生活体验'
      ],
      applications: [
        '智能语音助手',
        '家居设备控制平台',
        '健康监控与管理助手'
      ]
    },
    {
      id: 'smart-healthcare',
      icon: Heart,
      title: '智慧医疗与健康管理',
      description: '在医疗与健康领域提供智能诊断、远程医疗与健康数据管理服务，提升医疗质量与效率。',
      painPoints: [
        '就医流程繁琐',
        '医疗资源紧张',
        '健康管理不连续'
      ],
      benefits: [
        'AI辅助诊断',
        '远程医疗服务',
        '健康数据管理'
      ],
      applications: [
        'AI健康问诊助手',
        '医疗影像智能分析工具',
        '智能随访与健康数据分析平台'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-white mb-4">
              解决方案
            </h1>
            <p className="text-lg text-white/90">
              融合AI与自动化技术，为企业和个人用户提供全方位智能解决方案
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
                {solution.title}
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
                    {solution.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{solution.description}</p>
                </div>
              </div>

              {/* Pain Points */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {solution.painPoints.map((point, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg"
                  >
                    <div className="flex items-center mb-2">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">痛点 {index + 1}</h3>
                    </div>
                    <p className="text-gray-600">{point}</p>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  解决方案优势
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {solution.benefits.map((benefit, index) => (
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
                  应用场景
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {solution.applications.map((app, index) => (
                    <div
                      key={index}
                      className="p-6 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-medium text-gray-900 mb-2">
                        {app}
                      </h4>
                      <button className="text-blue-600 hover:text-blue-700 flex items-center text-sm">
                        了解更多
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
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
              需要更多信息？
            </h2>
            <p className="text-gray-600 mb-6">
              我们的解决方案专家随时为您提供专业咨询服务
            </p>
            <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              立即咨询
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;