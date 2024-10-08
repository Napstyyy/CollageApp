//Este hook me permite crear el scroll infinitio para los PageView (carrouseles que utilizamos)

// usePagerView.ts
import { useEffect, useRef, useState } from 'react';
import PagerView from 'react-native-pager-view';

export const usePagerView = (pages: any[]) => {
  const pagerViewRef = useRef<PagerView>(null);
  const [pageIndex, setPageIndex] = useState(1); // Página inicial

  const extendedPages = [
    pages[pages.length - 1], // Última página duplicada (para el loop infinito)
    ...pages,
    pages[0], // Primera página duplicada (para el loop infinito)
  ];

  useEffect(() => {
    if (pagerViewRef.current) {
      pagerViewRef.current.setPageWithoutAnimation(1); // Evitar parpadeo inicial
    }
  }, []);

  const handlePageScroll = (e: any) => {
    const { position, offset } = e.nativeEvent;
    const pageCount = extendedPages.length;

    if (position === 0 && offset === 0) {
      pagerViewRef.current?.setPageWithoutAnimation(pageCount - 2); // Rebote al final
    } else if (position === pageCount - 1 && offset === 0) {
      pagerViewRef.current?.setPageWithoutAnimation(1); // Rebote al inicio
    }
  };

  return { pagerViewRef, pageIndex, setPageIndex, handlePageScroll, extendedPages };
};
