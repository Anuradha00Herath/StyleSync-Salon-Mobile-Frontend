import React from "react";
import{View,Text,StyleSheet,FlatList } from  'react-native';
import { globaleStyles } from "../../../Styles/StaffMemberRegistor/globaleStyles";
import { useNavigation } from "@react-navigation/native";
import {StaffComponent} from "./StaffComponant"
import { StackNavigationProp } from "@react-navigation/stack";
import { AddMore } from "../../../Component/StaffMemberRegister/AddMore";
import { FlatButton } from "../../../Component/StaffMemberRegister/FlatButton";


export function StaffContent({ staffName }) {
   const navigation = useNavigation<StackNavigationProp<any>>();
   // Flatten the array of arrays into a single array of objects
   const flattenedStaff = staffName.flatMap(array => array);

   return (
       <View style={[globaleStyles.back,{marginTop:400}]}>
           <Text style={globaleStyles.topic}>Your Staff</Text> 
           <Text style={globaleStyles.Stopic}>When can clients book with you</Text>
           <View style={{height:300 ,justifyContent:"flex-start"}}>
               <FlatList
                   data={flattenedStaff}
                   renderItem={({ item }) => (
                       <StaffComponent
                           name={item.name}
                           // You can pass other props here if needed
                       />
                   )}
                   ListFooterComponent={() => (
                       <View style={{ alignItems: "flex-start", marginBottom: 20 }}>
                           <AddMore onPress={() => navigation.navigate('PersanalInformation', { name: "Staff personal Information" })}/>
                       </View>
                   )}
               />
           </View>
           <FlatButton text='Continue' onPress={"Page07"}/>
       </View>
   );
}
