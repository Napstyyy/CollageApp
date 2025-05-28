import React from 'react';
import Header from '@/components/Home/header';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Form from '@/components/Form/form';
import { Picker } from '@react-native-picker/picker';

export default function Learnings() {
  const { t } = useTranslation();
    const formFields = [
      { name: 'namePosition', label: t('nombre_Cargo'), type: 'text' as 'text', options: [] }, 
      { name: 'Description', label: t('Description'), type: 'text' as 'text', options: [] },
      { name: 'nivelJerarquico', label: t('nivelJerarquico'), type: 'text' as 'text', options: [] }, 
      { name: 'PerfilRequerido', label: t('PerfilRequerido'), type: 'text' as 'text', options: [] },
      { name: 'area', label: t('area'), type: 'select' as 'select', options: [
          { label: t('Administracion'), value: 'administracion' },
          { label: t('Finanzas'), value: 'finanzas' },
          { label: t('Recursos_Humanos'), value: 'recursos_humanos' },
          { label: t('Tecnologia'), value: 'tecnologia' },
          { label: t('Marketing'), value: 'marketing' },
        ]}
    ];
  
    const handleSubmit = (data: any) => {
      console.log('Formulario enviado:', data);
    };

  return (
    <>
    <Header title={t('crear_cargo')}/>
    <View style={styles.body}>
      <Form 
        title={t('crear_cargo')}
        fields={formFields}
        onSubmit={handleSubmit}
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
