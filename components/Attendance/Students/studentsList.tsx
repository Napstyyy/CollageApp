import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SlideTable from '@/components/Tables/SlideTable/slideTable';
import useStudentsDictionary from '@/data/students';
import renderStudentCard from '@/components/Attendance/Students/renderStudentCard';
import IStudent from '@/interfaces/Students/IStudent';
import RowCard from '@/components/Tables/ListTable/Row/RowCard';

const StudentList: React.FC = () => {
  const StudentsDictionary = useStudentsDictionary();
  const students = Object.values(StudentsDictionary);
  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0); // Índice seleccionad

  // Manejar clic en una tarjeta
  const handleCardPress = (index: number) => {
    setSelectedIndex(index); // Establece el índice seleccionado
    setCarouselVisible(true); // Abre el carrusel
  };

  const handleCloseCarousel = () => {
    setCarouselVisible(false); // Cierra el carrusel
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {students.map((student: IStudent, index: number) => (
        <RowCard 
        key={index} // Clave única para React
        student={student} // Pasar datos del estudiante
        index={index} // Pasar el índice de la tarjeta
        onPress={handleCardPress} // Callback al presionar
      />
      ))}

      {/* SlideTable */}
      <SlideTable
        data={students}
        isVisible={isCarouselVisible}
        onClose={handleCloseCarousel}
        renderCard={renderStudentCard}
        searchKey="name"
        defaultIndex={selectedIndex} // Índice inicial para el carrusel
      />
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

export default StudentList;