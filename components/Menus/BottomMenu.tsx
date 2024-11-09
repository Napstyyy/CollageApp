import React, { ReactNode } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import { useTheme } from '@/hooks/context/ThemeContext';
import phoneWindow from '@/constants/Dimensions';

interface BottomMenuProps {
  isVisible: boolean;
  onClose: (event?: GestureResponderEvent) => void;
  children: ReactNode;
}

const BottomMenu: React.FC<BottomMenuProps> = ({ isVisible, onClose, children }) => {
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];
  const styles = createStyles(Colors);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        {/* El área completa de fondo oscuro que cierra el menú al tocar */}
        <TouchableOpacity style={styles.background} onPress={onClose} />

        {/* Contenedor del menú */}
        <View style={styles.container}>
          <View style={styles.handle} />
          {children}
        </View>
      </View>
    </Modal>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  background: {
    ...StyleSheet.absoluteFillObject, // Esto hace que el fondo ocupe toda la pantalla
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    backgroundColor: Colors.background.main,
    maxHeight: phoneWindow.height * 0.6,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 16,
    zIndex: 1, // Asegura que el contenedor esté por encima del fondo oscuro
    alignItems: 'center',
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: Colors.text.main,
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 16,
  },
});

export default BottomMenu;