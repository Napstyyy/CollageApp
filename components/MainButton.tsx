import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { INavigationController } from '@/navigation//interfaces/INavigationController';
import { Colors } from '@/constants/Colors';
import { RootStackParamList } from '@/navigation/routes';

interface MainButtonProps {
  text: string;
  controller: INavigationController;
  route: keyof RootStackParamList;
}

const MainButton: React.FC<MainButtonProps> = ({ text, controller, route }) => {
  return (
    <TouchableOpacity style={styles.Button} onPress={() => controller.navigate(route)}>
      <Text style={styles.Text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
