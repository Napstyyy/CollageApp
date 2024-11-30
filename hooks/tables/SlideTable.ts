import { useState } from 'react';
import ISlideTable from '@/interfaces/ISlideTable';

export const useSlideTable = (): ISlideTable => {
  const [isVisible, setIsVisible] = useState(false);

  const openSlideTable = () => setIsVisible(true);
  const closeSlideTable = () => setIsVisible(false);

  return { isVisible, openSlideTable, closeSlideTable };
};
