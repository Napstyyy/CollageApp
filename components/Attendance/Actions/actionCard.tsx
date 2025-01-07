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

const ActionCard: React.FC<{ onCompleteAction: () => void }> = ({ onCompleteAction }) => {
  const { theme } = useTheme();
  const Colors = themeMap[theme];
  const { t } = useTranslation();

  const handleActionComplete = () => {
    onCompleteAction(); // Notifica al componente principal
  };

  return (
    <Card
      icon={<Entypo name="tools" size={40} color={Colors.icons.default} />}
      title={t('Acciones')}
      gradientColors={[Colors.card.gradient1, Colors.card.gradient2]}
    >
      <CarouselActions actions={useActionsDictionary()} onActionComplete={handleActionComplete} />
    </Card>
  );
};

export default ActionCard;
