import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

export function AppointmentBlockTwo({ appointment , navigation}) {
  const { startTime, endTime,customerAppointmentBlock, serviceAppointmentBlock,staff,date} = appointment;
 

  return (
    <View style={{  
        width: '95%',
        height: 'auto',
        backgroundColor: "#EFEFEF",
        margin: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: "row",
      }}
    >
        <View style={{
           // marginHorizontal: 5,
            marginTop: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            width: "60%",
            alignItems: 'center',
            // backgroundColor: "#FFBF00",
        }}>
            <View style={{
              margin: 8,
              flexDirection: "row",
              flexWrap: "wrap",
              width: "90%",
              alignSelf: 'center',
              
            }}>
              <Image
                source={customerAppointmentBlock[0].customer.image=== null
                  ? require("../../../assets/images.jpg")
                  : { uri:customerAppointmentBlock[0].customer.image }}
                style={{
                  width: 45,
                  height: 45,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 5,
                }}
              />
              <View>
                <Text style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                }}>
                  {customerAppointmentBlock[0].customer.name}
                </Text>
                <Text style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                }}>
                  {customerAppointmentBlock[0].customer.gender === null? null:(customerAppointmentBlock[0].customer.gender)}
                </Text>
              </View>
            </View>
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
            }}
            onPress={() => navigation.navigate("CustomerInfo", {appointment: appointment})}
            >
              <Text style={{
                color: 'white',
                fontSize: 12,
                textAlign: 'center',
              }}>View info</Text>
            </TouchableOpacity>
        </View>
        <View
          style={{
              //marginHorizontal: 5,
              marginTop: 10,
              marginRight: 13,
              flexWrap: "wrap",
              width: 'auto',
              // backgroundColor: "#DE3163",
          }}>
              <Text style={{
              marginTop: 4,
            }}>{serviceAppointmentBlock[0].service.name}</Text>
              <Text style={{
              marginTop: 4,
            }}>{customerAppointmentBlock[0].customer.gender === null?  (" -- "):(customerAppointmentBlock[0].customer.gender)}</Text>
              <Text style={{
              marginTop: 4,
            }}>{serviceAppointmentBlock[0].service.price}</Text>
              <Text style={{
              marginTop: 4,
            }}>{startTime} - {endTime}</Text>
        </View>
    </View>
  );
}
