import React from "react";
import { View, Text } from "react-native";
import { AppointmentBlock } from "./appointmentBlock";

export function AppointmentSet() {
  return (
    <View style={{
        alignItems: 'center'
    }}>
      <View
        style={{
          marginHorizontal: 13,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            height: 1,
            width: "10%",
            borderColor: "black",
            borderBottomWidth: 1,
            marginTop: 9,
          }}
        ></View>

        {/* This time should be comes from backend*/}
        <Text
          style={{
            marginHorizontal: 5,
            fontSize: 12,
          }}
        >
          15:00
        </Text>
        <View
          style={{
            height: 1,
            width: "80%",
            borderColor: "black",
            borderBottomWidth: 1,
            marginTop: 9,
          }}
        ></View>
      </View>
      <View style={{
            // backgroundColor:'red',
            width:'95%',
            height: 'auto',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}><AppointmentBlock/>
        <AppointmentBlock/>
        <AppointmentBlock/></View>
    </View>
  );
}
