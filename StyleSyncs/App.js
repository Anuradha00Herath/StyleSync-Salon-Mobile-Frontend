import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators,createStackNavigator} from '@react-navigation/stack';
import SelectTeam from "./P01_Select_team_Page/SelectTeam";
import PersanalInformation from "./P02_Personal_Information/PersonalInformation";
import BusinessHours from "./P03_Business_Hours/BusinessHours";
import SelectServices from "./P04_Select_Services/SelectServices";
import { SalonServices} from "./P05_Salon_Services/SalonServices";
import HairService from "./P06_Service_Type/HairService";
import NailService from "./P06_Service_Type/NailService";
import Page06EditDetails from "./P06_Service_Type/Page06EditDetails";
import Facials from "./P06_Service_Type/Facials";
import AddMoreDetails from "./P06_Service_Type/AddMoreDetails";
import Staff from "./P07_Add_Staff/Staff";
import StaffMemberDetails from "./P07_Add_Staff/StaffMemberDetails";
import SetTime from "./P03_Business_Hours/SetTime";
import SetBreakTime from "./P03_Business_Hours/SetBreakTime";

const Stack =createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
                <Stack.Screen name="SelectServices" component={SelectServices} options={
                    {
                        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
                    }
                }/>
                <Stack.Screen name="SalonServices" component={SalonServices} options={
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
                <Stack.Screen name="StaffMemberDetails" component={StaffMemberDetails} options={
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
