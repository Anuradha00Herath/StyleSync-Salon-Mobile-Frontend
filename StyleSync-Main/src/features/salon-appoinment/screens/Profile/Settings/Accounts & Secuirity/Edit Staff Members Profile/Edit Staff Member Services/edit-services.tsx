import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TextInputArea } from "../../../../../../components/text-input-area-in-settings";
import { StaffMember } from "../../../../../../components/list-view-of-staff-members";
import { ServiceShow } from "../../../../../../components/service-show";
import axios from "axios";

export default function EditService({ navigation ,route}) {
    const {Name,Duration,SPrice,serviceId} =route.params
    const [name, setName]       =useState(Name);
    const [price, setprice]    =useState(SPrice);
    const [duration, setDuration]=useState(Duration);
    const [refresh, setRefresh] = useState(false);
    
    const handleSave = async () => {
        if (!name || !duration || !price) {
          alert("Please fill in all fields."); 
          return; 
        }
        try {
          const url =
            "https://stylesync-backend-test.onrender.com/app/v1/service/update-staff-service-info";
          const response = await axios.put(url, {
            serviceId,
            price: parseInt(price),
            duration: duration,
          });
          const result = response.data;
          const { status, message, data } = result;
          if (status === 201) {
            console.log("success", message, data);
          } else {
            console.log("error", message);
          }
        } catch (error) {
          console.log(error);
        }
        navigation.goBack()
      };
     
    
        useEffect(() => {
        if (refresh) {
          setRefresh(false);
        }
      }, [refresh]);
    
    return (
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
          {name}
        </Text>
      </View>
      <Image
        source={require("../../../../../../../../assets/Services.png")}
        style={{
          width: 250,
          height: 150,
          marginTop: 50,
          alignSelf: "center",
        }}
      ></Image>
    
          <KeyboardAvoidingView behavior="height">
            <ScrollView
              style={{
                alignSelf: "center",
              }}
            >
              <TextInputArea
                name="Service name"
                value={name}
                editable={true}
                isSecure={false}
                placeholder={""}
                onChangeText={false}
              />
              <TextInputArea
                name="Service duration"
                value={duration}
                editable={true}
                isSecure={false}
                placeholder={""}
                onChangeText={(text) => setDuration(text)}
              />
              <TextInputArea
                name="Price"
                value={String(price)}
                editable={true}
                isSecure={false}
                placeholder={""}
                onChangeText={(text) => setprice(text)}
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
                <TouchableOpacity onPress={handleSave}>
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
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      );

}