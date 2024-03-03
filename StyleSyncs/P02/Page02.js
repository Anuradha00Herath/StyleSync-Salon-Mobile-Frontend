import React from "react";
import { ImageBackground,StatusBar } from "react-native";
import { imageStyles } from "../Component/globaleStyles";
import { AppName } from "../Component/AppName";
import { Page02Content } from "./Page02Content";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const backImg=require("../assets/StyleSync.jpeg")

export default function Page02({route}) {
    const {name} =  route.params; 
    return (
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageBackground source={backImg} style={imageStyles.container}>
            <StatusBar style={imageStyles.Bar}/>
            <AppName/>
            <Page02Content topic={name}/> 
          </ImageBackground>
      </KeyboardAwareScrollView> 
    );}