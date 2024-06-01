import React from 'react';
import MaiContainer from './Navigation/NavigationBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomerInfo from './Screens/Home/viewCustomerInfoScreen';
import SettingsScreen from './Screens/Profile/Settings/settingsScreen';
import StatScreen from './Screens/Profile/Stat/statScreen';
import EditLoginDetails from './Screens/Profile/Settings/Accounts & Secuirity/edit-login-details';
import EditSalonProfile from './Screens/Profile/Settings/Accounts & Secuirity/edit-salon-profile';
import EditLocation from './Screens/Profile/Settings/Accounts & Secuirity/edit-location';
import EditSalonAddress from './Screens/Profile/Settings/Accounts & Secuirity/edit-salon-address';
import EditStaffMembersProfiles from './Screens/Profile/Settings/Accounts & Secuirity/edit-staff-members-profiles';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MaiContainer} options={{ headerShown: false }} />
        <Stack.Screen name="CustomerInfo" component={CustomerInfo} options={{ headerShown: false }} />
        <Stack.Screen name="SettingScreen" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditLogin" component={EditLoginDetails} options={{ headerShown: false }} />
        <Stack.Screen name="EditSalonProfile" component={EditSalonProfile} options={{ headerShown: false }} />
        <Stack.Screen name="EditLocation" component={EditLocation} options={{ headerShown: false }} />
        <Stack.Screen name="EditSalonAddress" component={EditSalonAddress} options={{ headerShown: false }} />
        <Stack.Screen name="EditStaffMembersProfiles" component={EditStaffMembersProfiles} options={{ headerShown: false }} />
        <Stack.Screen name="StatScreen" component={StatScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
