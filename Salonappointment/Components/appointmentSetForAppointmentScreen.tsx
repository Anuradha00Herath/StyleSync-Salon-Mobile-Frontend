import React from "react";
import { View, Text } from "react-native";
import { AppointmentBlockTwo } from "./appointmentBlockForAppointmentScreen";

export function AppointmentSetTwo() {
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
          Staff Name
        </Text>
        <View
          style={{
            height: 1,
            width: "70%",
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
        }}><AppointmentBlockTwo/>
        </View>
    </View>
  );
}
