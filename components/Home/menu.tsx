import React from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Feather from "@expo/vector-icons/Feather";
import { iconColor } from '@/constants/Colors';
import useMenu from '@/hooks/useMenu';
import phoneWindow from '@/constants/Dimensions';

const Menu: React.FC = () => {
  const { menuVisible, toggleMenu } = useMenu(); // Supongo que `animatedStyle` es lo que obtienes del hook

  return (
    <>
      <TouchableOpacity onPress={toggleMenu}>
        <Feather name="menu" size={32} color={iconColor} style={styles.icon} />
      </TouchableOpacity>

      {menuVisible && (
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={styles.menuOverlay}>
            
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingTop: '1%',
  },
  menuOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: phoneWindow.width,
    height: phoneWindow.height,
    zIndex: 999,  // Capa por encima de otros componentes
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
});

export default Menu;
