import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators,createStackNavigator} from '@react-navigation/stack';
import StaffRegistorNavigation from "./src/navigations/staffRegistorNavigation";
import ShowAppoinments from './src/navigations/showAppoinmentNavigation';
import  SalonRegistorNavigation from "./src/navigations/salonRegisterNavigation";
import PersanalInformation from "./src/features/staff-register/screens/PersonalInformation/PersonalInformation";
import AddSalonImage from "./src/features/SalonRegister/screens/AddPhoto/add-salon-image";
import {PermissionsAndroid} from 'react-native';


const Stack =createStackNavigator();

export default function App() {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StaffRegistorNavigation" screenOptions={{headerShown: false,}}> 
                <Stack.Screen name="  SalonRegistorNavigation " 
                            component={  SalonRegistorNavigation } 
                            options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,}
                    }/>
            {/* <Stack.Screen name="AddImage" 
                          component={AddSalonImage} 
                          /> */}
             {/* * <Stack.Screen name=" ShowAppoinments " 
                          component={ShowAppoinments} 
                          options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,}
                 }/> */}
           </Stack.Navigator>
        </NavigationContainer>
    );
}

