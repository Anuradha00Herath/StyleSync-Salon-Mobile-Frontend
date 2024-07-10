import React, { useState } from "react";
import { ImageBackground, View, Text, StatusBar } from "react-native";
import { AppName } from "../../components/AppName";
import { globaleStyles, imageStyles } from "../../components/globaleStyles";
import { FlatButton } from "../../components/FlatButton";
import { useNavigation } from "@react-navigation/native";
import { TimePicker } from "../../components/TimePicker";
import axios from "axios";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "../../components/Button";
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";

//const backImg=require("../../../../assets/StyleSync.jpeg")

export default function SetBreakTime({ route }) {
  const { staffId, dayName, isOpen, openHour, closeHour, type,salonId } = route.params;
  const [bStart, setBStart] = useState("12:00");
  const [bEnd, setBEnd] = useState("13:00");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<StackNavigationProp<any>>();
  console.log("salonId=", {salonId})
  const handleOpenTimeValue = (value: any) => {
    setBStart(value);
  };
  const handleCloseTimeValue = (value: any) => {
    setBEnd(value);
  };


  const onHandleAddBreak = async () => {
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/time/create-break";
      const response = await axios.post(url, {
        staffId: staffId,
        dayName: dayName,
        breakStart: bStart,
        breakEnd: bEnd,
      });
      const result = response.data;
      const { message, status } = result;
      if (status === 201) {
        navigation.navigate("SetTime", {
          staffId: staffId,
          name: dayName,
          isOpen: isOpen,
          openHour: openHour,
          closeHour: closeHour,
          salonId:salonId
        });
        console.log("Success", message);
      } else {
        console.log("Error", message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onHandleUpdate = async () => {
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/time/update-breaks";
      const response = await axios.put(url, {
        staffId: staffId,
        dayName: dayName,
        breakStart: bStart,
        breakEnd: bEnd,
      });
      const result = response.data;
      const { message, status } = result;
      if (status === 201) {
        navigation.navigate("SetTime", {
          staffId: staffId,
          name: dayName,
          isOpen: isOpen,
          openHour: openHour,
          closeHour: closeHour,
          salonId:salonId
        });
        console.log("Success", message);
      } else {
        console.log("Error", message);
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
          height:"40%",
          backgroundColor: "#FDFDFD", 
          borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        }}>
          <View style={[globaleStyles.back]}>
            <View>
              <Text style={globaleStyles.topic}>Breaks-{dayName}</Text>
              <TimePicker
                onOpenTime={bStart}
                onCloseTime={bEnd}
                onHandleOpenTimeValue={handleOpenTimeValue}
                onHandleCloseTimeValue={handleCloseTimeValue}
              />
            </View>
            {/* <FlatButton text='Ok' onPress={type === "New" ? onHandleAddBreak: onHandleUpdate} /> */}
            <View style={{ marginBottom: 64 }}>
              <Button
                text={"Ok"}
                text1={"Cancel"}
                onPress={type === "New" ? onHandleAddBreak : onHandleUpdate}
                onPress1={() => navigation.navigate("SetTime", {
                  staffId: staffId,
                  name: dayName,
                  isOpen: isOpen,
                  openHour: openHour,
                  closeHour: closeHour,
                  salonId:salonId
                })}
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
