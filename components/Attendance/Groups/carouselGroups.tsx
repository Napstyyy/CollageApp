import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view';
import { mainBackgroundColor, iconColor } from '@/constants/Colors';

interface ButtonGroupProps {
  buttons: string[];
}

const BUTTONS_PER_PAGE = 3; // Número de botones por página

const CarouselGroups: React.FC<ButtonGroupProps> = ({ buttons }) => {
  // Divide los botones en páginas
  const pages = [];
  for (let i = 0; i < buttons.length; i += BUTTONS_PER_PAGE) {
    pages.push(buttons.slice(i, i + BUTTONS_PER_PAGE));
  }

  // Añadir la primera y la última página para el bucle
  const extendedPages = [
    pages[pages.length - 1], // Última página (para deslizar a la izquierda)
    ...pages,
    pages[0], // Primera página (para deslizar a la derecha)
  ];

  const pagerViewRef = useRef<PagerView>(null);

  return (
    <View style={styles.container}>
      <PagerView
        style={styles.pager}
        initialPage={1} // Comienza en la primera página real
        onPageScroll={(e) => {
          const { offset, position } = e.nativeEvent;
          const pageCount = extendedPages.length;

          // Si se desliza hacia la izquierda y llega a la última página
          if (position === 0 && offset < 0) {
            // Mover a la penúltima página
            setTimeout(() => {
              pagerViewRef.current?.setPage(pageCount - 2);
            }, 0);
          }
          // Si se desliza hacia la derecha y llega a la primera página
          else if (position === pageCount - 1 && offset > 0) {
            // Mover a la segunda página
            setTimeout(() => {
              pagerViewRef.current?.setPage(1);
            }, 0);
          }
        }}
      >
        {extendedPages.map((pageButtons, pageIndex) => (
          <View style={styles.page} key={pageIndex}>
            <View style={styles.buttonGroup}>
              {pageButtons.map((button, index) => (
                <TouchableOpacity key={index} style={styles.button}>
                  <Text style={styles.buttonText}>{button}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
  },
  pager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    backgroundColor: mainBackgroundColor,
    borderRadius: 12,
    width: '28%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: iconColor,
  },
});

export default CarouselGroups;
