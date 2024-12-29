import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CustomMultiSelect from '@/components/Fields/MultiSelector/MultiSelectDropdown';

interface ReportsDropdownProps {
  report: string[];
}

const ReportsDropdown: React.FC<ReportsDropdownProps> = ({
  report
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
      {/* Primera fila: Checkbox y Texto */}
      <View style={styles.row}>
        <BouncyCheckbox
          isChecked={isChecked}
          size={20}
          fillColor={Colors.buttons.main}
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
    </TouchableOpacity>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
    padding: 16,
    backgroundColor: Colors.background.main,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
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
    color: Colors.text.main,
  },
});

export default ReportsDropdown;
