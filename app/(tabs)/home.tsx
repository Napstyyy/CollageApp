// Home.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeContent from '@/app/(tabs)/homeTabs/homeContent'; // Importa el componente de contenido de la pantalla de inicio
import AcademicAssignment from '@/app/(tabs)/homeTabs/AcademicAssignment';
import Agenda from '@/app/(tabs)/homeTabs/Agenda';
import Attendance from '@/app/(tabs)/homeTabs/Attendance';
import Audit from '@/app/(tabs)/homeTabs/Audit';
import IDCards from '@/app/(tabs)/homeTabs/IDCards';
import Learnings from '@/app/(tabs)/homeTabs/Learnings';
import ReasonableAdjustments from '@/app/(tabs)/homeTabs/ReasonableAdjustments';
import Subjects from '@/app/(tabs)/homeTabs/Subjects';
import CustomDrawerContent from '@/components/Home/DrawerContent/CustomDrawerContent'; // Importa el componente personalizado
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener este import
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from '@/hooks/context/ThemeContext';
import { themeMap } from '@/constants/Colors';
import Settings from '@/app/(tabs)/homeTabs/Settings';

const Drawer = createDrawerNavigator();

export default function Home() {
  const { theme } = useTheme(); // Obtener el tema actual
  const Colors = themeMap[theme]; // Obtener los colores del tema actual
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />} // Usa el componente personalizado
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerActiveTintColor: Colors.icons.default, // Color del ícono activo
        drawerInactiveTintColor: Colors.gray.normal, // Color del ícono inactivo
        drawerLabelStyle: {
          fontSize: 18, // Tamaño de fuente
          marginLeft: -16, // Margen izquierdo
        },
        drawerItemStyle: {
          marginHorizontal: 0, // Margen horizontal
        },
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={HomeContent}
        options={{
          drawerIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ajustes Razonables"
        component={ReasonableAdjustments}
        options={{
          drawerIcon: ({ size, color }) => (
            <AntDesign name="eye" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Agenda"
        component={Agenda}
        options={{
          drawerIcon: ({ size, color }) => (
            <FontAwesome name="list-alt" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Aprendizajes"
        component={Learnings}
        options={{
          drawerIcon: ({ size, color }) => (
            <FontAwesome5 name="book-reader" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Asignaturas"
        component={AcademicAssignment}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="library-books" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Asistencia"
        component={Attendance}
        options={{
          drawerIcon: ({ size, color }) => (
            <AntDesign name="checkcircle" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Auditoría"
        component={Audit}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="assignment-late" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Asig. académica"
        component={AcademicAssignment}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="school" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Carnés"
        component={IDCards}
        options={{
          drawerIcon: ({ size, color }) => (
            <AntDesign name="idcard" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Configuración"
        component={Settings}
        options={{
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
      {/* Agrega más pantallas según sea necesario */}
    </Drawer.Navigator>
  );
}
