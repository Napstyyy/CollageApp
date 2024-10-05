import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import AntDesign from "@expo/vector-icons/AntDesign";
import { iconColor, mainTextColor } from '@/constants/Colors';
import Menu from '@/components/Home/menu';


interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Image
        source={require("@/assets/images/collage-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconsContainer}>
        <AntDesign name="search1" size={32} color={iconColor} style={styles.icon} />
        <Menu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
    flex: 0.08,
    paddingTop: "12%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  logo: {
    width: "16%",
    height: "60%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: mainTextColor,
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
