import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FormField from '@/components/Form/formField';
import SecondaryButton from '@/components/SecondaryButton';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect } from 'react';


type FieldType = 'text' | 'email' | 'phone' | 'file' | 'select' | 'checkbox' | 'number'; // Añade esta línea

type Field = {
  name: string;
  label: string;
  type: FieldType;
  options?: { label: string; value: string }[]; // Añade esta línea
};

type FormProps = {
  title: string;
  fields: Field[];
  onSubmit: (data: any) => void;
  resetTrigger?: any; 
};

const Form: React.FC<FormProps> = ({ title, fields, onSubmit, resetTrigger }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const { t } = useTranslation(); // Traducción

  const styles = createStyles(Colors); 

  const [formData, setFormData] = useState<{ [key: string]: any }>(() =>
    fields.reduce((acc, field) => ({
      ...acc,
      [field.name]: field.type === 'phone' ? { countryCode: '+1', phoneNumber: '' } : '',
    }), {})
  );

  useEffect(() => {
    // se ejecuta cada vez que cambia `resetTrigger`
    setFormData(
      fields.reduce((acc, field) => ({
        ...acc,
        [field.name]: field.type === 'phone' ? { countryCode: '+1', phoneNumber: '' } : '',
      }), {})
    );
  }, [resetTrigger, fields]);

  const handleFieldChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {fields.map((field) => (
        <FormField
          key={field.name}
          title={field.label}
          value={formData[field.name]}
          onChange={(value) => handleFieldChange(field.name, value)}
          type={field.type}
          options={field.options}
        />
      ))}
    <View style={styles.buttonContainer}>
      <SecondaryButton text={t('Guardar_Datos')} controller={() => onSubmit(formData)} />
      </View>
    </ScrollView>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 24,
    color: Colors.text.main,
  },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 24,
    },
});

export default Form;
