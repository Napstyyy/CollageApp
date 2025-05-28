import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SlideTable from '@/components/Tables/SlideTable/slideTable';
import useStudentsDictionary from '@/data/students';
import renderStudentCard from '@/components/Attendance/Students/renderStudentCard';
import RowCard from '@/components/Tables/ListTable/Row/RowCard';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap } from '@/constants/Colors';

type Props = {
  selectedGroup: string;
};

const StudentList: React.FC<Props> = ({ selectedGroup }) => {
  const { theme } = useTheme();
  const Colors = themeMap[theme];
  const departmentEmployees = useStudentsDictionary();
  const [isCarouselVisible, setCarouselVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Convertir el diccionario de departamentos a un array plano de empleados
  const getAllEmployees = () => {
    const groupData = departmentEmployees[selectedGroup];
    if (!groupData) return [];

    return Object.entries(groupData).map(([id, emp]) => ({
      ...emp,
      id,
    }));
  };

  // Manejar clic en una tarjeta
  const handleCardPress = (index: number) => {
    setSelectedIndex(index);
    setCarouselVisible(true);
  };

  const handleCloseCarousel = () => {
    setCarouselVisible(false);
  };

  const styles = createStyles(Colors);
  const employees = getAllEmployees();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Lista de empleados */}
      {employees.map((employee, index) => (
        <RowCard 
          key={employee.id}
          student={employee}
          index={index}
          onPress={handleCardPress}
        />
      ))}

      {/* SlideTable para el carrusel */}
      <SlideTable
        data={employees}
        isVisible={isCarouselVisible}
        onClose={handleCloseCarousel}
        renderCard={renderStudentCard}
        searchKey="name"
        defaultIndex={selectedIndex}
      />
    </ScrollView>
  );
};

const createStyles = (Colors) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default StudentList;