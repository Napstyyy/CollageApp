import React from 'react';
import { Text, StyleSheet, View, ViewStyle, ScrollView } from 'react-native';
import Header from '@/components/Home/header';
import GroupsCard from '@/components/Attendance/Groups/groupsCard';
import DateCard from '@/components/Attendance/Date/dateCard';
import ActionCard from '@/components/Attendance/Actions/actionCard';
import StudentsCard from '@/components/Attendance/Students/studentsCard';
import BlankComponent from '@/components/BlankComponent';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 

export default function Attendance() {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  const styles = createStyles(Colors); // Crear estilos usando los colores del tema

  return (
    <View style={styles.mainContainer}>
      <Header title="Asistencia" />
      <ScrollView style={styles.body} contentContainerStyle={styles.contentContainer}>
        <GroupsCard/>
        <DateCard/>
        <ActionCard/>
        <StudentsCard/>
        <BlankComponent BCheight={20} BCwidth={undefined}/>
      </ScrollView>
    </View>
  );
}

// Función para crear estilos dinámicamente
const createStyles = (Colors: IColorTheme) => 
  StyleSheet.create({
    mainContainer: {
      backgroundColor: Colors.background.main,
      flex: 1,
    },
    body: {
      flex: 1,
      padding: 16,
    } as ViewStyle,
    contentContainer: {
      alignItems: 'center',
    } as ViewStyle,
  });