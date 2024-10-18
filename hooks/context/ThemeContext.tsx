import React, { createContext, useState, useContext, ReactNode } from 'react';
import { SupportedColor } from '@/constants/Colors'; // Importar el tipo de colores

// Definir la interfaz del contexto
interface ThemeContextType {
  theme: SupportedColor;
  setThemeColor: (color: SupportedColor) => void;
}

// Crear el contexto con un valor inicial undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// En el ThemeProvider
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<SupportedColor>('blue'); // Estado inicial con color 'blue'

  const setThemeColor = (color: SupportedColor) => {
    setTheme(color);
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el contexto de tema
// En ThemeContext.js
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  console.log('Theme context:', context); // Agregar este console.log
  if (!context) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};