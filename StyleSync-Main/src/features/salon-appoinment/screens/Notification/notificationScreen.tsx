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

const { width, height } = Dimensions.get("screen");

export default function NotificationScreen(){
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
              {mockAppointments.map((appointment, index) => (
              <View key={index} style={{flexDirection:'row',
                            justifyContent:'flex-start',
                            margin:10,
                            width:"95%"
              }}>
                <View style={{marginHorizontal:5
                }}>
                <Image
                     source={BACKGROUND_IMAGE}
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
                  
                  <Text style={{fontSize:16,fontWeight:'bold'}}>Jon</Text>
                  <View>
                
                  <Icon name="right"
                        size={18}
                        color={"black"}/>
                  </View>
                  </View>
                  <View>
                    <Text>{appointment.salonName} has new appointment on {appointment.Date} at {appointment.ATime}</Text>
                  </View>
                  <View>
                  <Text style={{color:'gray',marginTop:5}}>{appointment.RTime}</Text>
                  </View>
                </View>
              </View>
              ))}
              </View>
            </View>
            <View style={{marginTop:10}}>
              <Text style={{fontSize:18,
                            fontWeight:'bold',
                            marginBottom:5
              }}>
                Earlier
              </Text>
              <View style={{backgroundColor:"#FDFEFE"}}>
              {mockAppointments.map((appointment, index) => (
              <View key={index} style={{flexDirection:'row',
                            justifyContent:'flex-start',
                            margin:10,
                            width:"95%"
              }}>
                <View style={{marginHorizontal:5
                }}>
                <Image
                     source={BACKGROUND_IMAGE}
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
                  
                  <Text style={{fontSize:16,fontWeight:'bold'}}>Jon</Text>
                  <View>
                
                  <Icon name="right"
                        size={18}
                        color={"black"}/>
                  </View>
                  </View>
                  <View>
                    <Text>{appointment.salonName} has new appointment on {appointment.Date} at {appointment.ATime}</Text>
                  </View>
                  <View>
                  <Text style={{color:'gray',marginTop:5}}>{appointment.RTime}</Text>
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

const mockAppointments = [
  {salonName:"kelvin",
    massage:"New Appoinment",
    Date:"2024/07/02",
    ATime: "09.30",
    Service:"Hair Cut",
    Price:"300",
    RTime:"Today 09.00 a.m"
  },
  
    
]