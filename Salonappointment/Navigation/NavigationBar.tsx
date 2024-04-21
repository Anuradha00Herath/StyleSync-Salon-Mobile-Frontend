import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "../node_modules/@expo/vector-icons/Ionicons.js";

// Screens
import HomeScreen from "./Screens/Home";
import AppointmentScreen from "./Screens/AppointmentScreen";
import SettingsScreen from "./Screens/settingsScreen";
import CustomerInfo from "./Screens/viewCustomerInfoScreen";
// Screen names
const homeName = "Home";
const appointmentName = "Appointment";
const settingsName = "Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: "rgba(46,46,46,1)" },
          tabBarLabelStyle:{ color: 'white'},
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === appointmentName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Ionicons name={iconName} size={size} color={"#FDFDFD"} />;
          },
        })}
      >
        <Tab.Screen
          name= {homeName}
          component={Homestack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={appointmentName}
          component={AppointmentStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={settingsName}
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
  );
}

function Homestack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomerInfo"
        component={CustomerInfo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AppointmentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AppointmentStack"
        component={AppointmentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomerInfo"
        component={CustomerInfo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainContainer;
