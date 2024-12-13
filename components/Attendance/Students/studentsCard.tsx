import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '@/components/Attendance/card';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import SlideTable from '@/components/Tables/slideTable';
import useStudentsDictionary from '@/data/students';
import { useTranslation } from 'react-i18next';
import renderStudentCard from '@/components/Attendance/Students/renderStudentCard';

const StudentsCard: React.FC = () => {
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];
  const { t } = useTranslation();

  const [isCarouselVisible, setCarouselVisible] = useState(false);

  const studentsDictionary = useStudentsDictionary();

  return (
    <>
      <Card
        icon={<Fontisto name="person" size={40} color={Colors.icons.default} />}
        title={t('Estudiantes')}
        gradientColors={[Colors.card.gradient2, Colors.card.gradient1]}
        isTouchable
        onPress={() => setCarouselVisible(true)}
      />

      <SlideTable
        data={studentsDictionary}
        isVisible={isCarouselVisible}
        onClose={() => setCarouselVisible(false)}
        renderCard={renderStudentCard}
        searchKey="name"
      />
    </>
  );
};

export default StudentsCard;
