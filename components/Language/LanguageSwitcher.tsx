import React from 'react';
import { Button } from 'react-native';
import i18n from '@/src/i18n/Translations';

const LanguageSwitcher: React.FC = () => {
  const changeToSpanish = () => i18n.changeLanguage('es');
  const changeToEnglish = () => i18n.changeLanguage('en');

  return (
    <>
      <Button title="Switch to English" onPress={changeToEnglish} />
      <Button title="Cambiar a Español" onPress={changeToSpanish} />
    </>
  );
};

export default LanguageSwitcher;
