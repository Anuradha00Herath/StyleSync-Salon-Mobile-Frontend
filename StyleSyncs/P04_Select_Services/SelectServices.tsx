import React from "react";
import { ImageBackground,StatusBar } from "react-native";
import { imageStyles } from "../Component/globaleStyles";
import { AppName } from "../Component/AppName";
import { SelectServicesContent } from "./SelectServicesContent";

const backImg=require("../assets/StyleSync.jpeg")

export default function SelectServices({route}) {
  const {staffId} = route.params;
    return (
          <ImageBackground source={backImg} style={imageStyles.container}>
            <StatusBar/> 
          {/* <StatusBar style={imageStyles.Bar}/> */}
            <AppName/>
            <SelectServicesContent staffId={staffId}/>
          </ImageBackground>
    );}