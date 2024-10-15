import React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, Dimensions } from 'react-native';
import { mainBackgroundColor } from '@/constants/Colors';

// Obtener dimensiones de la pantalla
const { width, height } = Dimensions.get('window');

// Definir la interfaz para los elementos de la tabla
interface TableRowData {
  id: string;
  name: string;
  age: number;
  city: string;
  email: string;
  phone: string;
  department: string;
  position: string;
}

// Datos de ejemplo
const data: TableRowData[] = [
  { id: '1', name: 'Juan Pérez', age: 28, city: 'Ciudad de México', email: 'juan.perez@example.com', phone: '555-1234', department: 'Ventas', position: 'Gerente' },
  { id: '2', name: 'María García', age: 34, city: 'Buenos Aires', email: 'maria.garcia@example.com', phone: '555-5678', department: 'Marketing', position: 'Especialista' },
  { id: '3', name: 'Carlos López', age: 22, city: 'Madrid', email: 'carlos.lopez@example.com', phone: '555-8765', department: 'Desarrollo', position: 'Ingeniero' },
  { id: '4', name: 'Ana Fernández', age: 29, city: 'Lima', email: 'ana.fernandez@example.com', phone: '555-4321', department: 'Recursos Humanos', position: 'Coordinadora' },
  { id: '5', name: 'Luis Gómez', age: 31, city: 'Santiago', email: 'luis.gomez@example.com', phone: '555-6789', department: 'Finanzas', position: 'Analista' },
  { id: '6', name: 'Laura Sánchez', age: 27, city: 'Bogotá', email: 'laura.sanchez@example.com', phone: '555-9876', department: 'Soporte', position: 'Técnico' },
  { id: '7', name: 'Pedro Martínez', age: 35, city: 'Caracas', email: 'pedro.martinez@example.com', phone: '555-3456', department: 'Operaciones', position: 'Supervisor' },
  { id: '8', name: 'Lucía Ruiz', age: 24, city: 'Quito', email: 'lucia.ruiz@example.com', phone: '555-6543', department: 'Logística', position: 'Coordinadora' },
  // Puedes agregar más datos según necesites
];

// Definir las columnas de la tabla
const columns = [
  { key: 'id', label: 'ID', width: 60 },
  { key: 'name', label: 'Nombre', width: 150 },
  { key: 'age', label: 'Edad', width: 80 },
  { key: 'city', label: 'Ciudad', width: 120 },
  { key: 'email', label: 'Email', width: 200 },
  { key: 'phone', label: 'Teléfono', width: 120 },
  { key: 'department', label: 'Departamento', width: 150 },
  { key: 'position', label: 'Posición', width: 150 },
];

const MainTable: React.FC = () => {
  // Renderizar cada fila de la tabla
  const renderItem = ({ item, index }: { item: TableRowData; index: number }) => (
    <View
      style={[
        styles.tableRow,
        index % 2 === 0 ? styles.rowEven : styles.rowOdd,
      ]}
    >
      {columns.map((column) => (
        <Text key={column.key} style={[styles.cellText, { width: column.width }]}>
          {item[column.key as keyof TableRowData]}
        </Text>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View>
          {/* Encabezado de la tabla */}
          <View style={styles.tableHeader}>
            {columns.map((column) => (
              <Text key={column.key} style={[styles.headerText, { width: column.width }]}>
                {column.label}
              </Text>
            ))}
          </View>
          {/* Cuerpo de la tabla */}
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.tableBody}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
    padding: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  tableBody: {
    // Añadir un borde inferior al encabezado
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  rowEven: {
    backgroundColor: '#f9f9f9',
  },
  rowOdd: {
    backgroundColor: '#fff',
  },
  cellText: {
    textAlign: 'center',
    paddingHorizontal: 8,
  },
});

export default MainTable;
