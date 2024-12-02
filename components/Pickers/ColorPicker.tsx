import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '@/hooks/context/ThemeContext';
import { useTranslation } from 'react-i18next';

const ColorPicker: React.FC = () => {
  const { theme, setThemeColor } = useTheme();
  const [selectedColor, setSelectedColor] = useState(theme); // Inicializa con el tema actual
  const { t } = useTranslation();

  // Opciones de colores para el Picker
  const colorOptions = [
    { label: t('Rojo'), value: 'red' },
    { label: t('Verde'), value: 'green' },
    { label: t('Azul'), value: 'blue' },
    { label: t('Amarillo'), value: 'yellow' },
    { label: t('Naranja'), value: 'orange' },
  ];

  // Actualiza el tema cuando el color seleccionado cambia
  useEffect(() => {
    setThemeColor(selectedColor);
  }, [selectedColor, setThemeColor]);

  return (
    <View style={styles.colorPickerContainer}>
      <View style={[styles.colorCircle, { backgroundColor: selectedColor }]} />
      <Picker
        selectedValue={selectedColor}
        style={styles.picker}
        dropdownIconColor="#FFFFFF"
        onValueChange={(itemValue) => setSelectedColor(itemValue)}
      >
        {colorOptions.map((option) => (
          <Picker.Item label={option.label} value={option.value} key={option.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: 36,
    width: 36,
    color: '#FFFFFF',
  },
});

export default ColorPicker;