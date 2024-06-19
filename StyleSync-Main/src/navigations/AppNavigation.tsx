/* eslint-disable prettier/prettier */
import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FillAddress from '../features/salon-register/screens/Address/Address';
import CreateAccount from '../features/salon-register/screens/CreateAccount/CreateAccount';
import LoginScreen from '../features/salon-register/screens/LoginScreen/LoginScreen';
import SignUP from '../features/salon-register/screens/SignUp/SignUp';
import ValidateNumber from '../features/salon-register/screens/ValidateNumber/ValidateNumber';

const Stack = createStackNavigator();


const AppNavigation = () => {
    return (
        
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false,}}>
                <Stack.Screen name="Login" component={LoginScreen} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                } />
                <Stack.Screen name="Address" component={FillAddress} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                } />
                <Stack.Screen name="CreateAccount" component={CreateAccount} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                } />
                <Stack.Screen name="SignUP" component={SignUP} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                } />
                <Stack.Screen name="ValidateNumber" component={ValidateNumber} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                } />
            </Stack.Navigator>
       
    );
};

export default AppNavigation;
