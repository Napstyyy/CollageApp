import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '@/components/Form/form';
import { useTranslation } from 'react-i18next';
import { API_BASE_URL } from '@/config';

const RABody: React.FC = () => {
  const { t } = useTranslation();
  const formFields = [
    { name: 'NombreArea', label: t('Nombre_social'), type: 'text' as 'text' }, 
    { name: 'Descripcion', label: t('Description'), type: 'text' as 'text' },
    { name: 'AreaID', label: "areaID", type: 'number' as 'number' },
  ];

  const handleSubmit = async (data: any) => {
  console.log('Datos del formulario:', data);
  try {
    const response = await fetch(`${API_BASE_URL}/areas/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        NombreArea: data.NombreArea,
        Descripcion: data.Descripcion,
        AreaID: data.AreaID,
      }),
    });

    console.log('Status HTTP:', response.status);

    // Si no es 2xx, lee el texto para ver el error real
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error del servidor:', errorText);
      return;
    }

    const result = await response.json();
    console.log('Respuesta del servidor:', result);
  } catch (error) {
    console.error('Error al enviar formulario:', error);
  }
};



  return (
    <View style={styles.body}>
      {/* Llamada al componente Form */}
      <Form 
        title={t('crear_area')}
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
    padding: 20,
  },
});

export default RABody;
