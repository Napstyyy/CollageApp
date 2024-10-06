import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Header from '@/components/Home/header';
import GroupsCard from '@/components/Attendance/Groups/groupsCard';
import DateCard from '@/components/Attendance/Date/dateCard';
import ActionCard from '@/components/Attendance/Actions/actionCard';
import { mainBackgroundColor } from '@/constants/Colors';

export default function Attendance() {

  return (
    <View style={styles.mainContainer}>
    <Header title="Asistencia" />
    <View style={styles.body}>
    <GroupsCard/>
    <DateCard/>
    <ActionCard/>
    </View>
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
    alignItems: 'center',
    padding: 16,
  },
});
