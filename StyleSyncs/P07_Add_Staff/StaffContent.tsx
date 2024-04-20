import React from "react";
import{View,Text,StyleSheet,FlatList } from  'react-native';
import { globaleStyles } from "../Component/globaleStyles";
import { useNavigation } from "@react-navigation/native";
import {StaffComponent} from "./StaffComponant"
import { StackNavigationProp } from "@react-navigation/stack";
import { AddMore } from "../Component/AddMore";
import { FlatButton } from "../Component/FlatButton";


export function StaffContent({staffName}){
    const navigation = useNavigation<StackNavigationProp<any>>();
    //const navigation = useNavigation();
    //console.log(name);
    return(
        <View style={[globaleStyles.back,{marginTop:400}]}>
           <Text style={globaleStyles.topic}>Your Staff</Text> 
            <Text style={globaleStyles.Stopic}>When can client book with you</Text>
            <View style={{height:300 ,justifyContent:"flex-start"}}>
              <FlatList
                 data={staffName}
                 renderItem={({item}) =>(
                  
                    <StaffComponent
                    name={item.name}
                    
                    //staff={item.staff} 
                    // ,{
                    //     StaffMemberName: item.name,
                    //     service: item.Service,
                    //   }
                    />
                 )}
                 ListFooterComponent={() => (
                    <View style={{ alignItems: "flex-start", marginBottom: 20 }}>
                       <AddMore onPress={() =>navigation.navigate('PersanalInformation' ,{name:"Staff persanal Information"})}/>
                    </View>
                  )}
             />
           
             </View>
           
            <FlatButton text='Continue' onPress={"Page07"}/>
        </View>
    );
}
