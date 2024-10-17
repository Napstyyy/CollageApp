import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FormContainer from '@/components/Login/FormContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import { NavigationController } from '@/navigation/controllers/NavigationController';

export default function Login() {
  const navigationController = new NavigationController();

  return (
    <View style={styles.container}>
    <LinearGradient
        // Background Linear Gradient
        colors={[Colors.background.gradient1, Colors.background.gradient2]}
        style={styles.background}
      />
      {/* Contenedor para el botón de "Go Back", el título y la imagen */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigationController.goBack()} style={styles.goBackButton}>
          <Image source={require('@/assets/icons/goback_icon.png')} style={styles.goBackIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Collage</Text>
        <Image source={require('@/assets/images/collage-logo.png')} style={styles.logo} />
      </View>

      {/* Logo principal */}
      <Image source={require('@/assets/images/collage-logo.png')} style={styles.mainLogo} />

      {/* Contenedor de formulario */}
      <FormContainer/>
    </View>
  );
}

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37B6E9',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '50%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 48,
    paddingHorizontal: 20,
  },
  goBackButton: {
    marginRight: 8,
  },
  goBackIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 8,
  },
  mainLogo: {
    width: '80%',
    height: '20%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: '8%',
  },
});
