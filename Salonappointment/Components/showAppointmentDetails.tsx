import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Ionicons from "../node_modules/@expo/vector-icons/Ionicons";
const { width, height } = Dimensions.get("screen");

export default function AppointmentInfo({appointment}) {
    const { id, customer, staff, service, gender } = appointment; 
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <View
          style={{
            backgroundColor: "#FDFDFD",
            width: "100%",
            height: "80%",
            bottom: 0,
            paddingBottom: "auto",
            position: "absolute",
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={25}
                style={{
                  marginTop: 10,
                  marginLeft: 10,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 14,
                marginRight: 10,
                fontWeight: "bold",
              }}
            >
              {staff.name}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 31,
              marginTop: 24,
            }}
          >
            <Image
              source={require("../assets/images.jpg")}
              style={{
                height: 100,
                width: 100,
                borderWidth: 1,
                borderColor: "#2E2528",
                borderRadius: 10,
              }}
            ></Image>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginTop: 12,
              }}
            >
              Customer Name
            </Text>
            <Text
              style={{
                fontSize: 12,
              }}
            >
              Tp number
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              height: 0,
              width: "90%",
              alignSelf: "center",
              marginTop: 12,
              borderColor: "#EFEFEF"
            }}
          ></View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 12,
              marginLeft: 31,
            }}
          >
            Appointment Details
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              marginTop: 12,
            }}
          >
            <Text>Service Name</Text>
            <Text>Price</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              marginTop: 12,
            }}
          >
            <Text>Appointment Date</Text>
            <Text>Time</Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              height: 0,
              width: "90%",
              alignSelf: "center",
              marginTop: 12,
              borderColor: "#EFEFEF"
            }}
          ></View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 12,
              marginLeft: 31,
            }}
          >
            History
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              marginTop: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="sync"
                size={15}
                style={{
                  marginTop: 3,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                }}
              >
                Service Name
              </Text>
            </View>

            <Text>Date</Text>
            <Text>Price</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              marginTop: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="sync"
                size={15}
                style={{
                  marginTop: 2,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                }}
              >
                Service Name
              </Text>
            </View>

            <Text>Date</Text>
            <Text>Price</Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              height: 0,
              width: "90%",
              alignSelf: "center",
              marginTop: 12,
              borderColor: "#EFEFEF"
            }}
          ></View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 12,
              marginLeft: 31,
            }}
          >
            Attachement
          </Text>
        </View>
    </View>
  );
}
