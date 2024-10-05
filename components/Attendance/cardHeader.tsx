import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  toggleEnabled?: boolean;
  onToggle?: () => void;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, subtitle, toggleEnabled, onToggle }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {toggleEnabled !== undefined && (
        <Switch
          value={toggleEnabled}
          onValueChange={onToggle}
          trackColor={{ true: '#00c8ff', false: '#767577' }}
          thumbColor={toggleEnabled ? '#fff' : '#f4f3f4'}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    color: '#fff',
  },
});

export default CardHeader;
