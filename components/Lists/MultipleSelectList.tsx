import React, { useState, FC } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';

interface MultipleSelectListProps {
  options: string[];
  selectedValues?: string[];
}

const MultipleSelectList: FC<MultipleSelectListProps> = ({ options, selectedValues = [] }) => {
  const [selected, setSelected] = useState<string[]>(selectedValues);
  const [isModalVisible, setModalVisible] = useState(false);

  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const styles = createStyles(Colors); // Crear estilos usando los colores del tema

  const handleSelect = (value: string) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    setSelected(newSelected);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity style={styles.option} onPress={() => handleSelect(item)}>
      <Text style={selected.includes(item) ? styles.selectedText : styles.optionText}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Dropdown Button */}
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleModal}>
        <Text style={styles.dropdownButtonText}>Seleccione Grupo/s</Text>
      </TouchableOpacity>

      {/* Selected Values */}
      <View style={styles.selectedContainer}>
        {selected.map((value) => (
          <Text key={value} style={styles.selectedValue}>
            {value}
          </Text>
        ))}
      </View>

      {/* Modal for Dropdown */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              renderItem={renderItem}
              keyExtractor={(item) => item}
            />
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  container: {
    width: '100%',
  },
  dropdownButton: {
    padding: 12,
    backgroundColor: Colors.buttons.secondary,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  dropdownButtonText: {
    color: Colors.background.main,
    fontSize: 18,
  },
  selectedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  selectedValue: {
    backgroundColor: Colors.buttons.secondary,
    color: Colors.background.main,
    padding: 5,
    borderRadius: 6,
    marginRight: 5,
    marginBottom: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    maxHeight: '50%',
    backgroundColor: Colors.background.main,
    borderRadius: 8,
    padding: 16,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray.light,
  },
  optionText: {
    fontSize: 16,
    color: Colors.text.main,
  },
  selectedText: {
    fontSize: 16,
    color: Colors.text.options,
  },
  closeButton: {
    padding: 8,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: Colors.buttons.secondary,
    borderRadius: 12,
  },
  closeButtonText: {
    color: Colors.background.main,
    fontSize: 16,
  },
});

export default MultipleSelectList;