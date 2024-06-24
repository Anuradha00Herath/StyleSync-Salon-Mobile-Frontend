import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import {
  IncreaseHours,
  IncreaseMinutes,
  DecreaseHours,
  DecreaseMinutes,
} from "./get-time-from-backend";

export function TimePicker({
  onOpenTime,
  onCloseTime,
  onHandleCloseTimeValue,
  onHandleOpenTimeValue,
}) {
  const openHour = onOpenTime;
  const closeHour = onCloseTime;
  const [oHourStr, oMinuteStr] = openHour.split(":");
  const [cHourStr, cMinuteStr] = closeHour.split(":");
  const oHour = parseInt(oHourStr, 10);
  const oMinute = parseInt(oMinuteStr, 10);
  const cHour = parseInt(cHourStr, 10);
  const cMinute = parseInt(cMinuteStr, 10);
  const [hours, setHours] = useState({
    startBeforeHour: oHour - 1 === -1 ? 23 : oHour - 1,
    startMiddleHour: oHour,
    startAfterHour: oHour + 1,
    endBeforeHour: cHour - 1 === -1 ? 23 : cHour - 1,
    endMiddleHour: cHour,
    endAfterHour: cHour + 1,
    startBeforeMin: oMinute - 1 === -1 ? 59 : oMinute - 1,
    startMiddleMin: oMinute,
    startAfterMin: oMinute + 1,
    endBeforeMin: cMinute - 1 === -1 ? 59 : cMinute - 1,
    endMiddleMin: cMinute,
    endAfterMin: cMinute + 1,
  });
  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };
  const openTime =
    formatTime(hours.startMiddleHour) + ":" + formatTime(hours.startMiddleMin);
  const closeTime =
    formatTime(hours.endMiddleHour) + ":" + formatTime(hours.endMiddleMin);

  useEffect(() => {
    onHandleOpenTimeValue(openTime);
    onHandleCloseTimeValue(closeTime);
  });

  const IncreaseHourPress = () => {
    const { startBeforeHour, startMiddleHour, startAfterHour } = hours;
    const newHours = IncreaseHours(
      startBeforeHour,
      startMiddleHour,
      startAfterHour
    );
    setHours({
      ...hours,
      startBeforeHour: newHours[0],
      startMiddleHour: newHours[1],
      startAfterHour: newHours[2],
    });
  };

  const IncreaseMinutesPress = () => {
    const { startBeforeMin, startMiddleMin, startAfterMin } = hours;
    const newMin = IncreaseMinutes(
      startBeforeMin,
      startMiddleMin,
      startAfterMin
    );
    setHours({
      ...hours,
      startBeforeMin: newMin[0],
      startMiddleMin: newMin[1],
      startAfterMin: newMin[2],
    });
  };

  const IncreaseHourPressTwo = () => {
    const { endBeforeHour, endMiddleHour, endAfterHour } = hours;
    const newSecondHour = IncreaseHours(
      endBeforeHour,
      endMiddleHour,
      endAfterHour
    );
    setHours({
      ...hours,
      endBeforeHour: newSecondHour[0],
      endMiddleHour: newSecondHour[1],
      endAfterHour: newSecondHour[2],
    });
  };

  const IncreaseMinutesPressTwo = () => {
    const { endBeforeMin, endMiddleMin, endAfterMin } = hours;
    const newMin = IncreaseMinutes(endBeforeMin, endMiddleMin, endAfterMin);
    setHours({
      ...hours,
      endBeforeMin: newMin[0],
      endMiddleMin: newMin[1],
      endAfterMin: newMin[2],
    });
  };

  const DecreaseHourPress = () => {
    const { startBeforeHour, startMiddleHour, startAfterHour } = hours;
    const newHours = DecreaseHours(
      startBeforeHour,
      startMiddleHour,
      startAfterHour
    );
    setHours({
      ...hours,
      startBeforeHour: newHours[0],
      startMiddleHour: newHours[1],
      startAfterHour: newHours[2],
    });
  };

  const DecreaseMinutesPress = () => {
    const { startBeforeMin, startMiddleMin, startAfterMin } = hours;
    const newMin = DecreaseMinutes(
      startBeforeMin,
      startMiddleMin,
      startAfterMin
    );
    setHours({
      ...hours,
      startBeforeMin: newMin[0],
      startMiddleMin: newMin[1],
      startAfterMin: newMin[2],
    });
  };

  const DecreaseHourPressTwo = () => {
    const { endBeforeHour, endMiddleHour, endAfterHour } = hours;
    const newSecondHour = DecreaseHours(
      endBeforeHour,
      endMiddleHour,
      endAfterHour
    );
    setHours({
      ...hours,
      endBeforeHour: newSecondHour[0],
      endMiddleHour: newSecondHour[1],
      endAfterHour: newSecondHour[2],
    });
  };
  const DecreaseMinutesPressTwo = () => {
    const { endBeforeMin, endMiddleMin, endAfterMin } = hours;
    const newMin = DecreaseMinutes(endBeforeMin, endMiddleMin, endAfterMin);
    setHours({
      ...hours,
      endBeforeMin: newMin[0],
      endMiddleMin: newMin[1],
      endAfterMin: newMin[2],
    });
  };

  return (
    <View //main view
      style={{
        width: 300,
        height: 187,
        alignSelf: "center",
        alignItems: "center",
        marginTop: 28,
        //borderWidth: 1,
        borderColor: "black",
      }}
    >
      <StatusBar />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Icon
            name="up"
            size={15}
            color="#D9D8D8"
            style={{ marginTop: 10, marginBottom: 5 }}
            onPress={IncreaseHourPress}
          />
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
            }}
          >
            {formatTime(hours.startBeforeHour)}
            {/* : {formatTime(hours.startBeforeMin)} */}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            {formatTime(hours.startMiddleHour)}
            {/* :{" "}
            {formatTime(hours.startMiddleMin)} */}
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            {formatTime(hours.startAfterHour)}
            {/* :{" "}
            {formatTime(hours.startAfterMin)} marginLeft: 10*/}
          </Text>
          <Icon
            name="down"
            size={15}
            color="#D9D8D8"
            style={{ marginTop: 5 }}
            onPress={DecreaseHourPress}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 10
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginTop: 29
            }}
          >
            :
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            :
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            :
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            marginLeft: 10,
            alignItems: "center",
          }}
        >
          <Icon
            name="up"
            size={15}
            color="#D9D8D8"
            style={{ marginTop: 10, marginBottom: 5 }}
            onPress={IncreaseMinutesPress}
          />
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
            }}
          >
            {/* {formatTime(hours.startBeforeHour)} */}
            {formatTime(hours.startBeforeMin)}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            {/* {formatTime(hours.startMiddleHour)}  */}
            {formatTime(hours.startMiddleMin)}
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            {/* {formatTime(hours.startAfterHour)} :{" "} */}
            {formatTime(hours.startAfterMin)}
          </Text>
          <Icon
            name="down"
            size={15}
            color="#D9D8D8"
            style={{ marginTop: 5 }}
            onPress={DecreaseMinutesPress}
          />
        </View>

        {/* startBeforeHour = IncreaseHours().beforeHour; */}
        <View
          style={{
            flexDirection: "column",
            marginLeft: 45,
            alignItems: "center",
          }}
        >
          <Icon
            name="up"
            size={15}
            color="#D9D8D8"
            style={{ marginTop: 10, marginBottom: 5 }}
            onPress={IncreaseHourPressTwo}
          />
          <Text
            style={{
              fontSize: 18,
            }}
          >
            {formatTime(hours.endBeforeHour)}
            {/* : {formatTime(hours.endBeforeMin)} */}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            {formatTime(hours.endMiddleHour)}
            {/* : {formatTime(hours.endMiddleMin)} */}
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            {formatTime(hours.endAfterHour)}
            {/* : {formatTime(hours.endAfterMin)} */}
          </Text>
          <Icon
            name="down"
            size={15}
            color="#D9D8D8"
            style={{ marginTop: 5 }}
            onPress={DecreaseHourPressTwo}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginTop: 9,
            marginLeft: 10
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginTop: 20
            }}
          >
            :
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            :
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            :
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            marginLeft: 10,
            alignItems: "center",
          }}
        >
          <Icon
            name="up"
            size={15}
            color="#D9D8D8"
            style={{ marginTop: 10, marginBottom: 5 }}
            onPress={IncreaseMinutesPressTwo}
          />
          <Text
            style={{
              fontSize: 18,
            }}
          >
            {formatTime(hours.endBeforeMin)}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            {formatTime(hours.endMiddleMin)}
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            {formatTime(hours.endAfterMin)}
          </Text>
          <Icon
            name="down"
            size={15}
            color="#D9D8D8"
            style={{ marginTop: 5 }}
            onPress={DecreaseMinutesPressTwo}
          />
        </View>
      </View>
    </View>
  );
}
