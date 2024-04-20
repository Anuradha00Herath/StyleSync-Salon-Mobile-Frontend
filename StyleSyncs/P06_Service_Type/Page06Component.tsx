import {  View, StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SeparatorLineWithText } from '../Component/line';
import { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export  function Page06Component({text,price,duration, serviceId,staffId, handleFetchservice}) {
  const [loading,setLoading] = useState(false);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleDelete = async () => {
    try{
      setLoading(true);
      const url = "https://stylesync-backend-test.onrender.com/app/v1/service/delete-staff-service";
      const response = await axios.delete(url, { params: {serviceId, staffId} });
      const result = response.data;
      const {status, message} = result;
      if (status === 200){
        console.log("Success", message);
        handleFetchservice();
        //fetchBusinessHours();
      }
    }catch{
      console.log("error");
    }finally{
      setLoading(false);
    }
  }
    return (
        <View>
              <View style={{flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',}}>
                <View style={{ flex:1,
                               flexDirection:"column",}}>
                      <Text style={{fontSize:14,}}>{text}</Text>
                      <Text style={{fontSize:10,}}>{duration}Min</Text>
                </View>
                <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                }}>
                  <View>
                     <Text style={{fontSize:14,}}>LKR{price}</Text>
                  </View>
                  <View style={{ width: 30, alignItems: "center" }}>
                      <Icon
                        name="delete"
                        size={20}
                        color={"#71797E"}
                        style={{ width: 20, height: 20 }}
                        onPress={handleDelete}
                      />
                  </View>
                  <View style={{ width: 30, alignItems: "center" }}>
                      <Icon
                        name="right"
                        size={20}
                        color={"#71797E"}
                        style={{ width: 20, height: 20 }}
                        onPress={()=> navigation.navigate("Page06EditDetails", {serviceName: text, price, duration, serviceId,staffId})}
                      />
                  </View>

                </View>
              </View>
                <SeparatorLineWithText lineColor={"gray"}/>
        </View>
    );}

    