import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { lightGray, iconColor, PlaceHolderInputColor } from '@/constants/Colors';
import BlankComponent from '@/components/BlankComponent';

const InputComponent: React.FC = () => {

  return (
      <View style={styles.inputComponent}>
        <View style={styles.leftColumn}>
          <TouchableOpacity style={styles.profileIcon}>
            <Ionicons name="person-outline" size={26} color={iconColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.placeholderText}>¿En qué estás pensando?</Text>
          <BlankComponent BCwidth="100%" BCheight="40%" />
          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.iconButton}>
              <MaterialIcons name="folder-open" size={26} color={iconColor} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="image-outline" size={26} color={iconColor} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="videocam-outline" size={26} color={iconColor} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.submitButton}>
        <AntDesign name="up" size={26} color="white" />
      </TouchableOpacity>
      </View>
      
  );
};

const styles = StyleSheet.create({
  inputComponent: {
    width: '100%',
    flex: 0.16,
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
  },
  profileIcon: {
    width: '100%',
    height: '64%',
    borderRadius: 100,
    backgroundColor: lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: PlaceHolderInputColor,
    fontSize: 16,
    marginBottom: 8,
  },
  iconRow: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 8,
  },
  submitButton: {
    width: '12%',
    height: '30%',
    borderRadius: 8,
    backgroundColor: iconColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});

export default InputComponent;