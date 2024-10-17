import React, { useState } from 'react';
import Card from '@/components/Attendance/card';
import CardHeader from '@/components/Attendance/cardHeader';
import CarouselGroups from '@/components/Attendance/Groups/carouselGroups';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { groups } from '@/data/groups';
import Entypo from '@expo/vector-icons/Entypo';
import DateAndDay from '@/components/Attendance/Date/dateAndDay';

const NotificationCard: React.FC = () => {

  return (
    <Card 
      icon={<Entypo name="calendar" size={40} color={Colors.icons.default} />}
      title="Fecha y dia de la semana"
      gradientColors={['#3E84E0', '#22487A']}>
      <DateAndDay />
    </Card>
  );
};

export default NotificationCard;



