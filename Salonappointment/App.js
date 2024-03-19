import React from 'react';
import MaiContainer from './Navigation/NavigationBar';
import CustomerInfo from './Navigation/Screens/viewCustomerInfoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Info ({appointment}){
  return(
    <Stack.Navigator>
      <Stack.Screen name="CustomerInfoStack"
         component={CustomerInfo}
        options={{ headerShown: false }} 
        params = {appointment}
        />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MaiContainer} options={{ headerShown: false }} />
        <Stack.Screen name="CustomerInfo" component={Info} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    //<CustomerInfo />
    //<AppointmentList/>
    //<Navigation />
  );
}
