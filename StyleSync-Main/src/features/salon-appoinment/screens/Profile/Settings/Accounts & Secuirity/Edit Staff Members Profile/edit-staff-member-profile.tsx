import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  Platform,
  GestureResponderEvent,
  StyleSheet,
  Button,
  TouchableOpacity,
  Switch
} from "react-native";
import { TextInputArea } from "../../../../../components/text-input-area-in-settings";
import * as ImagePicker from 'expo-image-picker';
import { TouchableArea } from "../../../../../components/touchable-area-in-profile";
import axios from "axios";

export default function EditStaffProfile({ navigation ,route }) {
  const {name, Id ,salonId} =  route.params; 
  const[notification , setNotification] =useState(true);
  const [isEnabled, setIsEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  


    const [image, setImage] = useState(require("../../../../../../../assets/images.jpg"));
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'android') {
            const libraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (libraryStatus.status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
    
            const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
            if (cameraStatus.status !== 'granted') {
              alert('Sorry, we need camera permissions to make this work!');
            }
          }
        })();
        fetchDetails();
      }, []);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.canceled) {
          setImage(result);
        }
      };

      const fetchDetails = async () => {
        try {
          setLoading(true);
          const url = "https://stylesync-backend-test.onrender.com/app/v1/notification/getStaffNotificationAvailability";
          console.log('Request Parameters:', { 
            Id:Id  
          });
          const response = await axios.get(url, { params: {  Id:Id} });
          const data = response.data.data;
          console.log('Response data:', data);
          console.log(data.notification)
          if(data.notification === true){
            
            setNotification(true)
            setIsEnabled(true)
          }else{
            setNotification(false);
            setIsEnabled(false)
          }
          
        } catch (error) {
          console.error(error);
        }finally {
          setLoading(false);
        }
      };
      const toggleSwitch = async() => {
        setIsEnabled(previousState => !previousState);
        console.log(!notification);
        try {
          setLoading(true);
          const url =
            "https://stylesync-backend-test.onrender.com/app/v1/notification/UpdateStaffNotificationAvailability";
            console.log('Request Parameters:', { 
              Id:Id,
              notification:!notification
             
            });
          const response = await axios.put(url, {
                Id:Id,
                notification:!notification
          });
          const result = response.data;
          const { message, status } = result;
          if (status === 201) {
            console.log("Success", message);
          } else {
            console.log("Error",status);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }



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
          Edit {name}'s Profile
        </Text>
      </View>
      <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          General
        </Text>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-start',
            //backgroundColor:'#2F4F4F',
            flexDirection:'row',
            width:'88%',
            marginHorizontal:10,
          }}
          onPress={toggleSwitch}
        >
          <TouchableArea name="Notifications" iconName="notifications" option="switch"/>
          <TouchableOpacity>
          <Switch
              style={{}}
              trackColor={{ false: "#767577", true: "#2e2528" }}
              thumbColor={true ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
      />
      </TouchableOpacity>
        </TouchableOpacity>

      <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          Account & Secuirity
        </Text>
      <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("EditProfile" ,{Id:Id,salonId:salonId})}
        >
          <TouchableArea name="Edit Profile" iconName="person" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("ShowService" ,{Id:Id,salonId:salonId ,name:name})}
        >
          <TouchableArea name="Edit Services" iconName="cut" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("EditWorkingDays",{Id:Id,salonId:salonId,name:name} )}
        >
          <TouchableArea name="Edit Working Days" iconName="today" option="touch"/>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          Other
        </Text>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
        >
          <TouchableArea name="Privacy Policies" iconName="bag" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
        >
          <TouchableArea name="Terms & Conditions" iconName="document-text" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
        >
          <TouchableArea name="Help" iconName="help-buoy" option="touch"/>
        </TouchableOpacity>
    </View>
  );
}