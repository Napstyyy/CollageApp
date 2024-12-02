import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Header from '@/components/Home/header';
import ColorPicker from '@/components/Pickers/ColorPicker';
import LanguageSwitcher from '@/components/Language/LanguageSwitcher';

export default function Settings() {

  return (
    <>
    <Header title="Configuración"/>
    <Text>Configuración</Text>
    <ColorPicker />
    <LanguageSwitcher />

    </>
  );
}
 
// Estilos para el componente
const styles = StyleSheet.create({
});
