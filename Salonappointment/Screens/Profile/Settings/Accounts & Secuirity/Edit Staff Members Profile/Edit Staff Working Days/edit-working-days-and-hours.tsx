import React, { useState,useEffect } from 'react';
import { TouchableOpacity, View, Image, Text } from "react-native";
import { WorkingDaysAndHours } from "../../../../../../Components/working-days-and-hours";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

export default function EditWorkingDays({ navigation,route }) {
  const {Id ,salonId} =  route.params;
  const [businessHours, setBusinessHours] = useState([]);
  const [loading,setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const fetchBusinessHours = async () => {
    try {
      setLoading(true);
      const url = "https://stylesync-backend-test.onrender.com/app/v1/time/get-opendays-and-hours";
      const response = await axios.get(url, { params: { staffId:Id } });
      const sortedBusinessHours = response.data.data.sort((a, b) => {
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return daysOfWeek.indexOf(a.dayName) - daysOfWeek.indexOf(b.dayName);
      });
      setBusinessHours(sortedBusinessHours);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }};

    useFocusEffect(
      React.useCallback(()=>{
        setBusinessHours([]);
        fetchBusinessHours();
      },[Id])
    );

    // useEffect(() => {
    //   fetchBusinessHours();
    // }, []);
  
    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     setRefresh(true);
    //   }, 5000); 
  
    //   return () => clearInterval(intervalId);
    // }, []);
  
    // useEffect(() => {
    //   if (refresh) {
    //     setRefresh(false);
    //   }
    // }, [refresh]);
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
          Working Hours
        </Text>
      </View>

      <Image
        source={require("../../../../../../assets/staff.png")}
        style={{
          width: 250,
          height: 150,
          marginTop: 50,
          alignSelf: "center",
        }}
      ></Image>
      <View
      style={{
        marginTop: 30,
      }}
      >
         {businessHours.map(day => (
      <TouchableOpacity key={day.dayName}   onPress={() => navigation.navigate("SetTime" ,{staffId:Id, name: day.dayName, isOpen: day.isOpen, openHour: day.openHour,closeHour:day.closeHour})}>
        <WorkingDaysAndHours name={day.dayName} openHour={day.openHour} closeHour={day.closeHour} isOpen={day.isOpen}/>
      </TouchableOpacity>
         ))}

      </View>
    </View>
  );
}
