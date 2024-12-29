import React, { useState } from 'react';
  import { StyleSheet, View } from 'react-native';
  import { MultiSelect } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import Asignatures from '@/data/Asignatures/Asignatures';
  import { useTranslation } from 'react-i18next';

  const CustomMultiSelect = () => {
    const [selected, setSelected] = useState<string[]>([]);
    const { t } = useTranslation(); // Traducción

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
              color="black"
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    );
  };

  export default CustomMultiSelect;

  const styles = StyleSheet.create({
    container: { padding: 16,
      width: '80%',
     },
    dropdown: {
      height: 50,
      backgroundColor: 'transparent',
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 14,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    icon: {
      marginRight: 5,
    },
    selectedStyle: {
      borderRadius: 12,
    },
  });