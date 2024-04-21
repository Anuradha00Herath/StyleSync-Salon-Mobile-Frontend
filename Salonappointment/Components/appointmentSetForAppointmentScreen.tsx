import React from "react";
import { View, Text } from "react-native";
import { AppointmentBlockTwo } from "./appointmentBlockForAppointmentScreen";

export function AppointmentSetTwo({staffName, appointments, navigation}) {
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

        <Text
          style={{
            marginHorizontal: 5,
            fontSize: 12,
          }}
        >
          {staffName}
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
            width:'95%',
            height: 'auto',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}> 
        {appointments.map(appointment => (
  <AppointmentBlockTwo key={appointment.id} appointment={appointment} navigation={navigation} />
))}
        </View>
    </View>
  );
}
