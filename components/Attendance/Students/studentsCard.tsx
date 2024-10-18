import React, { useState } from 'react';
import Card from '@/components/Attendance/card';
import CardHeader from '@/components/Attendance/cardHeader';
import CarouselStudents from '@/components/Attendance/Students/carouselStudents';
import { MaterialIcons } from '@expo/vector-icons';
import { groups } from '@/data/groups';
import Entypo from '@expo/vector-icons/Entypo';
import DateAndDay from '@/components/Attendance/Date/dateAndDay';
import Fontisto from '@expo/vector-icons/Fontisto';
import actions from '@/data/actions';
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
      <CarouselStudents students={actions} />
    </Card>
  );
};

export default StudentsCard;



