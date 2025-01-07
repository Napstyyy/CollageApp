import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import Student from '@/interfaces/Students/IStudent';
// Import local images


// Creamos un hook personalizado para obtener el diccionario de estudiantes
const useStudentsDictionary = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  // Creamos un diccionario de estudiantes
  const StudentsDictionary: Record<number, Student> = {
    1: {
      name: 'John',
      lastname: 'Doe',
      image: '@/assets/images/Students/Student1.png',
      grade: '10',
    },
    2: {
      name: 'Jane',
      lastname: 'Smith',
      image: '@/assets/images/Students/Student1.png',
      grade: '12',
    },
    3: {
      name: 'Michael',
      lastname: 'Johnson',
      image: '@/assets/images/Students/Student1.png',
      grade: '5',
    },
    4: {
      name: 'Mateo',
      lastname: 'Giraldo Arboleda',
      image: '@/assets/images/Students/Student1.png',
      grade: '4',
    },
    5: {
      name: 'John',
      lastname: 'Doe',
      image: '@/assets/images/Students/Student1.png',
      grade: '10',
    },
    6: {
      name: 'Jane',
      lastname: 'Smith',
      image: '@/assets/images/Students/Student1.png',
      grade: '12',
    },
    7: {
      name: 'Michael',
      lastname: 'Johnson',
      image: '@/assets/images/Students/Student1.png',
      grade: '5',
    },
    8: {
      name: 'Mateo',
      lastname: 'Giraldo Arboleda',
      image: '@/assets/images/Students/Student1.png',
      grade: '4',
    },
    // Add more students as needed
  };

  return StudentsDictionary;
};

// Exportamos el hook para su uso en otros módulos
export default useStudentsDictionary;