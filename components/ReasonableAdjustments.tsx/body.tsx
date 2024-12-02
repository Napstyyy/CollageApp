import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '@/components/Form/form';
import { useTranslation } from 'react-i18next';

const RABody: React.FC = () => {
  const { t } = useTranslation();
  const formFields = [
    { name: 'socialName', label: t('Nombre_social'), type: 'text' as 'text' }, // Explicitamos 'text' como FieldType
    { name: 'email', label: t('Correo_Electronico'), type: 'email' as 'email' }, // Explicitamos 'email' como FieldType
    { name: 'signature', label: t('Firma'), type: 'file' as 'file' }, // Explicitamos 'file' como FieldType
  ];

  const handleSubmit = (data: any) => {
    console.log('Formulario enviado:', data);
  };

  return (
    <View style={styles.body}>
      {/* Llamada al componente Form */}
      <Form 
        title={t('Datos_Generales')}
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
