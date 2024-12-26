import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 

interface InputFieldProps extends TextInputProps {
  text: string; // Etiqueta o placeholder para el campo
}

const InputField: React.FC<InputFieldProps> = ({ text, ...props }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  const styles = createStyles(Colors);
  
  return (
    <TextInput
      style={styles.input}
      placeholder={text}
      placeholderTextColor={Colors.inputs.placeholder}
      {...props} // Permite pasar propiedades adicionales como `value`, `onChangeText`, etc.
    />
  );
};

const createStyles = (Colors: IColorTheme) =>
  StyleSheet.create({
    input: {
      height: 50, // Ajusta el tamaño a algo más universal
      borderColor: Colors.gray.normal,
      borderWidth: 1,
      borderRadius: 16,
      marginBottom: 15,
      paddingHorizontal: 16,
      backgroundColor: 'transparent',
      fontSize: 16,
    },
  });

export default InputField;
