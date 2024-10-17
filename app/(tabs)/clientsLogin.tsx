import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importamos Picker desde @react-native-picker/picker
import BottomClientsLoginContainer from '@/components/BottomClientsLoginContainer';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

export default function ClientsLogin() {
  const [selectedColor, setSelectedColor] = useState('#FFFFFF'); // Estado para el color de la bolita

  // Opciones de colores para el Picker
  const colorOptions = [
    { label: 'Rojo', value: '#FF0000' },
    { label: 'Verde', value: '#00FF00' },
    { label: 'Azul', value: '#0000FF' },
    { label: 'Amarillo', value: '#FFFF00' },
    { label: 'Naranja', value: '#FFA500' },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.background.gradient1, Colors.background.gradient2]}
        style={styles.background}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Bienvenido a Collage</Text>
        <View style={styles.colorPickerContainer}>
          {/* Bolita que cambia de color */}
          <View style={[styles.colorCircle, { backgroundColor: selectedColor }]} />
          {/* Menú desplegable */}
          <Picker
            selectedValue={selectedColor}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedColor(itemValue)}
          >
            {colorOptions.map((option) => (
              <Picker.Item label={option.label} value={option.value} key={option.value} />
            ))}
          </Picker>
        </View>
      </View>
      <Image source={require('@/assets/images/collage-logo.png')} style={styles.logo} />
      <BottomClientsLoginContainer />
    </View>
  );
}

const styles = StyleSheet.create({
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
  colorPickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  picker: {
    height: 50,
    width: 50,
    color: '#FFFFFF',
    backgroundColor: 'white',
  },
});
