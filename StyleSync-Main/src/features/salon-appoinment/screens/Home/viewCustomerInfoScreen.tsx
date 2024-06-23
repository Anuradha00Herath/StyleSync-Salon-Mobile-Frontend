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
import { styles } from "../../../staff-register/screens/PersonalInformation/styles";
import { CustomerStyle } from "./style";
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
  

  useEffect(() => {
    fetchAppointmentsHistory();
  }, []);

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <View style={CustomerStyle.mainView}>
        <StatusBar />
        <ImageBackground source={BACKGROUND_IMAGE}
                         style={CustomerStyle.backgroundI}>
          <Text
            style={[CustomerStyle.salonName,{top: StatusBar.currentHeight + 20,}]}>
            StyleSync
          </Text>
          <View style={CustomerStyle.container}>
            <View style={CustomerStyle.upperView}>
              <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons
                  name="arrow-back"
                  size={25}
                  style={CustomerStyle.backIcon}/>
              </TouchableOpacity>
              <Text style={CustomerStyle.staffText}>
                {staff.name}
              </Text>
            </View>
            <View style={CustomerStyle.downView}>
              <Image
                source={require("../../../../assets/images.jpg")}
                style={CustomerStyle.CImage}>       
              </Image>
              <Text style={CustomerStyle.CNameText}>
                {customerAppointmentBlock[0].customer.name}
              </Text>
              <Text style={CustomerStyle.CNumberText}>
                {customerAppointmentBlock[0].customer.number}
              </Text>
            </View>
            <View style={CustomerStyle.line}></View>
            <Text style={CustomerStyle.TopicText}>
              Appointment Details
            </Text>
            <View style={CustomerStyle.NPView}>
              <Text>{serviceAppointmentBlock[0].service.name}</Text>
              <Text>{serviceAppointmentBlock[0].service.price}</Text>
            </View>
            <View style={CustomerStyle.DTView}>
              <Text>{new Date(customerAppointmentBlock[0].date).toISOString().split('T')[0]}</Text>
              <Text>{customerAppointmentBlock[0].startTime}</Text>
            </View>
            <View style={CustomerStyle.line}></View>
            <Text style={CustomerStyle.HistoryText}>
              History
            </Text>
            {appointmentsHistory.map((item, index) => (
            <View key={index}
                  style={CustomerStyle.HistortMView}>
              <View style={CustomerStyle.HView1}>
                <Ionicons name="sync"
                          size={15}
                          style={{marginTop: 3,}}
                />
                <Text style={CustomerStyle.HServiceName}>
                  {item.serviceAppointmentBlock[0].service.name}
                </Text>
              </View>
              <View style={CustomerStyle.HDTView}>
              <View>
              <Text>{new Date(item.date).toISOString().split('T')[0]}</Text>
              </View>
              <View>
              <Text>{item.serviceAppointmentBlock[0].service.price}</Text>
              </View>
              </View>
          </View>
        
          ))}
          
          <View style={CustomerStyle.line}></View>
          <Text style={CustomerStyle.AttachmentText}>
            Attachement
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
