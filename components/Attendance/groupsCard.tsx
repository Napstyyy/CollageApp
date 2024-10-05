import React, { useState } from 'react';
import Card from '@/components/Attendance/card';
import CardHeader from '@/components/Attendance/cardHeader';
import ButtonGroup from '@/components/Attendance/buttonGroup';

const NotificationCard: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <Card gradientColors={['#22487A', '#3E84E0']}>
      <CardHeader
        title="Primero A"
        subtitle="¿Enviar notificaciones?"
        toggleEnabled={isEnabled}
        onToggle={toggleSwitch}
      />
      <ButtonGroup buttons={['1A', '1B', '1C']} />
    </Card>
  );
};

export default NotificationCard;
