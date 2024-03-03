/* eslint-disable prettier/prettier */
import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FillAddress from '../Screens/Address';
import CreateAccount from '../Screens/CreateAccount';
import LoginScreen from '../Screens/LoginScreen';
import SignUP from '../Screens/SignUp';
import ValidateNumber from '../Screens/ValidateNumber';

const Stack = createStackNavigator();


const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={
                {
                    headerShown: false,
                }
            }>
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
        </NavigationContainer>
    );
};

export default AppNavigation;
