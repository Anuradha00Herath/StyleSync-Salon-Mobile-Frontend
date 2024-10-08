import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StatusBar,
  Text,
  Switch,
  FlatList,
} from "react-native";
import { AppName } from "../Component/AppName";
import { globaleStyles, imageStyles } from "../Component/globaleStyles";
import { FlatButton } from "../Component/FlatButton";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Switch1 } from "../Component/Switch";
import { TimePicker } from "../Component/TimePicker";
import { AddMore } from "../Component/AddMore";
import Icon from "react-native-vector-icons/AntDesign";
import { SeparatorLineWithText } from "../Component/line";
import axios from "axios";

const backImg = require("../assets/StyleSync.jpeg");

export default function SetTime({ route, onPress }) {
  const { staffId, name, isOpen, openHour, closeHour } = route.params;
  const [isEnabled, setIsEnabled] = useState(isOpen);
  const [openTime, setOpenTime] = useState(openHour);
  const [closeTime, setCloseTime] = useState(closeHour);
  const [breaks, setBreaks] = useState([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      fetchBreaksTimes();
    }, [openHour])
  );
  const fetchBreaksTimes = async () => {
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/time/get-breaks";
      const response = await axios.get(url, {
        params: { staffId: staffId, dayName: name },
      });
      setBreaks(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenTimeValue = (value: any) => {
    setOpenTime(value);
  };
  const handleCloseTimeValue = (value: any) => {
    setCloseTime(value);
  };

  const toggleSwitch = () => {
    setIsEnabled((isEnabled: any) => !isEnabled);
  };
  const getText = () => (isEnabled ? "Open" : "Closed");
  const navigation = useNavigation<StackNavigationProp<any>>();

  const onHandleOk = async () => {
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/time/update-open-close-hours";
      const response = await axios.put(url, {
        staffId: staffId,
        dayName: name,
        openHour: openTime,
        closeHour: closeTime,
        isOpen: isEnabled,
      });
      const result = response.data;
      const { message, status } = result;
      if (status === 201) {
        navigation.navigate("BusinessHours", { staffId: staffId });
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

  const handleDelete = async (breakStart: any) => {
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/time/delete-break";
      const response = await axios.delete(url, {
        params: { staffId: staffId, dayName: name, breakStart },
      });
      const result = response.data;
      const { message, status } = result;
      if (status === 200) {
        fetchBreaksTimes();
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

  function Breaks({ breakStart, breakEnd }) {
    const formattedTime = `${breakStart} - ${breakEnd}`;
    function onHandleDelete() {
      return handleDelete(breakStart);
    }
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text>{formattedTime}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <View style={{ width: 30, alignItems: "center" }}>
              <Icon
                name="delete"
                size={20}
                color={"#71797E"}
                style={{ width: 20, height: 20 }}
                onPress={onHandleDelete}
              />
            </View>
            <View style={{ width: 40, alignItems: "center" }}>
              <Icon
                name="right"
                size={20}
                color={"#71797E"}
                style={{ width: 20, height: 20 }}
                onPress={() =>
                  navigation.navigate("SetBreakTime", {
                    staffId: staffId,
                    dayName: name,
                    isOpen: isOpen,
                    openHour: openHour,
                    closeHour: closeHour,
                    type: "Update",
                  })
                }
              />
            </View>
          </View>
        </View>
        <SeparatorLineWithText lineColor={"gray"} />
      </View>
    );
  }

  return (
    <ImageBackground source={backImg} style={imageStyles.container}>
      <StatusBar />
      <AppName />
      <View style={[globaleStyles.back, { marginTop: 200 }]}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={globaleStyles.topic}>{name}</Text>
          </View>
          <View
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <View>
              <Switch
                trackColor={{ false: "gray", true: "black" }}
                thumbColor={isEnabled ? "white" : "white"}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{
                  transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }],
                  height: 25,
                }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 12, color: "gray" }}>{getText()}</Text>
            </View>
          </View>
        </View>

        {isEnabled && (
          <>
            <Text style={globaleStyles.Stopic}>
              Set your business hours here. Head to opening calender from
              settings menu if you need to adjust hours for a single day.
            </Text>
            <TimePicker
              onOpenTime={openHour}
              onCloseTime={closeHour}
              onHandleOpenTimeValue={handleOpenTimeValue}
              onHandleCloseTimeValue={handleCloseTimeValue}
            />
            <Text style={{ color: "#000000", fontSize: 14, fontWeight: "400" }}>
              Breaks
            </Text>
            {breaks.map((b) => (
              <View key={b.breakStart}>
                <Breaks
                  breakEnd={b.breakEnd}
                  breakStart={b.breakStart}
                />
              </View>
            ))}
            <AddMore
              onPress={() =>
                navigation.navigate("SetBreakTime", {
                  staffId: staffId,
                  dayName: name,
                  isOpen: isOpen,
                  openHour: openHour,
                  closeHour: closeHour,
                  type: "New",
                })
              }
            />
          </>
        )}

        <FlatButton text="Ok" onPress={onHandleOk} />
      </View>
    </ImageBackground>
  );
}
