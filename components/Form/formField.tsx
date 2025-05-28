import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import DateTimePicker from '@react-native-community/datetimepicker';

type FormFieldProps = {
  title: string;
  value: string | { countryCode: string; phoneNumber: string };
  onChange: (value: any) => void;
  type?: 'text' | 'email' | 'phone' | 'file' | 'select' | 'checkbox' | 'number' | 'date';
  options?: { label: string; value: string | number }[];
};

const FormField: React.FC<FormFieldProps> = ({ title, value, onChange, type = 'text', options }) => {
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];
  const { t } = useTranslation();
  const styles = createStyles(Colors);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const renderField = () => {
    switch (type) {
      case 'text':
        return (
          <TextInput
            style={styles.input}
            value={value as string}
            onChangeText={onChange}
            placeholder={t('Ingresa_tu_nombre_social')}
          />
        );
      case 'email':
        return (
          <TextInput
            style={styles.input}
            value={value as string}
            onChangeText={onChange}
            keyboardType="email-address"
            placeholder={t('Correo_Electronico')}
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
            <Text>{value || t('Subir_archivo')}</Text>
          </TouchableOpacity>
        );
      case 'select':
        return (
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={value as string}
              style={styles.picker}
              dropdownIconColor={Colors.text.main}
              onValueChange={(itemValue) => onChange(itemValue)}
            >
              {options?.map((option) => (
                <Picker.Item
                  key={option.value}
                  label={option.label}
                  value={option.value}
                  style={styles.pickerItem}
                />
              ))}
            </Picker>
          </View>
        );
      case 'checkbox':
        return (
          <View style={styles.input}>
            <TouchableOpacity onPress={() => onChange(!value)}>
              <Text>{value ? t('seleccionado') : t('no_seleccionado')}</Text>
            </TouchableOpacity>
          </View>
        );
      case 'number':
        return (
          <TextInput
            style={styles.input}
            value={value !== undefined && value !== null ? value.toString() : ''}
            onChangeText={(text) => {
              if (text === '') {
                onChange(undefined);
              } else {
                const num = Number(text);
                if (!isNaN(num)) {
                  onChange(num);
                }
              }
            }}
            keyboardType="numeric"
            placeholder={t('Ingresa_un_numero')}
          />
        );
      case 'date':
        return (
          <View>
            <TouchableOpacity
              style={styles.input}
              onPress={() => setShowDatePicker(true)}
            >
              <Text>{value ? new Date(value as string).toLocaleDateString() : t('Selecciona_una_fecha')}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={value ? new Date(value as string) : new Date()}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(_, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) {
                    const formattedDate = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD
                    onChange(formattedDate);
                  }
                }}
              />
            )}
          </View>
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
  picker: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.background.main,
    color: Colors.text.main,
  },
  fileInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  pickerItem: {
    color: Colors.text.main,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: Colors.inputs.main,
    borderRadius: 5,
    overflow: 'hidden',
  }
});

export default FormField;
