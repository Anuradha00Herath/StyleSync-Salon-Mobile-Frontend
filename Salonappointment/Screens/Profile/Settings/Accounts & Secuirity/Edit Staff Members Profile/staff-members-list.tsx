import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TextInputArea } from "../../../../../Components/text-input-area-in-settings";
import { StaffMember } from "../../../../../Components/list-view-of-staff-members";
import axios from "axios";
import moment from 'moment';

export default function StaffListView({ navigation }) {
  const [refresh, setRefresh] = useState(false);
  const [Details , setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    try {
      setLoading(true);
      const url = "https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/get_salon_staff_members";
      const currentDate = moment.utc().startOf('day').toISOString();
      console.log('Request Parameters:', { 
        salonId: 1, 
        date:currentDate
      });
      const response = await axios.get(url, { params: {  salonId: 1, date: currentDate} });
      setDetails(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
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
  

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 10,
          marginTop: 10,
          marginRight: 10,
        }}
      >
        <Ionicons
          style={{
            marginTop: 5,
          }}
          name="arrow-back-outline"
          size={22}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Staff Members
        </Text>
      </View>
      <Image
        source={require("../../../../../assets/staff.png")}
        style={{
          width: 250,
          height: 150,
          marginTop: 50,
          alignSelf: "center",
        }}
      ></Image>
      <ScrollView>
      {Details.map((details, index) =>(
      <TouchableOpacity 
      key={index}
      onPress={() => navigation.navigate("EditStaffProfile" ,{name:details.staff.name ,Id:details.staffID})}>
        
      <StaffMember  name={details.staff.name} openHour= {details.staff.openDays[0].openHour} closeHour={details.staff.openDays[0].closeHour}/>
      </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );
}
