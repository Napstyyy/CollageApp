import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import Menu from '@/components/Home/menu';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  const styles = createStyles(Colors);
  return (
    <View style={styles.header}>
      <Image
        source={require("@/assets/images/collage-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconsContainer}>
        <Menu />
      </View>
    </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
    header: {
    flex: 0.08,
    paddingTop: "12%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  logo: {
    width: "10%",
    height: "60%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.text.main,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    paddingTop: '1%',
    marginRight: 12,
  },
});

export default Header;
