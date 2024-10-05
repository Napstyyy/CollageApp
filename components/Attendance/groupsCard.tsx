import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Switch } from 'react-native';
import { AntDesign, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { iconColor, mainBackgroundColor } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MainInputColor, OptionsText } from '@/constants/Colors';

const GroupsCard: React.FC = () => {
  const [sendNotifications, setSendNotifications] = useState(false);
  return (
    <LinearGradient
      colors={['#22487A', '#3E84E0']}
      style={styles.cardContainer}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.row1}>
      
      <View style={styles.profileIcon}>
            <MaterialIcons name="groups" size={42} color="black" />
          </View>
      <View style={styles.groupName}>
        <Text style={styles.name}>Primero A</Text>
      <View style={styles.sendNotificationsContainer}>
        <Text style={styles.sendNotificationsText}>¿Enviar notificaciones?</Text>
        <Switch 
              value={sendNotifications} 
              onValueChange={value => setSendNotifications(value)}
              trackColor={{ false: '#E5E5E5', true: '#E5E5E5' }} // Colores para off y on
                thumbColor={sendNotifications ? OptionsText : '#f4f3f4'} // Color del círculo
            />
        </View>
      </View>
      </View>
      <View style={styles.row2}>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 0.4,
    width: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    flexDirection: 'column',  // Mantiene los elementos apilados verticalmente
    alignItems: 'center',     // Centra horizontalmente
    justifyContent: 'center', // Centra verticalmente todo el contenido
  },
  row1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',  // Alinea verticalmente el contenido en row1
    paddingHorizontal: 20, // Para mantener espaciado horizontal si es necesario
  },
  profileIcon: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: mainBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  groupName: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: mainBackgroundColor,
  },
  sendNotificationsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sendNotificationsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: mainBackgroundColor,
  },
  row2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center', // Centra horizontalmente en row2
    alignItems: 'center',     // Alinea verticalmente el contenido en row2
    padding: 16,
  },
});

export default GroupsCard;