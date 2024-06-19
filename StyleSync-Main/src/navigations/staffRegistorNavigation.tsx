import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators,createStackNavigator} from '@react-navigation/stack';
import SelectTeam from "../features/staff-register/screens/SelectTeam/SelectTeam";
import PersanalInformation from "../features/staff-register/screens/PersonalInformation/PersonalInformation";
import BusinessHours from "../features/staff-register/screens/BusinessHours/BusinessHours";
import SelectServicesTypes from "../features/staff-register/screens/SelectServiceType/SelectServiceType";
import {ShowServicesType} from "../features/staff-register/screens/ShowServiceTypess/showSelectetServicesTypes";
import ShowSevices from "../features/staff-register/screens/showServises/ShowService";
import EditServiceDetails from "../features/staff-register/screens/showServises/EditServiseDetails";
import AddMoreDetails from "../features/staff-register/screens/showServises/AddMoreService";
import Staff from "../features/staff-register/screens/ShowSalonStaffMembers/StaffList";
import SetTime from "../features/staff-register/screens/BusinessHours/EditOpenCloseTime";
import SetBreakTime from "../features/staff-register/screens/BusinessHours/SetBreakTime";

const Stack =createStackNavigator();

export default function StaffRegistorNavigation() {
  return (
    // <NavigationContainer>
        <Stack.Navigator initialRouteName="SelectTeam" screenOptions={{
          headerShown: false, }}>
              <Stack.Screen name="SelectTeam" component={SelectTeam} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                  <Stack.Screen name="PersanalInformation" component={PersanalInformation} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                <Stack.Screen name="BusinessHours" component={BusinessHours} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                <Stack.Screen name="SelectServicesTypes" component={SelectServicesTypes} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                <Stack.Screen name="ShowServicesType" component={ShowServicesType} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                <Stack.Screen name="ShowSevices" component={ShowSevices} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                  <Stack.Screen name="EditServiceDetails" component={EditServiceDetails} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                 <Stack.Screen name="AddMoreDetails" component={AddMoreDetails} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
               <Stack.Screen name="Staff" component={Staff} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
               
                 <Stack.Screen name="SetTime" component={SetTime} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                 <Stack.Screen name="SetBreakTime" component={SetBreakTime} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>

           </Stack.Navigator>
    //  </NavigationContainer>

  );}
