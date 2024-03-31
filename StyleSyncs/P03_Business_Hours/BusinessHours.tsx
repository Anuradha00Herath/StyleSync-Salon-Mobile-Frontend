import React from "react";
import { ImageBackground,StatusBar } from "react-native";
import { imageStyles } from "../Component/globaleStyles";
import { AppName } from "../Component/AppName";
import { BusinessHoursContent} from "./BusinessHoursContent";

const backImg=require("../assets/StyleSync.jpeg")

export default function BusinessHours() {
    return (
          <ImageBackground source={backImg} style={imageStyles.container}>
             <StatusBar/>
            <AppName/>
            <BusinessHoursContent/>
          </ImageBackground>
    );}