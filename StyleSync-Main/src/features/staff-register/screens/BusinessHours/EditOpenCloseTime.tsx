import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  Switch,
  StatusBar
} from "react-native";
import { AppName } from "../../components/AppName";
import { globaleStyles, imageStyles } from "../../components/globaleStyles";
import { FlatButton } from "../../components/FlatButton";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Switch1 } from "../../components/Switch";
import { TimePicker } from "../../components/TimePicker";
import { AddMore } from "../../components/AddMore";
import Icon from '@expo/vector-icons/AntDesign';
import { SeparatorLineWithText } from "../../components/line";
import {breaksStyle,setTimeStyle } from "./styles";
import{BACKGROUND_IMAGE} from "../../components/BackGroundImage"
import axios from "axios";

const backImg=require("../../../../assets/StyleSync.jpeg")

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
        <View style={breaksStyle.mainView}>
          <View>
            <Text>{formattedTime}</Text>
          </View>
          <View style={breaksStyle.subView}>
            <View style={breaksStyle.deleteView}>
              <Icon
                name="delete"
                size={20}
                color={"#71797E"}
                style={breaksStyle.icon}
                onPress={onHandleDelete}
              />
            </View>
            <View style={breaksStyle.rightView}>
              <Icon
                name="right"
                size={20}
                color={"#71797E"}
                style={breaksStyle.icon}
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
        <SeparatorLineWithText/>
      </View>
    );
  }

  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={imageStyles.container}>
      <StatusBar/>
      <AppName />
      <View style={[globaleStyles.back, { marginTop: 200 }]}>
        <View>
        <View style={setTimeStyle.mainView}>
          <View>
            <Text style={globaleStyles.topic}>{name}</Text>
          </View>
          <View
            style={setTimeStyle.View1}
          >
            <View>
              <Switch
                trackColor={{ false: "#808080", true: "#000000" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{
                  transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }],
                  height: 25,
                }}
              />
            </View>
            <View style={setTimeStyle.View2}>
              <Text style={setTimeStyle.switchText}>{getText()}</Text>
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
            <Text style={setTimeStyle.breakTopic}>
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
        </View>
        <FlatButton text="Ok" onPress={onHandleOk} />
      </View>
    </ImageBackground>
  );
}
