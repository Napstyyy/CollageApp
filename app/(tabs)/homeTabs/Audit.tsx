import React from 'react';
import Header from '@/components/Home/header';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Form from '@/components/Form/form';
import { Picker } from '@react-native-picker/picker';
import { API_BASE_URL } from '@/config';
import { useState } from 'react';


export default function Audit() {

  const { t } = useTranslation();
  const [resetFormKey, setResetFormKey] = useState(Date.now());
    const formFields = [
      { name: 'Nombre', label: t('nombre'), type: 'text' as 'text', options: [] }, 
      { name: 'Apellido', label: t('apellido'), type: 'text' as 'text', options: [] },
      { name: 'DocumentoIdentidad', label: t('DocumentoIdentidad'), type: 'text' as 'text', options: [] }, 
      { name: 'Correo', label: t('Correo_Electronico'), type: 'text' as 'text', options: [] },
      { name: 'Telefono', label: t('telefono'), type: 'text' as 'text', options: [] },
      { name: 'CandidatoID', label: t('candidatoId'), type: 'number' as 'number', options: [] }
    ];
  
    const handleSubmit = async (data: any) => {
  console.log('Formulario enviado:', data);

  const payload = {
    Nombre: data.Nombre,
    Apellido: data.Apellido,
    DocumentoIdentidad: data.DocumentoIdentidad,
    Correo: data.Correo,
    Telefono: data.Telefono,
    CandidatoID: Number(data.CandidatoID),
  };

  try {
    const response = await fetch(`${API_BASE_URL}/candidatos/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();
    console.log('Respuesta del servidor:', responseData);

    if (response.ok) {
      setResetFormKey(Date.now()); // Reiniciar formulario
    } else {
      console.error('Error del servidor:', responseData);
    }
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
  }
};


  return (
    <>
    <Header title={t('crearCandidatos')}/>
    <View style={styles.body}>
      <Form 
        title={t('crearCandidatos')}
        fields={formFields}
        onSubmit={handleSubmit}
        resetTrigger={resetFormKey}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
