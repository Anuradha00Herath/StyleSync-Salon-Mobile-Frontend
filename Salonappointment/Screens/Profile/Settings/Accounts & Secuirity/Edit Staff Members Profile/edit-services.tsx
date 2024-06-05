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
import { ServiceShow } from "../../../../../Components/service-show";

export default function EditService({ navigation }) {
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
          Anuradha's Services
        </Text>
      </View>
      <Image
        source={require("../../../../../assets/Services.png")}
        style={{
          width: 250,
          height: 150,
          marginTop: 50,
          alignSelf: "center",
        }}
      ></Image>
      <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          Hair Services
        </Text>
      <TouchableOpacity>
          <ServiceShow/>
      </TouchableOpacity>
      <TouchableOpacity>
          <ServiceShow/>
      </TouchableOpacity>
      <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          Nail Services
        </Text>
      <TouchableOpacity>
          <ServiceShow/>
      </TouchableOpacity>
      <TouchableOpacity>
          <ServiceShow/>
      </TouchableOpacity>
    </View>
  );
}
