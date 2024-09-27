import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { iconColor, lightGray } from '@/constants/Colors';
import { mainTextColor, secondayTextColor } from '@/constants/Colors';
import DrawerContentHeader from '@/components/Home/DrawerContent/header';
import DrawerContentTextContainer from '@/components/Home/DrawerContent/textContainer';
import BlankComponent from '@/components/BlankComponent';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props} style={styles.mainContainer}>
      <DrawerContentHeader />
      <BlankComponent BCwidth="100%" BCheight={12}/>
      <DrawerContentTextContainer />
      <BlankComponent BCwidth="100%" BCheight={16}/>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  textContainer: {
    marginTop: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: mainTextColor,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: secondayTextColor,
  },
  
});

export default CustomDrawerContent;