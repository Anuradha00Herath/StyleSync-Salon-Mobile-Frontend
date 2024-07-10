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
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
const { width, height } = Dimensions.get("screen");
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment';
import axios from 'axios';
import { AppointmentSetTwo } from "../../components/appointmentSetForAppointmentScreen";
import CalenderExpand from "../../components/calenderInAppointment";

const EventStatus = {
  All: "All",
  Canceled: "Canceled",
  Rejected: "Rejected",
};

export default function AppointmentScreen({ navigation, route }) {
  const { salonId } = route.params;
  const [refresh, setRefresh] = useState(false);
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>(EventStatus.All);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<string | undefined>(moment().format('YYYY-MM-DD'));

  const fetchAppointments = async (selectedStatus) => {
    try {
      setLoading(true);
      const url = "https://stylesync-backend-test.onrender.com/app/v1/appointment/get-selectedate-appoinment";
      const response = await axios.get(url, { params: { salonId: salonId, date: date } });
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

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ImageBackground source={BACKGROUND_IMAGE} style={{ width: width, height: height }}>
        <Text style={{ color: "white", textAlign: "center", top: StatusBar.currentHeight + 20, fontSize: 20, fontWeight: "bold" }}>
          StyleSync
        </Text>
        <TouchableOpacity
          style={{ marginTop: 55, marginHorizontal: 30 }}
          onPress={() => setIsCalendarExpanded(!isCalendarExpanded)}
        >
          {isCalendarExpanded ? (
            <CalenderExpand selectedDate={date} setSelectedDate={(selectedDate) => { setDate(selectedDate); setIsCalendarExpanded(false); }} />
          ) : (
            <Calendar currentDate={new Date()} />
          )}
        </TouchableOpacity>
        <View style={styles.appointmentsContainer} key={refresh ? "refreshed" : "initial"}>
          <View style={styles.optionsContainer}>
            {Object.values(EventStatus).map(status => (
              <TouchableOpacity
                key={status}
                style={[styles.optionButton, selectedStatus === status && styles.selectedOption]}
                onPress={() => handleStatusChange(status)}
              >
                <Text style={[styles.optionText, selectedStatus === status && styles.selectedText]}>{status}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
  appointmentsContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: "auto",
    position: "relative",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 20,
    marginBottom: 44,
  },
});
