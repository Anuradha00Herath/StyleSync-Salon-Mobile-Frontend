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
import { Ionicons } from "@expo/vector-icons";
import { AppointmentBlock } from "../../components/appointmentBlock";
import axios from 'axios';
import { BACKGROUND_IMAGE} from '../../components/BackGroundImage'
const { width, height } = Dimensions.get("screen");


export default function CustomerInfo({ route ,navigation}) { 
 
  const {appointment} = route.params;
  const {customerAppointmentBlock, staff, serviceAppointmentBlock,endTime,date } = appointment;
  
  const isFutureAppointment = () => {
    const appointmentDate = moment(customerAppointmentBlock[0].date);
    const now = moment.utc().startOf('day').toISOString();
    const currentTime = moment(); 
    const appointmentTime = moment(endTime, 'HH:mm:ss');
    if(customerAppointmentBlock[0].isCancel || customerAppointmentBlock[0].isReject){
       return false
    }else{
    if(appointmentDate.isSame(now)){
     return appointmentTime.isAfter(currentTime);
    }else{
    return (appointmentDate.isAfter(now));}
  }
  };

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
      const response = await axios.get(url, { params: { salonId:staff.salonStaff[0].salonId,
                                                        date: currentDate, 
                                                        endtime: endTime,  
                                                        customerId:customerAppointmentBlock[0].customerId} });
      setAppointmentsHistory(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error('Error fetching appointment history:', error);
      setError(error.message || 'Request failed');
    }finally {
      setLoading(false);
    }
  };
  
  const rejectAppointment = async () =>{
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/appointment/reject_appointment";
        const currentDate = moment.utc().startOf('day').toISOString();
        const response = await axios.put(url, {
        customerId:customerAppointmentBlock[0].customerId,
        date:customerAppointmentBlock[0].date,
        startTime:customerAppointmentBlock[0].startTime,
        staffId:staff.salonStaff[0].salonId
});
     console.log(response.data);
     navigation.goBack();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  

  useEffect(() => {
    fetchAppointmentsHistory();
  }, []);

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <View style={{ flex: 1,
                    justifyContent: "center",
                    alignItems: "center"}}>
         <StatusBar />
          <View style={{ backgroundColor: "#FDFDFD",
                          width: "95%",
                          height: "100%",
                          bottom: 0,
                          paddingBottom: "auto",
                          position: "absolute",
                          borderTopLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          marginTop: 10,
                          marginHorizontal:50}}>
            <View style={{flexDirection: "row",
                          justifyContent: "space-between",
                          marginTop:10}}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons
                  name="arrow-back"
                  size={25}
                  style={{  marginTop: 10,
                            marginLeft: 10,}}/>
              </TouchableOpacity>
              <Text style={{ alignSelf: "center",
                              fontSize: 16,
                              marginRight: 10,
                              fontWeight: "bold",}}>
                Staff Member -{staff.name}
              </Text>
            </View>
            <View style={{ marginTop:30,
                           alignItems:'center'}}>
              <Image
                source={customerAppointmentBlock[0].customer.image === null
                  ? require("../../../../assets/images.jpg")
                  : { uri: customerAppointmentBlock[0].customer.image }}
                style={{height: 100,
                        width: 100,
                        borderWidth: 1,
                        borderColor: "#2E2528",
                        borderRadius: 100,}}>       
              </Image>
              <Text style={{ fontSize: 18,
                              fontWeight: "bold",
                              marginTop: 12,}}>
                {customerAppointmentBlock[0].customer.name}
              </Text>
              <Text style={{fontSize: 12,}}>
                  {customerAppointmentBlock[0].customer.contactNo}
                
              </Text>
            </View>
            <View style={{ borderTopWidth: 1,
                            height: 0,
                            width: "90%",
                            alignSelf: "center",
                            marginTop: 12,
                            borderColor: "#EFEFEF"}}></View>
            <Text style={{fontSize: 14,
                          fontWeight: "bold",
                          marginTop: 12,
                          marginLeft: 31,}}>
              Appointment Details
            </Text>
            <View style={{ flexDirection: "row",
                            justifyContent: "space-between",
                            width: "90%",
                            alignSelf: "center",
                            marginTop: 12}}>
              <Text>{serviceAppointmentBlock[0].service.name}</Text>
              <Text>{serviceAppointmentBlock[0].service.price}</Text>
            </View>
            <View style={{ flexDirection: "row",
                            justifyContent: "space-between",
                            width: "90%",
                            alignSelf: "center",
                            marginTop: 12,}}>
              <Text>{new Date(customerAppointmentBlock[0].date).toISOString().split('T')[0]}</Text>
              <Text>{customerAppointmentBlock[0].startTime}</Text>
            </View>
            {isFutureAppointment()  && (
            <View style={{flexDirection:"row",
                          width:"90%",
                          justifyContent:'space-between',
                          marginHorizontal:24,
                          marginVertical:20,
                          alignItems:"center"
            }}>
               <View style={{width: "40%",}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={{ backgroundColor: "#F5F5F5",
                                borderRadius: 10,
                                borderWidth: 1,
                                padding: 9,
                                alignItems: "center",
                                }}>
                   <Text>Cancel</Text>
                </View>
              </TouchableOpacity>
              </View>
              <View style={{width: "40%",}}>
              <TouchableOpacity onPress={rejectAppointment}>
                <View style={{ backgroundColor: "#F5F5F5",
                                borderRadius: 10,
                                borderWidth: 1,
                                padding: 9,
                                alignItems: "center",
                                }}>
                   <Text>Reject</Text>
                </View>
              </TouchableOpacity>
              </View>
            </View>)}
            <View style={{ borderTopWidth: 1,
                            height: 0,
                            width: "90%",
                            alignSelf: "center",
                            marginTop: 12,
                            borderColor: "#EFEFEF"}}></View>
            <Text style={{  fontSize: 14,
                            fontWeight: "bold",
                            marginTop: 12,
                            marginLeft: 31,}}>
              History
            </Text>
            {appointmentsHistory.map((item, index) => (
            <View key={index}
                  style={{ flexDirection: "row",
                            justifyContent: "flex-start",
                            width: "90%",
                            alignSelf: "center",
                            marginTop: 12, }}>
            <View style={{ flexDirection: "row", 
                           width:"50%"}}>
                <Ionicons name="sync"
                          size={15}
                          style={{marginTop: 3,}}
                />
                <Text style={{ marginLeft: 10}}>
                  {item.serviceAppointmentBlock[0].service.name}
                </Text>
              </View>
              <View style={{flexDirection: "row", 
                            flexGrow:1,
                            justifyContent: "space-between",}}>
              <View>
              <Text>{new Date(item.date).toISOString().split('T')[0]}</Text>
              </View>
              <View>
              <Text>{item.serviceAppointmentBlock[0].service.price}</Text>
              </View>
              </View>
          </View>
        
          ))}
          
          <View style={{ borderTopWidth: 1,
                          height: 0,
                          width: "90%",
                          alignSelf: "center",
                          marginTop: 12,
                          borderColor: "#EFEFEF"}}></View>
          <Text style={{ fontSize: 14,
                        fontWeight: "bold",
                        marginTop: 12,
                        marginLeft: 31,}}>
            Attachement
          </Text>
        </View>
    
    </View>
  );
}
