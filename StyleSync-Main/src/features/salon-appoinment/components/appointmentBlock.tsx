import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity,StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/AntDesign";

export function AppointmentBlock({ appointment, navigation }) {
  const { id, customerAppointmentBlock, staff, serviceAppointmentBlock, gender } = appointment;
  

 
  return (
    <View style={styles.mainView}>
      <View>
        <Image source={ staff.image=== null
              ? require("../../../assets/images.jpg")
              : { uri:staff.image }}
               style={styles.SImage}>
        </Image>
        <Text style={styles.SText}>
          {staff.name}
        </Text>
      </View>

      <View style={styles.subView2}>
        <View style={styles.View1}>
            <Image source={customerAppointmentBlock[0].customer.image=== null
              ? require("../../../assets/images.jpg")
              : { uri:customerAppointmentBlock[0].customer.image }}
                  style={styles.CImage}>
            </Image>
          <View style={styles.view2}>
            <View style={styles.view3}>
                <Text style={styles.CNameText}>
                  {customerAppointmentBlock[0].customer.name }
                </Text>
                <Text style={styles.SNameText}>
                  {serviceAppointmentBlock[0].service.name}
                </Text>
                <Text style={styles.SPriceText}>
                  LKR{serviceAppointmentBlock[0].service.price}
                </Text>
                <Text style={styles.CGenderText}>
                  {customerAppointmentBlock[0].customer.gender} | 1 attempts
                </Text>
            </View>
            <View style={styles.view4}>
              <Icon name="right"
                    size={18}
                    color={"black"}
                    onPress={() => navigation.navigate("CustomerInfo", {appointment: appointment,})}
              />
            </View>
          </View>
        </View>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  mainView:{
    width: "95%",
    height: "auto",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
  },
  SImage:{
    width: 40,
    height: 40,
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 8,
  },
  SText:{
    textAlign: "center",
    fontSize: 12,
  },
  subView2:{
    backgroundColor: "#fdfdfd",
    width: "90%",
    marginLeft: 10,
    borderRadius: 25,
    padding: 10,
  },
  View1:{
    flexDirection: "row",
  },
  CImage:{
    width: 100,
    height: 100,
    borderColor: "rgba(0,0,0,0.3)",
    borderWidth: 0.5,
    borderRadius: 20,
  },
  view2:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "64%",
  },
  view3:{
    marginLeft: 20,
  },
  CNameText:{
    fontSize: 12,
    marginBottom: 8,
  },
  SNameText:{
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 8,
  },
  SPriceText:{
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 10,
  },
  CGenderText:{
    fontSize: 10,
  },
  view4:{
    marginTop: 10
  }
})