import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';


interface SecondaryButtonProps {
  text: string;
  controller: any;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, controller }) => {
  return (
    <TouchableOpacity style={styles.Button}>
        <Text style={styles.Text}>{ text }</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    Button: {
    backgroundColor: Colors.buttons.secondary, // Color de fondo del botón,
    borderRadius: 16,
    paddingVertical: '4%',
    paddingHorizontal: '4%',
    width: '70%',
    height: 'auto',
    alignItems: 'center',
  },
  Text: {
    fontSize: 16,
    color: '#FFFFFF', // Texto blanco
    fontWeight: 'bold',
  },
});

export default SecondaryButton;
