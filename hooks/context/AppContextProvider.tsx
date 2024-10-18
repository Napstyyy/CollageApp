import React, { ReactNode } from 'react';
import { ThemeProvider } from '@/hooks/context/ThemeContext';
import { AuthProvider } from '@/hooks/context/AuthContext';

interface AppContextProviderProps {
  children: ReactNode;
}

// Este componente envuelve toda la app y combina los contextos
const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  return (
      <ThemeProvider>
        <AuthProvider>
        {children}
      </AuthProvider>
      </ThemeProvider>
  );
};

export default AppContextProvider;