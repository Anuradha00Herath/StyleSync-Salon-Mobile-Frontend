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
  TouchableOpacity
} from "react-native";
import { TextInputArea } from "../../../../../Components/text-input-area-in-settings";
import * as ImagePicker from 'expo-image-picker';
import { TouchableArea } from "../../../../../Components/touchable-area-in-profile";

export default function EditStaffProfile({ navigation }) {
    const [image, setImage] = useState(require("../../../../../assets/images.jpg"));
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
          Edit Anuradha's Profile
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
            alignSelf: "center",
          }}
        >
          <TouchableArea name="Notifications" iconName="notifications" option="switch"/>
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
          onPress={() => navigation.navigate("EditProfile")}
        >
          <TouchableArea name="Edit Profile" iconName="person" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("EditService")}
        >
          <TouchableArea name="Edit Services" iconName="cut" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("EditWorkingDays")}
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