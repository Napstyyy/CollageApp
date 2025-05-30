import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/hooks/context/AuthContext';

const DrawerContentTextContainer: React.FC = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const { t } = useTranslation(); // Traducción
  const styles = createStyles(Colors);
  const { loginData } = useAuth(); // Accede al estado global del contexto
  return (
      <View>
      <Text style={styles.userName}>{loginData.username}</Text>
        <Text style={styles.title}>{t('Procesos_educativos')}</Text>
      </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text.main,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text.secondary,
  },
  
});

export default DrawerContentTextContainer;