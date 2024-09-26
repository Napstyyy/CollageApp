import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image source={require("@/assets/images/collage-logo.png")} style={styles.icon} />
        <Text style={styles.title}>Mi Aplicación</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    marginBottom: 20,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;