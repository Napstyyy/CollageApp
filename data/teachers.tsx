import ITeacher from "@/interfaces/ITeacher";
  
  // Creamos un diccionario de profesores basado en la interfaz ITeacher
  const teacherDictionary: Record<string, ITeacher> = {
    "teacher1": { name: "John", lastName: "Doe" },
    "teacher2": { name: "Jane", lastName: "Smith" },
    "teacher3": { name: "Alice", lastName: "Johnson" },
    "teacher4": { name: "Michael", lastName: "Brown" },
  };

  export default teacherDictionary;