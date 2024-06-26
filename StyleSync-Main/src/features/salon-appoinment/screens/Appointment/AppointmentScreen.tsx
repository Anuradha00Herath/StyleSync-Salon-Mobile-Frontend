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
import {BACKGROUND_IMAGE} from "../../components/BackGroundImage"
const { width, height } = Dimensions.get("screen");
const EventStatus = {
  All: "All",
  Canceled: "Canceled",
  Rejected: "Rejected",
};

import { AppointmentSetTwo } from "../../components/appointmentSetForAppointmentScreen";
//import mockAppointments from "../../Navigation/GetDataFromBackend/AppointmentDetails";
import moment from 'moment';
import axios from 'axios';

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
    EventStatus.All);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAppointments = async (selectedStatus) => {
    if(selectedStatus == EventStatus.All){
    try {
      setLoading(true);
      const currentDate = moment.utc().startOf('day').toISOString();
      const currentTime = moment().format('HH:mm:ss');
      
      const url = "https://stylesync-backend-test.onrender.com/app/v1/appointment/get-ongoing-appoinment";
      console.log('Request Parameters:', { 
        salonId: 1, 
        date: currentDate, 
        time: currentTime 
      });
      const response = await axios.get(url, { params: {  salonId: 1,date: currentDate, time: currentTime  } });
      setAppointments(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }finally {
      setLoading(false);
    }}
  };

  useEffect(() => {
    fetchAppointments(selectedStatus);
  }, []);

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
                selectedStatus === EventStatus.Canceled &&
                  styles.selectedOption,
              ]}
              onPress={() => handleStatusChange(EventStatus.Canceled)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedStatus === EventStatus.Canceled &&
                    styles.selectedText,
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
          {selectedStatus === EventStatus.All && (
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
          {selectedStatus === EventStatus.Canceled && (
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
