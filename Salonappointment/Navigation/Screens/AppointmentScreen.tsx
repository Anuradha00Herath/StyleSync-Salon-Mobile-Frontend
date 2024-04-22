import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Calendar from "../../Components/calenderInHome";
import CalenderExpand from "../../Components/calenderInAppointment";
const { width, height } = Dimensions.get("screen");
const EventStatus = {
  ONGOING: "ONGOING",
  UPCOMING: "UPCOMING",
  PAST: "PAST",
  CANCELED: "CANCELED",
};

import { AppointmentSetTwo } from "../../Components/appointmentSetForAppointmentScreen";
import mockAppointments from "./GetDataFromBackend/AppointmentDetails";

function renderCalender(){
  return <Calendar currentDate={new Date()} />

}

function renderCalenderExpand(){
  return <CalenderExpand currentDate={undefined} />
}

export default function AppointmentScreen({navigation}) {
  const [refresh, setRefresh] = useState(false);
  const [calender, setCalender] = useState(renderCalender());
  const [selectedStatus, setSelectedStatus] = useState<string>(
    EventStatus.ONGOING
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefresh(true);
    }, 5000); 
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
  };

  const groupedAppointments = {};
  mockAppointments.forEach((appointment) => {
    const staffName = appointment.staff.name;
    if (groupedAppointments[staffName]) {
      groupedAppointments[staffName].push(appointment);
    } else {
      groupedAppointments[staffName] = [appointment];
    }
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
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
        <TouchableOpacity
          style={{
            marginTop: 55,
            marginHorizontal: 30,
          }}
          onPress ={()=> setCalender(renderCalenderExpand())}
        >
          {calender}
        </TouchableOpacity>
        <View
          style={{
            flex:1,
            backgroundColor: "white",
            width: "100%",
            height: "auto",
            position: "relative",
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: 20,
            marginBottom: 44
          }}
          key={refresh ? "refreshed" : "initial"}
        >
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedStatus === EventStatus.ONGOING && styles.selectedOption,
              ]}
              onPress={() => handleStatusChange(EventStatus.ONGOING)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedStatus === EventStatus.ONGOING && styles.selectedText,
                ]}
              >
                Ongoing
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedStatus === EventStatus.UPCOMING &&
                  styles.selectedOption,
              ]}
              onPress={() => handleStatusChange(EventStatus.UPCOMING)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedStatus === EventStatus.UPCOMING &&
                    styles.selectedText,
                ]}
              >
                Upcoming
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedStatus === EventStatus.PAST && styles.selectedOption,
              ]}
              onPress={() => handleStatusChange(EventStatus.PAST)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedStatus === EventStatus.PAST && styles.selectedText,
                ]}
              >
                Past
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedStatus === EventStatus.CANCELED &&
                  styles.selectedOption,
              ]}
              onPress={() => handleStatusChange(EventStatus.CANCELED)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedStatus === EventStatus.CANCELED &&
                    styles.selectedText,
                ]}
              >
                Canceled
              </Text>
            </TouchableOpacity>
          </View>
          {selectedStatus === EventStatus.ONGOING && (
            <ScrollView>
              {Object.keys(groupedAppointments).map((staffName, index) => (
                <AppointmentSetTwo
                  key={index}
                  staffName={staffName}
                  appointments={groupedAppointments[staffName]}
                  navigation={navigation}
                />
              ))}
            </ScrollView>
          )}
          {selectedStatus === EventStatus.UPCOMING && (
            <ScrollView>
              {Object.keys(groupedAppointments).map((staffName, index) => (
                <AppointmentSetTwo
                  key={index}
                  staffName={staffName}
                  appointments={groupedAppointments[staffName]}
                 navigation={navigation}
                />
              ))}
            </ScrollView>
          )}
          <View></View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-evenly",
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
    borderBottomColor: "black",
  },
  selectedText: {
    fontWeight: "bold",
  },
});
