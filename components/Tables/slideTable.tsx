import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Modal, Dimensions, LayoutChangeEvent, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RegisterCard from '@/components/Tables/Register/registerCard';
import Student from '@/interfaces/IStudent';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import phoneWindow from '@/constants/Dimensions';

interface SlideTableProps {
  data: Record<number, Student>;
  isVisible: boolean;
  onClose: () => void;
}

const SlideTable: React.FC<SlideTableProps> = ({ data, isVisible, onClose }) => {
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];
  const styles = createStyles(Colors);

  const entries = Object.entries(data);
  const [dynamicSize, setDynamicSize] = useState({ width: 0, height: 0 });

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setDynamicSize({ width, height });
  }, []);

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Carousel
          width={phoneWindow.width}
          height={phoneWindow.height}
          data={entries}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          renderItem={({ item: [key, student] }) => (
            <View style={styles.cardContainer} key={key}>
              <View style={styles.carouselContainer} onLayout={handleLayout}>
                {/* Botón de cierre */}
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                  <Icon name="close" size={24} color="#fff" />
                </TouchableOpacity>
                <RegisterCard
                  title={`Estudiante: ${student.name} ${student.lastname}`}
                >
                  <Text style={styles.studentName}>{`${student.name} ${student.lastname}`}</Text>
                  <Text style={styles.subtitle}>Detalle del estudiante</Text>
                  <Image
          source={require('@/assets/images/Students/Student1.png')}
          style={styles.image}
        />

                </RegisterCard>
              </View>
            </View>
          )}
          loop={false}
        />
      </View>
    </Modal>
  );
};

const createStyles = (Colors: IColorTheme) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeButton: {
      position: 'absolute',
      top: 20,
      right: 20,
      backgroundColor: Colors.buttons.main,
      borderRadius: 32,
      padding: 8,
      zIndex: 10,
    },
    cardContainer: {
      marginTop: '62%',
    },
    carouselContainer: {
      width: '100%',
      height: phoneWindow.height * 0.6,
      backgroundColor: 'transparent',
    },
    studentName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 14,
      color: '#666',
      marginBottom: 8,
    },
    image: {
      width: '100%',
      height: '80%',
      resizeMode: 'contain',
    },
  });

export default SlideTable;
