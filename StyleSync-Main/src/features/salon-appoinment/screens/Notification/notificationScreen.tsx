import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/AntDesign";
import {BACKGROUND_IMAGE} from "../../components/BackGroundImage"
import {useFocusEffect} from "@react-navigation/native";
import axios from 'axios';
import moment from 'moment';

const { width, height } = Dimensions.get("screen");


export default function NotificationScreen({route,navigation}){
  const {salonId} = route.params;

  const [loading, setLoading] = useState(false);
  const[newAppoinment , setNewAppoinment] = useState([]);
  const[oldAppointment , setOldAppointment] =useState([]);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);

    const fetchNewAppoinment = async () => {
      try {
        setLoading(true);
        const url = "https://stylesync-backend-test.onrender.com/app/v1/notification/get_new_appoinment";
        const currentDate = moment.utc().startOf('day').toISOString();
        console.log(currentDate)
        console.log('Request Parameters:', { 
          salonId:salonId, 
          date: currentDate, 
        });
        const response = await axios.get(url, { params: { salonId:salonId,
                                                          date: currentDate, 
                                                          } });
        const appointments = response.data.data;
        appointments.sort((a, b) => (new Date(b.bookingTime).getTime() - new Date(a.bookingTime).getTime()));
        setNewAppoinment(appointments);
        console.log(response.data.data);
      } catch (error) {
        console.error('Error fetching appointment history:', error);
        setError(error.message || 'Request failed');
      }finally {
        setLoading(false);
      }
    };
    const fetchOldAppoinment = async () => {
      try {
        setLoading(true);
        const url = "https://stylesync-backend-test.onrender.com/app/v1/notification/get_old_appoinment";
        const currentDate = moment.utc().startOf('day').toISOString();
        console.log(currentDate)
        console.log('Request Parameters:', { 
          salonId:salonId, 
          date: currentDate, 
        });
        const response = await axios.get(url, { params: { salonId:salonId,
                                                          date: currentDate, 
                                                          } });
        const appointments = response.data.data;
        appointments.sort((a, b) => (new Date(b.bookingTime).getTime() - new Date(a.bookingTime).getTime()));
        setOldAppointment(appointments);
        console.log(response.data.data);
      } catch (error) {
        console.error('Error fetching appointment history:', error);
        setError(error.message || 'Request failed');
      }finally {
        setLoading(false);
      }
    };


    useFocusEffect(
      React.useCallback(()=>{
        fetchNewAppoinment();
        fetchOldAppoinment();
      },[])
    );

    // // useEffect(() => {
    // //   const intervalId = setInterval(() => {
    // //     setRefresh(true);
    // //   }, 18000); 
  
    //   return () => clearInterval(intervalId);
    // }, []);
  
    useEffect(() => {
      if (refresh) {
        setRefresh(false);
        fetchNewAppoinment();
        fetchOldAppoinment();
      }
    }, [refresh]);

    return(
        <View style={{marginHorizontal:20}}>
          <View style={{marginVertical:10,
                        flexDirection:'row',
                        justifyContent:'space-between',              
          }}>
            <View>
            <Text style={{fontSize:24,
                          fontWeight:'bold'
            }}>
              Notification
            </Text>
            </View>
            <View style={{alignItems:'center',
                          width:'10%',
                          
                         
            }}>
            <Ionicons name="search" size={20} style={{textAlign:'center',marginTop:5}}/>
            </View>
          </View>
          <ScrollView>
            <View>
              <Text style={{fontSize:18,
                            fontWeight:'bold',
                            marginBottom:5,
              }}>
                Today
              </Text>
              <View style={{backgroundColor:"#FDFEFE"}}>
              {newAppoinment.map((appointment, index) => (
              <View key={index} style={{flexDirection:'row',
                            justifyContent:'flex-start',
                            margin:10,
                            width:"95%"
              }}>
                <View style={{marginHorizontal:5
                }}>
                <Image
                     source={appointment.customerAppointmentBlock[0].customer.image=== null
                      ? require("../../../../assets/images.jpg")
                      : { uri:appointment.customerAppointmentBlock[0].customer.image }}
                     style={{width: 40,
                             height: 40,
                             borderColor: "green",
                             borderWidth: 2,
                             borderRadius: 20,
                             marginTop: 8,
          }}
        ></Image>
                </View>
                <View style={{marginLeft:10,
                              paddingRight:10,
                              flexDirection:"column",
                              width:"85%",
                }}>
                  <View style={{flexDirection:"row",
                                justifyContent:"space-between",
                                marginBottom:10}}>
                  
                  <Text style={{fontSize:16,fontWeight:'bold'}}>{appointment.customerAppointmentBlock[0].customer.name}</Text>
                  <View>
                  <TouchableOpacity onPress={() => navigation.navigate("CustomerInfo", {appointment: appointment,})}>
                    <Icon name="right"
                          size={18}
                          color={"black"}/>
                  </TouchableOpacity>
                  </View>
                  </View>
                  <View>
                    {appointment.customerAppointmentBlock[0].isCancel? 
                    (<Text>{appointment.staff.name}'s appointment on 
                    {' '}{new Date(appointment.customerAppointmentBlock[0].date).toISOString().split('T')[0]}
                     {' '}at {appointment.startTime} has been canceled</Text>):
                    (<Text>{appointment.staff.name} has a new appointment on 
                    {' '}{new Date(appointment.customerAppointmentBlock[0].date).toISOString().split('T')[0]} 
                    {' '}at {appointment.startTime}</Text>)}
                  </View>
                  <View>
                  <Text style={{color:'gray',marginTop:5}}>Today {new Date(appointment.bookingTime).toISOString().substr(11, 5)}</Text>
                  </View>
                </View>
              </View>
              ))}
              </View>
            </View>
            <View style={{marginTop:10,marginBottom:70}}>
              <Text style={{fontSize:18,
                            fontWeight:'bold',
                            marginBottom:5
              }}>
                Earlier
              </Text>
              <View style={{backgroundColor:"#FDFEFE"}}>
              {oldAppointment.map((appointment, index) => (
              <View key={index} style={{flexDirection:'row',
                            justifyContent:'flex-start',
                            margin:10,
                            width:"95%"
              }}>
                <View style={{marginHorizontal:5
                }}>
                <Image
                     source={appointment.customerAppointmentBlock[0].customer.image=== null
                      ? require("../../../../assets/images.jpg")
                      : { uri:appointment.customerAppointmentBlock[0].customer.image }}
                     style={{width: 40,
                             height: 40,
                             borderColor: "green",
                             borderWidth: 2,
                             borderRadius: 20,
                             marginTop: 8,
                    }}
                  ></Image>
                </View>
                <View style={{marginLeft:10,
                              paddingRight:10,
                              flexDirection:"column",
                              width:"85%",
                }}>
                  <View style={{flexDirection:"row",
                                justifyContent:"space-between",
                                marginBottom:10}}>
                  
                  <Text style={{fontSize:16,fontWeight:'bold'}}>{appointment.customerAppointmentBlock[0].customer.name}</Text>
                  <View>
                  <TouchableOpacity onPress={() => navigation.navigate("CustomerInfo", {appointment: appointment,})}>
                    <Icon name="right"
                          size={18}
                          color={"black"}/>
                  </TouchableOpacity>
                  </View>
                  </View>
                  <View>
                    {appointment.customerAppointmentBlock[0].isCancel? 
                    (<Text>{appointment.staff.name}'s appointment on 
                    {' '}{new Date(appointment.customerAppointmentBlock[0].date).toISOString().split('T')[0]}
                     {' '}at {appointment.startTime} has been canceled</Text>):
                    (<Text>{appointment.staff.name} has a new appointment on 
                    {' '}{new Date(appointment.customerAppointmentBlock[0].date).toISOString().split('T')[0]} 
                    {' '}at {appointment.startTime}</Text>)}
                  </View>
                  <View>
                  <Text style={{color:'gray',marginTop:5}}>
                  {new Date(appointment.bookingTime).toLocaleString('en-US', 
                  { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).replace(',', '')}
                  </Text>
                  </View>
                </View>
              </View>
              ))}
              </View>
            </View>
          </ScrollView>
        </View>
    )
}

