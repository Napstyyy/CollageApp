import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Body: React.FC = () => {
  const areas = [
    { id: 'rh', name: 'Recursos Humanos' },
    { id: 'tech', name: 'Tecnología' },
    { id: 'fin', name: 'Finanzas' },
  ];

  const cargosPorArea: Record<string, { id: string; name: string }[]> = {
    rh: [
      { id: 'reclutador', name: 'Reclutador' },
      { id: 'coach', name: 'Coach Organizacional' },
    ],
    tech: [
      { id: 'desarrollador', name: 'Desarrollador' },
      { id: 'sysadmin', name: 'SysAdmin' },
    ],
    fin: [
      { id: 'contador', name: 'Contador' },
      { id: 'analista', name: 'Analista Financiero' },
    ],
  };

  const [selectedArea, setSelectedArea] = useState('');
  const [selectedCargo, setSelectedCargo] = useState('');

  const handleLoad = () => {
    const payload = {
      area: selectedArea,
      cargo: selectedCargo,
    };
    console.log('Payload para backend:', payload);
    // Aquí iría tu llamada fetch/axios
  };

  const cargosDisponibles = selectedArea ? cargosPorArea[selectedArea] || [] : [];

  return (
    <View style={styles.body}>
      <View style={styles.pickerWrapper}>
        <Text style={styles.label}>Área</Text>
        <Picker
          selectedValue={selectedArea}
          onValueChange={(itemValue) => {
            setSelectedArea(itemValue);
            setSelectedCargo('');
          }}
          style={styles.picker}
        >
          <Picker.Item label="Seleccione un área" value="" />
          {areas.map((area) => (
            <Picker.Item key={area.id} label={area.name} value={area.id} />
          ))}
        </Picker>
      </View>

      {selectedArea !== '' && (
        <View style={styles.pickerWrapper}>
          <Text style={styles.label}>Cargo</Text>
          <Picker
            selectedValue={selectedCargo}
            onValueChange={(itemValue) => setSelectedCargo(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Seleccione un cargo" value="" />
            {cargosDisponibles.map((cargo) => (
              <Picker.Item key={cargo.id} label={cargo.name} value={cargo.id} />
            ))}
          </Picker>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleLoad}>
        <Text style={styles.buttonText}>Abrir Nueva Selección</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  pickerWrapper: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  picker: {
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Body;