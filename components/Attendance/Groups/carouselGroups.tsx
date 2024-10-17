import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Colors } from '@/constants/Colors';
import { usePagerView } from '@/hooks/usePagerView';

interface ButtonGroupProps {
  buttons: string[];
}

const BUTTONS_PER_PAGE = 3; // Number of buttons per page

const CarouselGroups: React.FC<ButtonGroupProps> = ({ buttons }) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null); // Track selected button

  // Divide the buttons into pages
  const pages = [];
  for (let i = 0; i < buttons.length; i += BUTTONS_PER_PAGE) {
    pages.push(buttons.slice(i, i + BUTTONS_PER_PAGE));
  }

  const { pagerViewRef, pageIndex, setPageIndex, handlePageScroll, extendedPages } = usePagerView(pages);

  const handleButtonPress = (button: string) => {
    setSelectedButton(button); // Update selected button state
  };

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerViewRef}
        style={styles.pager}
        initialPage={1} // Start on the first real page
        onPageSelected={(e) => setPageIndex(e.nativeEvent.position)} // Use onPageSelected
        onPageScroll={handlePageScroll}
      >
        {extendedPages.map((pageButtons, pageIndex) => (
          <View style={styles.page} key={pageIndex}>
            <View style={styles.buttonGroup}>
              {pageButtons.map((button: string, index: number) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.button,
                    selectedButton === button && styles.selectedButton, // Apply selected style
                  ]}
                  onPress={() => handleButtonPress(button)} // Handle button press
                >
                  <Text
                    style={[
                      styles.buttonText,
                      selectedButton === button && styles.selectedButtonText, // Change text color when selected
                    ]}
                  >
                    {button}
                  </Text>
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
    backgroundColor: Colors.background.main,
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
  selectedButton: {
    backgroundColor: Colors.icons.default, // Change background color when selected
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.icons.default,
  },
  selectedButtonText: {
    color: Colors.background.main, // Change text color when selected
  },
});

export default CarouselGroups;
