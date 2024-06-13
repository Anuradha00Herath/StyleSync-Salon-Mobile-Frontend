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
import mockAppointments from "../../Navigation/GetDataFromBackend/AppointmentDetails";
import { useNavigation } from "@react-navigation/native";
import moment from 'moment';
import axios from 'axios';

const { width, height } = Dimensions.get("screen");

export default function HomeScreen({navigation,route}) {
  // const defaultSalonId = 1;
  // const { salonId = defaultSalonId } = route?.params || {};

  //const { salonId} = route.params
  const [refresh, setRefresh] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

 
  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const url = "https://stylesync-backend-test.onrender.com/app/v1/appointment/get-appointment-to-salon";
      const currentDate = moment.utc().startOf('day').toISOString();
      const currentTime = moment().format('HH:mm:ss');
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
    }
  };

  useEffect(() => {
    fetchAppointments();
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

  // const currentTime = moment();
  // const filteredAppointments = appointments.filter(appointment => moment(appointment.endTime, 'HH:mm:ss').isAfter(currentTime));
  const sortedAppointments = appointments.sort((a, b) => {
    return moment(a.startTime, 'HH:mm:ss').diff(moment(b.startTime, 'HH:mm:ss'));
  });

  
  const groupedAppointments = {};
  appointments.forEach((appointment) => {
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
      <StatusBar barStyle="light-content" backgroundColor="#2E2E2E" />
      <ImageBackground
        source={require("../../assets/background3.png")}
        style={{
          width: width,
          height: height,
        }}
      >
        <Text
          style={{
            color: "#FDFDFD",
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
            backgroundColor: "#f1f1f1",
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
                color: "#2E2528"
              }}
            >
              Appointments
            </Text>
            <Text
              style={{
                marginTop: 6,
                marginRight: 13,
                fontSize: 14,
              }}
            >
              Filter by <Ionicons name="arrow-down-outline" size={12} />
              <Text
                style={{
                  marginTop: 6,
                  marginRight: 13,
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#2E2528"
                }}
              >
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
                navigation = {navigation}
              />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}
