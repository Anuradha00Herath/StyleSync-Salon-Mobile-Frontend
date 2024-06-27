import React from 'react';
import MaiContainer from './NavigationBar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomerInfo from '../features/salon-appoinment/screens/Home/viewCustomerInfoScreen';
import SettingsScreen from '../features/salon-appoinment/screens/Profile/Settings/settingsScreen';
import StatScreen from '../features/salon-appoinment/screens/Profile/Stat/statScreen';
import EditLoginDetails from '../features/salon-appoinment/screens/Profile/Settings/Accounts & Secuirity/EditSalonDetails/edit-login-details';
import EditSalonProfile from '../features/salon-appoinment/screens/Profile/Settings/Accounts & Secuirity/EditSalonDetails/edit-salon-profile';
import EditLocation from '../features/salon-appoinment/screens/Profile/Settings/Accounts & Secuirity/EditSalonDetails/edit-location';
import EditSalonAddress from '../features/salon-appoinment/screens/Profile/Settings/Accounts & Secuirity/EditSalonDetails/edit-salon-address';
import StaffListView from '../features/salon-appoinment/screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/staff-members-list';
import EditStaffProfile from '../features/salon-appoinment/screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/edit-staff-member-profile';
import EditProfile from '../features/salon-appoinment/screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/edit-profile';
import ShowService from '../features/salon-appoinment/screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/Edit Staff Member Services/show-services';
import EditService from '../features/salon-appoinment/screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile//Edit Staff Member Services/edit-services';
import EditWorkingDays from '../features/salon-appoinment/screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/Edit Staff Working Days/edit-working-days-and-hours';
import EditTime from '../features/salon-appoinment/screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/Edit Staff Working Days/edit-day';
import  CreateBreakTime from '../features/salon-appoinment/screens/Profile/Settings/Accounts & Secuirity/Edit Staff Members Profile/Edit Staff Working Days/SetBreaksTime'
const Stack = createStackNavigator();

export default function ShowAppoinments() {
  return (
    
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
        <Stack.Screen name="EditTime" component={EditTime} options={{ headerShown: false }} />
        <Stack.Screen name="CreateBreakTime" component={CreateBreakTime} options={{ headerShown: false }} />
        <Stack.Screen name="StatScreen" component={StatScreen} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    
  );
}
