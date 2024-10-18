import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 


interface InputFieldProps {
  text: string;
  controller: any;
}

const InputField: React.FC<InputFieldProps> = ({ text, controller }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  const styles = createStyles(Colors);
  return (
    <TextInput style={styles.input} placeholder={ text } placeholderTextColor={ Colors.inputs.placeholder } />
  );
};

const createStyles = (Colors: IColorTheme) =>  StyleSheet.create({
    input: {
    height: '12%',
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
