import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Switch } from 'react-native';
import InputField from '@/components/Login/InputField';
import RememberMeContainer from '@/components/Login/RememberMeContainer';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import { useTranslation } from 'react-i18next';


const OptionsContainer: React.FC = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const { t } = useTranslation();

  const styles = createStyles(Colors);
  return (
        <View style={styles.optionsContainer}>
          <RememberMeContainer/>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>{t('Olvidaste_tu_contrasena')}</Text>
          </TouchableOpacity>
        </View>
  );
};

const createStyles = (Colors: IColorTheme) =>  StyleSheet.create({
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -16,
  },
  forgotPasswordText: {
    color: Colors.text.options,
    textDecorationLine: 'underline',
  },
});

export default OptionsContainer;
