import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RegisterCardProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode; // Permite incluir cualquier contenido, como imágenes o botones
}

const RegisterCard: React.FC<RegisterCardProps> = ({ title, subtitle, children }) => {
  return (
    <View style={styles.card}>
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    maxHeight: '80%',
    margin: 10,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  content: {
    marginBottom: 20,
  },
});

export default RegisterCard;
