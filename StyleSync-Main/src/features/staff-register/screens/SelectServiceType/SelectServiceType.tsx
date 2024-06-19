import React from "react";
import { ImageBackground,StatusBar} from "react-native";
import { imageStyles } from "../../components/globaleStyles";
import { AppName } from "../../components/AppName";
import { SelectServicesTypeContent } from "./SelectServiceTypeContent";
import{BACKGROUND_IMAGE} from "../../components/BackGroundImage"

//const backImg=require("../../../../assets/StyleSync.jpeg")

export default function SelectServicesTypes({route}) {
  const {staffId} = route.params;
    return (
          <ImageBackground source={BACKGROUND_IMAGE} style={imageStyles.container}>
            <StatusBar/> 
            <AppName/>
            <SelectServicesTypeContent staffId={staffId}/>
          </ImageBackground>
    );}