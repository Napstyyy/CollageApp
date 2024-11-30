import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  FlatList,
} from 'react-native';

interface SlideTableProps {
  isVisible: boolean;
  onClose: () => void;
  slides: { id: string; title: string; content: React.ReactNode }[]; // Lista de diapositivas
}

const SlideTable: React.FC<SlideTableProps> = ({ isVisible, onClose, slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Controla la diapositiva activa

  // Cambiar de diapositiva al deslizar
  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / Dimensions.get('window').width);
    setCurrentIndex(newIndex);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <FlatList
            data={slides}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            renderItem={({ item }) => (
              <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.content}>{item.content}</View>
              </View>
            )}
          />
          <Text style={styles.pagination}>
            {currentIndex + 1}/{slides.length}
          </Text>
          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    width: '90%',
    maxHeight: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  slide: {
    width: Dimensions.get('window').width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
    color: 'gray',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SlideTable;
