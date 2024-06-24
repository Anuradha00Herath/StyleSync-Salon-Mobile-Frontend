import React from "react";
import{ImageBackground,StatusBar} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AppName } from "../../../Component/StaffMemberRegister/AppName";
import { imageStyles } from "../../../Styles/StaffMemberRegistor/globaleStyles";
import { StaffMemberContant } from "./StaffMemberDetailsContent";

const backImg=require("../assets/StyleSync.jpeg")

export  default function StaffMemberDetails() {
    return(
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} contentInsetAdjustmentBehavior='scrollableAxes'>
        <ImageBackground source={backImg} style={imageStyles.container} >
        <StatusBar/>
        <AppName/>
       <StaffMemberContant/>
        </ImageBackground>
        </KeyboardAwareScrollView>
    );
}