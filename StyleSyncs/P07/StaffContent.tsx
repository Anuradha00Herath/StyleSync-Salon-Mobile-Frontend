import React from "react";
import{View,Text,StyleSheet } from  'react-native';
import { globaleStyles } from "../Component/globaleStyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AddMore } from "../Component/AddMore";
import { FlatButton } from "../Component/FlatButton";


export function StaffContent(){
    const navigation = useNavigation<StackNavigationProp<any>>();
    //const navigation = useNavigation();
    return(
        <View style={[globaleStyles.back,{marginTop:400}]}>
           <Text style={globaleStyles.topic}>Your Staff</Text> 
            <Text style={globaleStyles.Stopic}>When can client book with you</Text>
            <AddMore onPress={() =>navigation.navigate("AddStaff")}/>
            <FlatButton text='Continue' onPress={"Page07"}/>
        </View>
    );
}
