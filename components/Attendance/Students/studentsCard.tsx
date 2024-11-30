import React from 'react';
import { Text } from 'react-native';
import Card from '@/components/Attendance/card';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import SlideTable from '@/components/Tables/slideTable';
import { useSlideTable } from '@/hooks/tables/SlideTable';

const StudentsCard: React.FC = () => {
  // Hook para controlar la visibilidad del SlideTable
  const { isVisible, openSlideTable, closeSlideTable } = useSlideTable();

  // Hook de tema para manejar los colores dinámicos
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];

  // Datos dinámicos para las diapositivas
  const slides = [
    { id: '1', title: 'Estudiante 1', content: <Text>Detalles del Estudiante 1</Text> },
    { id: '2', title: 'Estudiante 2', content: <Text>Detalles del Estudiante 2</Text> },
    { id: '3', title: 'Estudiante 3', content: <Text>Detalles del Estudiante 3</Text> },
  ];

  return (
    <>
      {/* Tarjeta para abrir el SlideTable */}
      <Card
        icon={<Fontisto name="person" size={40} color={Colors.icons.default} />}
        title="Estudiantes"
        gradientColors={[Colors.card.gradient2, Colors.card.gradient1]}
        isTouchable={true}
        onPress={openSlideTable} // Abre el carrusel al tocar la tarjeta
      />

      {/* Componente SlideTable con los datos dinámicos */}
      <SlideTable
        isVisible={isVisible}
        onClose={closeSlideTable}
        slides={slides} // Pasa los datos al carrusel
      />
    </>
  );
};

export default StudentsCard;
