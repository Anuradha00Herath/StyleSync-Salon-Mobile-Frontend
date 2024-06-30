import React, { useState } from "react";
import { ImageBackground, StatusBar, View } from "react-native";
import { AppName } from "../../components/AppName";
import { imageStyles } from "../../components/globaleStyles";
import { ShowSevicesContent } from "./showServicesContent";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";

//const backImg=require("../../../../assets/StyleSync.jpeg")

export default function ShowSevices({ route }) {
  const { serviceType, staffId, salonId } = route.params;
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      setService([]);
      fetchServiceName();
    }, [staffId])
  );

  const fetchServiceName = async () => {
    try {
      setLoading(true);
      console.log(staffId, serviceType);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/service/get-staff-service-info";
      const response = await axios.get(url, {
        params: { staffId, serviceType },
      });
      const result = response.data;
      const { status, data } = result;
      setService(data);
      if (status === 200) {
        console.log("success");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={imageStyles.container}>
      <StatusBar />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <View>
          <AppName />
        </View>
        <View
          style={{
            height: "65%",
            backgroundColor: "#FDFDFD",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <ShowSevicesContent
            serviceType={serviceType}
            service={service}
            staffId={staffId}
            salonId ={salonId}
            handleFetchService={fetchServiceName}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
