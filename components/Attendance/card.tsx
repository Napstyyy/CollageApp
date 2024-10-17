import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import ButtonGroup from '@/components/Attendance/Groups/carouselGroups';
import BlankComponent from '@/components/BlankComponent';

interface CardProps {
  icon: React.ReactNode; // Recibe un componente de ícono
  title: string;         // El título que se mostrará en la tarjeta
  gradientColors: string[]; // Los colores del gradiente
  children: React.ReactNode; // Componente hijo que se pasará desde otra vista
}

const Card: React.FC<CardProps> = ({ icon, title, gradientColors, children }) => {
  return (
    <LinearGradient colors={gradientColors} style={styles.cardContainer}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <BlankComponent BCheight={16} BCwidth={undefined}/>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    borderRadius: 18,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  } as ViewStyle,
  header: {
    flexDirection: 'row', // Para alinear el ícono y el título horizontalmente
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconContainer: {
    backgroundColor: Colors.background.main,
    height: 70,
    width: 70,
    borderRadius: 40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    color: '#fff',
    flex: 1, // Esto permite que el título ocupe todo el espacio restante
    marginLeft: '14%',
  },
});

export default Card;
