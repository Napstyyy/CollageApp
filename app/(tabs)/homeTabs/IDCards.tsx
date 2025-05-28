import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import Header from '@/components/Home/header'; // Asegúrate de que este path es correcto o usa un placeholder si no está listo.

export default function IDCards() {
  const [files, setFiles] = useState({
    eps: null,
    pension: null,
    arl: null,
    caja: null,
  });

  const pickDocument = async (key: string) => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        copyToCacheDirectory: true,
      });

      if (!res.canceled && res.assets && res.assets.length > 0) {
        setFiles(prev => ({
          ...prev,
          [key]: res.assets[0],
        }));
      }
    } catch (err) {
      console.error('Error al seleccionar documento:', err);
    }
  };

  return (
    <>
      <Header title="" />
      <View style={styles.container}>
        <Text style={styles.title}>Sube tus documentos:</Text>

        <FilePicker label="Afiliación EPS" onPress={() => pickDocument('eps')} file={files.eps} />
        <FilePicker label="Pensión" onPress={() => pickDocument('pension')} file={files.pension} />
        <FilePicker label="ARL" onPress={() => pickDocument('arl')} file={files.arl} />
        <FilePicker label="Caja de Compensación" onPress={() => pickDocument('caja')} file={files.caja} />
      </View>
    </>
  );
}

type FileAsset = {
  name?: string;
  uri?: string;
  [key: string]: any;
};

function FilePicker({ label, onPress, file }: { label: string; onPress: () => void; file: FileAsset | null }) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{file && file.name ? file.name : 'Seleccionar PDF'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#E9F1FF',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#002055',
    fontSize: 14,
  },
});