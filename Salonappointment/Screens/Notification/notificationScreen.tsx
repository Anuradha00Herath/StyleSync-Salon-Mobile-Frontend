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
                     source={require("../../assets/man.jpg")}
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
                              width:"75%",
                }}>
                  <View>
                  <Text style={{fontSize:16,fontWeight:'bold'}}>{appointment.salonName}</Text>
                  </View>
                  <View>
                  <Text>{appointment.massage}</Text>
                  </View>
                  <View>
                  <Text style={{color:'gray'}}>{appointment.Time}</Text>
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
                     source={require("../../assets/man.jpg")}
                     style={{width: 40,
                             height: 40,
                             borderColor: "green",
                             borderWidth: 2,
                             borderRadius: 20,
                             marginTop: 8,
          }}
        ></Image>
                </View>
                
                <View  style={{marginLeft:10,
                              paddingRight:10,
                              flexDirection:"column",
                              width:"75%",
                }}>
                  <View>
                  <Text style={{fontSize:16,fontWeight:'bold'}}>{appointment.salonName}</Text>
                  </View>
                  <View>
                  <Text>{appointment.massage}</Text>
                  </View>
                  <View>
                  <Text style={{color:'gray'}}>{appointment.Time}</Text>
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
  {salonName:"Leo",
    massage:"Happy Birthday! Hope your special day is filled with joy and laughter. 🎉",
    Time:"Today 09.00 a.m"
  },
  {salonName:"Leo",
    massage:"I’m really sorry for what happened. I hope we can move past this. 🙏",
    Time:"Today 09.00 a.m"
  },
  {salonName:"Leo",
    massage:"Thinking of you and all the wonderful times we’ve shared. ❤️",
    Time:"Today 09.00 a.m"
  },
  {salonName:"Leo",
    massage:"Hi [Anuradha], just a friendly reminder about your appointment with us tomorrow at [09.00]. We look forward to seeing you!",
    Time:"Today 09.00 a.m"
  },
  {salonName:"Leo",
    massage:"Dear [Customer's Name], this is a gentle reminder of your appointment with [Salon/Place] on [Date] at [Time]. Please let us know if you need to reschedule. Thank you!",
    Time:"Today 09.00 a.m"
  },
    
]