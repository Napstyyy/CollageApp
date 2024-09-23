import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation/routes';
import { iconColor, mainBackgroundColor  } from '@/constants/Colors';
import { Ionicons, Entypo } from '@expo/vector-icons';

const Footer = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="chevron-back" size={32} color={ mainBackgroundColor } />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Entypo name="home" size={32} color={ mainBackgroundColor } />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
      <Entypo name="log-out" size={32} color={ mainBackgroundColor } />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: iconColor,
  },
});

export default Footer;