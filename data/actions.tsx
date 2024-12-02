import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { useTranslation } from 'react-i18next';

// Definimos la interfaz para los íconos
interface Icon {
  title: string;
  component: JSX.Element; // Componente del ícono
}

// Creamos un hook personalizado para obtener el diccionario de acciones
const useActionsDictionary = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const { t } = useTranslation(); // Traducción
  // Creamos un diccionario de íconos
  const ActionsDictionary: Record<string, Icon> = {
    Register: { 
      title: t('Registros'), 
      component: <FontAwesome name="list-alt" size={24} color={Colors.icons.default} /> 
    },
    Report: { 
      title: t('Informe'), 
      component: <Entypo name="text-document" size={24} color={Colors.icons.default} /> 
    },
    Consolidated: { 
      title: t('Consolidado'), 
      component: <MaterialIcons name="dashboard" size={24} color={Colors.icons.default} /> 
    },
    Excuse: { 
      title: t('Excusa'), 
      component: <Feather name="alert-circle" size={24} color={Colors.icons.default} /> 
    },
    Delete: { 
      title: t('Borrar'), 
      component: <Entypo name="trash" size={24} color={Colors.icons.default} />
    },
    Offline: {  
      title: t('Sin_conexion'), 
      component: <MaterialIcons name="signal-cellular-off" size={24} color={Colors.icons.default} /> 
    },
  };

  return ActionsDictionary;
};

// Exportamos el hook para su uso en otros módulos
export default useActionsDictionary;