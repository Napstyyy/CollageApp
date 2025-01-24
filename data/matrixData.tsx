export interface MatrixItem {
  id: number;
  Nombre: string;
  Valor: string;
  Estado: number | null;
}

export const matrixData: MatrixItem[] = [
  { id: 1, Nombre: 'Nombre', Valor: 'Mauricio', Estado: null },
  { id: 2, Nombre: 'Apellido', Valor: 'Giraldo Arboleda', Estado: null },
  { id: 3, Nombre: 'Nombre Empresa', Valor: '', Estado: null },
  { id: 4, Nombre: 'Contrato', Valor: 'Contrato No firmado', Estado: 1 },
  { id: 5, Nombre: 'Productos Servicios', Valor: '', Estado: 1 },
  { id: 6, Nombre: 'Menu o Catalogo', Valor: 'Catalogo No Enviado', Estado: 1 },
  { id: 7, Nombre: 'Foto Documento', Valor: 'Identidad No Verificada', Estado: 1 },
];