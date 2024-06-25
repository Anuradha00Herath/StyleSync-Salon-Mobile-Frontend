import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators,createStackNavigator} from '@react-navigation/stack';
import StaffRegistorNavigation from "./src/navigations/staffRegistorNavigation";
import ShowAppoinments from './src/navigations/showAppoinmentNavigation';
import  SalonRegistorNavigation from "./src/navigations/salonRegisterNavigation";
import PersanalInformation from "./src/features/staff-register/screens/PersonalInformation/PersonalInformation";

const Stack =createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StaffRegistorNavigation" screenOptions={{headerShown: false,}}> 
                <Stack.Screen name="  SalonRegistorNavigation " 
                            component={  SalonRegistorNavigation } 
                            options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,}
                    }/>
            {/* <Stack.Screen name="PersanalInformation" 
                          component={PersanalInformation} 
                          /> */}
             {/* * <Stack.Screen name=" ShowAppoinments " 
                          component={ShowAppoinments} 
                          options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,}
                 }/> */}
           </Stack.Navigator>
        </NavigationContainer>
    );
}

