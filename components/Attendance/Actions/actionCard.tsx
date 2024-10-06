import React, { useState } from 'react';
import Card from '@/components/Attendance/card';
import CardHeader from '@/components/Attendance/cardHeader';
import CarouselGroups from '@/components/Attendance/Groups/carouselGroups';
import Entypo from '@expo/vector-icons/Entypo';
import { iconColor } from '@/constants/Colors';
import { groups } from '@/data/data';

const ActionCard: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <Card 
      icon={<Entypo name="tools" size={40} color={iconColor} />} 
      title="Acciones"
      gradientColors={['#22487A', '#3E84E0']}>
      <CarouselGroups buttons={groups} />
    </Card>
  );
};

export default ActionCard;
