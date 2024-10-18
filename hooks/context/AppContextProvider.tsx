import React, { ReactNode } from 'react';
import { ThemeProvider } from '@/hooks/context/ThemeContext';

interface AppContextProviderProps {
  children: ReactNode;
}

// Este componente envuelve toda la app y combina los contextos
const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  return (
      <ThemeProvider>
        {children}
      </ThemeProvider>
  );
};

export default AppContextProvider;