import React from "react";
import { View, Text } from "react-native";
import { AppointmentBlock } from "./appointmentBlock";

export function AppointmentSet({ startTime, appointments }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ marginHorizontal: 13, flexDirection: "row" }}>
        <View
          style={{
            height: 1,
            width: "10%",
            borderColor: "black",
            borderBottomWidth: 1,
            marginTop: 9,
          }}
        ></View>

        {/* Display start time */}
        <Text style={{ marginHorizontal: 5, fontSize: 12 }}>{startTime}</Text>
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
      
      {/* Render AppointmentBlock for each appointment */}
      <View style={{ width:'95%', height: 'auto', flexDirection: 'row', flexWrap: 'wrap' }}>
        {appointments.map((appointment, index) => (
          <AppointmentBlock key={index} appointment={appointment} />
        ))}
      </View>
    </View>
  );
}
