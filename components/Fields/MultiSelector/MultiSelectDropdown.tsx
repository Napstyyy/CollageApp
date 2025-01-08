import React, { useState } from 'react';
  import { StyleSheet, View } from 'react-native';
  import { MultiSelect } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import Asignatures from '@/data/Asignatures/Asignatures';
  import { useTranslation } from 'react-i18next';
  import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';

  const CustomMultiSelect: React.FC = () => {
    const [selected, setSelected] = useState<string[]>([]);
    const { t } = useTranslation(); // Traducción
      const { theme } = useTheme();
      const Colors: IColorTheme = themeMap[theme];
      const styles = createStyles(Colors);

    return (
      <View style={styles.container}>
        <MultiSelect
          visibleSelectedItem={true}
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedStyle={styles.selectedStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          iconColor={Colors.background.main}
          search
          data={Asignatures}
          labelField="label"
          valueField="value"
          placeholder={t('Seleccione_asignatura')}
          searchPlaceholder={t('Buscar')}
          value={selected}
          onChange={item => {
            setSelected(item);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    );
  };

  export default CustomMultiSelect;

  const createStyles = (Colors: IColorTheme) => StyleSheet.create({
    container: { padding: 16,
      width: '80%',
     },
    dropdown: {
      height: 50,
      backgroundColor: 'transparent',
      borderBottomColor: Colors.background.main,
      borderBottomWidth: 0.5,
    },
    placeholderStyle: {
      fontSize: 16,
      color: Colors.background.main,
    },
    selectedTextStyle: {
      fontSize: 14,
      color: Colors.background.main,
    },
    iconStyle: {
      width: 20,
      height: 20,
      color: Colors.background.main,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      color: Colors.background.main,
    },
    icon: {
      marginRight: 5,
      color: Colors.background.main,
    },
    selectedStyle: {
      borderRadius: 12,
      color: Colors.background.main,
    },
  });
