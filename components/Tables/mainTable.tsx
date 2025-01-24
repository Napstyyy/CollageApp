import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap, IColorTheme } from '@/constants/Colors';

// Obtener dimensiones de la pantalla
const { width } = Dimensions.get('window');

// Definir la altura fija de las filas
const ROW_HEIGHT = 40;

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
];

// Definir columnas desplazables
const allColumns = [
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
  const { theme } = useTheme();
  const Colors: IColorTheme = themeMap[theme];
  const styles = createStyles(Colors);

  // Estado para la columna fija (inicialmente ninguna)
  const [fixedColumn, setFixedColumn] = useState<string | null>(null);

  // Función para cambiar la columna fija
  const handleColumnClick = (key: string) => {
    setFixedColumn(key === fixedColumn ? null : key);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableWrapper}>
        {/* Si hay una columna fija, mostrarla aquí */}
        {fixedColumn && (
          <View style={styles.fixedColumn}>
            <TouchableOpacity onPress={() => handleColumnClick(fixedColumn)} style={styles.fixedHeader}>
              <Text style={[styles.headerText, { width: allColumns.find(c => c.key === fixedColumn)?.width }]}>
                {allColumns.find(c => c.key === fixedColumn)?.label}
              </Text>
            </TouchableOpacity>
            {data.map((item, index) => (
              <View key={item.id} style={[styles.fixedRow, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
                <Text style={[styles.cellText, { width: allColumns.find(c => c.key === fixedColumn)?.width }]}>
                  {item[fixedColumn as keyof TableRowData]}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Scroll horizontal para las demás columnas */}
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
          <View>
            {/* Encabezado de columnas desplazables */}
            <View style={styles.tableHeader}>
              {allColumns.map((column) => (
                fixedColumn !== column.key && (
                  <TouchableOpacity key={column.key} onPress={() => handleColumnClick(column.key)}>
                    <Text style={[styles.headerText, { width: column.width }]}>{column.label}</Text>
                  </TouchableOpacity>
                )
              ))}
            </View>
            {/* Filas desplazables */}
            {data.map((item, index) => (
              <View key={item.id} style={[styles.tableRow, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
                {allColumns.map((column) => (
                  fixedColumn !== column.key && (
                    <Text key={column.key} style={[styles.cellText, { width: column.width }]}>
                      {item[column.key as keyof TableRowData]}
                    </Text>
                  )
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const createStyles = (Colors: IColorTheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.main,
    padding: 16,
  },
  tableWrapper: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
  },
  fixedColumn: {
    backgroundColor: Colors.background.secondary,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  fixedHeader: {
    backgroundColor: Colors.appColor,
    paddingVertical: 12,
  },
  fixedRow: {
    height: ROW_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: Colors.appColor,
    paddingVertical: 12,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: ROW_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
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