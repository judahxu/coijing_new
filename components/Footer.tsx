'use client';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold text-white">{t('title')}</span>
            <p className="mt-2 text-gray-400">{t('slogan')}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {t('contact.title')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href={`mailto:${t('contact.email')}`} 
                  className="text-base text-gray-300 hover:text-white"
                >
                  {t('contact.email')}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${t('contact.phone')}`} 
                  className="text-base text-gray-300 hover:text-white"
                >
                  {t('contact.phone')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {t('links.title')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a 
                  href="https://henanduojing.com/" 
                  target='_blank' 
                  className="text-base text-gray-300 hover:text-white"
                >
                  {t('links.duojing')}
                </a>
              </li>
              <li>
                <a 
                  href="https://vchaoxi.com/" 
                  target='_blank' 
                  className="text-base text-gray-300 hover:text-white"
                >
                  {t('links.vchaoxi')}
                </a>
              </li>
              <li>
                <a 
                  href="https://linqugui.com/" 
                  target='_blank' 
                  className="text-base text-gray-300 hover:text-white"
                >
                  {t('links.linqugui')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            {t('copyright')}
            <a 
              href="https://beian.miit.gov.cn/" 
              target='_blank' 
              className="ml-10"
            >
              {t('beian')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;