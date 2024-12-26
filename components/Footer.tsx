const Footer = () => (
  <footer className="bg-gray-900">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <span className="text-2xl font-bold text-white">可爱鲸</span>
          <p className="mt-2 text-gray-400">用智能体重塑企业未来</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">联系方式</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a href="mailto:service@coijing.com" className="text-base text-gray-300 hover:text-white">
                service@coijing.com
              </a>
            </li>
            <li>
              <a href="tel:15901117209" className="text-base text-gray-300 hover:text-white">
                15901117209
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">友情链接</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <a href="https://henanduojing.com/" target='_blank' className="text-base text-gray-300 hover:text-white">
              多鲸数据服务
              </a>
            </li>
            <li>
              <a href="https://vchaoxi.com/" target='_blank' className="text-base text-gray-300 hover:text-white">
              微潮汐
              </a>
            </li>
            <li>
              <a href="https://linqugui.com/" target='_blank' className="text-base text-gray-300 hover:text-white">
              邻取智能
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8">
        <p className="text-base text-gray-400 text-center">
          © 2024 可爱鲸. All rights reserved.
          <a href="https://beian.miit.gov.cn/" target='_blank' className="ml-10">备案号：豫ICP备2024076694号</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;