import React from "react";
import {ImageBackground,StatusBar} from 'react-native';
import { AppName } from "../Component/AppName";
import { imageStyles } from "../Component/globaleStyles";
import { Page06Content } from "./Page06Content";

const backImg=require("../assets/StyleSync.jpeg")

export default function HairService(){
  const hairServise=[
    {id:1, name:"Haircutting",       price:'500',   duration:'40'},
    {id:2, name:"Hairstyling",       price:'700',   duration:'20'},
    {id:3, name:"Hair coloring",     price:'300',   duration:'50'},
    {id:4,  name:"Hair treatments",  price:'400',      duration:'60'},
    
    
];
  return(
    <ImageBackground source={backImg} style={imageStyles.container} >
        <StatusBar/>
        <AppName/>
        <Page06Content Service="Hair Service" service={hairServise}/>
        
    </ImageBackground>
  );
}
