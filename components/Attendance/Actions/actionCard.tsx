import React, { useState } from 'react';
import Card from '@/components/Attendance/card';
import CardHeader from '@/components/Attendance/cardHeader';
import CarouselActions from '@/components/Attendance/Actions/carouselActions';
import Entypo from '@expo/vector-icons/Entypo';
import useActionsDictionary from '@/data/actions';
import { groups } from '@/data/groups';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap } from '@/constants/Colors'; 
import { useTranslation } from 'react-i18next';

const ActionCard: React.FC = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors = themeMap[theme]; // Obtener los colores del tema actual
  const { t } = useTranslation(); // Traducción

  return (
    <Card 
      icon={<Entypo name="tools" size={40} color={Colors.icons.default} />} 
      title={t('Acciones')}
      gradientColors={[Colors.card.gradient1, Colors.card.gradient2]}>
      <CarouselActions actions={useActionsDictionary()} />
    </Card>
  );
};

export default ActionCard;
