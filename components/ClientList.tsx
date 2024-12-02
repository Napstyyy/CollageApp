import React from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';
import ClientItem from "./ClientItem";
import { clients } from '@/models/clients';
import { useTranslation } from 'react-i18next';

const ClientList: React.FC = () => {
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.clientContainer}>
      <Text style={styles.clientTitle}>{t('Nuestros_clientes')}</Text>
      <FlatList
        data={clients}
        renderItem={({ item }) => <ClientItem name={item.name} logo={item.logo} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent} // Añadir estilo al contenido de la lista
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  clientContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    width: '100%',
    flexGrow: 1,
  },
  clientTitle: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'center',
  },
  listContent: {
    width: '100%', // Asegurar que el contenido ocupe el 100% del ancho
    marginBottom: 16,
  },
});

export default ClientList;
