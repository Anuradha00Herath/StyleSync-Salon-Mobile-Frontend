import React,{useState}from "react";
import { View,StyleSheet,Text,FlatList,ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Page06Component } from "./Page06Component";
import { globaleStyles } from "../Component/globaleStyles";
import { FlatButton } from "../Component/FlatButton";
import { AddMore}  from "../Component/AddMore";

export function Page06Content({Service,service}){
  const navigation = useNavigation<StackNavigationProp<any>>();
    //const navigation = useNavigation();

    return(
        
        <View style={[globaleStyles.back,{marginTop:400}]}>
             <Text style={globaleStyles.topic}>{Service} - Your Services</Text> 
             <Text style={globaleStyles.Stopic}>When can client book with you</Text>
             <View style={{height:300 ,justifyContent:"flex-start"}}>
              <FlatList
                 data={service}
                 renderItem={({item}) =>(
                    <Page06Component
                    text={item.name}
                    price={item.price} 
                    duration={item.duration} 
                    onPress={() =>navigation.navigate("Page06EditDetails" ,{
                        serviceName: item.name,
                        price: item.price,
                        duration: item.duration,
                      })}
                    />
                 )}
                 ListFooterComponent={() => (
                    <View style={{ alignItems: "flex-start", marginBottom: 20 }}>
                      <AddMore onPress={() => navigation.navigate("AddMoreDetails")} />
                    </View>
                  )}
             />
           
             </View>
             <FlatButton text='Continue' onPress={() =>navigation.goBack()}/>
        </View>
        
    );
}

