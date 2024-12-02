import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import phoneWindow from '@/constants/Dimensions';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import { useTranslation } from 'react-i18next';


const CardInput: React.FC = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const { t } = useTranslation();

  const styles = createStyles(Colors);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImage}>
        <Image
          source={require('@/assets/images/pruebaHorizontal.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.cardText}>
        <Text style={styles.text}>{t('En_que_estas_pensando')}</Text>
      </View>

      <View style={styles.cardFooter2}>
        <View style={styles.leftIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="folder-open" size={26} color={Colors.icons.default} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="image-outline" size={26} color={Colors.icons.default} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="videocam-outline" size={26} color={Colors.icons.default} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign name="link" size={26} color={Colors.icons.default} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <AntDesign name="up" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  cardContainer: {
    height: phoneWindow.height * 0.34,
    width: phoneWindow.width * 0.9,
    backgroundColor: Colors.background.main,
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
    backgroundColor: Colors.icons.default,
    paddingTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardInput;
