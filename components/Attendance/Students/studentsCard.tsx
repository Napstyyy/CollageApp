import React, { useState } from 'react';
import Card from '@/components/Attendance/card';
import CardHeader from '@/components/Attendance/cardHeader';
import CarouselStudents from '@/components/Attendance/Students/carouselStudents';
import { MaterialIcons } from '@expo/vector-icons';
import { iconColor } from '@/constants/Colors';
import { groups } from '@/data/groups';
import Entypo from '@expo/vector-icons/Entypo';
import DateAndDay from '@/components/Attendance/Date/dateAndDay';
import Fontisto from '@expo/vector-icons/Fontisto';
import actions from '@/data/actions';

const StudentsCard: React.FC = () => {

  return (
    <Card 
      icon={<Fontisto name="person" size={40} color={ iconColor } />}
      title="Estudiantes"
      gradientColors={['#3E84E0', '#22487A']}>
      <CarouselStudents students={actions} />
    </Card>
  );
};

export default StudentsCard;



