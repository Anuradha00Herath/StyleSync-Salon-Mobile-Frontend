import React from "react";
import { ImageBackground,StatusBar } from "react-native";
import { imageStyles } from "../Component/globaleStyles";
import { AppName } from "../Component/AppName";
import { PersanalInformationContent } from "./PersanalInformationContent";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const backImg=require("../assets/StyleSync.jpeg")

export default function PersanalInformation({route}) {
    const {name} =  route.params; 
    return (
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageBackground source={backImg} style={imageStyles.container}>
          <StatusBar/>
            <AppName/>
            <PersanalInformationContent topic={name}/> 
          </ImageBackground>
      </KeyboardAwareScrollView> 
    );}