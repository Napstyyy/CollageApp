import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainButton from '@/components/MainButton';
import SecondaryButton from '@/components/SecondaryButton';
import { NavigationController } from '@/navigation/controllers/NavigationController';
import { Routes } from '@/navigation/routes';
import { useTranslation } from 'react-i18next';


const ButtonsContainer: React.FC = () => {
  const { t } = useTranslation();
  const navigationController = new NavigationController();
  return (
    <View style={styles.container}>
    <MainButton text={t('Ingresar')} controller={navigationController} route={ Routes.home } />
    <View style={styles.sizebox}></View>
    <SecondaryButton text={t('Solicitar_cupo')} controller={undefined} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  sizebox: {
    height: '12%'
  }
});

export default ButtonsContainer;
