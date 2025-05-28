import React, { useState } from 'react';
import { Text, StyleSheet, View, ViewStyle, ScrollView } from 'react-native';
import Header from '@/components/Home/header';
import GroupsCard from '@/components/Attendance/Groups/groupsCard';
import DateCard from '@/components/Attendance/Date/dateCard';
import ActionCard from '@/components/Attendance/Actions/actionCard';
import StudentsCard from '@/components/Attendance/Students/studentsCard';
import BlankComponent from '@/components/BlankComponent';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import RowCard from '@/components/Tables/ListTable/Row/RowCard';
import useStudentsDictionary from '@/data/students';
import StudentsList from '@/components/Attendance/Students/studentsList';
import { reports } from '@/data/Reports/reports';
import ReportsDropdown from '@/components/Attendance/Students/reportsDropdown';
import { useTranslation } from 'react-i18next';

export default function Attendance() {
  const { theme } = useTheme();
  const Colors = themeMap[theme];
  const styles = createStyles(Colors);

  // Estados para controlar el flujo
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [studentsLoaded, setStudentsLoaded] = useState<boolean>(false);
  const [actionCompleted, setActionCompleted] = useState<boolean>(false);
  const { t } = useTranslation();

  return (
    <View style={styles.mainContainer}>
      <Header title={t("verSeleccionados")} />
      <ScrollView 
        style={styles.body} 
        contentContainerStyle={styles.contentContainer}
      >
        {/* Tarjetas en disposición vertical */}
        <View style={styles.cardsContainer}>
          <GroupsCard onSelectGroup={(group) => setSelectedGroup(group)} />
          {selectedGroup && <StudentsList selectedGroup={selectedGroup} />}
        </View>
        <BlankComponent BCheight={20} BCwidth={undefined} />
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
    cardsContainer: {
      width: '100%',
      flexDirection: 'column', // Esto es vertical por defecto
      gap: 16, // Espacio entre cartas
    } as ViewStyle,
  });