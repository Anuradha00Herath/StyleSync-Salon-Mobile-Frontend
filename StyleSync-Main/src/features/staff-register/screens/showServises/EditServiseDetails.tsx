import React from "react";
import { ImageBackground,StatusBar} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { imageStyles } from "../../components/globaleStyles";
import { AppName } from "../../components/AppName";
import {EditServiceDetailsContent } from "./EditServiceDetailsContent";
import{BACKGROUND_IMAGE} from "../../components/BackGroundImage"


//const backImg=require("../../../../assets/StyleSync.jpeg")

export default function EditServiceDetails({route}){
    const { serviceName,duration,price, serviceId, staffId} = route.params;
    return(
       
        
          
           <ImageBackground source={BACKGROUND_IMAGE} style={imageStyles.container} >
                <StatusBar/>
                <AppName/>
                <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} contentInsetAdjustmentBehavior='scrollableAxes'>
                <EditServiceDetailsContent initialServiceName={serviceName}  
                                           initialDuration={duration} 
                                           initialPrice={price} 
                                           serviceId={serviceId} staffId={staffId}/> 
                  </KeyboardAwareScrollView>                          
           </ImageBackground>
           
           
    )
}