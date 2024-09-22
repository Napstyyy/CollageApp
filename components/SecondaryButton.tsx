import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SecondaryButtonColor } from '@/constants/Colors';


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
    backgroundColor: SecondaryButtonColor ,
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

export default MainButton;
