import React, { useState } from "react";
import axios from "axios";
import {  ImageBackground, View , StatusBar,Text,Image,TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TimePicker } from "../../../../../../Components/TimePicker";

export default function SetBreakTime({route,navigation}) {
    const{staffId , dayName,isOpen, openHour, closeHour, type}=route.params;
    const [bStart, setBStart]  = useState("12:00");
    const [bEnd, setBEnd] = useState("13:00");
    const [loading, setLoading] =useState(false);
    
    const handleOpenTimeValue = (value: any) => {
        setBStart(value);
      };
      const handleCloseTimeValue = (value: any) => {
        setBEnd(value);
      };

    const onHandleAddBreak = async () => {
        try {
            setLoading(true);
          const url =
            "https://stylesync-backend-test.onrender.com/app/v1/time/create-break";
          const response = await axios.post(url, {
            staffId: staffId,
            dayName: dayName,
            breakStart : bStart,
            breakEnd : bEnd,
          });
          const result = response.data;
          const { message, status } = result;
          if (status === 201) {
            navigation.navigate("SetTime", {staffId:staffId, name: dayName, isOpen: isOpen, openHour: openHour,closeHour:closeHour });
            console.log("Success", message);
          } else {
            console.log("Error", message);
          }
        } catch (error) {
          console.log(error);
        }
        finally {
            setLoading(false);
          }
      };

      const onHandleUpdate = async () => {
          try {
            setLoading(true);
            const url =
              "https://stylesync-backend-test.onrender.com/app/v1/time/update-breaks";
            const response = await axios.put(url, {
              staffId: staffId,
              dayName: dayName,
              breakStart: bStart,
              breakEnd: bEnd
            });
            const result = response.data;
            const { message, status } = result;
            if (status === 201) {
                navigation.navigate("SetTime", {staffId:staffId, name: dayName, isOpen: isOpen, openHour: openHour,closeHour:closeHour });
              console.log("Success", message);
            } else {
              console.log("Error", message);
            }
          } catch (error) {
            console.log(error);
          }
          finally {
            setLoading(false);
          }
        };
        return(
            <View>
                <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 10,
          marginTop: 10,
          marginRight: 10,
          
        }}
      >
        <Ionicons
          style={{
            marginTop: 5,
          }}
          name="arrow-back-outline"
          size={22}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
         Edit Open-Close Hours
        </Text>
      </View>

      <Image
        source={require("../../../../../../assets/staff.png")}
        style={{
          width: 250,
          height: 150,
          marginTop: 50,
          alignSelf: "center",
        }}
      ></Image>
      <View style={{marginHorizontal:25}}>
      <Text  style={{
                color:"black",
                fontSize:16,
                fontWeight:"bold",
                textAlign:"left"
            }}>Breaks</Text>
            <TimePicker
              onOpenTime={bStart}
              onCloseTime={bEnd}
              onHandleOpenTimeValue={handleOpenTimeValue}
              onHandleCloseTimeValue={handleCloseTimeValue}
            />
      
      <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  width: "40%",
                }}
              >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View
                    style={{
                      backgroundColor: "#F5F5F5",
                      borderRadius: 10,
                      borderWidth: 1,
                      padding: 9,
                      alignItems: "center",
                    }}
                  >
                    <Text>Cancel</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "40%",
                }}
              >
                <TouchableOpacity onPress={type === "New" ? onHandleAddBreak: onHandleUpdate}>
                  <View
                    style={{
                      backgroundColor: "#8B6C58",
                      borderRadius: 10,
                      padding: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                      }}
                    >
                      Save
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            </View>
            </View>
        );

}