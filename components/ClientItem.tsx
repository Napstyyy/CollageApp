import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ClientItemProps {
  name: string;
  logo: any;
}

const ClientItem: React.FC<ClientItemProps> = ({ name, logo }) => {
  return (
    <View style={styles.clientItem}>
      <Image source={{ uri: logo }} style={styles.clientLogo} />
      <Text style={styles.clientText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 7,
    marginHorizontal: 8,
    borderRadius: 16,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    flex: 1,
    // Agregar box shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para Android
},

  clientLogo: {
    width: 40,
    height: 40,
    marginRight: 15,
    marginLeft: 16,
    resizeMode: 'contain', // Añadir esto
  },
  clientText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default ClientItem;
