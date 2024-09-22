import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Switch } from 'react-native';
import { MainInputColor, OptionsText } from '@/constants/Colors';
import InputField from '@/components/Login/InputField';
import RememberMeContainer from '@/components/Login/RememberMeContainer';

const OptionsContainer: React.FC = () => {
  return (
        <View style={styles.optionsContainer}>
          <RememberMeContainer/>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>¿Olvidó su contraseña?</Text>
          </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -16,
  },
  forgotPasswordText: {
    color: OptionsText,
    textDecorationLine: 'underline',
  },
});

export default OptionsContainer;
