import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors'; 
import Student from '@/interfaces/Students/IStudent';
// Import local images


// Creamos un hook personalizado para obtener el diccionario de estudiantes
const useStudentsDictionary = () => {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors: IColorTheme = themeMap[theme]; // Obtener los colores del tema actual

  interface Employee {
  name: string;
  lastname: string;
  image: string;
  position: string;
  email?: string;
  phone?: string;
}

interface OrganizationDictionary {
  [department: string]: Record<number, Employee>;
}

const EmployeesByDepartment: OrganizationDictionary = {
  "Recursos Humanos": {
    101: {
      name: "Laura",
      lastname: "Gómez Mendoza",
      image: "@/assets/images/employees/hr1.jpg",
      position: "Directora de RH",
      email: "l.gomez@empresa.com"
    },
    102: {
      name: "Carlos",
      lastname: "Ramírez Soto",
      image: "@/assets/images/employees/hr2.jpg",
      position: "Especialista en Reclutamiento",
      phone: "+57 310 123 4567"
    }
  },
  "Marketing": {
    201: {
      name: "Andrés",
      lastname: "Martínez Rojas",
      image: "@/assets/images/employees/mkt1.jpg",
      position: "Director de Marketing",
      email: "a.martinez@empresa.com"
    },
    202: {
      name: "Daniela",
      lastname: "Vargas Gil",
      image: "@/assets/images/employees/mkt2.jpg",
      position: "Especialista en Redes Sociales"
    }
  },
  "Desarrollo de Software": {
    301: {
      name: "Alejandro",
      lastname: "Rodríguez Mejía",
      image: "@/assets/images/employees/dev1.jpg",
      position: "CTO",
      email: "a.rodriguez@empresa.com"
    },
    302: {
      name: "Camila",
      lastname: "Silva Hernández",
      image: "@/assets/images/employees/dev2.jpg",
      position: "Desarrolladora Frontend Senior"
    }
  },
  "Diseño Gráfico": {
    401: {
      name: "Isabella",
      lastname: "Cárdenas Ruiz",
      image: "@/assets/images/employees/design1.jpg",
      position: "Directora Creativa"
    },
    402: {
      name: "Gabriel",
      lastname: "Moreno Vega",
      image: "@/assets/images/employees/design2.jpg",
      position: "Diseñador UI/UX"
    }
  },
  "Atención al Cliente": {
    501: {
      name: "Sofía",
      lastname: "López Giraldo",
      image: "@/assets/images/employees/cs1.jpg",
      position: "Supervisora de Servicio al Cliente"
    },
    502: {
      name: "Miguel",
      lastname: "Gutiérrez Restrepo",
      image: "@/assets/images/employees/cs2.jpg",
      position: "Agente de Soporte Técnico"
    }
  },
  "Ventas": {
    601: {
      name: "Ricardo",
      lastname: "Ospina Valencia",
      image: "@/assets/images/employees/sales1.jpg",
      position: "Director Comercial"
    },
    602: {
      name: "Carolina",
      lastname: "Santos Herrera",
      image: "@/assets/images/employees/sales2.jpg",
      position: "Ejecutiva de Cuentas"
    }
  }
};

  return EmployeesByDepartment;
};

// Exportamos el hook para su uso en otros módulos
export default useStudentsDictionary;