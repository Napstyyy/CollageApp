// icons.ts
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { iconColor } from '@/constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

// Definimos la interfaz para los íconos
interface Icon {
  title: string;
  component: JSX.Element; // Componente del ícono
}

// Creamos un diccionario de íconos
const ActionsDictionary: Record<string, Icon> = {
  Register: { 
    title: 'Registros', 
    component: <FontAwesome name="list-alt" size={24} color={iconColor} /> 
  },
  Report: { 
    title: 'Informe', 
    component: <Entypo name="text-document" size={24} color={iconColor} /> 
  },
  Consolidated: { 
    title: 'Consolidado', 
    component: <MaterialIcons name="dashboard" size={24} color={iconColor} /> 
  },
  Excuse: { 
    title: 'Excusa', 
    component: <Feather name="alert-circle" size={24} color={iconColor} /> 
  },
  Delete: { 
    title: 'Borrar', 
    component: <Entypo name="trash" size={24} color={iconColor} />
  },
  Offline: {  
    title: 'Sin conexión', 
    component: <MaterialIcons name="signal-cellular-off" size={24} color={iconColor} /> 
  },
};

// Exportamos el diccionario para su uso en otros módulos
export default ActionsDictionary;
