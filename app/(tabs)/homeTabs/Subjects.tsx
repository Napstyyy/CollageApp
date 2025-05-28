import React, { useState, useEffect } from 'react';
import Header from '@/components/Home/header';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Form from '@/components/Form/form';
import { API_BASE_URL } from '@/config';

export default function Subjects() {
  const { t } = useTranslation();
  const [resetFormKey, setResetFormKey] = useState(Date.now());
  const [cargos, setCargos] = useState<{ label: string; value: number }[]>([]);
  const [areas, setAreas] = useState<{ label: string; value: number }[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [cargosRes, areasRes] = await Promise.all([
          fetch(`${API_BASE_URL}/cargos/`),
          fetch(`${API_BASE_URL}/areas/`)
        ]);

        const cargosData = await cargosRes.json();
        const areasData = await areasRes.json();

        setCargos(cargosData.map((item: any) => ({
          label: item.NombreCargo || `Cargo ${item.CargoID}`,
          value: item.CargoID
        })));

        setAreas(areasData.map((item: any) => ({
          label: item.NombreArea || `Área ${item.AreaID}`,
          value: item.AreaID
        })));

      } catch (error) {
        console.error('Error al obtener cargos o áreas:', error);
      }
    };

    fetchOptions();
  }, []);

  const formFields = [
    { name: 'FechaRequisicion', label: t('fechaRequisicion'), type: 'date' as const, options: [] },
    { name: 'CargoID', label: t('cargo'), type: 'select' as const, options: cargos },
    { name: 'AreaID', label: t('area'), type: 'select' as const, options: areas },
    { name: 'Estado', label: t('estado'), type: 'text' as const, options: [] },
    { name: 'Observaciones', label: t('observaciones'), type: 'text' as const, options: [] },
    { name: 'SeleccionID', label: t('seleccionId'), type: 'number' as const, options: [] }
  ];

  const handleSubmit = async (data: any) => {
    console.log('Formulario enviado:', data);

    const payload = {
      FechaRequisicion: data.FechaRequisicion,
      CargoID: Number(data.CargoID),
      AreaID: Number(data.AreaID),
      Estado: data.Estado,
      Observaciones: data.Observaciones,
      SeleccionID: Number(data.SeleccionID),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/procesos-seleccion/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
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
      <Header title={t('procesoSeleccion')} />
      <View style={styles.body}>
        <Form
          title={t('nuevoProcesoSeleccion')}
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