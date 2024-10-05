import React from 'react';
import Card from '@/components/Attendance/card';
import CardHeader from '@/components/Attendance/cardHeader';
import ActionButtons from '@/components/Attendance/actionButtons';

const ActionCard: React.FC = () => {
  const actions = [
    { label: 'Mis Registros', icon: 'list' },
    { label: 'Informe', icon: 'bar-chart' },
    { label: 'Consolidado', icon: 'table' },
  ];

  return (
    <Card gradientColors={['#22487A', '#3E84E0']}>
      <CardHeader title="Acciones" />
      <ActionButtons actions={actions} />
    </Card>
  );
};

export default ActionCard;
