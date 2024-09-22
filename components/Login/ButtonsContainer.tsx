import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainButton from '@/components/MainButton';
import SecondaryButton from '@/components/SecondaryButton';


const ButtonsContainer: React.FC = () => {
  return (
    <View style={styles.container}>
    <MainButton text={'Iniciar'} controller={undefined} />
    <View style={styles.sizebox}></View>
    <SecondaryButton text={'Solicitar cupo'} controller={undefined} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  sizebox: {
    height: '12%'
  }
});

export default ButtonsContainer;
