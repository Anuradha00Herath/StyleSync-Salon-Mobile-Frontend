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
  StyleSheet
} from "react-native";
import { TextInputArea } from "../../../../../components/text-input-area-in-settings";
import axios from "axios";

export default function EditLoginDetails({ navigation, route }) {
  const {salonId} = route.params;

  const [isEdit, setIsEdit] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail]       =useState("");
  const [username, setUsername] =useState("");
  const [password , setPassword] =useState("");
  const [error, setError] = useState("");
 

  const fetchDetails = async() =>{
    try{
      setLoading(true);
      const url="https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/get_salon-ConfirmationInformation";
      console.log('Request parameters',{salonId: salonId, });
      const response = await axios.get(url, {params:{salonId: salonId}});
      
      const addressData =response.data.data[0];
      setDetails(addressData);
      setEmail(addressData.email);
      setUsername(addressData.username ||addressData.email );
      setPassword(addressData.password);
      console.log(response.data)
      console.log(addressData.password)
      console.log(addressData.email)

    }catch(error){
      console.error(error);
    }finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  // useEffect(() => {
  //   if (refresh) {
  //     setRefresh(false);
  //   }
  // }, [refresh]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setRefresh(true);
  //   }, 5000); 
  
  //   return () => clearInterval(intervalId);
  // }, []);

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
          Edit Login Details
        </Text>
      </View>
      <Image
        source={require("../../../../../../../assets/password.png")}
        style={{
          width: 150,
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
            name="Email"
            value={email}
            editable={false}
            isSecure={false}
            placeholder={""}
            onChangeText={email}
            
          />
          <TextInputArea
            name="Username"
            value={username}
            editable={true}
            isSecure={false}
            placeholder={""}
            onChangeText={(text) => setUsername(text)}
          />
          <EditPassword isEdit={isEdit} setIsEdit={setIsEdit} password={password}/>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
function EditPassword({ isEdit, setIsEdit,password }) {
    const onPress = () => setIsEdit(false);
    const onPress2 = () => setIsEdit(true);
  if (isEdit === true) {
    return (
      <View>
        {/* <TextInputArea
          name="Enter Current Password"
          value=""
          editable={true}
          isSecure={true}
          placeholder={"Current Password"}
        />
        <TextInputArea
          name="Enter new Password"
          value=""
          editable={true}
          isSecure={true}
          placeholder={"New Password"}
        />
        <TextInputArea
          name="Confirm new Password"
          value=""
          editable={true}
          isSecure={true}
          placeholder={"Confirm New Password"}
        /> */}
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
            <TouchableOpacity onPress={onPress}>
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
            <TouchableOpacity onPress={onPress}>
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
    );
  } else if (isEdit === false) {
    return (
      <View>
        <TextInputArea
          name="Password"
          value={password}
          editable={false}
          isSecure={true}
          placeholder={""}
          onChangeText={password}
        />
        <Text
          style={{
            alignSelf: "flex-end",
            fontWeight: "bold",
          }}
          onPress={onPress2}
        >
          Change Password
        </Text>
      </View>
    );
  }
}
