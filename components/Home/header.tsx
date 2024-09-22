import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { iconColor } from '@/constants/Colors';


const Header: React.FC = () => {
  return (
    <View style={styles.header}>
        <Image
          source={require("@/assets/images/collage-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Bienvenido</Text>
        <AntDesign name="search1" size={32} color={ iconColor } style={styles.icon} />
        <Feather
          name="menu"
          size={32}
          color={ iconColor }
          style={[styles.icon, styles.menuIcon]}
        />
      </View>
  );
};

const styles = StyleSheet.create({
    header: {
    flex: 0.08,
    paddingTop: "12%",
    justifyContent: "center",
    flexDirection: "row",
  },
  logo: {
    width: "16%",
    height: "60%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: iconColor,
    paddingLeft: "8%",
    marginRight: "2%",
  },
  icon: {
    paddingTop: 4,
    marginLeft: 20, // Añade espacio entre los íconos
  },
  menuIcon: {
    marginLeft: 20, // Añade espacio adicional si lo necesitas para el último ícono
  },
});

export default Header;
