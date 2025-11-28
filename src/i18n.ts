import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import zh from './locales/zh.json';
import axios from 'axios';

const resources = {
  en: { translation: en },
  zh: { translation: zh }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Initial default, will be updated shortly after app mount
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export const detectLanguageByIP = async () => {
  try {
    // 尝试通过 IP 判断用户位置
    // 注意：免费 API 有频率限制，生产环境建议使用付费服务或后端处理
    const response = await axios.get('https://ipapi.co/json/', { timeout: 5000 });
    const country = response.data.country_code; // e.g., "CN", "HK", "TW", "SG"
    
    const chineseRegions = ['CN', 'HK', 'TW', 'SG', 'MO'];
    
    if (chineseRegions.includes(country)) {
      i18n.changeLanguage('zh');
    }
  } catch (error) {
    // 如果 IP 检测失败（如广告拦截或超时），回退到浏览器语言检测
    const browserLang = navigator.language;
    if (browserLang.toLowerCase().startsWith('zh')) {
      i18n.changeLanguage('zh');
    }
  }
};

export default i18n;

