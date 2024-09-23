import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';

const Stack = createStackNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      { /*<Stack.Screen name="index" component={require('./index').default} />
      <Stack.Screen name="explore" component={require('./explore').default} /> */}
      <Stack.Screen name="clientsLogin" component={require('./clientsLogin').default} />
      <Stack.Screen name="login" component={require('./login').default} />
      <Stack.Screen name="home" component={require('./home').default} />
    </Stack.Navigator>
  );
}