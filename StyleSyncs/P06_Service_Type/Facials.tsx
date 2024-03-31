import React from "react";
import {ImageBackground,StatusBar} from 'react-native';
import { AppName } from "../Component/AppName";
import { imageStyles } from "../Component/globaleStyles";
import { Page06Content } from "./Page06Content";

const backImg=require("../assets/StyleSync.jpeg")

export default function Facials(){
  const Facials=[
    {id:1, name:"Classic Facial",    price:'25.99',   duration:'40'},
    {id:2, name:"Hydrating Facial",      price:'35.99',   duration:'20'},
    {id:3, name:"Exfoliating Facial", price:'30.99',   duration:'50'},
    {id:4,  name:"Anti-Aging Facial",  price:'40',      duration:'60'},
    
];
  return(
    <ImageBackground source={backImg} style={imageStyles.container} >
        <StatusBar/>
        <AppName/>
        <Page06Content Service="Facials" service={Facials}/>
        
    </ImageBackground>
  );
}