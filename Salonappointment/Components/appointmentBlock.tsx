import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/AntDesign";

export function AppointmentBlock({ appointment, navigation }) {
  const { id, customerAppointmentBlock, staff, serviceAppointmentBlock, gender } = appointment;
 
  // const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View
      style={{
        width: "95%",
        height: "auto",
        //backgroundColor: "#EFEFEF",
        // margin: 10,
        borderRadius: 10,
        padding: 10,
        flexDirection: "row",
      }}
    >
      <View>
        <Image
          source={require("../assets/man.jpg")}
          style={{
            width: 40,
            height: 40,
            borderColor: "green",
            borderWidth: 2,
            borderRadius: 20,
            marginTop: 8,
          }}
        ></Image>
        <Text
          style={{
            textAlign: "center",
            fontSize: 12,
          }}
        >
          {staff.name}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#fdfdfd",
          width: "90%",
          marginLeft: 10,
          borderRadius: 25,
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../assets/man.jpg")}
            style={{
              width: 100,
              height: 100,
              borderColor: "rgba(0,0,0,0.3)",
              borderWidth: 0.5,
              borderRadius: 20,
            }}
          ></Image>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "64%",
            }}
          >
            <View
              style={{
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  marginBottom: 8,
                }}
              >
                {customerAppointmentBlock[0].customer.name }
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  marginBottom: 8,
                }}
              >
                {serviceAppointmentBlock[0].service.name}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "800",
                  marginBottom: 10,
                }}
              >
                LKR{serviceAppointmentBlock[0].service.price}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                }}
              >
                { customerAppointmentBlock[0].customer.gender} | 1 attempts
              </Text>
            </View>
            <View style={{
              marginTop: 10

            }}>
              <Icon
                name="right"
                size={18}
                color={"black"}
                
                onPress={() =>
                  navigation.navigate("CustomerInfo", {
                    appointment: appointment,
                  })
                }
              />
            </View>
          </View>
        </View>
      </View>
      {/* <View
        style={{
          flexDirection: "row",
          height: "auto",
          width: "90%",
          marginTop: 6,
          borderBottomWidth: 0.5,
          borderColor: "rgba(0,0,0,0.4)",
          padding: 5,
          alignSelf: "center",
        }}
      >
        <Image
          source={require("../assets/images.jpg")}
          style={{
            width: 25,
            height: 25,
            borderColor: "rgba(0,0,0,0.3)",
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
            borderColor: "rgba(0,0,0,0.3)",
            borderWidth: 0.5,
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
          ></Text>
          <Text
            style={{
              marginLeft: 5,
              fontWeight: "bold",
            }}
          >
            <Text>{customer.name}</Text>
          </Text>
        </View>
        <View
          style={{
            height: 0.5,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            marginTop: 6,
          }}
        ></View>
        <Text
          style={{
            marginTop: 3,
          }}
        >
          <Text>{service.name}</Text>
        </Text>
        <View
          style={{
            height: 0.5,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            marginTop: 6,
          }}
        ></View>
        <Text
          style={{
            marginTop: 3,
          }}
        >
          <Text>{gender}</Text>
        </Text>
        <View
          style={{
            height: 0.5,
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            marginTop: 6,
          }}
        ></View>
        <Text
          style={{
            marginTop: 3,
          }}
        >
          <Text>LKR {service.price}</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: "90%",
          height: 30,
          backgroundColor: "#8B6C58",
          alignSelf: "center",
          alignItems: "center",
          padding: 5,
          borderRadius: 5,
          marginTop: 3,
        }}
        onPress={() =>
            navigation.navigate("CustomerInfo", {appointment:appointment})}
      >
        <Text
          style={{
            color: "white",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          View info
        </Text>
      </TouchableOpacity> */}
    </View>
  );
}
