import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Card from '@/components/Attendance/card';
import CardHeader from '@/components/Attendance/cardHeader';

const DateCard: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('jueves');

  return (
    <Card gradientColors={['#3E84E0', '#22487A']}>
      <CardHeader title="Jueves" subtitle="08/08/2024" />
      <Picker
        selectedValue={selectedDay}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedDay(itemValue)}
      >
        <Picker.Item label="Jueves" value="jueves" />
        <Picker.Item label="Viernes" value="viernes" />
      </Picker>
    </Card>
  );
};

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 150,
    color: '#fff',
  },
});

export default DateCard;
