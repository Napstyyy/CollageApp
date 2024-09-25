import { Dimensions } from 'react-native';

// Definir la interfaz para el objeto phoneWindow
interface PhoneWindow {
  height: number;
  width: number;
}

// Obtener las dimensiones de la pantalla
const { height, width } = Dimensions.get('window');

// Crear el objeto phoneWindow con los valores obtenidos
const phoneWindow: PhoneWindow = {
  height,
  width,
};

// Exportar el objeto phoneWindow
export default phoneWindow;