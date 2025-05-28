import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import IStudent from '@/interfaces/Students/IStudent';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de instalar @expo/vector-icons
import BouncyCheckbox from 'react-native-bouncy-checkbox'; // Instalar con `npm install react-native-bouncy-checkbox`

interface RowCardProps {
  student: IStudent;
  onPress: (index: number) => void;
  index: number;
}

const RowCard: React.FC<RowCardProps> = ({ student, onPress, index }) => {
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];
  const styles = createStyles(Colors);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalIcon, setModalIcon] = useState('');
  const [loading, setLoading] = useState(false);

  // Simulación de respuesta (manual o aleatoria)
  const simulateResponse = (): boolean => {
    const manualResponse = null; // Cambia a true o false para controlar la respuesta manualmente
    return manualResponse !== null ? manualResponse : Math.random() > 0.5;
  };

  const handleCheckboxPress = (isChecked: boolean) => {
    // Solo ejecutar lógica si el checkbox es seleccionado
    if (!isChecked) return;

    setModalVisible(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      const response = simulateResponse();
      if (response) {
        setModalMessage('Guardado exitosamente');
        setModalIcon('✅');
      } else {
        setModalMessage('Petición rechazada');
        setModalIcon('❌');
      }
    }, 2000);
  };

  return (
    <View style={styles.cardContainer}>
      {/* Contenedor de la lupa */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => onPress(index)}>
        <Ionicons name="search" size={24} color={Colors.text.main} />
      </TouchableOpacity>

      <View style={styles.cardImage}>
        <Image
          source={
            student.image.startsWith('http')
              ? { uri: student.image }
              : require('@/assets/images/Students/Student1.png')
          }
          style={styles.image}
          onError={(error) =>
            console.error('Error al cargar la imagen:', error.nativeEvent)
          }
        />
      </View>

      <View style={styles.cardText}>
        <Text style={styles.titleText}>
          {student.name} {student.lastname}
        </Text>
        {student.grade && (
          <Text style={styles.subtitleText}>Grado: {student.grade}</Text>
        )}
      </View>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {loading ? (
              <ActivityIndicator size="large" color={Colors.buttons.main} />
            ) : (
              <>
                <Text style={styles.modalIcon}>{modalIcon}</Text>
                <Text style={styles.modalMessage}>{modalMessage}</Text>
              </>
            )}
            {!loading && (
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const createStyles = (Colors: IColorTheme) =>
  StyleSheet.create({
    cardContainer: {
      width: '48%',
      marginVertical: 10,
      backgroundColor: Colors.background.main,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
      overflow: 'hidden',
      position: 'relative', // Necesario para posicionar la lupa y el checkbox
    },
    cardImage: {
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.buttons.main,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    cardText: {
      padding: 16,
      backgroundColor: Colors.background.main,
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: Colors.text.main,
      marginBottom: 4,
    },
    subtitleText: {
      fontSize: 14,
      color: Colors.text.secondary,
    },
    iconContainer: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 10,
    },
    checkboxContainer: {
      position: 'absolute',
      bottom: 10,
      right: 0,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      padding: 20,
      backgroundColor: Colors.background.main,
      borderRadius: 10,
      alignItems: 'center',
    },
    modalIcon: {
      fontSize: 40,
      marginBottom: 10,
    },
    modalMessage: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 20,
      color: Colors.text.main,
    },
    closeButton: {
      backgroundColor: Colors.buttons.main,
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    closeButtonText: {
      color: '#fff',
      fontSize: 16,
    },
  });

export default RowCard;