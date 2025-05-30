import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/src/i18n/Translations/en.json';
import es from '@/src/i18n/Translations/es.json';
import fr from '@/src/i18n/Translations/fr.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
