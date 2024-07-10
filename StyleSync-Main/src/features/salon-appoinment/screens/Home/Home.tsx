import React, { useEffect, useState } from "react";
import {View,ImageBackground,Text,Dimensions,StatusBar,ScrollView,} from "react-native";
import Calendar from "../../components/calenderInHome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AppointmentSet } from "../../components/appointmentSet";
import {useFocusEffect } from "@react-navigation/native";
import { BACKGROUND_IMAGE} from '../../components/BackGroundImage'
import { HomeStyle } from "./style";
import moment from 'moment';
import axios from 'axios';

const { width, height } = Dimensions.get("screen");

export default function HomeScreen({navigation,route}) {

  const {salonId} = route.params;
  console.log(salonId);
  
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
        salonId: salonId, 
        date: currentDate, 
        time: currentTime 
      });
      const response = await axios.get(url, { params: {  salonId: salonId,date: currentDate, time: currentTime  } });
      setAppointments(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(()=>{
      setAppointments([]);
      fetchAppointments();
    },[salonId])
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

  // const currentTime = moment();
  // const filteredAppointments = appointments.filter(appointment => moment(appointment.endTime, 'HH:mm:ss').isAfter(currentTime));
  // const sortedAppointments = filteredAppointments .sort((a, b) => {
  // return moment(a.startTime, 'HH:mm:ss').diff(moment(b.startTime, 'HH:mm:ss'));
  // });

  
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
    <View style={HomeStyle.mainView}
          key={refresh ? "refreshed" : "initial"}
    >
      <StatusBar barStyle="light-content" backgroundColor="#2E2E2E" />
      <ImageBackground
        source={BACKGROUND_IMAGE}
        style={HomeStyle.backgroundI}
      >
        <Text style={[HomeStyle.salonName,{ top: StatusBar.currentHeight + 20,}]}>
          StyleSync
        </Text>
        <View style={HomeStyle.calenderView}>
          <Calendar currentDate={new Date()} />
        </View>
        <View style={HomeStyle.container}>
          <View style={HomeStyle.upperRow}>
            <Text style={HomeStyle.topicText}>
              Appointments
            </Text>
            <Text style={HomeStyle.rightText}>
              Filter by <Ionicons name="arrow-down-outline" size={12} />
              <Text style={[HomeStyle.rightText,
                            HomeStyle.timeText]}>
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
