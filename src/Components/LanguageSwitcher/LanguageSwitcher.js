import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeDirection = (language) => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'ar';
    i18n.changeLanguage(savedLanguage);
    changeDirection(savedLanguage); // Use changeDirection here

    document.body.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';

    const handleLanguageChange = (language) => {
      changeDirection(language);
      localStorage.setItem('language', language); // Update localStorage when language changes
    };

    i18n.on('languageChanged', handleLanguageChange);

    // Cleanup listener on component unmount
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };

  }, [i18n]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language); 
    changeDirection(language); // Update direction immediately on language change
    document.body.dir = language === 'en' ? 'ltr' : 'rtl';
  };

  return (
    <select
      id={styles.translate}
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}
    >
      <option value="ar">العربية</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSwitcher;