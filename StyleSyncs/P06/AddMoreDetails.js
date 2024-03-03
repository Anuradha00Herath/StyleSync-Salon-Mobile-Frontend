import React from "react";
import { ImageBackground,StatusBar} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { imageStyles } from "../Component/globaleStyles";
import { AppName } from "../Component/AppName";
import { AddMoreContant } from "./AddMoreContant";


const backImg=require("../assets/StyleSync.jpeg")

export default function AddMoreDetails(){
    return(
       
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} contentInsetAdjustmentBehavior='scrollableAxes'>
           <StatusBar style={imageStyles.Bar}/>
           <ImageBackground source={backImg} style={imageStyles.container} >
                <AppName/>
                <AddMoreContant/> 
           </ImageBackground>
           </KeyboardAwareScrollView> 
           
    )
}