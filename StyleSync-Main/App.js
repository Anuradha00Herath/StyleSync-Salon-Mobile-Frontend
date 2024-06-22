import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators,createStackNavigator} from '@react-navigation/stack';
import StaffRegistorNavigation from "./src/navigations/staffRegistorNavigation";
import AppNavigation from "./src/navigations/AppNavigation";
import MapText from "./src/features/salon-register/screens/Map/MapText";

const Stack =createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName=" AppNavigation  " screenOptions={{headerShown: false,}}> 
            <Stack.Screen name=" AppNavigation " 
                          component={ AppNavigation } 
                          options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,}
                 }/>
            {/* <Stack.Screen name="StaffRegistorNavigation" 
                          component={StaffRegistorNavigation} 
                          options={{cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,}
                 }/> */}
           </Stack.Navigator>
        </NavigationContainer>
    );
}

