import React from "react";
import { ImageBackground,StatusBar } from "react-native";
import { imageStyles } from "../Component/globaleStyles";
import { AppName } from "../Component/AppName";
import { BusinessHoursContent} from "./BusinessHoursContent";

const backImg=require("../assets/StyleSync.jpeg")

export default function BusinessHours({route,navigation}) {
      const {staffId} = route.params;
    return (
          <ImageBackground source={backImg} style={imageStyles.container}>
             <StatusBar/>
            <AppName/>
            <BusinessHoursContent
            staffId = {staffId}
            />
          </ImageBackground>
    );}