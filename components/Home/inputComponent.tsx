import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import BlankComponent from '@/components/BlankComponent';
import CardInput from '@/components/Home/cardInput';

const InputComponent: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar el modal

  return (
    <>
      {/* Contenedor principal con el TouchableOpacity */}
      <TouchableOpacity style={styles.inputComponent} onPress={() => setModalVisible(true)}>
        <View style={styles.leftColumn}>
          <TouchableOpacity style={styles.profileIcon}>
            <Ionicons name="person-outline" size={24} color={Colors.icons.default} />
          </TouchableOpacity>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.placeholderText}>¿En qué estás pensando?</Text>
          <BlankComponent BCwidth="100%" BCheight="40%" />
        </View>
      </TouchableOpacity>

      {/* Modal que se muestra al hacer clic en el InputComponent */}
      <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)} // Permite cerrar el modal cuando el usuario presiona atrás
>
  {/* Al hacer clic en el fondo (modalBackground), el modal se cerrará */}
  <TouchableOpacity
    style={styles.modalBackground}
    activeOpacity={1} // Asegura que no se vea como presionado
    onPress={() => setModalVisible(false)} // Cierra el modal
  >
      <CardInput/>
  </TouchableOpacity>
</Modal>

    </>
  );
};

const styles = StyleSheet.create({
  inputComponent: {
    width: '100%',
    flex: 0.08,
    display: 'flex',
    flexDirection: 'row',
  },
  leftColumn: {
    alignItems: 'center',
    marginRight: 12,
    width: '20%',
  },
  rightColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.gray.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: Colors.inputs.placeholder,
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro transparente
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default InputComponent;
