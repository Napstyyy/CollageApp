import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({  }) {
  return (
    <View style={styles.container}>
      {/* Contenedor para el botón de "Go Back", el título y la imagen */}
      <View style={styles.header}>
       {/* <TouchableOpacity onPress={() => ()} style={styles.goBackButton}> */}
          <Image source={require('@/assets/icons/goback_icon.png')} style={styles.goBackIcon} />
        {/*</TouchableOpacity>*/}
        <Text style={styles.title}>Collage</Text>
        <Image source={require('@/assets/images/collage-logo.png')} style={styles.logo} />
      </View>
    </View>
  );
}

// Estilos para el HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#37B6E9',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 48,
  },
  goBackButton: {
    marginRight: 8, // Espacio entre la flecha y el título
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  goBackIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  logo: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginLeft: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
