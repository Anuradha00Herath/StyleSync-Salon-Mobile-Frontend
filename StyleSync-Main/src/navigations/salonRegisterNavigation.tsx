import React from "react";
import { CardStyleInterpolators,createStackNavigator} from '@react-navigation/stack';
import { Login } from "../features/SalonRegister/screens/Login/LoginScreen";
import {SignUp} from "../features/SalonRegister/screens/signUp/signUp"
import{CreateAccount} from "../features/SalonRegister/screens/createAccount/createAccount"
import{OTP} from "../features/SalonRegister/screens/OTP/OTP"
import { InputAddress} from "../features/SalonRegister/screens/InputAddress/InputAddress";
import MapText from "../features/SalonRegister/screens/Map/set-location";
import ConfirmMap from "../features/SalonRegister/screens/Map/confirm-location";

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

        </Stack.Navigator>
    )}