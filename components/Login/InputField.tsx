import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { Colors } from '@/constants/Colors';


interface InputFieldProps {
  text: string;
  controller: any;
}

const InputField: React.FC<InputFieldProps> = ({ text, controller }) => {
  return (
    <TextInput style={styles.input} placeholder={ text } placeholderTextColor={ Colors.inputs.placeholder } />
  );
};

const styles = StyleSheet.create({
    input: {
    height: '12%',
    borderColor: Colors.inputs.main,
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 15,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    fontSize: 16,
  },
});

export default InputField;
