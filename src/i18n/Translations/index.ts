import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/src/i18n/Translations/en.json';
import es from '@/src/i18n/Translations/es.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'es', // Idioma a usar si el actual no está disponible
    interpolation: {
      escapeValue: false, // React ya se encarga de la seguridad
    },
  });

export default i18n;
