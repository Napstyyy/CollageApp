import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import IStudent from '@/interfaces/IStudent';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import { useTranslation } from 'react-i18next';
import phoneWindow from '@/constants/Dimensions';

const renderStudentCard: React.FC<IStudent> = ({ name, lastname, image }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const styles = createStyles(Colors);
  const { t } = useTranslation(); // Traducción
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{`${name} ${lastname}`}</Text>
      <Image
          source={require('@/assets/images/Students/Student1.png')}
          style={styles.image}
        />
    </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: Colors.background.main,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  imageContainer: {
    justifyContent: 'center', // Centrar verticalmente
    alignItems: 'center', // Centrar horizontalmente
  },
  image: {
    width: phoneWindow.width * 0.7,
    height: phoneWindow.height * 0.56,
    borderRadius: 8,
  },
});

export default renderStudentCard;
