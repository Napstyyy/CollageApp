import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';


type FormFieldProps = {
  title: string;
  value: string | { countryCode: string; phoneNumber: string };
  onChange: (value: any) => void;
  type?: 'text' | 'email' | 'phone' | 'file';
};

const FormField: React.FC<FormFieldProps> = ({ title, value, onChange, type = 'text' }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  const styles = createStyles(Colors); 
  const renderField = () => {
    switch (type) {
      case 'text':
        return (
          <TextInput
            style={styles.input}
            value={value as string}
            onChangeText={onChange}
            placeholder={`Ingresa tu ${title.toLowerCase()}`}
          />
        );
      case 'email':
        return (
          <TextInput
            style={styles.input}
            value={value as string}
            onChangeText={onChange}
            keyboardType="email-address"
            placeholder="Correo Electrónico"
          />
        );
        case 'file':
        return (
          <TouchableOpacity
            style={styles.fileInput}
            onPress={async () => {
              try {
                const result = await DocumentPicker.getDocumentAsync({});
                if (result.type === 'success') {
                  onChange(result.uri);
                }
              } catch (error) {
                console.error('Error selecting document:', error);
              }
            }}
          >
            <Text>{value || 'Subir archivo'}</Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      {renderField()}
    </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: Colors.text.main,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.inputs.main,
    padding: 10,
    borderRadius: 5,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  picker: {
    width: 100,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  fileInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default FormField;
