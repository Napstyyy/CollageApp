import React, { useCallback, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';

interface SlideTableCardProps<T> {
  value: T;
  onClose: () => void;
  renderCard: (item: T) => React.ReactNode;
}

const SlideTableCard = <T,>({ value, onClose, renderCard }: SlideTableCardProps<T>) => {
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];
  const styles = createStyles(Colors);
  const [dynamicSize, setDynamicSize] = useState({ width: 0, height: 0 });

  const handleLayout = useCallback((event: any) => {
    const { width, height } = event.nativeEvent.layout;
    setDynamicSize({ width, height });
  }, []);

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.carouselContainer} onLayout={handleLayout}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Icon name="close" size={24} color="#fff" />
        </TouchableOpacity>
        {renderCard(value)}
      </View>
    </TouchableOpacity>
  );
};

const createStyles = (Colors: IColorTheme) =>
  StyleSheet.create({
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
      width: '100%',
      marginTop: -32,
      backgroundColor: 'red',
    },
    carouselContainer: {
      width: '100%',
      backgroundColor: 'red',
    },
  });

export default SlideTableCard;
