import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '../node_modules/@expo/vector-icons/Ionicons.js';

// Screens
import HomeScreen from './Screens/Home';
import AppointmentScreen from './Screens/AppointmentScreen';
import SettingsScreen from './Screens/settingsScreen';

//Screen names
const homeName = "Home";
const appointmentName = "Appointment";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === appointmentName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })} 
        >

        <Tab.Screen name={homeName} component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name={appointmentName} component={AppointmentScreen}options={{ headerShown: false }} />
        <Tab.Screen name={settingsName} component={SettingsScreen} options={{ headerShown: false }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;