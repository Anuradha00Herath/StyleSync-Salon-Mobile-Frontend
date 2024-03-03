import React from "react";
import { ImageBackground,StatusBar } from "react-native";
import { imageStyles } from "../Component/globaleStyles";
import { AppName } from "../Component/AppName";
import { Page04Content } from "./Page04Content";

const backImg=require("../assets/StyleSync.jpeg")

export default function Page04() {
    return (
          <ImageBackground source={backImg} style={imageStyles.container}>
            <StatusBar style={imageStyles.Bar}/>
            <AppName/>
            <Page04Content/>
          </ImageBackground>
    );}