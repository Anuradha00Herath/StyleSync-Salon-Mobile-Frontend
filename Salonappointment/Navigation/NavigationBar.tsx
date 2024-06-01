import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "../node_modules/@expo/vector-icons/Ionicons.js";

// Screens
import HomeScreen from "../Screens/Home/Home";
import AppointmentScreen from "../Screens/Appointment/AppointmentScreen";
import ProfileScreen from "../Screens/Profile/profileScreen";
import CustomerInfo from "../Screens/Home/viewCustomerInfoScreen";
import NotificationScreen from "../Screens/Notification/notificationScreen";
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
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={appointmentName}
        component={AppointmentScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={profileName}
        component={ProfileScreen}
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




export default MainContainer;
