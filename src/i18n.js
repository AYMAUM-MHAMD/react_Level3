import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arabic from "./languages/ar.json";
import english from "./languages/en.json";
import french from "./languages/fr.json";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: english,
  },
  ar: {
    translation: arabic,
  },
  fr: {
    translation: french,
  },
};

i18n.use(LanguageDetector)
.use(initReactI18next).init({
  resources,
  detection:{
    order: ['localStorage', 'htmlTag'],
    caches: ['localStorage'],
  },

  interpolation: {
    escapeValue: false,
  },

  react:{
    useSuspense: false,
  }
});

export default i18n;
