import React from "react";
import{ImageBackground,StatusBar} from 'react-native';
import { AppName } from "../Component/AppName";
import { imageStyles } from "../Component/globaleStyles";
import { StaffContent } from "./StaffContent";

const backImg=require("../assets/StyleSync.jpeg")

export  default function Staff() {
    return(
        <ImageBackground source={backImg} style={imageStyles.container} >
        <StatusBar/>
        <AppName/>
        <StaffContent/>
        </ImageBackground>
    );
}