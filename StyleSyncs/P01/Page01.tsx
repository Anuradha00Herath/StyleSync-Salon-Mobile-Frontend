import React from "react";
import { ImageBackground,StatusBar } from "react-native";
import { imageStyles } from "../Component/globaleStyles";
import { AppName } from "../Component/AppName";
import { Page01Content} from "./Page01Content";

const backImg=require("../assets/StyleSync.jpeg")

export default function Page01() {
    return (
          <ImageBackground source={backImg} style={imageStyles.container}>
            <StatusBar/>
            <AppName/>
            <Page01Content/>
          </ImageBackground>
    );}