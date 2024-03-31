import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import Icon from "../../node_modules/@expo/vector-icons/AntDesign";
import {
  IncreaseHours,
  IncreaseMinutes,
  DecreaseHours,
  DecreaseMinutes,
} from "../../Components/get-time-from-backend";

export default function SettingsScreen() {
  const [hours, setHours] = useState({
    startBeforeHour: 9,
    startMiddleHour: 10,
    startAfterHour: 11,
    endBeforeHour: 18,
    endMiddleHour: 19,
    endAfterHour: 20,
    startBeforeMin: 59,
    startMiddleMin: 0,
    startAfterMin: 1,
    endBeforeMin: 59,
    endMiddleMin: 0,
    endAfterMin: 1,
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
    console.log(
      "in function increment:",
      startBeforeHour,
      startMiddleHour,
      startAfterHour
    );
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
    console.log(
      "in function increment:",
      startBeforeMin,
      startMiddleMin,
      startAfterMin
    );
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
    //console.log("in function increment:", startBeforeHour, startMiddleHour, startAfterHour);
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
    console.log(
      "in function increment:",
      endBeforeMin,
      endMiddleMin,
      endAfterMin
    );
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
    console.log(
      "in function increment:",
      startBeforeHour,
      startMiddleHour,
      startAfterHour
    );
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
    console.log(
      "in function increment:",
      startBeforeMin,
      startMiddleMin,
      startAfterMin
    );
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
    //console.log("in function increment:", startBeforeHour, startMiddleHour, startAfterHour);
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
  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return (
    <View //main view
      style={{
        width: 300,
        height: 187,
        alignSelf: "center",
        alignItems:"center",
        marginTop: 28,
        borderWidth: 1,
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
            alignItems: "center"
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
              marginTop : 5,
              marginBottom : 5
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
            {formatTime(hours.startAfterMin)} */}
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
            marginLeft: 25,
            alignItems: "center"
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
              marginTop : 5,
              marginBottom : 5
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
            alignItems: "center"
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
              marginTop : 5,
              marginBottom : 5
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
            marginLeft: 25,
            alignItems: "center"
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
            {/* {formatTime(hours.endBeforeHour)}  */}
            {formatTime(hours.endBeforeMin)}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop : 5,
              marginBottom : 5
            }}
          >
            {/* {formatTime(hours.endMiddleHour)} : */}
            {formatTime(hours.endMiddleMin)}
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            {/* {formatTime(hours.endAfterHour)}  */}
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
