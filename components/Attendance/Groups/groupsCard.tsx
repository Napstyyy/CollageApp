import React, { useState } from 'react';
import Card from '@/components/Attendance/card';
import CardHeader from '@/components/Attendance/cardHeader';
import CarouselGroups from '@/components/Attendance/Groups/carouselGroups';
import { MaterialIcons } from '@expo/vector-icons';
import { groups } from '@/data/groups';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap } from '@/constants/Colors'; 

const NotificationCard: React.FC = () => {
  const { theme } = useTheme(); // Obtener el tema actual
const Colors = themeMap[theme]; // Obtener los colores del tema actual

  return (
    <Card 
      icon={<MaterialIcons name="groups" size={40} color={Colors.icons.default} />} 
      title="Grupo"
      gradientColors={[Colors.card.gradient1, Colors.card.gradient2]}>
      <CarouselGroups buttons={groups} />
    </Card>
  );
};

export default NotificationCard;
