import React from "react";
import { ImageBackground, StatusBar, View } from "react-native";
import { imageStyles } from "../../components/globaleStyles";
import { AppName } from "../../components/AppName";
import { SelectTeamContent } from "./SelectTeamContent";
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";

//const backImg=require("../../../../assets/StyleSync.jpeg")

export default function SelectTeam({ route }) {
  const { id } = route.params;
  console.log(id);
  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={imageStyles.container}>
      <StatusBar />
      <View style={{
          display:"flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          
        }}>
        <View>
          <AppName />
        </View>
        <View style={{
          height:"65%",
          backgroundColor: "#FDFDFD", 
          borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        }}>
          <SelectTeamContent id={id} />
        </View>
      </View>
    </ImageBackground>
  );
}
