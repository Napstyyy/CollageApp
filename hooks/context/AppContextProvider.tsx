import React, { ReactNode } from 'react';
import { ThemeProvider } from '@/hooks/context/ThemeContext';
import { AuthProvider } from '@/hooks/context/AuthContext';
import i18n from '@/src/i18n/Translations';
import { I18nextProvider } from 'react-i18next';
import { AttendanceStateProvider } from '@/hooks/context/AttendanceContext';

interface AppContextProviderProps {
  children: ReactNode;
}

// Este componente envuelve toda la app y combina los contextos
const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  return (
    
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <AuthProvider>
        <AttendanceStateProvider>
        {children}
        </AttendanceStateProvider>
      </AuthProvider>
      </ThemeProvider>
      </I18nextProvider>
      
  );
};

export default AppContextProvider;