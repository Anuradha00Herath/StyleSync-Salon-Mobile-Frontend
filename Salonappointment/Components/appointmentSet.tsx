import React from "react";
import { View, Text } from "react-native";
import { AppointmentBlock } from "./appointmentBlock";
import { useNavigation } from "@react-navigation/native";

export function AppointmentSet({ startTime, appointments, navigation}) {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ marginHorizontal: 13, flexDirection: "row" }}>
        <View
          style={{
            height: 1,
            width: "10%",
            borderColor: "rgba(0,0,0,0.3)",
            borderBottomWidth: 1,
            marginTop: 9,
          }}
        ></View>
        <Text style={{ marginHorizontal: 5, fontSize: 12 }}>{startTime}</Text>
        <View
          style={{
            height: 1,
            width: "80%",
            borderColor: "rgba(0,0,0,0.3)",
            borderBottomWidth: 1,
            marginTop: 9,
          }}
        ></View>
      </View>
      
      <View style={{ width:'95%', height: 'auto', flexWrap: 'wrap' }}>
        {appointments.map((appointment: any, index: React.Key) => (
          <AppointmentBlock 
          key={index} 
          appointment={appointment}
          navigation={navigation}
          />
        ))}
      </View>
    </View>
  );
}
