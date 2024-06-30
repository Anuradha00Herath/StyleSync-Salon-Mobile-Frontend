import React from "react";
import { ImageBackground,StatusBar,  Dimensions} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { imageStyles } from "../../components/globaleStyles";
import { AppName } from "../../components/AppName";
import { AddMoreContant } from "./AddMoreServiceContant";
import{BACKGROUND_IMAGE} from "../../components/BackGroundImage"

//const backImg=require("../../../../assets/StyleSync.jpeg")

export default function AddMoreDetails({route}){
    const { serviceType, staffId, salonId } = route.params;
    return(
           <ImageBackground source={BACKGROUND_IMAGE} style={imageStyles.container} >
            <StatusBar/>
            <AppName/>
             <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1}} contentInsetAdjustmentBehavior='scrollableAxes'>
                <AddMoreContant serviceType={serviceType} staffId={staffId}/> 
            </KeyboardAwareScrollView> 
           </ImageBackground>
         
           
    )
}