import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

// Definimos la interfaz para los íconos
interface Icon {
  title: string;
  component: JSX.Element; // Componente del ícono
}

// Creamos un hook personalizado para obtener el diccionario de acciones
const useActionsDictionary = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  // Creamos un diccionario de íconos
  const ActionsDictionary: Record<string, Icon> = {
    Register: { 
      title: 'Registros', 
      component: <FontAwesome name="list-alt" size={24} color={Colors.icons.default} /> 
    },
    Report: { 
      title: 'Informe', 
      component: <Entypo name="text-document" size={24} color={Colors.icons.default} /> 
    },
    Consolidated: { 
      title: 'Consolidado', 
      component: <MaterialIcons name="dashboard" size={24} color={Colors.icons.default} /> 
    },
    Excuse: { 
      title: 'Excusa', 
      component: <Feather name="alert-circle" size={24} color={Colors.icons.default} /> 
    },
    Delete: { 
      title: 'Borrar', 
      component: <Entypo name="trash" size={24} color={Colors.icons.default} />
    },
    Offline: {  
      title: 'Sin conexión', 
      component: <MaterialIcons name="signal-cellular-off" size={24} color={Colors.icons.default} /> 
    },
  };

  return ActionsDictionary;
};

// Exportamos el hook para su uso en otros módulos
export default useActionsDictionary;