import React from 'react';
import { View, StyleSheet } from 'react-native';
import ClientList from './ClientList';
import MainButton from './MainButton';
import { NavigationController } from '@/navigation/controllers/NavigationController';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList, Routes } from '../navigation/routes';
import { Colors } from '@/constants/Colors';

const BottomClientsLoginContainer: React.FC = () => {
  const navigationController = new NavigationController();

  return (
    <View style={styles.bottomContainer}>
      <ClientList />
      <View style={styles.buttonContainer}>
        <MainButton text={'Ingresar'} controller={navigationController} route={Routes.login} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%', // Para que el contenedor ocupe el ancho completo
  },
  buttonContainer: {
    backgroundColor: Colors.gray.dark,
    width: '100%',
    height: '18%', // Altura fija para el contenedor
    alignItems: 'center',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center', // Alinea verticalmente en el centro
  },
});

export default BottomClientsLoginContainer;