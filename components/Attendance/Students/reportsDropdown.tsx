import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import IReportItem from '@/interfaces/Students/IReportsItem';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Asegúrate de tener esta librería instalada

interface ReportsDropdownProps {
  items: IReportItem[];
  placeholder?: string;
  onSelectItem: (value: string) => void;
}

const ReportsDropdown: React.FC<ReportsDropdownProps> = ({
  items,
  placeholder = 'Select an item',
  onSelectItem,
}) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const styles = createStyles(Colors);
  const { t } = useTranslation(); // Traducción

  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: Colors.buttons.main }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={items}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          onSelectItem(item.value);
          setIsFocus(false);
        }}
        renderRightIcon={() => (
          <Icon 
            name="arrow-drop-down" 
            size={24} 
            color={isFocus ? Colors.buttons.main : Colors.buttons.secondary} 
          />
        )}
      />
    </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: Colors.buttons.main,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.buttons.main,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.buttons.main,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default ReportsDropdown;