import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#1F4DAB',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default Card;
