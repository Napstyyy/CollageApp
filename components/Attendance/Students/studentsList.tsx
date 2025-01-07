import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import RowCard from '@/components/Tables/ListTable/Row/RowCard';
import useStudentsDictionary from '@/data/students';
import IStudent from '@/interfaces/Students/IStudent'; // Importa la interfaz del estudiante

const StudentsList: React.FC = () => {
  const StudentsDictionary = useStudentsDictionary(); // Obtener el diccionario de estudiantes

  // Convertimos el diccionario en un array para iterar
  const students = Object.values(StudentsDictionary);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {students.map((student: IStudent, index: number) => (
        <RowCard key={index} student={student} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Filas horizontales
    flexWrap: 'wrap', // Salto de línea cuando no hay espacio
    justifyContent: 'space-between', // Espacio entre las tarjetas
    padding: 16,
  },
});

export default StudentsList;