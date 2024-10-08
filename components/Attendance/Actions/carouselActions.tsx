import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import { mainBackgroundColor, iconColor } from '@/constants/Colors';
import { usePagerView } from '@/hooks/usePagerView';

interface Icon {
  title: string;
  component: JSX.Element;
}

interface CarouselActionsProps {
  actions: Record<string, Icon>;
}

const ACTIONS_PER_PAGE = 3;

const CarouselActions: React.FC<CarouselActionsProps> = ({ actions }) => {
  const actionEntries = Object.entries(actions);
  const pages: Array<Array<[string, Icon]>> = [];

  for (let i = 0; i < actionEntries.length; i += ACTIONS_PER_PAGE) {
    pages.push(actionEntries.slice(i, i + ACTIONS_PER_PAGE));
  }

  const { pagerViewRef, pageIndex, setPageIndex, handlePageScroll, extendedPages } = usePagerView(pages);

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerViewRef}
        style={styles.pager}
        initialPage={1}
        onPageSelected={(e) => setPageIndex(e.nativeEvent.position)}
        onPageScroll={handlePageScroll}
      >
        {extendedPages.map((pageButtons, pageIndex) => (
          <View style={styles.page} key={pageIndex}>
            <View style={styles.buttonGroup}>
              {pageButtons.map(([key, { title, component }]: [string, Icon], index: number) => (
                <TouchableOpacity key={index} style={styles.button}>
                  <View style={styles.iconContainer}>
                    {component}
                  </View>
                  <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
  },
  pager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  button: {
    backgroundColor: mainBackgroundColor,
    borderRadius: 12,
    width: '28%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: iconColor,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CarouselActions;
