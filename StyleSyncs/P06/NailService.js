import React from "react";
import {ImageBackground,StatusBar} from 'react-native';
import { AppName } from "../Component/AppName";
import { imageStyles } from "../Component/globaleStyles";
import { Page06Content } from "./Page06Content";

const backImg=require("../assets/StyleSync.jpeg")

export default function NailService(){
  const NailService=[
    {id:1, name:"Basic Manicure",    price:'25.99',   duration:'40'},
    {id:2, name:"Gel Manicure",      price:'35.99',   duration:'20'},
    {id:3, name:"Shellac Manicurei", price:'30.99',   duration:'50'},
    {id:4,  name:"French Manicure",  price:'40',      duration:'60'},
    {id:5,  name:"Acrylic Nails",    price:'30',      duration:'60'},
];
  return(
    <ImageBackground source={backImg} style={imageStyles.container} >
        <StatusBar/>
        <AppName/>
        <Page06Content Service="Nail Service" service={NailService}/>
        
    </ImageBackground>
  );
}
