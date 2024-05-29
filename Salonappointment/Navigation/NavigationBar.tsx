import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "../node_modules/@expo/vector-icons/Ionicons.js";

// Screens
import HomeScreen from "./Screens/Home";
import AppointmentScreen from "./Screens/AppointmentScreen";
import ProfileScreen from "./Screens/profileScreen";
import CustomerInfo from "./Screens/viewCustomerInfoScreen";
import NotificationScreen from "./Screens/notificationScreen";
import SettingsScreen from "./Screens/settingsScreen";
import StatScreen from "./Screens/statScreen";
// Screen names
const homeName = "Home";
const appointmentName = "Appointment";
const profileName = "Profile";
const notificationName = "Notification";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "rgba(46,46,46,1)" },
        tabBarLabelStyle: { color: "white" },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === appointmentName) {
            iconName = focused ? "grid" : "grid-outline";
          } else if (rn === profileName) {
            iconName = focused ? "person" : "person-outline";
          } else if (rn === notificationName) {
            iconName = focused ? "notifications" : "notifications-outline";
          }

          return <Ionicons name={iconName} size={size} color={"#FDFDFD"} />;
        },
      })}
    >
      <Tab.Screen
        name={homeName}
        component={Homestack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={appointmentName}
        component={AppointmentStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={profileName}
        component={ProfileStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={notificationName}
        component={NotificationScreen}
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

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingScreen"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StatScreen"
        component={StatScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainContainer;
