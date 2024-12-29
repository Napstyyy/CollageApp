import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import IStudent from '@/interfaces/Students/IStudent';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import phoneWindow from '@/constants/Dimensions';
import BlankComponent from '@/components/BlankComponent';
import ReportsDropdown from '@/components/Attendance/Students/reportsDropdown';
import { reports } from '@/data/Reports/reports';

const renderStudentCard: React.FC<IStudent> = ({ name, lastname, image }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const styles = createStyles(Colors);
  const { t } = useTranslation(); // Traducción

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
      {reports.map((report, index) => (
        <React.Fragment key={index}>
          <ReportsDropdown report={[report]} />
          {/* Añade BlankComponent si no es el último elemento */}
          {index < reports.length - 1 && (
            <BlankComponent BCwidth={undefined} BCheight={16} />
          )}
        </React.Fragment>
      ))}
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
  });

export default renderStudentCard;