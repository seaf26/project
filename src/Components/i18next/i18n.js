import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // Load translation using http -> see /public/locales. We will put our translations in json files there.
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en', // Use Arabic as the fallback language
    lng: 'en', // Default language is Arabic
    debug: true,
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },
  });

export default i18n;