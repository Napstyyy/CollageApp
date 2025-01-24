import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AttendanceState {
  selectedReason: string;
  setSelectedReason: (value: string) => void;
}

const AttendanceStateContext = createContext<AttendanceState | undefined>(undefined);

export const AttendanceStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedReason, setSelectedReason] = useState<string>('sin_excusa');

  return (
    <AttendanceStateContext.Provider value={{ selectedReason, setSelectedReason }}>
      {children}
    </AttendanceStateContext.Provider>
  );
};

export const useAttendanceState = (): AttendanceState => {
  const context = useContext(AttendanceStateContext);
  if (!context) {
    throw new Error('useAttendanceState must be used within an AttendanceStateProvider');
  }
  return context;
};