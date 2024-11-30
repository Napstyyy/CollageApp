import { useState } from 'react';
import IRegisterCard from '@/interfaces/IRegisterCard';

export const useRegisterCard = (): IRegisterCard => {
  const [isVisible, setIsVisible] = useState(false);

  const openRegisterCard = () => setIsVisible(true);
  const closeRegisterCard = () => setIsVisible(false);

  return { isVisible, openRegisterCard, closeRegisterCard };
};
