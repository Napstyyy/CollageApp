import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface DropdownItemProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label, isSelected, onPress }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={[styles.text, isSelected && styles.selectedText]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
  selectedText: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default DropdownItem;