import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import moment from 'moment';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from "../../node_modules/@expo/vector-icons/Ionicons";
import { AppointmentBlock } from "../../Components/appointmentBlock";
import axios from 'axios';
const { width, height } = Dimensions.get("screen");


export default function CustomerInfo({ route ,navigation}) { 
 
  const {appointment} = route.params;
  const {customerId, customerAppointmentBlock, staff, serviceAppointmentBlock, gender,date,endTime } = appointment;

  const [refresh, setRefresh] = useState(false);
  const [appointmentsHistory, setAppointmentsHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchAppointmentsHistory = async () => {
    try {
      setLoading(true);
      const url = "https://stylesync-backend-test.onrender.com/app/v1/appointment/get-customer-History";
      const currentDate = moment.utc().startOf('day').toISOString();
      
      console.log('Request Parameters:', { 
        salonId:staff.salonStaff[0].salonId, 
        date: currentDate, 
        endtime: endTime ,
        customerId:customerAppointmentBlock[0].customerId
      });
      const response = await axios.get(url, { params: { salonId:staff.salonStaff[0].salonId,date: currentDate, endtime: endTime,  customerId:customerAppointmentBlock[0].customerId} });
      setAppointmentsHistory(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error('Error fetching appointment history:', error);
      setError(error.message || 'Request failed');
    }finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchAppointmentsHistory();
  }, []);

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar />
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
            top: StatusBar.currentHeight,
            fontSize: 20,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          StyleSync
        </Text>
        <View
          style={{
            backgroundColor: "#FDFDFD",
            width: "100%",
            height: "80%",
            bottom: 0,
            paddingBottom: "auto",
            position: "absolute",
            borderTopLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={25}
                style={{
                  marginTop: 10,
                  marginLeft: 10,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 14,
                marginRight: 10,
                fontWeight: "bold",
              }}
            >
              {staff.name}
            </Text>
          </View>
          <View
            style={{
              marginLeft: 31,
              marginTop: 24,
            }}
          >
            <Image
              source={require("../../assets/images.jpg")}
              style={{
                height: 100,
                width: 100,
                borderWidth: 1,
                borderColor: "#2E2528",
                borderRadius: 10,
              }}
            ></Image>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginTop: 12,
              }}
            >
              {customerAppointmentBlock[0].customer.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
              }}
            >
              {customerAppointmentBlock[0].customer.number}
            </Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              height: 0,
              width: "90%",
              alignSelf: "center",
              marginTop: 12,
              borderColor: "#EFEFEF"
            }}
          ></View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 12,
              marginLeft: 31,
            }}
          >
            Appointment Details
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              marginTop: 12,
            }}
          >
            <Text>{serviceAppointmentBlock[0].service.name}</Text>
            <Text>{serviceAppointmentBlock[0].service.price}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              marginTop: 12,
            }}
          >
            <Text>{new Date(customerAppointmentBlock[0].date).toISOString().split('T')[0]}</Text>
            <Text>{customerAppointmentBlock[0].startTime}</Text>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              height: 0,
              width: "90%",
              alignSelf: "center",
              marginTop: 12,
              borderColor: "#EFEFEF",
            }}
          ></View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 12,
              marginLeft: 31,
            }}
          >
            History
          </Text>
          
          {appointmentsHistory.map((item, index) => (
          <View
          key={index}
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
             width: "90%",
             alignSelf: "center",
              marginTop: 12,   
            }}
          >
            <View
              style={{
                flexDirection: "row", 
                width:"50%"
              }}
            >
              <Ionicons
                name="sync"
                size={15}
                style={{
                  marginTop: 3,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                }}
              >
                {item.serviceAppointmentBlock[0].service.name}
              </Text>
            </View>
            <View
            style={{
              flexDirection: "row", 
              flexGrow:1,
              justifyContent: "space-between",
            }}>
            <View>
            <Text>{new Date(item.date).toISOString().split('T')[0]}</Text>
            </View>
            <View>
            <Text>{item.serviceAppointmentBlock[0].service.price}</Text>
            </View>
            </View>
          </View>
        
          ))}
          {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              alignSelf: "center",
              marginTop: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Ionicons
                name="sync"
                size={15}
                style={{
                  marginTop: 2,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                }}
              >
                Service Name
              </Text>
            </View>

            <Text>Date</Text>
            <Text>Price</Text>
          </View> */}
          <View
            style={{
              borderTopWidth: 1,
              height: 0,
              width: "90%",
              alignSelf: "center",
              marginTop: 12,
              borderColor: "#EFEFEF"
            }}
          ></View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              marginTop: 12,
              marginLeft: 31,
            }}
          >
            Attachement
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
