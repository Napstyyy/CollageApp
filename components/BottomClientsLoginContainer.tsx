import React from 'react';
import { View, StyleSheet } from 'react-native';
import ClientList from '@/components/ClientList';
import MainButton from '@/components/MainButton';

const BottomClientsLoginContainer: React.FC = () => {
  return (
    <View style={styles.bottomContainer}>
        <ClientList />
      <View style={styles.buttonContainer}>
        <MainButton text={'Ingresar'} controller={undefined} />
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
    backgroundColor: '#222224',
    width: '100%',
    height: '18%', // Altura fija para el contenedor
    alignItems: 'center',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center', // Alinea verticalmente en el centro
  },
});

export default BottomClientsLoginContainer;
