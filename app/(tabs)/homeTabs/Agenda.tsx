import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Header from '@/components/Home/header';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MatrixComponent from '@/components/Tables/Table/Table';
import AppBar from '@/components/Tables/Table/tableAppbar';

export default function Agenda() {

  return (
    <View style={styles.container}>
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Collage</Text>
      <View style={styles.items}>
        <AppBar text="Datos Generales" />
      </View>
      
      <GestureHandlerRootView style={{ flex: 1 }}>
    <MatrixComponent />
  </GestureHandlerRootView>
    </View>
  </View>
  );
}

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
    zIndex: 100,
  },
});
