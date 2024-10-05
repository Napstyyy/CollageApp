import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/Home/header';
import Body from '@/components/Home/body';
import Footer from '@/components/Footer';
import { mainBackgroundColor } from '@/constants/Colors';

const HomeContent: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <Header title="Collage" />
      <Body />
      {/*<Footer />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: mainBackgroundColor,
    flex: 1,
  },
});

export default HomeContent;