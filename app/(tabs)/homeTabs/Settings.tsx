import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Header from '@/components/Home/header';
import ColorPicker from '@/components/Pickers/ColorPicker';

export default function Settings() {

  return (
    <>
    <Header title="Configuración"/>
    <Text>Configuración</Text>
    <ColorPicker />
    </>
  );
}

// Estilos para el componente
const styles = StyleSheet.create({
});
