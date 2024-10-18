import React, { useState } from 'react';
import Card from '@/components/Attendance/card';
import CarouselStudents from '@/components/Attendance/Students/carouselStudents';
import Fontisto from '@expo/vector-icons/Fontisto';
import useActionsDictionary from '@/data/actions';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 

const StudentsCard: React.FC = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  return (
    <Card 
      icon={<Fontisto name="person" size={40} color={ Colors.icons.default } />}
      title="Estudiantes"
      gradientColors={[Colors.card.gradient2, Colors.card.gradient1]}>
      <CarouselStudents students={useActionsDictionary()} />
    </Card>
  );
};

export default StudentsCard;



