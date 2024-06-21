import React from "react";
import { View, Image,Text } from "react-native";

export function StaffView(){
    return(
        <View 
        style={{
            backgroundColor: "white",
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            padding: 5,
            alignItems: 'center',
            marginHorizontal:5
        }}
        >
            <Image
            source={require("../assets/images.jpg")}
            style={{
              width: 100,
              height: 100,
              borderColor: "rgba(0,0,0,0.3)",
              borderWidth: 0.5,
              borderRadius: 5,
            }}
            ></Image>
            <Text
            style={{
                marginTop: 5
            }}
            >Staff Name</Text>
        </View>
    );
}