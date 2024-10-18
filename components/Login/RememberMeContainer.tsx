import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Switch } from 'react-native';
import InputField from '@/components/Login/InputField';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 

const RememberMeContainer: React.FC = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  const styles = createStyles(Colors);

    const [rememberMe, setRememberMe] = useState(false);
  return (
          <View style={styles.rememberMeContainer}>
            <Switch 
              value={rememberMe} 
              onValueChange={value => setRememberMe(value)}
              trackColor={{ false: '#E5E5E5', true: '#E5E5E5' }} // Colores para off y on
                thumbColor={rememberMe ? Colors.text.options : '#f4f3f4'} // Color del círculo
            />
            <Text style={styles.rememberMeText}>Recordarme</Text>
          </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: 8,
    color:  Colors.text.options,
  },
});

export default RememberMeContainer;
