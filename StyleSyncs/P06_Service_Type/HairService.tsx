import React, { useState } from "react";
import {ImageBackground,StatusBar} from 'react-native';
import { AppName } from "../Component/AppName";
import { imageStyles } from "../Component/globaleStyles";
import { Page06Content } from "./Page06Content";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const backImg=require("../assets/StyleSync.jpeg")

export default function HairService({route}){
  const {serviceType, staffId} = route.params;
  const [loading,setLoading] = useState(false);
  const [service, setService] = useState([]);
  useFocusEffect(
    React.useCallback(()=>{
      fetchServiceName();
    },[staffId])
  );

const fetchServiceName = async () => {
  try {
    setLoading(true);
    console.log(staffId, serviceType);
    const url = "https://stylesync-backend-test.onrender.com/app/v1/service/get-staff-service-info";
    const response = await axios.get(url, { params: { staffId , serviceType } });
    const result = response.data;
    const {status, data} = result;
    setService(data);
    if(status=== 200){
      console.log("success");
    }else{
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
  return(
    <ImageBackground source={backImg} style={imageStyles.container} >
        <StatusBar/>
        <AppName/>
        <Page06Content Service={serviceType} service={service} staffId={staffId} handleFetchService={fetchServiceName}/> 
    </ImageBackground>
  );
}
