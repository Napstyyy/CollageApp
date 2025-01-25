import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, StyleSheet, FlatList, Text } from 'react-native';
import CountryFlag from "react-native-country-flag-icon";
import Icon from 'react-native-vector-icons/FontAwesome';
import i18n from '@/src/i18n/Translations';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';

const LANGUAGES = [
  { code: 'en', label: 'English', flagCode: 'US' },
  { code: 'es', label: 'Español', flagCode: 'ES' },
  { code: 'fr', label: 'Français', flagCode: 'FR' },
];

const LanguageSwitcher: React.FC = () => {
    const { theme } = useTheme(); // Obtener el tema actual
    const Colors = themeMap[theme]; // Obtener los colores del tema actual
    const styles = createStyles(Colors);

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setSelectedLanguage(code);
    setIsDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      {/* Botón principal */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Icon name="globe" size={24} color={Colors.background.main} />
      </TouchableOpacity>

      {/* Dropdown de idiomas */}
      {isDropdownOpen && (
        <Modal
          transparent
          animationType="fade"
          onRequestClose={() => setIsDropdownOpen(false)}
        >
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => setIsDropdownOpen(false)}
          />
          <View style={styles.dropdown}>
            <FlatList
              data={LANGUAGES}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.languageOption}
                  onPress={() => changeLanguage(item.code)}
                >
                  <CountryFlag isoCode={item.flagCode}  size={25}/>
                  <Text style={styles.languageLabel}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignContent: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -50 }],
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 5,
    width: 200,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  languageLabel: {
    fontSize: 16,
    marginLeft: 16,
  },
});

export default LanguageSwitcher;