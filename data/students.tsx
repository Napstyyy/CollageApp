import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import Student from '@/interfaces/IStudent';
// Import local images


// Creamos un hook personalizado para obtener el diccionario de estudiantes
const useStudentsDictionary = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  // Creamos un diccionario de estudiantes
  const StudentsDictionary: Record<number, Student> = {
    1: {
      image: '@/assets/images/Students/Student1.png',
      name: 'John',
      lastname: 'Doe',
    },
    2: {
      image: '@/assets/images/Students/Student1.png',
      name: 'Jane',
      lastname: 'Smith',
    },
    3: {
      image: '@/assets/images/Students/Student1.png',
      name: 'Michael',
      lastname: 'Johnson',
    },
    4: {
      image: '@/assets/images/Students/Student1.png',
      name: 'Mateo',
      lastname: 'Giraldo Arboleda',
    },
    // Add more students as needed
  };

  return StudentsDictionary;
};

// Exportamos el hook para su uso en otros módulos
export default useStudentsDictionary;