import React, { useState, useEffect } from 'react';
import Header from '@/components/Home/header';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Form from '@/components/Form/form';
import { API_BASE_URL } from '@/config';

export default function AcademicAssignment() {
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
    { name: 'Nombre', label: t('nombre'), type: 'text' as const, options: [] },
    { name: 'Apellido', label: t('apellido'), type: 'text' as const, options: [] },
    { name: 'DocumentoIdentidad', label: t('DocumentoIdentidad'), type: 'text' as const, options: [] },
    { name: 'FechaNacimiento', label: t('fechaNacimiento'), type: 'date' as const, options: [] },
    { name: 'Genero', label: t('genero'), type: 'text' as const, options: [] },
    { name: 'FechaIngreso', label: t('fechaIngreso'), type: 'date' as const, options: [] },
    { name: 'FechaRetiro', label: t('fechaRetiro'), type: 'date' as const, options: [] },
    { name: 'EstadoEmpleado', label: t('estadoEmpleado'), type: 'text' as const, options: [] },
    { name: 'CargoID', label: t('cargo'), type: 'select' as const, options: cargos },
    { name: 'AreaID', label: t('area'), type: 'select' as const, options: areas },
    { name: 'EmpleadoID', label: t('empleadoId'), type: 'number' as const, options: [] }
  ];

  const handleSubmit = async (data: any) => {
    console.log('Formulario enviado:', data);

    const payload = {
      Nombre: data.Nombre,
      Apellido: data.Apellido,
      DocumentoIdentidad: data.DocumentoIdentidad,
      FechaNacimiento: data.FechaNacimiento,
      Genero: data.Genero,
      FechaIngreso: data.FechaIngreso,
      FechaRetiro: data.FechaRetiro,
      EstadoEmpleado: data.EstadoEmpleado,
      CargoID: Number(data.CargoID),
      AreaID: Number(data.AreaID),
      EmpleadoID: Number(data.EmpleadoID),
    };

    try {
      const response = await fetch(`${API_BASE_URL}/empleados/`, {
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
      <Header title={t('crearEmpleado')} />
      <View style={styles.body}>
        <Form
          title={t('crearEmpleado')}
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
