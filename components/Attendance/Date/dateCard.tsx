import React, { useState } from 'react';
import Card from '@/components/Attendance/card';
import CardHeader from '@/components/Attendance/cardHeader';
import CarouselGroups from '@/components/Attendance/Groups/carouselGroups';
import { MaterialIcons } from '@expo/vector-icons';
import { iconColor } from '@/constants/Colors';
import { groups } from '@/data/data';
import Entypo from '@expo/vector-icons/Entypo';
import DateAndDay from '@/components/Attendance/Date/dateAndDay';

const NotificationCard: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <Card 
      icon={<Entypo name="calendar" size={40} color={iconColor} />}
      title="Fecha y dia de la semana"
      gradientColors={['#3E84E0', '#22487A']}>
      <DateAndDay />
    </Card>
  );
};

export default NotificationCard;



