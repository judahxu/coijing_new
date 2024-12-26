'use client'
import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

// 模拟案例数据
const CASE_DATA = [
  // 1. 智能客户体验案例
  {
    id: 1,
    title: "智能客服系统升级",
    cover: "/bank.png",
    industry: "金融行业",
    technology: ["LLM", "RPA"],
    scenario: "智能客服",
    description: "为某大型银行打造新一代智能客服系统，提供7x24小时全天候服务",
    metrics: "客服效率提升300%，用户满意度提升40%",
    category: "smart-customer"
  },
  {
    id: 2,
    title: "全渠道营销平台",
    cover: "/sale.png",
    industry: "零售业",
    technology: ["数据分析", "AI"],
    scenario: "营销自动化",
    description: "帮助连锁零售企业构建统一的全渠道营销平台",
    metrics: "营销转化率提升50%，客户留存率提升35%",
    category: "smart-customer"
  },
  // 2. 数据驱动决策案例
  {
    id: 3,
    title: "供应链智能优化平台",
    cover: "/cangchu.png",
    industry: "零售连锁",
    technology: ["数据分析", "AI预测"],
    scenario: "供应链管理",
    description: "打造智能化供应链管理系统，实现库存智能预测与补货",
    metrics: "库存周转率提升40%，缺货率降低60%",
    category: "data-driven"
  },
  {
    id: 4,
    title: "生产计划智能调度",
    cover: "/shengchan.png",
    industry: "制造业",
    technology: ["IoT", "AI优化"],
    scenario: "生产管理",
    description: "基于AI的智能生产计划排程系统",
    metrics: "生产效率提升25%，交付准时率提升30%",
    category: "data-driven"
  },
  // 3. 智能物流案例
  {
    id: 5,
    title: "仓储机器人调度系统",
    cover: "/robat.png",
    industry: "物流",
    technology: ["RPA", "IoT"],
    scenario: "仓储管理",
    description: "打造智能化仓储作业系统，实现机器人自动调度",
    metrics: "作业效率提升200%，人力成本降低60%",
    category: "smart-logistics"
  },
  // 4. 智能教育案例
  {
    id: 6,
    title: "个性化学习助手",
    cover: "/study.png",
    industry: "教育",
    technology: ["LLM", "AI"],
    scenario: "个性化教育",
    description: "为K12教育机构打造AI驱动的个性化学习系统",
    metrics: "学习效率提升40%，知识掌握度提升35%",
    category: "smart-education"
  },
  // 5. 智慧生活案例
  {
    id: 7,
    title: "智能家居控制系统",
    cover: "/jiaju.png",
    industry: "地产",
    technology: ["IoT", "AI"],
    scenario: "智慧家居",
    description: "为高端住宅项目打造一体化智能家居解决方案",
    metrics: "能源使用效率提升30%，用户满意度98%",
    category: "smart-life"
  },
  // 6. 智慧医疗案例
  {
    id: 8,
    title: "AI辅助诊断系统",
    cover: "/yiyuan.png",
    industry: "医疗",
    technology: ["LLM", "AI"],
    scenario: "智慧医疗",
    description: "为三甲医院开发AI辅助诊断系统",
    metrics: "诊断准确率提升25%，诊断时间缩短40%",
    category: "smart-healthcare"
  }
];

// 分类数据
const CATEGORIES = [
  { id: 'smart-customer', name: '智能客户体验' },
  { id: 'data-driven', name: '数据驱动决策' },
  { id: 'smart-logistics', name: '智能物流供应链' },
  { id: 'smart-education', name: '智能教育成长' },
  { id: 'smart-life', name: '智慧生活服务' },
  { id: 'smart-healthcare', name: '智慧医疗健康' }
];

const CaseShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  // const [activeFilters, setActiveFilters] = useState({
  //   industry: [],
  //   technology: [],
  //   scenario: []
  // });
  const [searchQuery, setSearchQuery] = useState('');

  // 筛选后的案例数据
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
          caseItem.title.toLowerCase().includes(searchLower) ||
          caseItem.description.toLowerCase().includes(searchLower)
        );
      }

      return true;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner区域 */}
      <div className="relative h-80 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">客户案例展示</h1>
            <p className="text-xl opacity-90">
              探索可爱鲸如何帮助企业实现智能化转型
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
              全部案例
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
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 筛选工具栏 */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* <div className="flex items-center">
              <Filter className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-700">筛选：</span>
            </div> */}
            
            {/* <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100">
                行业筛选
                <ChevronDown className="w-4 h-4 ml-1 inline-block" />
              </button>
              <button className="px-4 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100">
                技术领域
                <ChevronDown className="w-4 h-4 ml-1 inline-block" />
              </button>
              <button className="px-4 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100">
                应用场景
                <ChevronDown className="w-4 h-4 ml-1 inline-block" />
              </button>
            </div> */}

            <div className="ml-auto relative">
              <input
                type="text"
                placeholder="搜索案例"
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
                alt={caseItem.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {caseItem.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 text-sm rounded-full bg-blue-50 text-blue-600">
                    {caseItem.industry}
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
                    {caseItem.scenario}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {caseItem.description}
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  {caseItem.metrics}
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  查看详情 →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 空状态展示 */}
        {filteredCases.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              暂无符合条件的案例，请尝试调整筛选条件
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseShowcase;