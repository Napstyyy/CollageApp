import React from 'react';
import Header from '@/components/Home/header';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Form from '@/components/Form/form';
import { Picker } from '@react-native-picker/picker';
import { API_BASE_URL } from '@/config';
import { useState } from 'react';

export default function Learnings() {
  const { t } = useTranslation();
  const [resetFormKey, setResetFormKey] = useState(Date.now());
    const formFields = [
      { name: 'NombreCargo', label: t('nombre_Cargo'), type: 'text' as 'text', options: [] }, 
      { name: 'Descripcion', label: t('Description'), type: 'text' as 'text', options: [] },
      { name: 'NivelJerarquico', label: t('nivelJerarquico'), type: 'text' as 'text', options: [] }, 
      { name: 'PerfilRequerido', label: t('PerfilRequerido'), type: 'text' as 'text', options: [] },
      { name: 'CargoID', label: "Cargo ID", type: 'number' as 'number', options: [] },
    ];
  
    const handleSubmit = async (data: any) => {
    console.log('Formulario enviado:', data);
    try {
      const response = await fetch(`${API_BASE_URL}/cargos/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          NombreCargo: data.NombreCargo,
          Descripcion: data.Descripcion,
          NivelJerarquico: data.NivelJerarquico,
          PerfilRequerido: data.PerfilRequerido,
          CargoID: Number(data.CargoID),
        }),
      });

      const responseData = await response.json();
      console.log('Respuesta del servidor:', responseData);

      if (response.ok) {
        // 🔁 Reiniciar formulario solo si el envío fue exitoso
        setResetFormKey(Date.now());
      } else {
        console.error('Error en el servidor:', responseData);
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    }
  };

  return (
    <>
    <Header title={t('crear_cargo')}/>
    <View style={styles.body}>
      <Form 
        title={t('crear_cargo')}
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
