import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TextInputArea } from "../../../../../Components/text-input-area-in-settings";
import { StaffMember } from "../../../../../Components/list-view-of-staff-members";

export default function StaffListView({ navigation }) {
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
          Staff Members
        </Text>
      </View>
      <Image
        source={require("../../../../../assets/staff.png")}
        style={{
          width: 250,
          height: 150,
          marginTop: 50,
          alignSelf: "center",
        }}
      ></Image>
      <TouchableOpacity onPress={() => navigation.navigate("EditStaffProfile")}>
        <StaffMember />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("EditStaffProfile")}>
        <StaffMember />
      </TouchableOpacity>
    </View>
  );
}
