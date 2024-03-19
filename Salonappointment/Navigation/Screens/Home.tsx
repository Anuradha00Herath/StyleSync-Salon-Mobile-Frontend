import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import Calendar from "../../Components/calenderInHome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AppointmentSet } from "../../Components/appointmentSet";
import mockAppointments from "./GetDataFromBackend/AppointmentDetails";

const { width, height } = Dimensions.get("screen");

export default function HomeScreen() {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Set the refresh state to true to trigger a re-render
      setRefresh(true);
    }, 5000); // 60000 milliseconds = 1 minute

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to reset the refresh state after a re-render
  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);

  // Group appointments by start time
  const groupedAppointments = {};
  mockAppointments.forEach((appointment) => {
    const startTime = appointment.startTime;
    if (groupedAppointments[startTime]) {
      groupedAppointments[startTime].push(appointment);
    } else {
      groupedAppointments[startTime] = [appointment];
    }
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      key={refresh ? "refreshed" : "initial"}
    >
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ImageBackground
        source={require("../../assets/background3.png")}
        style={{
          width: width,
          height: height,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            top: StatusBar.currentHeight + 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          StyleSync
        </Text>
        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            marginTop: 82,
          }}
        >
          <Calendar currentDate={new Date()} />
        </View>
        <View
          style={{
            backgroundColor: "#FDFDFD",
            width: "100%",
            height: "70%",
            bottom: 45,
            position: "absolute",
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                marginTop: 6,
                marginLeft: 13,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {" "}
              Appointments
            </Text>
            <Text
              style={{
                marginTop: 6,
                marginRight: 13,
                fontSize: 14,
              }}
            >
              {" "}
              Filter by <Ionicons name="arrow-down-outline" size={12} />
              <Text
                style={{
                  marginTop: 6,
                  marginRight: 13,
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {" "}
                Time
              </Text>
            </Text>
          </View>
          <ScrollView>
            {Object.keys(groupedAppointments).map((startTime, index) => (
              <AppointmentSet
                key={index}
                startTime={startTime}
                appointments={groupedAppointments[startTime]}
              />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}
