import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Modal, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap } from '@/constants/Colors';
import { IColorTheme } from '@/constants/Colors';
import { API_BASE_URL } from '@/config';

interface Candidato {
  Nombre: string;
  Apellido: string;
  DocumentoIdentidad: string;
  Correo: string;
  Telefono: string;
  CandidatoID: number;
}

const MatrixComponent: React.FC = () => {
  const { theme } = useTheme();
  const Colors = themeMap[theme];
  const styles = createStyles(Colors);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Candidato | null>(null);
  const [candidatos, setCandidatos] = useState<Candidato[]>([]);
  const [refreshing, setRefreshing] = useState(false); // 👈 Estado de refresco

  const fetchCandidatos = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/candidatos/`, {
        headers: {
          accept: 'application/json',
        },
      });
      const data = await response.json();
      setCandidatos(data);
    } catch (error) {
      console.error('Error fetching candidatos:', error);
    }
  };

  useEffect(() => {
    fetchCandidatos();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchCandidatos();
    setRefreshing(false);
  };

  const openModal = (item: Candidato) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }: { item: Candidato }) => (
    <Swipeable
      renderLeftActions={(progress) => renderLeftActions(progress, item)}
      renderRightActions={(progress) => renderRightActions(progress, item)}
    >
      <View style={styles.row}>
        <Text style={styles.cell}>{item.Nombre} {item.Apellido}</Text>
        <Text style={styles.cell}>{item.DocumentoIdentidad}</Text>
        <Text style={styles.cell}>{item.Correo}</Text>
      </View>
    </Swipeable>
  );

  const renderLeftActions = (progress: Animated.AnimatedInterpolation<number>, item: Candidato) => {
    const translateX = progress.interpolate({ inputRange: [0, 1], outputRange: [-100, 0], extrapolate: 'clamp' });
    return (
      <Animated.View style={[styles.actionContainer, { transform: [{ translateX }] }]}>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#ff6464' }]} onPress={() => alert('Eliminar')}>
          <Icon name="trash" size={20} color={Colors.background.main} />
          <Text style={styles.actionText}>Eliminar</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const renderRightActions = (progress: Animated.AnimatedInterpolation<number>, item: Candidato) => {
    const translateX = progress.interpolate({ inputRange: [0, 1], outputRange: [100, 0], extrapolate: 'clamp' });
    return (
      <Animated.View style={[styles.actionContainer, { transform: [{ translateX }] }]}>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#4CAF50' }]} onPress={() => openModal(item)}>
          <Icon name="edit" size={20} color={Colors.background.main} />
          <Text style={styles.actionText}>Editar</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.headerTopBar}>
              <Text style={styles.headerTopBarText}>Candidatos</Text>
            </View>
            <View style={styles.header}>
              <Text style={styles.heading}>Nombre</Text>
              <Text style={styles.heading}>DNI</Text>
              <Text style={styles.heading}>Correo</Text>
            </View>
          </>
        }
        data={candidatos}
        keyExtractor={(item) => item.CandidatoID.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        refreshing={refreshing} // 👈 Habilita el spinner de recarga
        onRefresh={handleRefresh} // 👈 Función para recargar al arrastrar hacia abajo
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {selectedItem ? `Detalle de ${selectedItem.Nombre} ${selectedItem.Apellido}` : ''}
            </Text>
            <Text style={styles.modalText}>DNI: {selectedItem?.DocumentoIdentidad}</Text>
            <Text style={styles.modalText}>Correo: {selectedItem?.Correo}</Text>
            <Text style={styles.modalText}>Teléfono: {selectedItem?.Telefono}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
};

const createStyles = (Colors: IColorTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background.main,
      paddingVertical: 30,
      paddingHorizontal: 30,
      borderRadius: 16,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginVertical: 8,
      marginHorizontal: 2,
      elevation: 1,
      borderRadius: 3,
      backgroundColor: Colors.background.main,
    },
    headerTopBar: {
      backgroundColor: Colors.buttons.main,
      paddingVertical: 10,
      borderRadius: 5,
      elevation: 2,
      marginBottom: 15,
      width: '100%',
    },
    headerTopBarText: {
      color: Colors.background.main,
      fontSize: 16,
      textAlign: 'center',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    heading: {
      flex: 1,
      fontSize: 15,
      textAlign: 'center',
    },
    cell: {
      fontSize: 15,
      textAlign: 'center',
      flex: 1,
    },
    actionContainer: {
      flexDirection: 'row',
      width: '100%',
      height: '100%',
    },
    actionButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    actionText: {
      color: '#fff',
      fontSize: 12,
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: '80%',
      backgroundColor: Colors.background.main,
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      marginBottom: 10,
      color: Colors.text.main,
    },
    modalText: {
      fontSize: 16,
      marginBottom: 8,
      color: Colors.text.main,
    },
    closeButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: Colors.buttons.main,
      borderRadius: 5,
    },
    closeButtonText: {
      color: Colors.background.main,
    },
    icon: {
      alignSelf: 'center',
    }
  });

export default MatrixComponent;
