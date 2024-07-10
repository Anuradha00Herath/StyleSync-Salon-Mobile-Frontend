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
import Calendar from "../../components/calenderInHome";
import CalenderExpand from "../../components/calenderInAppointment";
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
const { width, height } = Dimensions.get("screen");
import { useFocusEffect } from "@react-navigation/native";
const EventStatus = {
  All: "All",
  Canceled: "Canceled",
  Rejected: "Rejected",
};

import { AppointmentSetTwo } from "../../components/appointmentSetForAppointmentScreen";
import moment from "moment";
import axios from "axios";

export default function AppointmentScreen({ navigation, route }) {
  const { salonId } = route.params;
  const [refresh, setRefresh] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(EventStatus.All);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);

  const fetchAppointments = async (selectedStatus) => {
    let url;
    if (selectedStatus == EventStatus.All) {
      url =
        "https://stylesync-backend-test.onrender.com/app/v1/appointment/get-selectedate-appoinment";
    } else if (selectedStatus == EventStatus.Canceled) {
      url =
        "https://stylesync-backend-test.onrender.com/app/v1/appointment/get-selectedate-cancle-appoinment";
    } else if (selectedStatus == EventStatus.Rejected) {
      url =
        "https://stylesync-backend-test.onrender.com/app/v1/appointment/get_reject_appointment";
    }

    try {
      setLoading(true);
      const response = await axios.get(url, {
        params: { salonId: salonId, date: date },
      });
      setAppointments(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchAppointments(selectedStatus);
    }, [salonId, selectedStatus, date])
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

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setIsCalendarExpanded(false); // Minimize calendar after selecting a date
  };

  const groupedAppointments = {};
  appointments.forEach((appointment) => {
    const staffName = appointment.staff.id;
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
        source={BACKGROUND_IMAGE}
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
          onPress={() => setIsCalendarExpanded(!isCalendarExpanded)}
        >
          {isCalendarExpanded ? (
            <CalenderExpand
              selectedDate={date}
              setSelectedDate={handleDateChange}
              currentDate={undefined}
            />
          ) : (
            <Calendar currentDate={date} />
          )}
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            width: "100%",
            height: "auto",
            position: "relative",
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: 20,
            marginBottom: 44,
          }}
          key={refresh ? "refreshed" : "initial"}
        >
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedStatus === EventStatus.All && styles.selectedOption,
              ]}
              onPress={() => handleStatusChange(EventStatus.All)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedStatus === EventStatus.All && styles.selectedText,
                ]}
              >
                All Appointments
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedStatus === EventStatus.Canceled && styles.selectedOption,
              ]}
              onPress={() => handleStatusChange(EventStatus.Canceled)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedStatus === EventStatus.Canceled && styles.selectedText,
                ]}
              >
                Canceled
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedStatus === EventStatus.Rejected && styles.selectedOption,
              ]}
              onPress={() => handleStatusChange(EventStatus.Rejected)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedStatus === EventStatus.Rejected && styles.selectedText,
                ]}
              >
                Rejected
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {Object.keys(groupedAppointments).map((staffName) => (
              <AppointmentSetTwo
                key={staffName} // Assuming staffName is unique
                staffName={staffName}
                appointments={groupedAppointments[staffName]}
                navigation={navigation}
              />
            ))}
          </ScrollView>
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
    paddingHorizontal: 0,
    paddingVertical: 5,
    marginRight: 0,
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
