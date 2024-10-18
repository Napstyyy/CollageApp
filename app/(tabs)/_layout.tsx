import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';
import AppContextProvider from '@/hooks/context/AppContextProvider';

const Stack = createStackNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <AppContextProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="clientsLogin" component={require('./clientsLogin').default} />
        <Stack.Screen name="login" component={require('./login').default} />
        <Stack.Screen name="home" component={require('./home').default} />
      </Stack.Navigator>
    </AppContextProvider>
  );
}