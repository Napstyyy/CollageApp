import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BottomClientsLoginContainer from '@/components/BottomClientsLoginContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import ColorPicker from '@/components/Pickers/ColorPicker';

export default function ClientsLogin() {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors = themeMap[theme]; // Obtener los colores del tema actual
  const styles = createStyles(Colors);
  console.log('Gradient Colors:', Colors.background.gradient1, Colors.background.gradient2, Colors.buttons.main, Colors.buttons.secondary);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background.gradient1, Colors.background.gradient2]}
        style={styles.background}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Bienvenido a Collage</Text>
      <ColorPicker />
      </View>
      <Image source={require('@/assets/images/collage-logo.png')} style={styles.logo} />
      <BottomClientsLoginContainer />
    </View>
  );
}

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '60%',
    backgroundColor: 'transparent',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 60,
    marginBottom: 30,
  },
  header: {
    width: '100%',
    alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 48,
    paddingHorizontal: 20,
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    width: 150,
  },
});
