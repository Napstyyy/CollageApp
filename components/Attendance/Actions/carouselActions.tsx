import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Colors } from '@/constants/Colors';
import { usePagerView } from '@/hooks/usePagerView';
import MainTable from '@/components/Tables/mainTable'; // Importa el componente MainTable
import { Ionicons } from '@expo/vector-icons';
import CustomModal from '@/components/Modals/customModal';


interface Icon {
  title: string;
  component: JSX.Element;
}

interface CarouselActionsProps {
  actions: Record<string, Icon>;
}

const ACTIONS_PER_PAGE = 3;

const CarouselActions: React.FC<CarouselActionsProps> = ({ actions }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const actionEntries = Object.entries(actions);
  const pages: Array<Array<[string, Icon]>> = [];

  for (let i = 0; i < actionEntries.length; i += ACTIONS_PER_PAGE) {
    pages.push(actionEntries.slice(i, i + ACTIONS_PER_PAGE));
  }

  const { pagerViewRef, pageIndex, setPageIndex, handlePageScroll, extendedPages } = usePagerView(pages);

  const handlePress = (id: string) => {
    switch (id) {
      case 'Register':
        setModalVisible(true); // Mostrar el modal si el id es 'register'
        break;
      // Aquí puedes agregar más casos para manejar otros botones
      default:
        console.log(`Acción no definida para el id: ${id}`);
    }
  };

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerViewRef}
        style={styles.pager}
        initialPage={1}
        onPageSelected={(e) => setPageIndex(e.nativeEvent.position)}
        onPageScroll={handlePageScroll}
      >
        {extendedPages.map((pageButtons, pageIndex) => (
          <View style={styles.page} key={pageIndex}>
            <View style={styles.buttonGroup}>
              {pageButtons.map(([key, { title, component }]: [string, Icon], index: number) => (
                <TouchableOpacity key={index} style={styles.button} onPress={() => handlePress(key)}>
                  <View style={styles.iconContainer}>
                    {component}
                  </View>
                  <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </PagerView>

      <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <MainTable />
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
  },
  pager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    backgroundColor: Colors.background.main,
    borderRadius: 12,
    width: '28%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.icons.default,
    marginTop: 5,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    flex: 1,
    width: '100%',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButtonText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CarouselActions;
