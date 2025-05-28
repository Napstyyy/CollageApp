export interface MatrixItem {
  id: number;
  Nombre: string;
  Cargo: string;  // Cambiado de "Valor" a "Cargo"
  Estado: number; // 0 = inactivo, 1 = activo
}

export const matrixData: MatrixItem[] = [
  { 
    id: 1, 
    Nombre: 'Mauricio Giraldo', 
    Cargo: 'Desarrollador Frontend', 
    Estado: 1 
  },
  { 
    id: 2, 
    Nombre: 'Ana Rodríguez', 
    Cargo: 'Diseñadora UX/UI', 
    Estado: 1 
  },
  { 
    id: 3, 
    Nombre: 'Carlos Sánchez', 
    Cargo: 'Gerente de Proyectos', 
    Estado: 1 
  },
  { 
    id: 4, 
    Nombre: 'Luisa Fernández', 
    Cargo: 'Especialista en Marketing', 
    Estado: 0 
  },
  { 
    id: 5, 
    Nombre: 'Pedro Gómez', 
    Cargo: 'Analista de Datos', 
    Estado: 1 
  },
  { 
    id: 6, 
    Nombre: 'Sofía Martínez', 
    Cargo: 'Recursos Humanos', 
    Estado: 0 
  },
  { 
    id: 7, 
    Nombre: 'David López', 
    Cargo: 'Desarrollador Backend', 
    Estado: 1 
  },
];