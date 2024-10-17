import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Colors } from '@/constants/Colors';


const DrawerContentTextContainer: React.FC = () => {
  return (
      <View>
      <Text style={styles.userName}>Mateo Giraldo Arboleda</Text>
        <Text style={styles.title}>Procesos educativos</Text>
      </View>
  );
};

const styles = StyleSheet.create({
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

export default DrawerContentTextContainer;