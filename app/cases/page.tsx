'use client'
import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type Language = 'zh' | 'en';

type MultiLangContent = {
  [key in Language]: string;
};
// types/case.ts
interface CaseItem {
  id: number;
  title: MultiLangContent,
  cover: string;
  industry: {
    zh: string;
    en: string;
  };
  technology: string[];
  scenario: {
    zh: string;
    en: string;
  };
  description: {
    zh: string;
    en: string;
  };
  metrics: {
    zh: string;
    en: string;
  };
  category: string;
}

// data/cases.ts
const CASE_DATA: CaseItem[] = [
  // 1. 智能客户体验案例
  {
    id: 1,
    title: {
      zh: "智能客服系统升级",
      en: "Intelligent Customer Service System Upgrade"
    },
    cover: "/bank.png",
    industry: {
      zh: "金融行业",
      en: "Financial Industry"
    },
    technology: ["LLM", "RPA"],
    scenario: {
      zh: "智能客服",
      en: "Smart Customer Service"
    },
    description: {
      zh: "为某大型银行打造新一代智能客服系统，提供7x24小时全天候服务",
      en: "Building next-generation intelligent customer service system for a major bank, providing 24/7 service"
    },
    metrics: {
      zh: "客服效率提升300%，用户满意度提升40%",
      en: "Customer service efficiency increased by 300%, user satisfaction improved by 40%"
    },
    category: "smart-customer"
  },
  {
    id: 2,
    title: {
      zh: "全渠道营销平台",
      en: "Omni-channel Marketing Platform"
    },
    cover: "/sale.png",
    industry: {
      zh: "零售业",
      en: "Retail Industry"
    },
    technology: ["数据分析", "AI"],
    scenario: {
      zh: "营销自动化",
      en: "Marketing Automation"
    },
    description: {
      zh: "帮助连锁零售企业构建统一的全渠道营销平台",
      en: "Help retail chains build a unified omni-channel marketing platform"
    },
    metrics: {
      zh: "营销转化率提升50%，客户留存率提升35%",
      en: "Marketing conversion rate increased by 50%, customer retention improved by 35%"
    },
    category: "smart-customer"
  },
  // 2. 数据驱动决策案例
  {
    id: 3,
    title: {
      zh: "供应链智能优化平台",
      en: "Supply Chain Optimization Platform"
    },
    cover: "/cangchu.png",
    industry: {
      zh: "零售连锁",
      en: "Retail Chain"
    },
    technology: ["数据分析", "AI预测"],
    scenario: {
      zh: "供应链管理",
      en: "Supply Chain Management"
    },
    description: {
      zh: "打造智能化供应链管理系统，实现库存智能预测与补货",
      en: "Build intelligent supply chain management system, enabling smart inventory prediction and replenishment"
    },
    metrics: {
      zh: "库存周转率提升40%，缺货率降低60%",
      en: "Inventory turnover increased by 40%, stockout rate reduced by 60%"
    },
    category: "data-driven"
  },
  {
    id: 4,
    title: {
      zh: "生产计划智能调度",
      en: "Intelligent Production Scheduling"
    },
    cover: "/shengchan.png",
    industry: {
      zh: "制造业",
      en: "Manufacturing"
    },
    technology: ["IoT", "AI优化"],
    scenario: {
      zh: "生产管理",
      en: "Production Management"
    },
    description: {
      zh: "基于AI的智能生产计划排程系统，优化生产效率",
      en: "AI-based intelligent production scheduling system for optimizing manufacturing efficiency"
    },
    metrics: {
      zh: "生产效率提升25%，交付准时率提升30%",
      en: "Production efficiency increased by 25%, on-time delivery rate improved by 30%"
    },
    category: "data-driven"
  },
  // 3. 智能物流案例
  {
    id: 5,
    title: {
      zh: "仓储机器人调度系统",
      en: "Warehouse Robot Scheduling System"
    },
    cover: "/robat.png",
    industry: {
      zh: "物流",
      en: "Logistics"
    },
    technology: ["RPA", "IoT"],
    scenario: {
      zh: "仓储管理",
      en: "Warehouse Management"
    },
    description: {
      zh: "打造智能化仓储作业系统，实现机器人自动调度",
      en: "Create intelligent warehouse operation system with automated robot scheduling"
    },
    metrics: {
      zh: "作业效率提升200%，人力成本降低60%",
      en: "Operation efficiency increased by 200%, labor costs reduced by 60%"
    },
    category: "smart-logistics"
  },
  // 4. 智能教育案例
  {
    id: 6,
    title: {
      zh: "个性化学习助手",
      en: "Personalized Learning Assistant"
    },
    cover: "/study.png",
    industry: {
      zh: "教育",
      en: "Education"
    },
    technology: ["LLM", "AI"],
    scenario: {
      zh: "个性化教育",
      en: "Personalized Education"
    },
    description: {
      zh: "为K12教育机构打造AI驱动的个性化学习系统",
      en: "Create AI-driven personalized learning system for K12 education institutions"
    },
    metrics: {
      zh: "学习效率提升40%，知识掌握度提升35%",
      en: "Learning efficiency increased by 40%, knowledge mastery improved by 35%"
    },
    category: "smart-education"
  },
  // 5. 智慧生活案例
  {
    id: 7,
    title: {
      zh: "智能家居控制系统",
      en: "Smart Home Control System"
    },
    cover: "/jiaju.png",
    industry: {
      zh: "地产",
      en: "Real Estate"
    },
    technology: ["IoT", "AI"],
    scenario: {
      zh: "智慧家居",
      en: "Smart Home"
    },
    description: {
      zh: "为高端住宅项目打造一体化智能家居解决方案",
      en: "Develop integrated smart home solutions for high-end residential projects"
    },
    metrics: {
      zh: "能源使用效率提升30%，用户满意度98%",
      en: "Energy efficiency increased by 30%, user satisfaction at 98%"
    },
    category: "smart-life"
  },
  // 6. 智慧医疗案例
  {
    id: 8,
    title: {
      zh: "AI辅助诊断系统",
      en: "AI-Assisted Diagnostic System"
    },
    cover: "/yiyuan.png",
    industry: {
      zh: "医疗",
      en: "Healthcare"
    },
    technology: ["LLM", "AI"],
    scenario: {
      zh: "智慧医疗",
      en: "Smart Healthcare"
    },
    description: {
      zh: "为三甲医院开发AI辅助诊断系统，提高诊断准确率",
      en: "Develop AI-assisted diagnostic system for top-tier hospitals to improve diagnostic accuracy"
    },
    metrics: {
      zh: "诊断准确率提升25%，诊断时间缩短40%",
      en: "Diagnostic accuracy increased by 25%, diagnostic time reduced by 40%"
    },
    category: "smart-healthcare"
  }
];

const CATEGORIES = [
  { id: 'smart-customer', nameKey: 'categories.smart-customer' },
  { id: 'data-driven', nameKey: 'categories.data-driven' },
  { id: 'smart-logistics', nameKey: 'categories.smart-logistics' },
  { id: 'smart-education', nameKey: 'categories.smart-education' },
  { id: 'smart-life', nameKey: 'categories.smart-life' },
  { id: 'smart-healthcare', nameKey: 'categories.smart-healthcare' }
];

const CaseShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { t, i18n } = useTranslation('cases');
  const currentLang = (i18n.language || 'zh').split('-')[0] as Language;

  const filteredCases = useMemo(() => {
    return CASE_DATA.filter(caseItem => {
      // 分类筛选
      if (activeCategory !== 'all' && caseItem.category !== activeCategory) {
        return false;
      }

      // 搜索筛选
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        return (
          caseItem.title[currentLang].toLowerCase().includes(searchLower) ||
          caseItem.description[currentLang].toLowerCase().includes(searchLower)
        );
      }

      return true;
    });
  }, [activeCategory, searchQuery, currentLang]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner区域 */}
      <div className="relative h-80 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{t('pageTitle')}</h1>
            <p className="text-xl opacity-90">
              {t('pageSubtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* 分类导航 */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t('categories.all')}
            </button>
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t(category.nameKey)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 搜索工具栏 */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="ml-auto relative">
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* 案例列表 */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map(caseItem => (
            <div 
              key={caseItem.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={caseItem.cover}
                alt={caseItem.title[currentLang]}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {caseItem.title[currentLang]}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 text-sm rounded-full bg-blue-50 text-blue-600">
                    {caseItem.industry[currentLang]}
                  </span>
                  {caseItem.technology.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-sm rounded-full bg-purple-50 text-purple-600"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="px-2 py-1 text-sm rounded-full bg-green-50 text-green-600">
                    {caseItem.scenario[currentLang]}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {caseItem.description[currentLang]}
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  {caseItem.metrics[currentLang]}
                </div>
                <a 
                  className="text-blue-600 hover:text-blue-700 font-medium" 
                  href={`${caseItem.id == 1?'https://iris.coijing.com':'/contact'}`}  
                  target={`${caseItem.id == 1?'_blank':'_self'}`}
                >
                  {t('viewMore')} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 空状态展示 */}
        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {t('emptyState')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseShowcase;