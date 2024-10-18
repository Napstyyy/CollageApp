import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { INavigationController } from '@/navigation//interfaces/INavigationController';
import { RootStackParamList } from '@/navigation/routes';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 

interface MainButtonProps {
  text: string;
  controller: INavigationController;
  route: keyof RootStackParamList;
}

const MainButton: React.FC<MainButtonProps> = ({ text, controller, route }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  const styles = createStyles(Colors);
  return (
    <TouchableOpacity style={styles.Button} onPress={() => controller.navigate(route)}>
      <Text style={styles.Text}>{text}</Text>
    </TouchableOpacity>
  );
};

const createStyles = (Colors: IColorTheme) =>  StyleSheet.create({
    Button: {
    backgroundColor: Colors.buttons.main, // Color de fondo del botón,
    borderRadius: 16,
    paddingVertical: '4%',
    paddingHorizontal: '16%',
    width: '90%',
    alignItems: 'center',
  },
  Text: {
    fontSize: 18,
    color: '#FFFFFF', // Texto blanco
    fontWeight: 'bold',
  },
});

export default MainButton;
