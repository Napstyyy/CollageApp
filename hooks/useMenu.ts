import { useState, useRef } from 'react';
import { Animated } from 'react-native';
import phoneWindow from '@/constants/Dimensions';

interface UseMenuReturn {
  menuVisible: boolean;
  slideAnim: Animated.Value;
  toggleMenu: () => void;
}

const useMenu = (): UseMenuReturn => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const slideAnim = useRef<Animated.Value>(new Animated.Value(phoneWindow.width)).current;  // Inicializado fuera de pantalla

  // Métodos "privados" no accesibles fuera del hook
  const openMenu = (): void => {
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = (): void => {
    setMenuVisible(false);
    Animated.timing(slideAnim, {
      toValue: phoneWindow.width,  // Oculta el menú
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Método público para alternar el menú
  const toggleMenu = (): void => {
    if (!menuVisible) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  // Solo retornamos lo que debe ser accesible desde fuera
  return { menuVisible, slideAnim, toggleMenu };
};

export default useMenu;
