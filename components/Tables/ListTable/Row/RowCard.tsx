import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import IStudent from '@/interfaces/Students/IStudent';

interface RowCardProps {
  student: IStudent; // Usar la interfaz IStudent
}

const RowCard: React.FC<RowCardProps> = ({ student }) => {
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];

  const styles = createStyles(Colors);

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.cardImage}>
      <Image
    source={
      student.image.startsWith('http')
        ? { uri: student.image } // Imágenes desde URL
        : require('@/assets/images/Students/Student1.png') // Imágenes locales estáticas
    }
    style={styles.image}
    onError={(error) => console.error('Error al cargar la imagen:', error.nativeEvent)}
  />
      </View>

      <View style={styles.cardText}>
        <Text style={styles.titleText}>
          {student.name} {student.lastname}
        </Text>
        {student.grade && <Text style={styles.subtitleText}>Grado: {student.grade}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  cardContainer: {
    width: '48%',
    marginVertical: 10,
    backgroundColor: Colors.background.main,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    overflow: 'hidden',
  },
  cardImage: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.buttons.main,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardText: {
    padding: 16,
    backgroundColor: Colors.background.main,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text.main,
    marginBottom: 4,
  },
  subtitleText: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
});

export default RowCard;