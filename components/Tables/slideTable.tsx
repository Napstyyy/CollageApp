import React from 'react';
import { View, Text, StyleSheet, Modal, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view';
import RegisterCard from '@/components/Tables/Register/registerCard';
import Student from '@/interfaces/IStudent';

interface SlideTableProps {
  data: Record<number, Student>;
  isVisible: boolean;
  onClose: () => void;
}

const SlideTable: React.FC<SlideTableProps> = ({ data, isVisible, onClose }) => {
  const entries = Object.entries(data);
  const screenWidth = Dimensions.get('window').width; // Obtener el ancho de la pantalla

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <PagerView style={styles.pageView} initialPage={0}>
          {entries.map(([key, student]) => (
            <View style={[styles.cardContainer, { width: screenWidth * 0.8 }]} key={key}>
              <RegisterCard
                title={`Estudiante: ${student.name} ${student.lastname}`}
              >
                <Text style={styles.studentName}>{`${student.name} ${student.lastname}`}</Text>
                <Text style={styles.subtitle}>Detalle del estudiante</Text>
              </RegisterCard>
            </View>
          ))}
        </PagerView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  cardContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',  // Asegura que el contenido no se salga del borde
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default SlideTable;
