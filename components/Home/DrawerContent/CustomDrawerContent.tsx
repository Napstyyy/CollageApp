import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import DrawerContentHeader from '@/components/Home/DrawerContent/header';
import DrawerContentTextContainer from '@/components/Home/DrawerContent/textContainer';
import BlankComponent from '@/components/BlankComponent';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  const styles = createStyles(Colors);
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

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
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
    backgroundColor: Colors.gray.light,
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
    color: Colors.text.main,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text.secondary,
  },
  
});

export default CustomDrawerContent;