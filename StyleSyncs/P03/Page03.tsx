import React from "react";
import { ImageBackground,StatusBar } from "react-native";
import { imageStyles } from "../Component/globaleStyles";
import { AppName } from "../Component/AppName";
import { Page03Content } from "./Page03Content";

const backImg=require("../assets/StyleSync.jpeg")

export default function Page03() {
    return (
          <ImageBackground source={backImg} style={imageStyles.container}>
             <StatusBar/>
            <AppName/>
            <Page03Content/>
          </ImageBackground>
    );}