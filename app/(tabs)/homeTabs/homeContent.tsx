import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/Home/header';
import Body from '@/components/Home/body';
import Footer from '@/components/Footer';
import { Colors } from '@/constants/Colors';

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
    backgroundColor: Colors.background.main,
    flex: 1,
  },
});

export default HomeContent;