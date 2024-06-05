import * as React from 'react';
import {I18nManager} from 'react-native';
import en from './locales/en.json';
import zh from './locales/zh.json';

const locales = {
  en,
  zh,
};

const getTranslations = () => {
  const locale = I18nManager.isRTL ? 'ar' : 'en';
  return locales[locale];
};

const translations = getTranslations();

const translate = key => translations[key];

export default translate;
