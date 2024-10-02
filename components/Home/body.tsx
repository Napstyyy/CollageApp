import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatListComponent } from 'react-native';
import { Ionicons, MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import { lightGray, iconColor, PlaceHolderInputColor } from '@/constants/Colors';
import BlankComponent from '@/components/BlankComponent';
import InputComponent from '@/components/Home/inputComponent';
import Card from '@/components/Home/card';

const Body: React.FC = () => {

  return (
    <View style={styles.body}>
      
      <InputComponent/>
      <BlankComponent BCwidth="100%" BCheight="2%" />
      <Card/>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});

export default Body;