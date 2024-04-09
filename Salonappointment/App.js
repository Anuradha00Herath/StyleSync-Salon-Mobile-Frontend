import React from 'react';
import MaiContainer from './Navigation/NavigationBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MaiContainer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
