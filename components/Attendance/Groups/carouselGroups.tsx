import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import { usePagerView } from '@/hooks/usePagerView';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 

interface ButtonGroupProps {
  buttons: string[];
  onSelect: (selected: string) => void;
}

const BUTTONS_PER_PAGE = 4; // Number of buttons per page

const CarouselGroups: React.FC<ButtonGroupProps> = ({ buttons, onSelect }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  const styles = createStyles(Colors);

  const [selectedButton, setSelectedButton] = useState<string | null>(null); // Track selected button

  // Divide the buttons into pages
  const pages = [];
  for (let i = 0; i < buttons.length; i += BUTTONS_PER_PAGE) {
    pages.push(buttons.slice(i, i + BUTTONS_PER_PAGE));
  }

  const { pagerViewRef, pageIndex, setPageIndex, handlePageScroll, extendedPages } = usePagerView(pages);

  const handleButtonPress = (button: string) => {
    setSelectedButton(button); // Actualiza el estado local
    onSelect(button); // Notifica al componente padre
  };

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerViewRef}
        style={styles.pager}
        initialPage={1}
        onPageSelected={(e) => setPageIndex(e.nativeEvent.position)}
        onPageScroll={handlePageScroll}
        orientation="vertical" // Añade esta línea para desplazamiento vertical
      >
        {extendedPages.map((pageButtons, pageIndex) => (
          <View style={styles.page} key={pageIndex}>
            <View style={styles.buttonGroup}>
              {pageButtons.map((button: string, index: number) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.button,
                    selectedButton === button && styles.selectedButton,
                  ]}
                  onPress={() => handleButtonPress(button)}
                >
                  <Text style={[
                    styles.buttonText,
                    selectedButton === button && styles.selectedButtonText,
                  ]}>
                    {button}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </PagerView>
    </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  container: {
    height: 300, // Aumenta la altura para acomodar más botones
  },
  pager: {
    flex: 1,
  },
  page: {
    justifyContent: 'flex-start', // Alinea los botones en la parte superior
    alignItems: 'center',
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'column', // Cambia a columna para disposición vertical
    justifyContent: 'flex-start',
    width: '90%',
    gap: 15, // Espacio entre botones
  },
  button: {
    backgroundColor: Colors.background.main,
    borderRadius: 12,
    width: '100%', // Ocupa todo el ancho disponible
    height: 60, // Altura fija para cada botón
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  selectedButton: {
    backgroundColor: Colors.icons.default, // Change background color when selected
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.icons.default,
  },
  selectedButtonText: {
    color: Colors.background.main, // Change text color when selected
  },
});

export default CarouselGroups;