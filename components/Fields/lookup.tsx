import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import ITeacher from '@/interfaces/ITeacher'; // Asegúrate de importar la interfaz ITeacher

// Definimos las propiedades del componente, donde 'data' es el diccionario de profesores
interface LookupFieldProps {
  data: { [key: string]: ITeacher };
  option: string;
}

const LookupField: React.FC<LookupFieldProps> = ({ data, option }) => {
  // Convertimos el diccionario en un array de objetos con label (nombre completo) y value (ID)
  const teacherOptions = Object.keys(data).map((key) => ({
    label: `${data[key].name} ${data[key].lastName}`,
    value: key, // ID del profesor
  }));

  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const styles = createStyles(Colors); // Crear estilos usando los colores del tema

  return (
    <SelectDropdown
      data={teacherOptions} // Usamos el array de objetos
      onSelect={(selectedItem, index) => {
        // selectedItem es un objeto con label y value
        console.log(`Nombre: ${selectedItem.label}, ID: ${selectedItem.value}`);
      }}
      renderButton={(selectedItem) => (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {selectedItem ? selectedItem.label : `Seleccione un ${option}`}
          </Text>
        </View>
      )}
      renderItem={(item, index, isSelected) => (
        <View
          style={{
            ...styles.dropdownItemStyle,
            ...(isSelected && { backgroundColor: Colors.gray.light }),
          }}
        >
          <Text style={styles.dropdownItemTxtStyle}>{item.label}</Text>
        </View>
      )}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  dropdownButtonStyle: {
    width: '100%',
    height: '12%',
    backgroundColor: Colors.gray.light,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: Colors.text.main,
  },
  dropdownMenuStyle: {
    backgroundColor: Colors.gray.light,
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: Colors.text.main,
  },
});

export default LookupField;