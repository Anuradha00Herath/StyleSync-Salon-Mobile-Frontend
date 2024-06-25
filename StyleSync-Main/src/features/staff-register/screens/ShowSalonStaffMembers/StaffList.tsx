import React, { useState } from "react";
import { ImageBackground, StatusBar, View } from "react-native";
import { AppName } from "../../components/AppName";
import { imageStyles } from "../../components/globaleStyles";
import { StaffContent } from "./StaffListContent";
import { useFocusEffect } from "@react-navigation/native";
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import axios from "axios";

export default function Staff({route}) {
  const {salonId} = route.params;
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      fetchServiceName();
    }, [])
  );

  const fetchServiceName = async () => {
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/staff/show-staff-list";
      const response = await axios.get(url, { params: { salonId: salonId } });
      const result = response.data;
      const { status, data } = result;
      setStaff(data);
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
            width: "100%",
            backgroundColor: "#FDFDFD",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "65%",
          }}
        >
          <StaffContent staffName={staff} salonId={salonId} />
        </View>
      </View>
    </ImageBackground>
  );
}
