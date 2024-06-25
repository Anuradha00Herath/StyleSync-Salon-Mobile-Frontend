import React from "react";
import { ImageBackground, StatusBar, View } from "react-native";
import { imageStyles } from "../../components/globaleStyles";
import { AppName } from "../../components/AppName";
import { BusinessHoursContent } from "./BusinessHoursContent";
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";

export default function BusinessHours({ route, navigation }) {
  const { salonId ,staffId } = route.params;
  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={imageStyles.container}>
      <StatusBar />
      <View style={{
          display:"flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}>
        <View>
          <AppName />
        </View>
        <View style={{
          height:"65%",
          backgroundColor: "#FDFDFD", 
          borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        }}>
          <BusinessHoursContent staffId={staffId} salonId={salonId} />
        </View>
      </View>
    </ImageBackground>
  );
}
