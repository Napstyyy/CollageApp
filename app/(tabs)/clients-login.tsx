import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ClientList from '@/components/ClientList';
import MainButton from '@/components/MainButton';

export default function ClientsLogin() {
  return (
    <View style={styles.container}>

      {/* Título de bienvenida */}
      <Text style={styles.title}>Bienvenido a Collage</Text>

      {/* Imagen de bienvenida */}
      <Image source={require('@/assets/images/collage-logo.png')} style={styles.logo} />

      {/* Contenedor para la lista de clientes y el botón */}
      <View style={styles.bottomContainer}>
        <ClientList />
      <View style={styles.buttonContainer}>
        <MainButton text={'Ingresar'} controller={undefined} />
        </View>
      </View>

    </View>
  );
}

// Estilos para el HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#37B6E9', // Fondo azul
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
    marginTop: 48,
    marginBottom: 0,
    alignSelf: 'flex-start', // Alinea a la izquierda
    marginLeft: 20, // Añade un margen a la izquierda si es necesario
    width: 120,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%', // Para que el contenedor ocupe el ancho completo
  },
  buttonContainer: {
    backgroundColor: '#222224',
    width: '100%',
    height: 100, // Altura fija para el contenedor
    alignItems: 'center',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center', // Alinea verticalmente en el centro
  },
});

