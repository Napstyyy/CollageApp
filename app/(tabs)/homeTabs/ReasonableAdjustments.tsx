import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Header from '@/components/Home/header';
import RABody from '@/components/ReasonableAdjustments.tsx/body';
import { useTranslation } from 'react-i18next';

export default function ReasonableAdjustments() {
  const { t } = useTranslation();
  return (
    <>
    <Header title={t('crear_area')}/>
    <RABody/>
    </>
  );
}

// Estilos para el componente
const styles = StyleSheet.create({
});
