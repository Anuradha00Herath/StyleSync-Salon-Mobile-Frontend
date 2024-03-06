import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators,createStackNavigator} from '@react-navigation/stack';
import Page01 from "./P01/Page01";
import Page02 from "./P02/Page02";
import Page03 from "./P03/Page03";
import Page04 from "./P04/Page04";
import { Page05 } from "./P05/Page05";
import HairService from "./P06/HairService";
import NailService from "./P06/NailService";
import Page06EditDetails from "./P06/Page06EditDetails";
import Facials from "./P06/Facials";
import AddMoreDetails from "./P06/AddMoreDetails";
import Staff from "./P07/Staff";
import AddStaff from "./P07/AddStaff";
import SetTime from "./P03/SetTime";
import SetBreakTime from "./P03/SetBreakTime";

const Stack =createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Page01" screenOptions={{
          headerShown: false, }}>
              <Stack.Screen name="Page01" component={Page01} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                  <Stack.Screen name="Page02" component={Page02} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                <Stack.Screen name="Page03" component={Page03} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                <Stack.Screen name="Page04" component={Page04} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                <Stack.Screen name="Page05" component={Page05} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                <Stack.Screen name="HairService" component={HairService} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                <Stack.Screen name="NailService" component={NailService} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
              <Stack.Screen name="Facials" component={Facials} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                  <Stack.Screen name="Page06EditDetails" component={Page06EditDetails} options={
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
                <Stack.Screen name="AddStaff" component={AddStaff} options={
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
    </NavigationContainer>

  );}
