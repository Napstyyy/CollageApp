import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, ActivityIndicator, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-bouncy-checkbox';
import IStudent from '@/interfaces/Students/IStudent';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import BlankComponent from '@/components/BlankComponent';
import { useAttendanceState } from '@/hooks/context/AttendanceContext';
import { Picker } from '@react-native-picker/picker';

const renderStudentCard: React.FC<IStudent> = ({ name, lastname, image }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const styles = createStyles(Colors);
  const { t } = useTranslation(); // Traducción

  const { selectedReason, setSelectedReason } = useAttendanceState();

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

      {/* Serie de checkboxes */}
      <View style={styles.checkboxContainer}>
        <Text>Ingeniero en sistemas</Text>
        <BlankComponent BCwidth={undefined} BCheight={8} />
        <Picker
          selectedValue={selectedReason}
          onValueChange={(itemValue) => setSelectedReason(itemValue)}
          style={styles.dropdownContainer}
          dropdownIconColor={Colors.background.main}
        >
          <Picker.Item label="Selecciona una razón" value="" />
          <Picker.Item label="Razón 1" value="reason1" />
          <Picker.Item label="Razón 2" value="reason2" />
          <Picker.Item label="Razón 3" value="reason3" />
          <Picker.Item label="Razón 4" value="reason4" />
          <Picker.Item label="Razón 5" value="reason5" />
        </Picker>
        <BlankComponent BCwidth={undefined} BCheight={8} />
        <CheckBox
          style={styles.checkbox}
          isChecked={false}
          onPress={handleCheckboxPress}
          textStyle={styles.checkboxText}
          text="Seleccionado"
        />
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
    dropdownContainer: {
      marginBottom: 16,
      borderWidth: 1,
      borderColor: 'transparent',
      borderRadius: 8,
      backgroundColor: Colors.buttons.main,
      overflow: 'hidden',
    },
    picker: {
      height: 50,
      color: Colors.background.main,
    },
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