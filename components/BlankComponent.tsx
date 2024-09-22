import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

// Necesito que parametrices el width del siguiente componente para que cuando sea llamado le pase el width por parametro

interface BlankComponentProps {
  BCwidth: ViewStyle['width']; // Define el tipo de prop para el ancho
  BCheight: ViewStyle['height'];
}

const BlankComponent: React.FC<BlankComponentProps> = ({ BCwidth, BCheight }) => {
  return (
    <View style={[styles.blankComponent, { width: BCwidth, height: BCheight }]} />
  );
};

const styles = StyleSheet.create({
  blankComponent: {
    backgroundColor: 'transparent', // Color de fondo transparente
  },
});

export default BlankComponent;