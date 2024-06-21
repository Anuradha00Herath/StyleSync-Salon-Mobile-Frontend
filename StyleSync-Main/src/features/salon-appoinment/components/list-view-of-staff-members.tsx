import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, View, Text } from "react-native";

export function StaffMember({name,openHour,closeHour}) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between",
          width: "95%",
          alignSelf: "center",
          borderBottomWidth: 1,
          borderColor: "grey",
          borderRadius: 10,
          padding: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../../../assets/images.jpg")}
            style={{
              width: 60,
              height: 60,
              alignSelf: "center",
            }}
          ></Image>
          <View
            style={{
              marginLeft: 10,
              paddingVertical: 5,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
             {name}
            </Text>
            <View
              style={{
                marginTop: 1,
                flexDirection: "row",
              }}
            >
              <Ionicons style={{
                padding: 3
              }} name="time-outline" size={15} color="black" />
              <Text
                style={{
                  fontSize: 15,
                }}
              >
                {openHour} - {closeHour}
              </Text>
            </View>
          </View>
        </View>
        <Ionicons
          style={{
            paddingVertical: 17,
          }}
          name="chevron-forward"
          size={25}
          color="grey"
        />
      </View>
    </View>
  );
}
