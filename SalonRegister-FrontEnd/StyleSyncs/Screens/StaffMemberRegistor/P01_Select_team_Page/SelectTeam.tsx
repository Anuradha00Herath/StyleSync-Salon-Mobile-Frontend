import React from "react";
import { ImageBackground,StatusBar } from "react-native";
import { imageStyles } from "../../../Styles/StaffMemberRegistor/globaleStyles"
import { AppName } from "../../../Component/StaffMemberRegister/AppName";
import {SelectTeamContent} from "./SelectTeamContent";

const backImg=require("../../../../assets/StyleSync.jpeg")

export default function SelectTeam() {
    return (
          <ImageBackground 
               source={backImg} 
               style={imageStyles.container} 
               resizeMode="cover">
            <StatusBar/>
            <AppName/>
            <SelectTeamContent/>
          </ImageBackground>
    );}