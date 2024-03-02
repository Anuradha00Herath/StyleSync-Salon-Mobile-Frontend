import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

export function AppointmentBlockTwo() {
  return (
    <View
      style={{  //Main container
        width: '90%',
        height: 'auto',
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: 'space-between',
        flexDirection: "row",
      }}
    >
        <View style={{
            marginHorizontal: 5,
            marginTop: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "60%",
            alignItems: 'center',
        }}>
            <View style={{
            margin: 8,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "90%",
            alignSelf: 'center'
          }}><Image
          source={require("../assets/images.jpg")}
          style={{
            width: 45,
            height: 45,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 5,
          }}
        ></Image>
        <View><Text
        style={{
          marginLeft: 5,
          fontWeight: "bold",
        }}
      >
        Customer Name
      </Text>
      <Text
        style={{
          marginLeft: 5,
          fontWeight: "bold",
        }}
      >
        (Gender)
      </Text></View></View>
      <TouchableOpacity style={{
        width: '60%',
        height: 30,
        backgroundColor: '#8B6C58',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        margin: 5,
        marginBottom: 10
      }}><Text style={{
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
      }}>View info</Text></TouchableOpacity>
        </View>
        <View
        style={{
            marginHorizontal: 5,
            marginTop: 10,
            marginRight: 13,
            flexWrap: "wrap",
            width: 'auto'
        }}>
            <Text style={{
            marginTop: 4
        }}>Service</Text>
        <Text style={{
            marginTop: 4
        }}>Gender</Text>
        <Text style={{
            marginTop: 4
        }}>Price</Text>
        <Text style={{
            marginTop: 4
        }}>Time</Text>
        </View>
        
    </View>
  );
}
