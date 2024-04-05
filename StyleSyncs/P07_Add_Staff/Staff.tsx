import React from "react";
import{ImageBackground,StatusBar} from 'react-native';
import { AppName } from "../Component/AppName";
import { imageStyles } from "../Component/globaleStyles";
import { StaffContent } from "./StaffContent";

const backImg=require("../assets/StyleSync.jpeg")

export  default function Staff() {

    const Servise=[
        {id:1, name:"kaml" , Service:"Haircutting"      },
        {id:2, name: "Bimal",Service:"Hairstyling"      },
        {id:3, name:"saman", Service:"Hair coloring"   },
        {id:4, name:"Amal",  Service:"Hair treatments"  },
        ];
    return(
        <ImageBackground source={backImg} style={imageStyles.container} >
        <StatusBar/>
        <AppName/>
        <StaffContent service={Servise}/>
        </ImageBackground>
    );
}