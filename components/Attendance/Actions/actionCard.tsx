import React, { useState } from 'react';
import Card from '@/components/Attendance/card';
import CardHeader from '@/components/Attendance/cardHeader';
import CarouselActions from '@/components/Attendance/Actions/carouselActions';
import Entypo from '@expo/vector-icons/Entypo';
import { iconColor } from '@/constants/Colors';
import ActionsDictionary from '@/data/actions';
import { groups } from '@/data/groups';

const ActionCard: React.FC = () => {
  return (
    <Card 
      icon={<Entypo name="tools" size={40} color={iconColor} />} 
      title="Acciones"
      gradientColors={['#22487A', '#3E84E0']}>
      <CarouselActions actions={ActionsDictionary} />
    </Card>
  );
};

export default ActionCard;
