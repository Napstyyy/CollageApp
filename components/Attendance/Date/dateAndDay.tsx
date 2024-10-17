import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, FlatList, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors } from '@/constants/Colors';

const daysOfWeek = ['Domingo ','Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const DateAndDay: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false); // Controlar la visibilidad del modal
  const [selectedDay, setSelectedDay] = useState<string>(''); // Estado para el día seleccionado

  // Función que se ejecuta cuando el usuario selecciona una fecha
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setSelectedDay(daysOfWeek[currentDate.getDay()]); // Actualizar día seleccionado basado en la fecha
  };

  // Función para abrir el selector de fecha
  const showDatepicker = () => {
    setShow(true);
  };

  // Formatear la fecha como "dd/mm/yyyy"
  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Establecer el día actual cuando el componente se monta
  useEffect(() => {
    const today = new Date();
    setSelectedDay(daysOfWeek[today.getDay()]);
  }, []);

  return (
    <View style={styles.container}>
      {/* Botón de fecha */}
      <TouchableOpacity style={styles.dateButton} onPress={showDatepicker}>
        <Text style={styles.dateText}>{formatDate(date)}</Text>
        <Text style={styles.arrow}>⌵</Text>
      </TouchableOpacity>

      {/* Botón de selección de día de la semana */}
      <TouchableOpacity 
        style={styles.dateButton} 
        onPress={() => setShowModal(true)}  // Abrir el modal al presionar el botón
      >
        <Text style={styles.dateText}>{selectedDay}</Text>
        <Text style={styles.arrow}>⌵</Text>
      </TouchableOpacity>

      {/* Modal para seleccionar el día de la semana */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(false)}  // Cerrar el modal si se presiona fuera de él
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecciona un día</Text>
            <FlatList
              data={daysOfWeek}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.dayOption} 
                  onPress={() => {
                    setSelectedDay(item);  // Seleccionar el día
                    setShowModal(false);    // Cerrar el modal
                  }}
                >
                  <Text style={styles.dayText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Componente DateTimePicker */}
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',  // Hace que los componentes estén en una fila
  },
  dateButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    width: '40%',  // Reducido para dejar espacio al otro botón
    backgroundColor: Colors.background.main,
  },
  dateText: {
    fontSize: 16,
    color: Colors.text.main,
  },
  arrow: {
    fontSize: 18,
    color: Colors.text.main,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semi-transparente
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '50%', // Limita la altura máxima del modal
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  dayOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dayText: {
    color: Colors.text.main,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DateAndDay;
