import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Card from '@/components/Attendance/card';
import Entypo from '@expo/vector-icons/Entypo';
import DateAndDay from '@/components/Attendance/Date/dateAndDay';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import { IColorTheme } from '@/constants/Colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useAttendanceState } from '@/hooks/context/AttendanceContext';

const DateCard: React.FC<{ onSelectDate: (date: string) => void }> = ({ onSelectDate }) => {
  const { theme } = useTheme();
  const Colors = themeMap[theme];
  const { t } = useTranslation();
  const styles = createStyles(Colors);

  const { selectedReason, setSelectedReason } = useAttendanceState();
  const [isManual, setIsManual] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('Matemáticas'); // Estado para Materia
  const [selectedHour, setSelectedHour] = useState<string>('1'); // Estado para Hora

  const handleDateSelect = (date: string) => {
    onSelectDate(date);
  };

  //Simulador de respuestas:
  const simulateResponse = (): boolean => {
    const manualResponse = true; 
    return manualResponse !== null ? manualResponse : Math.random() > 0.5;
  };

  return (
    <Card gradientColors={[Colors.card.gradient2, Colors.card.gradient1]}>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedReason}
          onValueChange={(itemValue) => setSelectedReason(itemValue)}
          style={styles.picker}
          dropdownIconColor={Colors.buttons.main}
          mode="dropdown"
        >
          <Picker.Item label={t('Sin excusa')} value={t('Sin excusa')} color={Colors.text.main} />
          <Picker.Item label={t('Con excusa')} value={t('Con excusa')} color={Colors.text.main} />
        </Picker>
      </View>

      <DateAndDay onDatePress={handleDateSelect} />


      <View style={styles.checkboxRow}>
        <BouncyCheckbox
          isChecked={isManual}
          size={20}
          fillColor={Colors.background.secondary}
          unFillColor={Colors.background.main}
          iconStyle={{ borderColor: Colors.buttons.main }}
          innerIconStyle={{ borderWidth: 1.6 }}
          onPress={() => setIsManual((prev) => !prev)}
          style={styles.checkbox}
        />
        <Text style={styles.text}>Manual?</Text>
      </View>

      {/* Renderizar dropdowns solo si "Manual" está seleccionado */}
      {isManual && (
        <View style={styles.row}>
          {/* Dropdown para Materia */}
          <View style={[styles.dropdownContainer, styles.dropdownHalf]}>
            <Picker
              selectedValue={selectedSubject}
              onValueChange={(itemValue) => setSelectedSubject(itemValue)}
              style={styles.picker}
              dropdownIconColor={Colors.buttons.main}
              mode="dropdown"
            >
              <Picker.Item label="Seleccionar materia" value="" color={Colors.text.secondary} />
              <Picker.Item label="Matemáticas" value="Matemáticas" color={Colors.text.main} />
              <Picker.Item label="Ciencias" value="Ciencias" color={Colors.text.main} />
              <Picker.Item label="Historia" value="Historia" color={Colors.text.main} />
              <Picker.Item label="Inglés" value="Inglés" color={Colors.text.main} />
            </Picker>
          </View>

          {/* Dropdown para Hora */}
          <View style={[styles.dropdownContainer, styles.dropdownHalf]}>
            <Picker
              selectedValue={selectedHour}
              onValueChange={(itemValue) => setSelectedHour(itemValue)}
              style={styles.picker}
              dropdownIconColor={Colors.buttons.main}
              mode="dropdown"
            >
              <Picker.Item label="Seleccionar hora" value="" color={Colors.text.secondary} />
              {Array.from({ length: 7 }, (_, i) => (
                <Picker.Item key={i + 1} label={`Hora ${i + 1}`} value={`${i + 1}`} color={Colors.text.main} />
              ))}
            </Picker>
          </View>
        </View>
      )}
    </Card>
  );
};

export default DateCard;

const createStyles = (Colors: IColorTheme) =>
  StyleSheet.create({
    dropdownContainer: {
      marginBottom: 16,
      borderWidth: 1,
      borderColor: 'transparent',
      borderRadius: 8,
      backgroundColor: Colors.background.main,
      overflow: 'hidden',
    },
    picker: {
      height: 50,
      color: Colors.text.main,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 16,
    },
    checkboxRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16,
    },
    checkbox: {
      width: 20,
      marginRight: 8,
    },
    text: {
      fontSize: 16,
      color: Colors.background.main,
    },
    dropdownHalf: {
      flex: 0.48,
    },
  });