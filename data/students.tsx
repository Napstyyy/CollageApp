import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import Student from '@/interfaces/IStudent';
// Import local images
import StudentImage from '@/assets/images/Students/Student1.png';


// Creamos un hook personalizado para obtener el diccionario de estudiantes
const useStudentsDictionary = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  // Creamos un diccionario de estudiantes
  const StudentsDictionary: Record<number, Student> = {
    1: {
      image: StudentImage,
      name: 'John',
      lastname: 'Doe',
    },
    2: {
      image: StudentImage,
      name: 'Jane',
      lastname: 'Smith',
    },
    3: {
      image: StudentImage,
      name: 'Michael',
      lastname: 'Johnson',
    },
    // Add more students as needed
  };

  return StudentsDictionary;
};

// Exportamos el hook para su uso en otros módulos
export default useStudentsDictionary;