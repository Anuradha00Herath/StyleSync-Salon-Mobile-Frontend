import React from "react";
import { ImageBackground,StatusBar } from "react-native";
import { imageStyles } from "../Component/globaleStyles"
import { AppName } from "../Component/AppName";
import {SelectTeamContent} from "./SelectTeamContent";

const backImg=require("../assets/StyleSync.jpeg")

export default function SelectTeam() {
    return (
          <ImageBackground source = {backImg} style={imageStyles.container}>
            <StatusBar/>
            <AppName/>
            <SelectTeamContent/>
          </ImageBackground>
    );}