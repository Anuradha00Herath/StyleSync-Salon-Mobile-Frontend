import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Dimensions,
} from "react-native";
import { PieChart, BarChart } from "react-native-gifted-charts";
import Ionicons from "@expo/vector-icons/Ionicons.js";
import moment from "moment";
import axios from "axios";

const { width, height } = Dimensions.get("screen");

export default function StatScreen({navigation}) {

  const [refresh , setRefresh] =useState(false);
  const[dayState , setDayState] =useState([]);
  const [weekState , setWeekState] =useState([]);
  const[loading , setLoading] =useState(false);

  const fetchDayState = async () =>{
    try{
      setLoading(true);
      const url="https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/get_salon_appoinment_stat"
      const currentDate = moment.utc().startOf('day').toISOString();
      console.log('Request Parameters:', { 
        salonId: 1, 
        date: currentDate, 
      });
      const response = await axios.get(url, { params: {  salonId: 1,date: currentDate } });
      setDayState(response.data.data);
      console.log(response.data);
    }catch(error){
      console.error(error);
    }finally {
      setLoading(false);
    }
  };

  const fetchWeekState = async () =>{
    try{
      setLoading(true);
      const url="https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/get_salon_Weekappoinment_stat"
      const currentDate = moment.utc().startOf('day').toISOString();
      console.log('Request Parameters:', { 
        salonId: 1, 
        date: currentDate, 
      });
      const response = await axios.get(url, { params: {  salonId: 1,date: currentDate } });
      setWeekState(response.data.data);
      console.log(response.data);
    }catch(error){
      console.error(error);
    }finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchDayState();
  }, []);
  useEffect(() => {
    fetchWeekState();
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

  // const pieData = [
  //   { value: 10, color: "#177AD5" },
  //   { value: 4, color: "#F5A623" },
  //   { value: 2, color: "lightgray" },
  // ];
  const colors = ["#177AD5", "#F5A623", "#4CAF50", "#FF5722", "#9C27B0", "#00BCD4", "#FFC107", "#E91E63"];

  const renderPieData = () => {
    return dayState.map((staff, index) => ({
      value: staff.count,
      color: colors[index % colors.length],
    }));
  };

  // const barData = [
  //   { value: 25, label: "M" },
  //   { value: 50, label: "T", frontColor: "#177AD5" },
  //   { value: 74, label: "W", frontColor: "#177AD5" },
  //   { value: 32, label: "T" },
  //   { value: 60, label: "F", frontColor: "#177AD5" },
  //   { value: 25, label: "S" },
  //   { value: 30, label: "S" },
  // ];

  const barData = Object.keys(weekState).map((day, index) => ({
    value: weekState[day],
    label: day.charAt(0),
    frontColor: "#177AD5"
  }));

  // var curr = new Date(); // get current date
  // var first = curr.getDate() - curr.getDay();
  // first = first - 6;
  // var firstdayOb = new Date(curr.setDate(first));
  // var options = { day: "numeric", month: "short" };
  // var firstday = firstdayOb.toLocaleDateString("en-GB", Object(options));
  // var firstdayTemp = new Date(firstdayOb);
  // var lastdayOb = new Date(firstdayTemp.setDate(firstdayTemp.getDate() + 6));
  // var lastday = lastdayOb.toLocaleDateString("en-GB", Object(options));

var today = new Date();
var dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
var sundayDate = new Date(today);
sundayDate.setDate(today.getDate() - dayOfWeek); // Set to previous Sunday
var saturdayDate = new Date(sundayDate);
saturdayDate.setDate(sundayDate.getDate() + 6); // Set to Saturday
var options = { day: "numeric", month: "short" };
var sundayDateString = sundayDate.toLocaleDateString("en-GB", Object(options));
var saturdayDateString = saturdayDate.toLocaleDateString("en-GB", Object(options));

  const totalAppointmentsForWeek = Object.values(weekState).reduce((a, b) => a + b, 0);
 const averageAppointmentsPerDay = Math.floor(totalAppointmentsForWeek / 7);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#2E2E2E" />
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
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
            size={25}
            color="black"
            onPress={()=>navigation.goBack()}/>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Statistics
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 10,
            marginTop: 15,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Weekly Report
          </Text>
          <Text
            style={{
              fontSize: 15,
            }}
          >
            {sundayDateString}-{saturdayDateString}
          </Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
          {averageAppointmentsPerDay} Appointments
          </Text>
          <Text
            style={{
              fontSize: 10,
            }}
          >
            Daily Average Appointments
          </Text>
          <View
            style={{
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            <BarChart
              barWidth={23}
              noOfSections={3}
              barBorderRadius={4}
              frontColor="lightgray"
              data={barData}
              yAxisThickness={0}
              xAxisThickness={0}
            />
          </View>
        </View>
        <View
          style={{
            marginLeft: 10,
            marginTop: 15,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Today Report
          </Text>
          <View
            style={{
              marginTop: 20,
              alignSelf: "center",
            }}
          >
            <PieChart
              donut
              radius={80}
              innerRadius={50}
              data={renderPieData()}
              centerLabelComponent={() => {
                return (
                  <View>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                    {dayState.reduce((total, staff) => total + staff.count, 0)}
                    </Text>
                    <Text style={{ fontSize: 10, textAlign: "center" }}>
                      Appointments
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            marginLeft: 25,
            marginRight: 25,
          }}
        >
          {dayState.map((staff, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Ionicons name="ellipse" size={20} color={colors[index % colors.length]}/>
              <Text
                style={{
                  fontSize: 15,
                  textAlignVertical: "center",
                  marginLeft: 10,
                }}
              >
                {staff.staffName}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 15,
                textAlignVertical: "center",
                marginLeft: 10,
              }}
            >
              {staff.count}
            </Text>
          </View>
          ))}
          {/* <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Ionicons name="ellipse" size={20} color="#F5A623" />
              <Text
                style={{
                  fontSize: 15,
                  textAlignVertical: "center",
                  marginLeft: 10,
                }}
              >
                Martin
              </Text>
            </View>
            <Text
              style={{
                fontSize: 15,
                textAlignVertical: "center",
                marginLeft: 10,
              }}
            >
              4
            </Text>
          </View>*/}
        </View> 
      </View>
    </View>
  );
}
