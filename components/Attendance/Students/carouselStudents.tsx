import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
import { usePagerView } from "@/hooks/usePagerView";
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 

interface Icon {
  title: string;
  component: JSX.Element;
}

interface CarouselStudentsProps {
  students: Record<string, Icon>;
}

const STUDENTS_PER_PAGE = 3;

const CarouselStudents: React.FC<CarouselStudentsProps> = ({ students }) => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual
  const styles = createStyles(Colors); 

  const actionEntries = Object.entries(students);
  const pages: Array<Array<[string, Icon]>> = [];

  for (let i = 0; i < actionEntries.length; i += STUDENTS_PER_PAGE) {
    pages.push(actionEntries.slice(i, i + STUDENTS_PER_PAGE));
  }

  const {
    pagerViewRef,
    pageIndex,
    setPageIndex,
    handlePageScroll,
    extendedPages,
  } = usePagerView(pages);

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
              {pageButtons.map(
                (
                  [key, { title, component }]: [string, Icon],
                  index: number
                ) => (
                  <View style={styles.studentContainer} key={key}>
                    <TouchableOpacity style={styles.button}>
                      <View style={styles.iconContainer}>{component}</View>
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>{title}</Text>
                  </View>
                )
              )}
            </View>
          </View>
        ))}
      </PagerView>
    </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  container: {
    height: 120,
  },
  pager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  studentContainer: {
    width: "28%",
    alignItems: "center",
  },
  button: {
    flex: 1,
    backgroundColor: Colors.background.main,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    paddingVertical: 10,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: Colors.background.main,
    marginTop: 5,
    textAlign: "center",
  },
});

export default CarouselStudents;
