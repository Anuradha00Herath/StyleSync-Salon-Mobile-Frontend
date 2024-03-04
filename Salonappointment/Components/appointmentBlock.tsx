import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

export function AppointmentBlock({ appointment }) {
  const { customer, staff, service, gender } = appointment;

  return (
    <View
      style={{
        width: 175,
        height: 227.5,
        backgroundColor: "#EFEFEF",
        margin: 10,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: "auto",
          width: "90%",
          marginTop: 6,
          borderBottomWidth: 1,
          borderColor: "black",
          padding: 5,
          alignSelf: "center",
        }}
      >
        <Image
          source={require("../assets/images.jpg")}
          style={{
            width: 25,
            height: 25,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 5,
          }}
        ></Image>
        <Text
          style={{
            marginLeft: 5,
            paddingTop: 5,
          }}
        >
          <Text>{staff.name}</Text>
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 13,
          marginTop: 10,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Image
          source={require("../assets/images.jpg")}
          style={{
            width: 45,
            height: 45,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 5,
          }}
        ></Image>
        <View
          style={{
            marginTop: 8,
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <Text
            style={{
              marginLeft: 5,
              fontWeight: "bold",
            }}
          >
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontWeight: "bold",
            }}
          >
            <Text>{customer.name}</Text>
          </Text>
        </View>
        <View style={{
            height: 1,
            width: '100%',
            backgroundColor: 'black',
            marginTop: 6
        }}></View>
        <Text style={{
            marginTop: 3
        }}>
          <Text>{service.name}</Text>
        </Text>
        <View style={{
            height: 1,
            width: '100%',
            backgroundColor: 'black',
            marginTop: 6
        }}></View>
        <Text style={{
            marginTop: 3
        }}>
          <Text>{gender}</Text>
        </Text>
        <View style={{
            height: 1,
            width: '100%',
            backgroundColor: 'black',
            marginTop: 6
        }}></View>
        <Text style={{
            marginTop: 3
        }}>
          <Text>LKR {service.price}</Text>
        </Text>
      </View>
      <TouchableOpacity style={{
        width: '90%',
        height: 30,
        backgroundColor: '#8B6C58',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
        marginTop: 3
      }}><Text style={{
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
      }}>View info</Text></TouchableOpacity>
    </View>
  );
}
