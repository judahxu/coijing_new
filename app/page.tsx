import React from 'react';
import { ChevronRight, MessageSquare, Database, Network, Cpu } from 'lucide-react';
import Navigation from '@/components/Navigation';
interface SolutionCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
// const Header = () => (
//   <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex justify-between items-center h-16">
//         <div className="flex items-center">
//           <span className="text-2xl font-bold text-blue-600">可爱鲸</span>
//         </div>
//         <nav className="hidden md:flex space-x-8">
//           <a href="/solutions" className="text-gray-700 hover:text-blue-600">解决方案</a>
//           <a href="/tech" className="text-gray-700 hover:text-blue-600">技术能力</a>
//           <a href="/cases" className="text-gray-700 hover:text-blue-600">案例展示</a>
//           <a href="/about" className="text-gray-700 hover:text-blue-600">关于我们</a>
//           <a href="/contact" className="text-gray-700 hover:text-blue-600">联系我们</a>
//         </nav>
//       </div>
//     </div>
//   </header>
// );

const Hero = () => (
  <div className="relative bg-white pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            用智能体重塑
            <span className="text-blue-600">企业未来</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl">
            致力于构建以智能体为核心的智慧中枢，让企业和个人自然融入智能时代。
          </p>
          <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                开始咨询
              </a>
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

const SolutionCard = ({ icon: Icon, title, description }: SolutionCardProps) => (
  <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <a href={`${title=='智能客户体验'?'https://iris.coijing.com':'#'}`} target={`${title=='智能客户体验'?'_blank':'_self'}`} className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700">
      了解更多
      <ChevronRight className="ml-1 h-4 w-4" />
    </a>
  </div>
);

const Solutions = () => (
  <section id="solutions" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">解决方案</h2>
        <p className="mt-4 text-xl text-gray-600">为多行业提供全场景智能化解决方案</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <SolutionCard
          icon={MessageSquare}
          title="智能客户体验"
          description="打造个性化、全渠道的客户服务与营销体验，优化客户旅程与满意度。"
        />
        <SolutionCard
          icon={Database}
          title="数据驱动决策"
          description="利用AI分析与预测，提供实时洞察与优化建议，提升决策的科学性与准确性。"
        />
        <SolutionCard
          icon={Network}
          title="智能物流供应链"
          description="优化物流调度、库存管理及供应链全链条的智能化升级，降低运营成本。"
        />
      </div>
    </div>
  </section>
);

const TechFeature = ({ icon: Icon, title, description }: SolutionCardProps) => (
  <div className="flex flex-col items-center p-6 text-center">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="h-8 w-8 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TechStack = () => (
  <section id="tech" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">核心技术能力</h2>
        <p className="mt-4 text-xl text-gray-600">融合前沿技术，打造智能化解决方案</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <TechFeature
          icon={MessageSquare}
          title="大语言模型"
          description="深度自然语言理解与交互，使智能体能像人类一样沟通并分析复杂信息。"
        />
        <TechFeature
          icon={Cpu}
          title="RPA自动化"
          description="跨系统、跨流程的自动执行能力，大幅提升运营效率并降低人工成本。"
        />
        <TechFeature
          icon={Database}
          title="数据驱动优化"
          description="结合大数据与AI预测模型，为决策提供精准洞察和持续优化方案。"
        />
        <TechFeature
          icon={Network}
          title="物联网集成"
          description="智能体可直连多类智能设备，实现软硬件一体化的全场景解决方案。"
        />
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">联系我们</h2>
        <p className="mt-4 text-xl text-gray-600">期待与您的合作</p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              立即联系
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// const Footer = () => (
//   <footer className="bg-gray-900">
//     <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div>
//           <span className="text-2xl font-bold text-white">可爱鲸</span>
//           <p className="mt-2 text-gray-400">用智能体重塑企业未来</p>
//         </div>
//         <div>
//           <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">联系方式</h3>
//           <ul className="mt-4 space-y-4">
//             <li>
//               <a href="mailto:service@coijing.com" className="text-base text-gray-300 hover:text-white">
//                 service@coijing.com
//               </a>
//             </li>
//             <li>
//               <a href="tel:15901117209" className="text-base text-gray-300 hover:text-white">
//                 15901117209
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">友情链接</h3>
//           <ul className="mt-4 space-y-4">
//             <li>
//               <a href="https://henanduojing.com/" target='_blank' className="text-base text-gray-300 hover:text-white">
//               多鲸数据服务
//               </a>
//             </li>
//             <li>
//               <a href="https://vchaoxi.com/" target='_blank' className="text-base text-gray-300 hover:text-white">
//               微潮汐
//               </a>
//             </li>
//             <li>
//               <a href="https://linqugui.com/" target='_blank' className="text-base text-gray-300 hover:text-white">
//               邻取智能
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="mt-8 border-t border-gray-700 pt-8">
//         <p className="text-base text-gray-400 text-center">
//           © 2024 可爱鲸. All rights reserved.
//           <a href="https://beian.miit.gov.cn/" target='_blank' className="ml-10">备案号：豫ICP备2024076694号</a>
//         </p>
//       </div>
//     </div>
//   </footer>
// );

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation  variant="home" />
      <main>
        <Hero /> 
        <Solutions />
        <TechStack />
        <ContactSection />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Homepage;