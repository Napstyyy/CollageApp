import React from 'react';
import { StyleSheet, View, Text, ViewStyle, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BlankComponent from '@/components/BlankComponent';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';

interface CardProps {
  icon: React.ReactNode; // Recibe un componente de ícono
  title: string;         // El título que se mostrará en la tarjeta
  gradientColors: string[]; // Los colores del gradiente
  children?: React.ReactNode; // Componente hijo que se pasará desde otra vista
  isTouchable?: boolean; // Si la tarjeta es presionable
  onPress?: () => void;  // Acción al presionar (si es touchable)
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  gradientColors,
  children,
  isTouchable = false,
  onPress,
}) => {
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];

  const styles = createStyles(Colors);

  return isTouchable ? (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.cardContainer} // Este estilo aplica los bordes redondeados
    >
      <LinearGradient colors={gradientColors} style={styles.gradientContainer}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>{icon}</View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <BlankComponent BCheight={16} BCwidth={undefined} />
        {children}
      </LinearGradient>
    </TouchableOpacity>
  ) : (
    <View style={styles.cardContainer}>
      <LinearGradient colors={gradientColors} style={styles.gradientContainer}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>{icon}</View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <BlankComponent BCheight={16} BCwidth={undefined} />
        {children}
      </LinearGradient>
    </View>
  );
};

const createStyles = (Colors: IColorTheme) =>
  StyleSheet.create({
    cardContainer: {
      width: '100%',
      borderRadius: 18,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
      overflow: 'hidden', // Este asegura que los bordes redondeados se apliquen correctamente
    },
    gradientContainer: {
      borderRadius: 18,
      padding: 20,
    },
    header: {
      flexDirection: 'row',
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
      flex: 1,
      marginLeft: '14%',
    },
  });

export default Card;


