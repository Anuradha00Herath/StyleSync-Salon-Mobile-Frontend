import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, View, Text,Alert } from "react-native";
import { SeparatorLineWithText } from "./line";
import { useState } from 'react';
import axios from 'axios';

export function ServiceShow({service,navigation ,fetchService}) {
  const {name,price,duration,id,serviceStaff} =service
  const [loading,setLoading] = useState(false);

  const handleDelete = async () => {
    try{
      setLoading(true);
      const url = "https://stylesync-backend-test.onrender.com/app/v1/service/delete-staff-service";
      const response = await axios.delete(url, { params: {serviceId:id, staffId:serviceStaff[0].staffId} });
      const result = response.data;
      const {status, message} = result;
      if (status === 200){
        console.log("Success", message);
        //handleFetchservice();
        fetchService();
      }
    }catch{
      console.log("error");
    }finally{
      setLoading(false);
    }
  }

  const Delete = () =>{
    Alert.alert('Delete' ,"Are you sure you want to delete this service type? ",
      [{
        text:"Cancel",
        onPress:() =>console.log("Cancel"),
      },
    {
      text:"Yes",
      onPress:() => handleDelete(),
    }]
    )
  }
  return (
    <View>
              <View style={{flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: "95%",
                            alignSelf: "center",
                            borderColor: "grey",
                            borderRadius: 10}}>
                <View style={{ width:"50%",
                               flexDirection:"column"}}>
                      <Text style={{fontSize:16}}>{name}</Text>
                      <Text style={{fontSize:14}}>{duration}Min</Text>
                </View>
                <View >
                     <Text style={{fontSize:14}}>LKR{price}</Text>
                  </View>
                <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start" 
                }}>
                  {/* <View>
                     <Text style={{fontSize:14,}}>LKR{price}</Text>
                  </View> */}
                  <View style={{ width: 30, alignItems: "center"}}>
                      <Ionicons
                        name="trash"
                        size={20}
                        color={"#71797E"}
                        style={{ width: 20, height: 20 }}
                        onPress={Delete}
                      />
                  </View>
                  <View style={{ width: 30, alignItems: "center" }}>
                      <Ionicons
                        name="chevron-forward"
                        size={20}
                        color={"#71797E"}
                        style={{ width: 20, height: 20 }}
                        onPress={() => navigation.navigate("EditService" ,{Name:name ,Duration:duration ,SPrice:price, serviceId:id})}
                        //onPress={()=> navigation.navigate("Page06EditDetails", {serviceName: text, price, duration, serviceId,staffId})}
                      />
                  </View>

                </View>
              </View>
              <SeparatorLineWithText lineColor={"gray"} />
        </View>
   
  );
}
