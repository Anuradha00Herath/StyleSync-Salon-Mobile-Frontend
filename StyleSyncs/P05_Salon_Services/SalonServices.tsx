import {View,StyleSheet,Text,StatusBar,ImageBackground} from 'react-native';
import { globaleStyles ,imageStyles} from '../Component/globaleStyles';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/AntDesign';
import { SeparatorLineWithText } from '../Component/line';
import { FlatButton } from '../Component/FlatButton';
import { AppName } from '../Component/AppName';
import { AddMore } from '../Component/AddMore';
import React, { useState } from 'react';
import axios from 'axios';

const backImg=require("../assets/StyleSync.jpeg")

export function SalonServices({ route }){
  const navigation = useNavigation<StackNavigationProp<any>>();
    //const navigation = useNavigation();
    const { staffId } = route.params;
    const [loading, setLoading] = useState(false);
    const [selectServices, setSelectServices] = useState([]);
    useFocusEffect(
      React.useCallback(() => {

  
        fetchBusinessHours();
  
        return () => {
          // Clean up function
        };
      }, [staffId])
    );
    const fetchBusinessHours = async () => {
      try {
        setLoading(true);
        const url = "https://stylesync-backend-test.onrender.com/app/v1/service/view-staff-service-type";
        const response = await axios.get(url, { params: { staffId } });
        setSelectServices(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const handleDelete = async (serviceName: any) => {
      try{
        setLoading(true);
        const url = "https://stylesync-backend-test.onrender.com/app/v1/service/delete-staff-service-type";
        const response = await axios.delete(url, { params: { staffId, serviceType:serviceName } });
        const result = response.data;
        const {status, message} = result;
        if (status === 200){
          console.log("Success", message);
          fetchBusinessHours();
        }
      }catch{
        console.log("error");
      }finally{
        setLoading(false);
      }
    }

    return(
    <ImageBackground source={backImg} style={imageStyles.container}>
        <StatusBar/>
        <AppName/>
        <View style={[globaleStyles.back,{marginTop:400}]}>
              <Text style={globaleStyles.topic}>Your Services</Text>
              <Text style={globaleStyles.Stopic}>When can client book with you</Text>
                 {selectServices.map((serviceType, index) => (
                      <View key={index} >
                         <View style={{flexDirection: 'row',
                                       alignItems: 'center',
                                       justifyContent: 'space-between',
                                      }}>
                            <View>
                            <Text>{serviceType}</Text>
                            </View>
                            <View
                                style={{
                                       flexDirection: "row",
                                       alignItems: "center",
                                       justifyContent: "flex-start",
                                      }}
                            >
                             <View style={{ width: 30, alignItems: "center" }}>
                                <Icon
                                  name="delete"
                                  size={20}
                                  color={"#71797E"}
                                  style={{ width: 20, height: 20 }}
                                  onPress={() => handleDelete(serviceType)}
                               />
                            </View>
                            <View style={{ width: 40, alignItems: "center" }}>
                                <Icon
                                  name="right"
                                  size={20}
                                  color={"#71797E"}
                                  style={{ width: 20, height: 20 }}
                                  onPress={() => navigation.navigate("HairService", {serviceType, staffId} )}
                               />
                            </View>
                          </View>
                          </View>
                          <SeparatorLineWithText lineColor={"gray"}/>
                       </View>
                   ))}
                   <AddMore onPress={() =>navigation.navigate("Staff")}/>
                 <FlatButton text='Continue' onPress={() =>navigation.navigate("Staff")} />
         </View>
    </ImageBackground>
    );
}
