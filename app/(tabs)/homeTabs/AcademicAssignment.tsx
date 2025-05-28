import React from 'react';
import Header from '@/components/Home/header';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Form from '@/components/Form/form';
import { Picker } from '@react-native-picker/picker';

export default function AcademicAssignment() {
  const { t } = useTranslation();
    const formFields = [
      { name: 'nameCandidate', label: t('nombre_candidato'), type: 'select' as 'select', options: [
          { label: "Jhon Doe", value: 'Jhon Doe' },
          { label: "Camilo", value: 'Camilo' },
          { label: "Matero", value: 'Matero' },
        ]},
      { name: 'resultado_entrevista', label: t('resultado_entrevista'), type: 'text' as 'text', options: [] }, 
      { name: 'resultado_Psicotecnico', label: t('resultado_Psicotecnico'), type: 'text' as 'text', options: [] },
      { name: 'referenciasVerificadas', label: t('referenciasVerificadas'), type: 'checkbox' as 'checkbox', options: [] }, 
      { name: 'antecedentesVerificados', label: t('antecedentesVerificados'), type: 'checkbox' as 'checkbox', options: [] },
      { name: 'exameMedicoAprobado', label: t('exameMedicoAprobado'), type: 'checkbox' as 'checkbox', options: [] },
      { name: 'contratado', label: t('contratado'), type: 'checkbox' as 'checkbox', options: [] },
      { name: 'observaciones', label: t('observaciones'), type: 'text' as 'text', options: [] },
    ];
  
    const handleSubmit = (data: any) => {
      console.log('Formulario enviado:', data);
    };

  return (
    <>
    <Header title={t('evaluar_candidato')}/>
    <View style={styles.body}>
      <Form 
        title={t('evaluar_candidato')}
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
