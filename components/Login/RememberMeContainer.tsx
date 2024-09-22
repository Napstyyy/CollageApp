import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Switch } from 'react-native';
import { MainInputColor, OptionsText } from '@/constants/Colors';
import InputField from '@/components/Login/InputField';

const RememberMeContainer: React.FC = () => {
    const [rememberMe, setRememberMe] = useState(false);
  return (
          <View style={styles.rememberMeContainer}>
            <Switch 
              value={rememberMe} 
              onValueChange={value => setRememberMe(value)}
              trackColor={{ false: '#E5E5E5', true: '#E5E5E5' }} // Colores para off y on
                thumbColor={rememberMe ? OptionsText : '#f4f3f4'} // Color del círculo
            />
            <Text style={styles.rememberMeText}>Recordarme</Text>
          </View>
  );
};

const styles = StyleSheet.create({
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginLeft: 8,
    color: OptionsText,
  },
});

export default RememberMeContainer;
