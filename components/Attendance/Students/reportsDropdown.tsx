import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CustomMultiSelect from '@/components/Fields/MultiSelector/MultiSelectDropdown';
import { LinearGradient } from 'expo-linear-gradient';

interface ReportsDropdownProps {
  report: string[];
  gradientColors: string[]; // Los colores del gradiente
}

const ReportsDropdown: React.FC<ReportsDropdownProps> = ({
  report,
  gradientColors,
}) => {
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];
  const styles = createStyles(Colors);

  // Estado para manejar el estado del checkbox
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsChecked((prev) => !prev)}
      activeOpacity={0.8}
    >
      <LinearGradient colors={gradientColors} style={styles.gradientContainer}>
      {/* Primera fila: Checkbox y Texto */}
      <View style={styles.row}>
        <BouncyCheckbox
          isChecked={isChecked}
          size={20}
          fillColor={Colors.background.secondary}
          unFillColor={Colors.background.main}
          iconStyle={{ borderColor: Colors.buttons.main }}
          innerIconStyle={{ borderWidth: 1.6 }}
          onPress={() => setIsChecked((prev) => !prev)} // Sincroniza con el estado global
          style={styles.checkbox}
        />
        <Text style={styles.text}>{report}</Text>
      </View>

      {/* Segunda fila: CustomMultiSelect */}
      <View style={styles.row}>
        <CustomMultiSelect />
      </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: Colors.background.main,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  gradientContainer: {
    borderRadius: 18,
    padding: 20,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
  },
  checkbox: {
    marginRight: 8, // Espacio entre el checkbox y el texto
  },
  text: {
    fontSize: 16,
    color: Colors.background.main,
  },
});

export default ReportsDropdown;
