import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '@/components/Form/form';

const RABody: React.FC = () => {
  const formFields = [
    { name: 'socialName', label: 'Nombre social', type: 'text' as 'text' }, // Explicitamos 'text' como FieldType
    { name: 'email', label: 'Correo Electrónico', type: 'email' as 'email' }, // Explicitamos 'email' como FieldType
    { name: 'signature', label: 'Firma', type: 'file' as 'file' }, // Explicitamos 'file' como FieldType
  ];

  const handleSubmit = (data: any) => {
    console.log('Formulario enviado:', data);
  };

  return (
    <View style={styles.body}>
      {/* Llamada al componente Form */}
      <Form 
        title="Datos Generales"
        fields={formFields}
        onSubmit={handleSubmit}
      />
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

export default RABody;
