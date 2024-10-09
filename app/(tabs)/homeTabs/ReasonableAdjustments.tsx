import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Header from '@/components/Home/header';
import RABody from '@/components/ReasonableAdjustments.tsx/body';

export default function ReasonableAdjustments() {

  return (
    <>
    <Header title="Ajustes R."/>
    <RABody/>
    </>
  );
}

// Estilos para el componente
const styles = StyleSheet.create({
});
