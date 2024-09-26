import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeContent from '@/components/Home/homeContent';
import CustomDrawerContent from '@/components/Home/CustomDrawerContent'; // Importa el componente personalizado

const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />} // Usa el componente personalizado
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
      }}
    >
      <Drawer.Screen name="Home" component={HomeContent} />
    </Drawer.Navigator>
  );
}