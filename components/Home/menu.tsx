import React from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Dimensions } from 'react-native';
import Feather from "@expo/vector-icons/Feather";
import { iconColor } from '@/constants/Colors';
import useMenu from '@/hooks/useMenu';

const { width, height } = Dimensions.get('window');

const Menu: React.FC = () => {
  const { menuVisible, slideAnim, toggleMenu } = useMenu();

  return (
    <>
      <TouchableOpacity onPress={toggleMenu}>
        <Feather name="menu" size={32} color={iconColor} style={styles.icon} />
      </TouchableOpacity>

      <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
        {/* Contenido del menú */}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingTop: '1%',
  },
  menu: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: height,
    width: width * 0.8, // Ancho del menú (80% de la pantalla)
    backgroundColor: 'black', 
    zIndex: 1000,
  },
});

export default Menu;
