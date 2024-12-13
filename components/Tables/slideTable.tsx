import React, { useState, useCallback, useEffect } from 'react';
import { View, TextInput, StyleSheet, Modal, LayoutChangeEvent, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import phoneWindow from '@/constants/Dimensions';
import { useTranslation } from 'react-i18next';

interface SlideTableProps<T> {
  data: Record<number, T>;
  isVisible: boolean;
  onClose: () => void;
  renderCard: (item: T) => React.ReactNode;
  searchKey: keyof T; // Clave para buscar en los datos
}

const SlideTable = <T,>({ data, isVisible, onClose, renderCard, searchKey }: SlideTableProps<T>) => {
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];
  const styles = createStyles(Colors);
  const { t } = useTranslation();
  const [dynamicSize, setDynamicSize] = useState({ width: 0, height: 0 });
  const [searchText, setSearchText] = useState('');
  const [carouselIndex, setCarouselIndex] = useState(0); // Estado para el índice del carrusel
  const [userHasSlid, setUserHasSlid] = useState(false); // Rastrea si el usuario interactuó con el carrusel

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setDynamicSize({ width, height });
  }, []);

  // Filtrar datos según el texto de búsqueda
  const entries = Object.entries(data).filter(([_, value]) =>
    String(value[searchKey]).toLowerCase().includes(searchText.toLowerCase())
  );

  // Resetea el índice si cambia drásticamente la búsqueda o se limpia
  useEffect(() => {
    if (!userHasSlid) {
      setCarouselIndex(0);
    }
  }, [entries, userHasSlid]);

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    setUserHasSlid(false); // Reinicia interacción con el carrusel si el usuario busca algo nuevo
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
          height={phoneWindow.height}
          data={entries}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          renderItem={({ item: [key, value] }) => (
            <View style={styles.cardContainer} key={key}>
              <View style={styles.carouselContainer} onLayout={handleLayout}>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                  <Icon name="close" size={24} color="#fff" />
                </TouchableOpacity>
                {renderCard(value)}
              </View>
            </View>
          )}
          loop={false}
          onSnapToItem={(index) => {
            setCarouselIndex(index); // Actualiza el índice actual del carrusel
            setUserHasSlid(true); // Marca que el usuario interactuó con el carrusel
          }}
          defaultIndex={carouselIndex} // Mantiene el índice actual del carrusel
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
      justifyContent: 'flex-end', // Alinea todo el contenido al fondo
      alignItems: 'center',
    },
    mainContainer: {
      width: '100%',
      height: '80%',
    },
    searchContainer: {
      width: '90%',
      alignSelf: 'center',
      marginTop: 64,
    },
    searchInput: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
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
      width: '100%',
      marginTop: -32,
    },
    carouselContainer: {
      width: '100%',
      backgroundColor: 'transparent',
    },
  });


export default SlideTable;
