import React, { useState } from 'react';
import Card from '@/components/Attendance/card';
import CardHeader from '@/components/Attendance/cardHeader';
import CarouselGroups from '@/components/Attendance/Groups/carouselGroups';
import { MaterialIcons } from '@expo/vector-icons';
import { groups } from '@/data/groups';
import Entypo from '@expo/vector-icons/Entypo';
import DateAndDay from '@/components/Attendance/Date/dateAndDay';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap } from '@/constants/Colors'; 
import { useTranslation } from 'react-i18next';

const NotificationCard: React.FC = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors = themeMap[theme]; // Obtener los colores del tema actual
  const { t } = useTranslation(); //

  return (
    <Card 
      icon={<Entypo name="calendar" size={40} color={Colors.icons.default} />}
      title={t('Fecha_y_dia_de_la_semana')}
      gradientColors={[Colors.card.gradient2, Colors.card.gradient1]}>
      <DateAndDay />
    </Card>
  );
};

export default NotificationCard;



