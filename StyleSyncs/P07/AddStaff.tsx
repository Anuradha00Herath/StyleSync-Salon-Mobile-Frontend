import React from "react";
import{ImageBackground,StatusBar} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AppName } from "../Component/AppName";
import { imageStyles } from "../Component/globaleStyles";
import { AddStaffContant } from "./AddStaffContent";

const backImg=require("../assets/StyleSync.jpeg")

export  default function AddStaff() {
    return(
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} contentInsetAdjustmentBehavior='scrollableAxes'>
        <ImageBackground source={backImg} style={imageStyles.container} >
        <StatusBar/>
        <AppName/>
       <AddStaffContant/>
        </ImageBackground>
        </KeyboardAwareScrollView>
    );
}