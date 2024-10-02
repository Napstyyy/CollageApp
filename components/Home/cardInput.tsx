import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { iconColor, mainBackgroundColor } from '@/constants/Colors';
import phoneWindow from '@/constants/Dimensions';

const CardInput: React.FC = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImage}>
        <Image
          source={require('@/assets/images/pruebaHorizontal.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.cardText}>
        <Text style={styles.text}>¿En qué estás pensando?</Text>
      </View>

      <View style={styles.cardFooter2}>
        <View style={styles.leftIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="folder-open" size={26} color={iconColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="image-outline" size={26} color={iconColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="videocam-outline" size={26} color={iconColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="link" size={26} color={iconColor} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <AntDesign name="up" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: phoneWindow.height * 0.34,
    width: phoneWindow.width * 0.9,
    backgroundColor: mainBackgroundColor,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  cardImage: {
    paddingTop: 8,
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  cardText: {
    flex: 0.2,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B4B2B2',
  },
  cardFooter2: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  leftIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginHorizontal: 8,
  },
  submitButton: {
    width: 50,
    height: 42,
    borderRadius: 8,
    backgroundColor: iconColor,
    paddingTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardInput;
