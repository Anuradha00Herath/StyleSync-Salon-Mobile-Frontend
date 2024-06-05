import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, View, Text } from "react-native";

export function ServiceShow() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "95%",
          alignSelf: "center",
          borderColor: "grey",
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
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
              Mens Hair Cut
            </Text>
            <View
              style={{
                marginTop: 1,
                flexDirection: "row",
              }}
            >
              {/* <Ionicons style={{
                padding: 3
              }} name="time-outline" size={15} color="black" /> */}
              <Text
                style={{
                  fontSize: 15,
                }}
              >
                40min
              </Text>
            </View>
          </View>
        </View>
        <View style={{
                flexDirection: "row",
                paddingVertical: 15,
              }}>
        <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginRight: 5,
              }}
            >
              LKR250
            </Text>
        <Ionicons
          name="chevron-forward"
          size={20}
          color="grey"
        />
        </View>
      </View>
    </View>
  );
}
