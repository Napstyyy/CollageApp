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

export default function Attendance() {
  const { theme } = useTheme();
  const Colors = themeMap[theme];
  const styles = createStyles(Colors);

  // Estados para controlar el flujo
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [studentsLoaded, setStudentsLoaded] = useState<boolean>(false);
  const [actionCompleted, setActionCompleted] = useState<boolean>(false);

  return (
    <View style={styles.mainContainer}>
      <Header title="Asistencia" />
      <ScrollView style={styles.body} contentContainerStyle={styles.contentContainer}>
        {/* Tarjetas condicionales */}
        <GroupsCard onSelectGroup={(group) => setSelectedGroup(group)} />
        {selectedGroup && <ActionCard onCompleteAction={() => setActionCompleted(true)} />}
        {selectedGroup && <DateCard onSelectDate={(date) => setSelectedDate(date)} />}
        {/* {selectedGroup &&
          reports.map((report, index) => {
            // Alternar colores de gradiente según índice
            const gradientColors = 
              index % 2 === 0
                ? [Colors.card.gradient1, Colors.card.gradient2]
                : [Colors.card.gradient2, Colors.card.gradient1];

            return (
              <React.Fragment key={index}>
                <ReportsDropdown report={[report]} gradientColors={gradientColors} />
                {index < reports.length - 1 && (
                  <BlankComponent BCwidth={undefined} BCheight={16} />
                )}
              </React.Fragment>
            );
          })}
            */}
        {selectedGroup && <StudentsList />}
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
  });