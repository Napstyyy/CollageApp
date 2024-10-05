import React, { ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CardProps {
  children: ReactNode;
  gradientColors: string[]; // Los colores del gradiente
}

const Card: React.FC<CardProps> = ({ children, gradientColors }) => {
  return (
    <LinearGradient colors={gradientColors} style={styles.cardContainer}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  } as ViewStyle,
});

export default Card;
