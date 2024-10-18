import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/Home/header';
import Body from '@/components/Home/body';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 

const HomeContent: React.FC = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  const styles = createStyles(Colors); 
  return (
    <View style={styles.mainContainer}>
      <Header title="Collage" />
      <Body />
      {/*<Footer />*/}
    </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.background.main,
    flex: 1,
  },
});

export default HomeContent;