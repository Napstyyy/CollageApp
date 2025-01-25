import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  LayoutChangeEvent,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';
import phoneWindow from '@/constants/Dimensions';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import useStudentsDictionary from '@/data/students';

interface SlideTableProps<T> {
  data: Record<string | number, T>;
  isVisible: boolean;
  onClose: () => void;
  renderCard: (item: T) => React.ReactNode;
  searchKey: keyof T;
  defaultIndex?: number;
}

const SlideTable = <T,>({
  data,
  isVisible,
  onClose,
  renderCard,
  searchKey,
  defaultIndex = 0,
}: SlideTableProps<T>): JSX.Element => {
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];
  const styles = createStyles(Colors);
  const { t } = useTranslation();
  const students = useStudentsDictionary();

  const [dynamicSize, setDynamicSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [carouselIndex, setCarouselIndex] = useState<number>(defaultIndex);
  const [userHasSlid, setUserHasSlid] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  useEffect(() => {
    if (isVisible) {
      setCarouselIndex(defaultIndex);
      setUserHasSlid(false);
    }
  }, [isVisible, defaultIndex]);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setDynamicSize({ width, height });
  }, []);

  const studentOptions = Object.entries(students).map(([id, student]) => ({
    label: `${student.name} ${student.lastname}`,
    value: Number(id),
  }));

  return (
    <Modal visible={isVisible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.mainContainer}>
          <View style={styles.searchContainer}>
            <DropDownPicker
              open={openDropdown}
              value={selectedStudent}
              items={studentOptions}
              setOpen={setOpenDropdown}
              setValue={setSelectedStudent}
              placeholder={t('Seleccionar estudiante')}
              style={styles.dropdown}
            />
          </View>
          <Carousel
            width={phoneWindow.width}
            data={selectedStudent !== null ? [[String(selectedStudent), students[selectedStudent]]] : Object.entries(data)}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 50,
            }}
            renderItem={({ item: [key, value] }) => (
              <View style={styles.cardContainer} key={key}>
                <View style={styles.scrollWrapper}>
                  <ScrollView
                    style={styles.carouselContainer}
                    contentContainerStyle={styles.scrollContent}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                  >
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                      <Icon name="close" size={24} color="#fff" />
                    </TouchableOpacity>
                    {renderCard(value)}
                  </ScrollView>
                </View>
              </View>
            )}
            loop={false}
            onSnapToItem={(index: number): void => {
              setCarouselIndex(index);
              setUserHasSlid(true);
            }}
            defaultIndex={carouselIndex}
          />
        </View>
      </View>
    </Modal>
  );
};

const createStyles = (Colors: IColorTheme) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop: phoneWindow.height * 0.32,
    },
    mainContainer: {
      width: '100%',
      height: '100%',
    },
    searchContainer: {
      width: '90%',
      alignSelf: 'center',
    },
    dropdown: {
      backgroundColor: Colors.background.main,
      borderRadius: 8,
    },
    closeButton: {
      position: 'absolute',
      top: 20,
      right: 20,
      backgroundColor: Colors.buttons.main,
      borderRadius: 32,
      padding: 8,
      zIndex: 10,
    },
    cardContainer: {
      flex: 1,
      width: '100%',
    },
    scrollWrapper: {
      flex: 1,
      width: '100%',
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: Colors.background.main,
    },
    carouselContainer: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    scrollContent: {
      flexGrow: 1,
      paddingBottom: 20,
    },
  });

export default SlideTable;
