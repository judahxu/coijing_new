'use client'
import React, { useState } from 'react';
import {  Database, Bot, BarChart3, Wifi } from 'lucide-react';

interface TechNavProps {
  activeTech: string;
  setActiveTech: React.Dispatch<React.SetStateAction<string>>;
}
// Header Banner Component
const Banner = () => (
  <div className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div className="container mx-auto px-6 h-full flex items-center">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">核心技术能力</h1>
        <p className="text-lg mb-6">融合大语言模型、RPA、IoT与数据分析技术，让智能体具备从理解到执行的全面能力</p>
      </div>
      <div className="hidden md:block w-1/2">
        {/* Placeholder for tech illustration */}
        <div className="w-full h-64 bg-white/10 rounded-lg">
          <img src="/zhinengti1.gif" alt="" className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  </div>
);

// Tech Navigation Component
const TechNav = ({ activeTech, setActiveTech }:TechNavProps) => {
  const techs = [
    { id: 'llm', name: '大语言模型', icon: Bot },
    { id: 'rpa', name: 'RPA自动化', icon: Database },
    { id: 'data', name: '数据分析', icon: BarChart3 },
    { id: 'iot', name: 'IoT集成', icon: Wifi },
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
              <span>{tech.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

interface TechContent1 {
  title: string;
  desc: string;
  features: string[];
  applications: string[];
}

// Tech Content Component
const TechContent = ({ activeTech }: { activeTech: string }) => {
  const content: Record<string, TechContent1> = {
    llm: {
      title: '大语言模型',
      desc: '深度自然语言理解与交互，使智能体能像人类一样沟通并分析复杂信息',
      features: [
        '多轮对话理解',
        '复杂任务规划',
        '知识推理分析',
        '多模态交互'
      ],
      applications: [
        '智能客服系统',
        '内容生成平台',
        '知识问答引擎',
        '决策辅助系统'
      ]
    },
    rpa: {
      title: 'RPA自动化',
      desc: '跨系统、跨流程的自动执行能力，大幅提升运营效率并降低人工成本',
      features: [
        '流程自动化',
        '任务编排',
        '系统集成',
        '异常处理'
      ],
      applications: [
        '业务流程自动化',
        '数据处理自动化',
        '报表自动生成',
        '系统对接集成'
      ]
    },
    data: {
      title: '数据分析',
      desc: '结合大数据与AI预测模型，为决策提供精准洞察和持续优化方案',
      features: [
        '数据挖掘分析',
        '预测性建模',
        '可视化展示',
        '实时监控'
      ],
      applications: [
        '经营决策分析',
        '用户行为分析',
        '风险预警系统',
        '营销策略优化'
      ]
    },
    iot: {
      title: 'IoT集成',
      desc: '智能体可直连多类智能设备，实现软硬件一体化的全场景解决方案',
      features: [
        '设备连接管理',
        '数据采集分析',
        '远程控制',
        '场景联动'
      ],
      applications: [
        '智能家居控制',
        '工业设备监控',
        '环境监测系统',
        '智慧园区管理'
      ]
    }
  };

  const current = content[activeTech];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{current.title}</h2>
        <p className="text-lg text-gray-600 mb-12">{current.desc}</p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">核心能力</h3>
            <ul className="space-y-3">
              {current.features.map((feature:string, index:number) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">应用场景</h3>
            <ul className="space-y-3">
              {current.applications.map((app:string, index:number) => (
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
const TechIntegration = () => (
  <div className="bg-gray-50 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">技术融合优势</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: '技术创新力',
            desc: '以AI+RPA为核心，融合IoT与大数据技术，构建高度集成、模块化的智能体方案'
          },
          {
            title: '全场景覆盖',
            desc: '覆盖多个高潜力行业，从企业管理到设备联动，为多元场景提供完整解决方案'
          },
          {
            title: '商业落地性',
            desc: '成功的标杆案例彰显产品实用价值，快速帮助企业实现数字化转型'
          },
          {
            title: '生态系统建设',
            desc: '与行业领导者合作，构建从数据采集、智能分析到执行优化的闭环生态'
          }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

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