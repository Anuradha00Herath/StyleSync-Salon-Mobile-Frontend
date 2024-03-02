import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Calendar from "../../Components/calenderInHome";
import Ionicons from "@expo/vector-icons/Ionicons";
const { width, height } = Dimensions.get("screen");
const EventStatus = {
    ONGOING: 'ONGOING',
    UPCOMING: 'UPCOMING',
    PAST: 'PAST',
    CANCELED: 'CANCELED',
  };

import { AppointmentSetTwo } from "../../Components/appointmentSetForAppointmentScreen";
  
export default function AppointmentScreen() {
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

  const [selectedStatus, setSelectedStatus] = useState<string>(EventStatus.ONGOING);

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
  };

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
            backgroundColor: "white",
            width: "100%",
            height: "75%",
            bottom: 0,
            position: "absolute",
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
            <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.optionButton, selectedStatus === EventStatus.ONGOING && styles.selectedOption]}
          onPress={() => handleStatusChange(EventStatus.ONGOING)}
        >
          <Text style={[styles.optionText, selectedStatus === EventStatus.ONGOING && styles.selectedText]}>Ongoing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, selectedStatus === EventStatus.UPCOMING && styles.selectedOption]}
          onPress={() => handleStatusChange(EventStatus.UPCOMING)}
        >
          <Text style={[styles.optionText, selectedStatus === EventStatus.UPCOMING && styles.selectedText]}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, selectedStatus === EventStatus.PAST && styles.selectedOption]}
          onPress={() => handleStatusChange(EventStatus.PAST)}
        >
          <Text style={[styles.optionText, selectedStatus === EventStatus.PAST && styles.selectedText]}>Past</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, selectedStatus === EventStatus.CANCELED && styles.selectedOption]}
          onPress={() => handleStatusChange(EventStatus.CANCELED)}
        >
          <Text style={[styles.optionText, selectedStatus === EventStatus.CANCELED && styles.selectedText]}>Canceled</Text>
        </TouchableOpacity>
      </View>
          <ScrollView>
            <AppointmentSetTwo/>
            <AppointmentSetTwo/>
          </ScrollView>
        </View>  
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    optionsContainer: {
      flexDirection: 'row',
      marginBottom: 20,
      justifyContent: 'space-evenly'
    },
    optionButton: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
    optionText: {
      fontSize: 16,
    },
    selectedOption: {
      borderBottomWidth: 2,
      borderBottomColor: 'black',
    },
    selectedText: {
      fontWeight: 'bold',
    },
  });