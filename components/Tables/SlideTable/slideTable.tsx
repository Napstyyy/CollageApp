import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Modal,
  LayoutChangeEvent,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import phoneWindow from '@/constants/Dimensions';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';

interface SlideTableProps<T> {
  data: Record<number, T>;
  isVisible: boolean;
  onClose: () => void;
  renderCard: (item: T) => React.ReactNode;
  searchKey: keyof T;
  defaultIndex?: number; // Índice inicial
}

const SlideTable = <T,>({
  data,
  isVisible,
  onClose,
  renderCard,
  searchKey,
  defaultIndex = 0,
}: SlideTableProps<T>): JSX.Element => {
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];
  const styles = createStyles(Colors);
  const { t } = useTranslation();

  const [dynamicSize, setDynamicSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [searchText, setSearchText] = useState<string>('');
  const [carouselIndex, setCarouselIndex] = useState<number>(defaultIndex); // Usa el defaultIndex
  const [userHasSlid, setUserHasSlid] = useState<boolean>(false);

  // 📌 Asegurar que el índice inicial se ajuste al abrir el modal
  useEffect(() => {
    if (isVisible) {
      setCarouselIndex(defaultIndex);
      setUserHasSlid(false);
    }
  }, [isVisible, defaultIndex]);

  // Calcula las dimensiones dinámicas del carrusel
  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setDynamicSize({ width, height });
  }, []);

  // Filtra los datos según el texto de búsqueda
  const filteredEntries = Object.entries(data).filter(([_, value]) =>
    String(value[searchKey]).toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (text: string): void => {
    setSearchText(text);
    setUserHasSlid(false);
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.mainContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder={t('Buscar')}
              placeholderTextColor="#999"
              value={searchText}
              onChangeText={handleSearchChange}
            />
          </View>
          <Carousel
            width={phoneWindow.width}
            data={filteredEntries}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            renderItem={({ item: [key, value] }) => (
              <View style={styles.cardContainer} key={key}>
                <View style={styles.scrollWrapper}>
                  <ScrollView
                    style={styles.carouselContainer}
                    contentContainerStyle={styles.scrollContent}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                  >
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                      <Icon name="close" size={24} color="#fff" />
                    </TouchableOpacity>
                    {renderCard(value)}
                  </ScrollView>
                </View>
              </View>
            )}
            loop={false}
            onSnapToItem={(index: number): void => {
              setCarouselIndex(index);
              setUserHasSlid(true);
            }}
            defaultIndex={carouselIndex} // Usa el índice correcto
          />
        </View>
      </View>
    </Modal>
  );
};

const createStyles = (Colors: IColorTheme) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop: phoneWindow.height * 0.32,
    },
    mainContainer: {
      width: '100%',
      height: '100%',
    },
    searchContainer: {
      width: '90%',
      alignSelf: 'center',
    },
    searchInput: {
      backgroundColor: Colors.background.main,
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
      marginBottom: -phoneWindow.height * 0.012,
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
      flex: 1,
      width: '100%',
    },
    scrollWrapper: {
      flex: 1,
      width: '100%',
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: Colors.background.main,
    },
    carouselContainer: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    scrollContent: {
      flexGrow: 1,
      paddingBottom: 20,
    },
  });

export default SlideTable;