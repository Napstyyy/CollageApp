import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BottomClientsLoginContainer from '@/components/BottomClientsLoginContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { gradientBackgroundColor1, gradientBackgroundColor2 } from '@/constants/Colors';

export default function ClientsLogin() {
  return (
    <View style={styles.container}>
      
        <LinearGradient
        // Background Linear Gradient
        colors={[gradientBackgroundColor1, gradientBackgroundColor2]}
        style={styles.background}
      />
      {/* Título de bienvenida */}
      <Text style={styles.title}>Bienvenido a Collage</Text>

      {/* Imagen de bienvenida */}
      <Image source={require('@/assets/images/collage-logo.png')} style={styles.logo} />

      {/* Contenedor para la lista de clientes y el botón */}
      <BottomClientsLoginContainer/>

    </View>
  );
}

// Estilos para el HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent', // Fondo azul
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '50%',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 60,  // Ajusta este valor para mover el logo hacia abajo
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // Texto blanco
    marginTop: 60,
    marginBottom: 0,
    alignSelf: 'flex-start', // Alinea a la izquierda
    marginLeft: 20, // Añade un margen a la izquierda si es necesario
    width: 120,
  },
});

