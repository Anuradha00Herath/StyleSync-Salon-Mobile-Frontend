import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View, Text } from "react-native";

export function WorkingDaysAndHours({name, openHour,closeHour,isOpen}){
    const formattedTime = isOpen ? `${openHour} - ${closeHour}` : 'Closed';
    return(
        <View style={{
            flexDirection:"row",
            justifyContent: "space-between",
            width: "95%",
            alignSelf: "center",
            padding: 10
        }}>
            <View
            style={{
                flexDirection:"row",
            justifyContent: "space-between",
            width: "65%",
            }}
            >
            <Text
            style={{
                fontSize: 15,
                fontWeight: "bold"
            }}>{name}</Text>
            <Text
            style={{
                fontSize: 15
            }}
            >{formattedTime}</Text>
            </View>
            <Ionicons
          name="chevron-forward"
          size={20}
          color="grey"
        />
        </View>
    )
}