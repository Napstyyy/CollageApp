import React, { useState } from 'react';
import Card from '@/components/Attendance/card';
import CardHeader from '@/components/Attendance/cardHeader';
import CarouselGroups from '@/components/Attendance/Groups/carouselGroups';
import { MaterialIcons } from '@expo/vector-icons';
import { iconColor } from '@/constants/Colors';
import { groups } from '@/data/data';

const NotificationCard: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <Card 
      icon={<MaterialIcons name="groups" size={40} color={iconColor} />} 
      title="Grupo"
      gradientColors={['#22487A', '#3E84E0']}>
      <CarouselGroups buttons={groups} />
    </Card>
  );
};

export default NotificationCard;
