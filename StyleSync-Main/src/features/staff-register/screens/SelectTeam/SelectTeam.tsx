import React from "react";
import { ImageBackground,StatusBar} from "react-native";
import { imageStyles } from "../../components/globaleStyles";
import { AppName } from "../../components/AppName";
import {SelectTeamContent} from "./SelectTeamContent";
import{BACKGROUND_IMAGE} from "../../components/BackGroundImage"


//const backImg=require("../../../../assets/StyleSync.jpeg")

export default function SelectTeam() {
    return (
          <ImageBackground 
               source={BACKGROUND_IMAGE} 
               style={imageStyles.container} >
            <StatusBar/>
            <AppName/>
            <SelectTeamContent/>
          </ImageBackground>
    );}