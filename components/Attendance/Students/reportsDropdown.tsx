import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import IReportItem from '@/interfaces/Students/IReportsItem';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Asegúrate de tener esta librería instalada
import BouncyCheckbox from "react-native-bouncy-checkbox";
import MultiSelect from '@/components/Fields/MultiSelector/MultiSelectDropdown';
import CustomMultiSelect from '@/components/Fields/MultiSelector/MultiSelectDropdown';

interface ReportsDropdownProps {
  items: IReportItem[];
  placeholder?: string;
  onSelectItem: (values: string[]) => void;
}
const ReportsDropdown: React.FC<ReportsDropdownProps> = ({
  items,
  placeholder = 'Select items',
  onSelectItem,
}) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const styles = createStyles(Colors);
  const { t } = useTranslation(); // Traducción

  const itemsm = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango'];
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        fillColor={Colors.buttons.main}
        unFillColor={Colors.background.main}
        iconStyle={{ borderColor: Colors.buttons.main }}
        innerIconStyle={{ borderWidth: 1.6 }}
        onPress={(isChecked: boolean) => { console.log(isChecked); }}
        style={styles.checkbox}
      />
      <CustomMultiSelect/>
    </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  container: {
    height: '16%',
    width: '100%',
    flexDirection: 'row', // Coloca los componentes uno al lado del otro
    alignItems: 'center', // Alinea los elementos verticalmente al centro
    justifyContent: 'space-between', // Espacio entre los elementos
    gap: 16, // Espacio entre los elementos
    padding: 16,
  },
  checkbox: {
    height: '16%',
    width: '8%', // Ajusta el tamaño según lo necesites
  },
});

export default ReportsDropdown;