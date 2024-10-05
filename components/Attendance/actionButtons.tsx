import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Iconos

interface Action {
  label: string;
  icon: string;
}

interface ActionButtonsProps {
  actions: Action[];
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ actions }) => {
  return (
    <View style={styles.actionsContainer}>
      {actions.map((action, index) => (
        <TouchableOpacity key={index} style={styles.actionButton}>
          <Icon name={action.icon} size={24} color="#002055" />
          <Text style={styles.actionText}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  actionButton: {
    alignItems: 'center',
    padding: 10,
  },
  actionText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
  },
});

export default ActionButtons;
