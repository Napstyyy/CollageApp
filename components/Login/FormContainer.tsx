import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputField from '@/components/Login/InputField';
import OptionsContainer from '@/components/Login/OptionsContainer';
import ButtonsContainer from '@/components/Login/ButtonsContainer';
import { useTranslation } from 'react-i18next';

const FormContainer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>{t('Iniciar_Sesion')}</Text>
        <InputField text={t('Usuario')} controller={undefined} />
        <InputField text={t('Contrasena')} controller={undefined} />
        <OptionsContainer/>
        <View style={styles.flexGrowContainer} />
        <ButtonsContainer/>
      </View>
  );
};

const styles = StyleSheet.create({
   formContainer: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 36,
    marginTop: 20,
    flexDirection: 'column',
  },
  flexGrowContainer: {
    flexGrow: 0.6,
  },
  loginTitle: {
    fontSize: 28,
    marginBottom: 20,
  },
});

export default FormContainer;
