import React from "react";
import { CardStyleInterpolators,createStackNavigator} from '@react-navigation/stack';
import { Login } from "../features/SalonRegister/screens/Login/LoginScreen";
import {SignUp} from "../features/SalonRegister/screens/signUp/signUp"
import{CreateAccount} from "../features/SalonRegister/screens/createAccount/createAccount"
import{OTP} from "../features/SalonRegister/screens/OTP/OTP"
import { InputAddress} from "../features/SalonRegister/screens/InputAddress/InputAddress";
import MapText from "../features/SalonRegister/screens/Map/set-location";
import ConfirmMap from "../features/SalonRegister/screens/Map/confirm-location";
import SelectTeam from "../features/staff-register/screens/SelectTeam/SelectTeam";
import { NavigationContainer } from '@react-navigation/native';
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

export default function SalonRegistorNavigation() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false, }}>
             <Stack.Screen name="Login" component={Login} 
                                        options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,}
              }/>
              <Stack.Screen name="SignUp" component={SignUp} 
                                        options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,}
              }/>
             <Stack.Screen name="CreateAccount" component={CreateAccount} 
                                        options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,}
              }/>
              <Stack.Screen name="OTP" component={OTP} 
                                        options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,}
              }/>
              <Stack.Screen name="InputAddress" component={InputAddress} 
                                        options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,}
              }/>
              <Stack.Screen name="SetMap" component={MapText} 
                                        options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,}
              }/>
              <Stack.Screen name="ConfirmMap" component={ConfirmMap} 
                                        options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,}
              }/>
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
    )}