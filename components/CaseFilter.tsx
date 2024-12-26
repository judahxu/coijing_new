// import React, { useState, useMemo } from 'react';
// import { Search, Filter, ChevronDown, X } from 'lucide-react';

// // 筛选选项数据
// const FILTER_OPTIONS = {
//   industry: [
//     { id: 'finance', name: '金融行业' },
//     { id: 'retail', name: '零售业' },
//     { id: 'manufacturing', name: '制造业' },
//     { id: 'education', name: '教育行业' },
//     { id: 'healthcare', name: '医疗健康' },
//     { id: 'logistics', name: '物流行业' },
//   ],
//   technology: [
//     { id: 'llm', name: 'LLM' },
//     { id: 'rpa', name: 'RPA' },
//     { id: 'iot', name: 'IoT' },
//     { id: 'data-analysis', name: '数据分析' },
//     { id: 'ai', name: 'AI算法' },
//   ],
//   scenario: [
//     { id: 'customer-service', name: '智能客服' },
//     { id: 'marketing', name: '营销自动化' },
//     { id: 'supply-chain', name: '供应链管理' },
//     { id: 'production', name: '生产管理' },
//     { id: 'education', name: '在线教育' },
//     { id: 'medical', name: '医疗诊断' },
//   ],
// };

// // 筛选下拉组件
// const FilterDropdown = ({ 
//   title, 
//   options, 
//   selected, 
//   onSelect, 
//   isOpen, 
//   onToggle 
// }) => (
//   <div className="relative">
//     <button
//       onClick={onToggle}
//       className={`px-4 py-2 rounded-md flex items-center ${
//         selected.length > 0 
//           ? 'bg-blue-600 text-white' 
//           : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
//       }`}
//     >
//       <span>{title}</span>
//       <ChevronDown className="w-4 h-4 ml-1" />
//       {selected.length > 0 && (
//         <span className="ml-1 px-1.5 py-0.5 text-xs bg-white text-blue-600 rounded-full">
//           {selected.length}
//         </span>
//       )}
//     </button>

//     {isOpen && (
//       <>
//         {/* 遮罩层 */}
//         <div 
//           className="fixed inset-0 z-30"
//           onClick={onToggle}
//         />
        
//         {/* 下拉面板 */}
//         <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-40 p-4">
//           <div className="mb-2 flex items-center justify-between">
//             <span className="font-medium">{title}</span>
//             {selected.length > 0 && (
//               <button
//                 onClick={() => onSelect([])}
//                 className="text-sm text-gray-500 hover:text-gray-700"
//               >
//                 清除
//               </button>
//             )}
//           </div>
//           <div className="max-h-64 overflow-y-auto">
//             {options.map(option => (
//               <label
//                 key={option.id}
//                 className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
//               >
//                 <input
//                   type="checkbox"
//                   checked={selected.includes(option.id)}
//                   onChange={() => {
//                     if (selected.includes(option.id)) {
//                       onSelect(selected.filter(id => id !== option.id));
//                     } else {
//                       onSelect([...selected, option.id]);
//                     }
//                   }}
//                   className="mr-2"
//                 />
//                 <span>{option.name}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       </>
//     )}
//   </div>
// );

// // 已选筛选条件标签
// const FilterTags = ({ filters, removeFilter }) => {
//   if (Object.values(filters).every(arr => arr.length === 0)) return null;

//   const getOptionName = (type, id) => {
//     const option = FILTER_OPTIONS[type].find(opt => opt.id === id);
//     return option ? option.name : id;
//   };

//   return (
//     <div className="flex flex-wrap gap-2 mt-4">
//       {Object.entries(filters).map(([type, selected]) =>
//         selected.map(id => (
//           <span
//             key={`${type}-${id}`}
//             className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm"
//           >
//             {getOptionName(type, id)}
//             <button
//               onClick={() => removeFilter(type, id)}
//               className="ml-1 p-0.5 hover:bg-blue-100 rounded-full"
//             >
//               <X className="w-3 h-3" />
//             </button>
//           </span>
//         ))
//       )}
//     </div>
//   );
// };

// // 主筛选组件
// const CaseFilter = ({ onFiltersChange }) => {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [filters, setFilters] = useState({
//     industry: [],
//     technology: [],
//     scenario: [],
//   });

//   // 更新筛选条件
//   const updateFilters = (type, selected) => {
//     const newFilters = {
//       ...filters,
//       [type]: selected,
//     };
//     setFilters(newFilters);
//     onFiltersChange(newFilters);
//   };

//   // 移除单个筛选条件
//   const removeFilter = (type, id) => {
//     const newFilters = {
//       ...filters,
//       [type]: filters[type].filter(item => item !== id),
//     };
//     setFilters(newFilters);
//     onFiltersChange(newFilters);
//   };

//   return (
//     <div className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex flex-wrap items-center gap-4">
//           <div className="flex items-center">
//             <Filter className="w-5 h-5 text-gray-500 mr-2" />
//             <span className="text-gray-700">筛选：</span>
//           </div>
          
//           <div className="flex flex-wrap gap-2">
//             <FilterDropdown
//               title="行业筛选"
//               options={FILTER_OPTIONS.industry}
//               selected={filters.industry}
//               onSelect={(selected) => updateFilters('industry', selected)}
//               isOpen={openDropdown === 'industry'}
//               onToggle={() => setOpenDropdown(openDropdown === 'industry' ? null : 'industry')}
//             />
//             <FilterDropdown
//               title="技术领域"
//               options={FILTER_OPTIONS.technology}
//               selected={filters.technology}
//               onSelect={(selected) => updateFilters('technology', selected)}
//               isOpen={openDropdown === 'technology'}
//               onToggle={() => setOpenDropdown(openDropdown === 'technology' ? null : 'technology')}
//             />
//             <FilterDropdown
//               title="应用场景"
//               options={FILTER_OPTIONS.scenario}
//               selected={filters.scenario}
//               onSelect={(selected) => updateFilters('scenario', selected)}
//               isOpen={openDropdown === 'scenario'}
//               onToggle={() => setOpenDropdown(openDropdown === 'scenario' ? null : 'scenario')}
//             />
//           </div>

//           <div className="ml-auto relative">
//             <input
//               type="text"
//               placeholder="搜索案例"
//               className="pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-blue-500"
//             />
//             <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
//           </div>
//         </div>

//         <FilterTags 
//           filters={filters}
//           removeFilter={removeFilter}
//         />
//       </div>
//     </div>
//   );
// };

// export default CaseFilter;

export const CaseFilter =() => { 
  return (
    <div>1</div>
  )
 };