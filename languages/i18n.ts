import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import spanish from "./spanish.json";
import catalan from "./catalan.json";

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'ca',
    fallbackLng: 'ca',
    resources: {
      es: spanish,
      ca: catalan
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
