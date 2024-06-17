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
import StaffListView from './Screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/staff-members-list';
import EditStaffProfile from './Screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/edit-staff-member-profile';
import EditProfile from './Screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/edit-profile';
import ShowService from './Screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/Edit Staff Member Services/show-services';
import EditService from './Screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/Edit Staff Member Services/edit-services';
import EditWorkingDays from './Screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/Edit Staff Working Days/edit-working-days-and-hours';
import SetTime from './Screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/Edit Staff Working Days/edit-day';
import  SetBreakTime from './Screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/Edit Staff Working Days/SetBreaksTime'
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
        <Stack.Screen name="StaffListView" component={StaffListView} options={{ headerShown: false }} />
        <Stack.Screen name="EditStaffProfile" component={EditStaffProfile} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false}}/>
        <Stack.Screen name="EditService" component={EditService} options={{ headerShown: false}}/>
        <Stack.Screen name="ShowService" component={ShowService} options={{ headerShown: false}}/>
        <Stack.Screen name="EditWorkingDays" component={EditWorkingDays} options={{headerShown:false}}/>
        <Stack.Screen name="SetTime" component={SetTime} options={{ headerShown: false }} />
        <Stack.Screen name="SetBreakTime" component={SetBreakTime} options={{ headerShown: false }} />
        <Stack.Screen name="StatScreen" component={StatScreen} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
