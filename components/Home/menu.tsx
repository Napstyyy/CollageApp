import React from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Feather from "@expo/vector-icons/Feather";
import { Colors } from '@/constants/Colors';

const Menu: React.FC = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer()); // Abrimos el drawer
  };

  return (
    <TouchableOpacity onPress={openDrawer}>
      <Feather name="menu" size={32} color={Colors.icons.default} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingTop: '1%',
  },
});

export default Menu;
