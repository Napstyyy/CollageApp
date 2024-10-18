// Definir un tipo para los colores soportados
export type SupportedColor = 'red' | 'green' | 'blue' | 'yellow' | 'orange';

// Definir el tipo para la estructura de colores
export interface IColorTheme {
  buttons: {
    main: string;
    secondary: string;
  };
  inputs: {
    main: string;
    placeholder: string;
    field: string;
  };
  text: {
    options: string;
    main: string;
    secondary: string;
  };
  background: {
    primary: string;
    secondary: string;
    main: string;
    gradient1: string;
    gradient2: string;
  };
  icons: {
    default: string;
  };
  gray: {
    light: string;
    normal: string;
    dark: string;
  };
  card: {
    gradient1: string;
    gradient2: string;
  }
  appColor: string;
}

// Función que ajusta el color
// Función que ajusta el color
const adjustColor = (color: string, adjustment: number): string => {
  const colorInt = parseInt(color.replace('#', ''), 16);
  
  // Aplica el ajuste y redondea los valores
  const r = Math.round((colorInt >> 16) + adjustment * 255);
  const g = Math.round(((colorInt >> 8) & 0x00FF) + adjustment * 255);
  const b = Math.round((colorInt & 0x0000FF) + adjustment * 255);

  // Asegura que los valores RGB estén dentro del rango [0, 255]
  return `#${((1 << 24) + 
    (Math.min(Math.max(0, r), 255) << 16) + 
    (Math.min(Math.max(0, g), 255) << 8) + 
    Math.min(Math.max(0, b), 255)).toString(16).slice(1)}`;
};

// Función para definir el tema basado en el color
const getThemeByColor = (mainColor: string): IColorTheme => {
  return {
    buttons: {
      main: adjustColor(mainColor, -0.2),   // Ajusta el color principal
      secondary: adjustColor(mainColor, 0.1) // Ajusta el color secundario
    },
    inputs: {
      main: adjustColor(mainColor, -0.5),      // Ajusta el color de entrada
      placeholder: adjustColor(mainColor, -0.7),
      field: adjustColor(mainColor, -0.6),
    },
    text: {
      options: adjustColor(mainColor, 0.3), // Ajusta el color de opciones
      main: adjustColor(mainColor, -0.2),   // Ajusta el color principal
      secondary: adjustColor(mainColor, 0.1), // Ajusta el color secundario
    },
    background: {
      primary: adjustColor(mainColor, 0.1),   // Ajusta el color de fondo
      secondary: adjustColor(mainColor, 0.3),
      main: '#FFFFFF',
      gradient1: adjustColor(mainColor, -0.3),
      gradient2: adjustColor(mainColor, 0.3),
    },
    icons: {
      default: adjustColor(mainColor, -0.5), // Ajusta el color de los íconos
    },
    gray: {
      light: '#EEEEEE',
      normal: '#B4B2B2',
      dark: '#222224',
    },
    card: {
      gradient1: adjustColor(mainColor, -0.3),
      gradient2: adjustColor(mainColor, 0.3),
    },
    appColor: adjustColor(mainColor, -0.2), // Color principal de la app
  };
};

// Definir el objeto Colors con el tema azul
export const blueTheme: IColorTheme = getThemeByColor('#315EB0');

export const themeMap: Record<SupportedColor, IColorTheme> = {
  red: getThemeByColor('#FF4C4C'),
  green: getThemeByColor('#4CAF50'),
  blue: blueTheme,
  yellow: getThemeByColor('#FFEB3B'),
  orange: getThemeByColor('#FF9800'),
};