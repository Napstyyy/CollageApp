import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, Dimensions, TouchableOpacity } from 'react-native';
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { iconColor } from '@/constants/Colors';
import useMenu from '@/hooks/useMenu';
import Menu from '@/components/Home/menu';


const Header: React.FC = () => {
  const { menuVisible, slideAnim, toggleMenu } = useMenu();

  return (
    <View style={styles.header}>
        <Image
          source={require("@/assets/images/collage-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Collage</Text>
        <View style={styles.iconsContainer}>
        <AntDesign name="search1" size={32} color={ iconColor } style={styles.icon} />
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
    color: iconColor,
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
