import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import FormField from '@/components/Form/formField';
import SecondaryButton from '@/components/SecondaryButton';
import { mainTextColor } from '@/constants/Colors';

type FieldType = 'text' | 'email' | 'phone' | 'file';

type Field = {
  name: string;
  label: string;
  type: FieldType;
};

type FormProps = {
  title: string;
  fields: Field[];
  onSubmit: (data: any) => void;
};

const Form: React.FC<FormProps> = ({ title, fields, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>(
    fields.reduce((acc, field) => ({
      ...acc,
      [field.name]: field.type === 'phone' ? { countryCode: '+1', phoneNumber: '' } : ''
    }), {})
  );

  const handleFieldChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {fields.map((field) => (
        <FormField
          key={field.name}
          title={field.label}
          value={formData[field.name]}
          onChange={(value) => handleFieldChange(field.name, value)}
          type={field.type}
        />
      ))}
    <View style={styles.buttonContainer}>
      <SecondaryButton text={'Guardar Datos Generales'} controller={undefined} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 24,
    color: mainTextColor,
  },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 24,
    },
});

export default Form;
