import { useState, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const useMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(width)).current;  // Inicializado fuera de pantalla

  const toggleMenu = () => {
    const newVisibility = !menuVisible;
    setMenuVisible(newVisibility);

    Animated.timing(slideAnim, {
      toValue: newVisibility ? width * 0.2 : width,  // Desliza el menú visible o lo oculta
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return { menuVisible, slideAnim, toggleMenu };
};

export default useMenu;
