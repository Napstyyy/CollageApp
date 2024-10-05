import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonGroupProps {
  buttons: string[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  return (
    <View style={styles.buttonGroup}>
      {buttons.map((button, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Text style={styles.buttonText}>{button}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    width: 80,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ButtonGroup;
