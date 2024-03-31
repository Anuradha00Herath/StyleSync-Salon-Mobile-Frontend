import React from "react";
import { ImageBackground,StatusBar} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { imageStyles } from "../Component/globaleStyles";
import { AppName } from "../Component/AppName";
import { Page06Sub } from "./Page06EditSub";


const backImg=require("../assets/StyleSync.jpeg")

export default function Page06EditDetails({route}){
    const { serviceName,duration,price} = route.params;
    
    return(
       
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} contentInsetAdjustmentBehavior='scrollableAxes'>
           <StatusBar/>
           <ImageBackground source={backImg} style={imageStyles.container} >
                <AppName/>
                <Page06Sub initialServiceName={serviceName}  initialDuration={duration} initialPrice={price}/> 
           </ImageBackground>
           </KeyboardAwareScrollView> 
           
    )
}