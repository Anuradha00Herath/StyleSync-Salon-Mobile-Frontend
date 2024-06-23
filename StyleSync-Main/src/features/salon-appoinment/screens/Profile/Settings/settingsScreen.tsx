import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { DropdownList, TouchableArea } from "../../../components/touchable-area-in-profile";

export default function SettingsScreen({navigation ,route}) {
  const {salonId} = route.params;
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
          size={25}
          color="black"
          onPress={()=>navigation.goBack()}
          // onPress={() => navigation.navigate("Profile")}
          />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Settings
        </Text>
      </View>
      <ScrollView>
        {/* General Settings */}
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
          <TouchableArea name="Dark Mode" iconName="moon" option="switch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
        >
          <DropdownList name="Language" iconName="language" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
        >
          <TouchableArea name="Notifications" iconName="notifications" option="switch"/>
        </TouchableOpacity>

        {/* Account Seetings */}
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
          onPress={() => navigation.navigate("EditLogin" ,{salonId:salonId})}
        >
          <TouchableArea name="Edit Login Details" iconName="log-in" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("EditSalonProfile" , {salonId:salonId})}
        >
          <TouchableArea name="Edit Salon Profile" iconName="bag-handle" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("EditSalonAddress" ,{salonId:salonId})}
        >
          <TouchableArea name="Edit Salon Address" iconName="pencil" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("EditLocation" ,{salonId:salonId})}
        >
          <TouchableArea name="Edit Location" iconName="location" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("StaffListView" ,{salonId:salonId})}
        >
          <TouchableArea name="Edit Staff Members Profiles" iconName="people" option="touch"/>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
        >
          <TouchableArea name="Log Out" iconName="log-out" option=""/>
        </TouchableOpacity>

        {/* Other Settings */}
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
      </ScrollView>
    </View>
  );
}
