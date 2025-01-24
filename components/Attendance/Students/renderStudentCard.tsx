import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, ActivityIndicator, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-bouncy-checkbox';
import IStudent from '@/interfaces/Students/IStudent';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import BlankComponent from '@/components/BlankComponent';
import { useAttendanceState } from '@/hooks/context/AttendanceContext';

const renderStudentCard: React.FC<IStudent> = ({ name, lastname, image }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const styles = createStyles(Colors);
  const { t } = useTranslation(); // Traducción

  const { selectedReason } = useAttendanceState();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalIcon, setModalIcon] = useState('');
  const [loading, setLoading] = useState(false);


//Simulador de respuestas:
  const simulateResponse = (): boolean => {
    const manualResponse = true; 
    return manualResponse !== null ? manualResponse : Math.random() > 0.5;
  };

  const handleCheckboxPress = (isChecked: boolean) => {
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
    <View style={styles.card}>
      <Text style={styles.name}>{`${name} ${lastname}`}</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/Students/Student1.png')}
          style={styles.image}
        />
      </View>
      <BlankComponent BCwidth={undefined} BCheight={16} />

      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>{selectedReason}</Text>
      </View>

      {/* Serie de checkboxes */}
      <View style={styles.checkboxContainer}>
        {[...Array(7)].map((_, index) => (
          <CheckBox
          key={index}
          size={25}
          fillColor={Colors.buttons.main}
          unFillColor={Colors.background.main}
          text={` ${index + 1}`}
          iconStyle={{ borderColor: Colors.buttons.main }}
          textStyle={styles.checkboxText}
          style={styles.checkbox}
          onPress={(isChecked) => handleCheckboxPress(isChecked)}
        />
        ))}
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
    card: {
      flexGrow: 1,
      padding: 16,
      margin: 8,
      borderRadius: 8,
      backgroundColor: Colors.background.main,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
    },
    image: {
      resizeMode: 'contain',
      width: '100%',
      height: 320,
      borderRadius: 8,
    },
    helloContainer: {
      backgroundColor: Colors.buttons.main,
      borderRadius: 16,
      padding: 12,
      alignItems: 'center',
      marginBottom: 16,
    },
    helloText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    checkboxContainer: {
      marginTop: 8,
    },
    checkbox: {
      marginBottom: 12,
    },
    checkboxText: {
      textDecorationLine: 'none',
      fontSize: 16,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: Colors.background.main,
      borderRadius: 10,
      alignItems: 'center',
    },
    modalIcon: {
      fontSize: 50,
      marginBottom: 16,
    },
    modalMessage: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 16,
    },
    closeButton: {
      backgroundColor: Colors.buttons.main,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    closeButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
  });

export default renderStudentCard;