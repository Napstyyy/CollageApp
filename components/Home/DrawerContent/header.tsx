import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons} from '@expo/vector-icons';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 

const DrawerContentHeader: React.FC = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  const styles = createStyles(Colors);
  return (
      <View style={styles.header}>
      <TouchableOpacity style={styles.profileIcon}>
            <Ionicons name="person-outline" size={28} color={Colors.icons.default} />
          </TouchableOpacity>
        <Image source={require("@/assets/images/collage-logo.png")} style={styles.icon} />
      </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: Colors.gray.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default DrawerContentHeader;