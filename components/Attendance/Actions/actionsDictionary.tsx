// icons.ts
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// Definimos la interfaz para los íconos
interface Icon {
  title: string;
  component: JSX.Element; // Componente del ícono
}

// Creamos un diccionario de íconos
const ActionsDictionary: Record<string, Icon> = {
  Register: { title: 'Registros', component: <MaterialIcons name="menu" size={24} color="black" /> },
  Report: { title: 'Informe', component: <MaterialIcons name="settings" size={24} color="black" /> },
  Consolidated: { title: 'Consolidado', component: <MaterialIcons name="more-horiz" size={24} color="black" /> },
  Excuse: { title: 'Excusa', component: <MaterialIcons name="assignment" size={24} color="black" /> },
  Delete: { title: 'Borrar', component: <MaterialIcons name="check-circle" size={24} color="black" /> },
  Offline: { title: 'Sin conexión', component: <MaterialIcons name="build" size={24} color="black" /> },
};

// Exportamos el diccionario para su uso en otros módulos
export default ActionsDictionary;
