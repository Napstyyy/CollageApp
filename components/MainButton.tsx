import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MainButtonColor } from '@/constants/Colors';


interface MainButtonProps {
  text: string;
  controller: any;
}

const MainButton: React.FC<MainButtonProps> = ({ text, controller }) => {
  return (
    <TouchableOpacity style={styles.Button}>
        <Text style={styles.Text}>{ text }</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    Button: {
    backgroundColor: MainButtonColor ,
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 100,
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
