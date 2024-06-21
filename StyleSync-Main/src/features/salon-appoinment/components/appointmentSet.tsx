import React from "react";
import { View, Text ,StyleSheet } from "react-native";
import { AppointmentBlock } from "./appointmentBlock";
import { useNavigation } from "@react-navigation/native";

export function AppointmentSet({ startTime, appointments, navigation}) {
  return (
    <View style={styles.mainView}>
      <View style={styles.subView1}>
          <View style={[styles.line,{width:"10%"}]}></View>
          <Text style={styles.text}>{startTime}</Text>
          <View style={[styles.line,{width:"80%"}]}></View>
      </View>
      <View style={styles.subView2}>
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

const styles = StyleSheet.create({
  mainView:{
    alignItems: 'center'
  },
  subView1:{
    marginHorizontal: 13, 
    flexDirection: "row" 
  },
  line:{
    height: 1,
    width: "10%",
    borderColor: "rgba(0,0,0,0.3)",
    borderBottomWidth: 1,
    marginTop: 9,
  },
  text:{
    marginHorizontal: 5, 
    fontSize: 12 
  },
  subView2:{
    width:'95%', 
    height: 'auto', 
    flexWrap: 'wrap' 
  }
})