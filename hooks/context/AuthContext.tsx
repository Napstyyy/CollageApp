import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  loginData: { username: string; password: string };
  setLoginData: (data: { username: string; password: string }) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  return (
    <AuthContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};