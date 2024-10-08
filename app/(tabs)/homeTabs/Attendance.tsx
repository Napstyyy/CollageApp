import React from 'react';
import { Text, StyleSheet, View, ViewStyle, ScrollView } from 'react-native';
import Header from '@/components/Home/header';
import GroupsCard from '@/components/Attendance/Groups/groupsCard';
import DateCard from '@/components/Attendance/Date/dateCard';
import ActionCard from '@/components/Attendance/Actions/actionCard';
import { mainBackgroundColor } from '@/constants/Colors';
import StudentsCard from '@/components/Attendance/Students/studentsCard';
import BlankComponent from '@/components/BlankComponent';

export default function Attendance() {

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

// Estilos para el componente
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: mainBackgroundColor,
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