import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CheckBox from 'react-native-bouncy-checkbox';
import IStudent from '@/interfaces/Students/IStudent';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import BlankComponent from '@/components/BlankComponent';
import { useAttendanceState } from '@/hooks/context/AttendanceContext';

const renderStudentCard: React.FC<IStudent> = ({ name, lastname, image }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const styles = createStyles(Colors);
  const { t } = useTranslation(); // Traducción

  const { selectedReason } = useAttendanceState();

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{`${name} ${lastname}`}</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/Students/Student1.png')}
          style={styles.image}
        />
      </View>
      <BlankComponent BCwidth={undefined} BCheight={16} />

      {/* Contenedor para "Hola mundo" */}
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>{selectedReason}</Text>
      </View>

      {/* Serie de checkboxes */}
      <View style={styles.checkboxContainer}>
        {[...Array(7)].map((_, index) => (
          <CheckBox
            key={index}
            size={25}
            fillColor={Colors.buttons.main}
            unFillColor="#FFFFFF"
            text={` ${index + 1}`}
            iconStyle={{ borderColor: Colors.buttons.main }}
            textStyle={styles.checkboxText}
            style={styles.checkbox}
          />
        ))}
      </View>
    </View>
  );
};

const createStyles = (Colors: IColorTheme) =>
  StyleSheet.create({
    card: {
      flexGrow: 1,
      padding: 16,
      margin: 8,
      borderRadius: 8,
      backgroundColor: Colors.background.main,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
    },
    image: {
      resizeMode: 'contain',
      width: '100%',
      height: 320,
      borderRadius: 8,
    },
    helloContainer: {
      backgroundColor: Colors.buttons.main,
      borderRadius: 16,
      padding: 12,
      alignItems: 'center',
      marginBottom: 16,
    },
    helloText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    checkboxContainer: {
      marginTop: 8,
    },
    checkbox: {
      marginBottom: 12,
    },
    checkboxText: {
      textDecorationLine: 'none',
      fontSize: 16,
    },
  });

export default renderStudentCard;