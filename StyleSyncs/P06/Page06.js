import React from "react";
import {ImageBackground,StatusBar} from 'react-native';
import { AppName } from "../Component/AppName";
import { imageStyles } from "../Component/globaleStyles";
import { Page06Content } from "./Page06Content";

const backImg=require("../assets/StyleSync.jpeg")

export default function Page06({ route }){
    const { Service } = route.params;
  const hairServise=[
    {id:1, name:"Haircutting",       price:'25.99',   duration:'40'},
    {id:2, name:"Hairstyling",       price:'35.99',   duration:'20'},
    {id:3, name:"Hair coloring",     price:'30.99',   duration:'50'},
    {id:4,  name:"Hair treatments",  price:'40',      duration:'60'},
    ];
    const NailService=[
        {id:1, name:"Basic Manicure",    price:'25.99',   duration:'40'},
        {id:2, name:"Gel Manicure",      price:'35.99',   duration:'20'},
        {id:3, name:"Shellac Manicurei", price:'30.99',   duration:'50'},
        {id:4,  name:"French Manicure",  price:'40',      duration:'60'},
        {id:5,  name:"Acrylic Nails",    price:'30',      duration:'60'},
    ];
    const Facials=[
        {id:1, name:"Classic Facial",    price:'25.99',   duration:'40'},
        {id:2, name:"Hydrating Facial",      price:'35.99',   duration:'20'},
        {id:3, name:"Exfoliating Facial", price:'30.99',   duration:'50'},
        {id:4,  name:"Anti-Aging Facial",  price:'40',      duration:'60'},
        
    ];
    const selectService = (Service) => {
        switch (Service) {
          case "Hair Servise":
            return hairServise;
          case "Nail Service":
            return NailService;
            case "Facials":
                return Facials;
          default:
            console.warn(`Unknown service: ${Service}`);
            return []; // Return an empty array if the service is not found
        }
      };
      const selectedService = selectService(Service);
  return(
    <ImageBackground source={backImg} style={imageStyles.container} >
        <StatusBar/>
        <AppName/>
        <Page06Content Service={Service} service={selectedService}/>
        
    </ImageBackground>
  );
}
