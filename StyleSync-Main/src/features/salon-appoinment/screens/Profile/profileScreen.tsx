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
  ActivityIndicator,
  Switch,
  Alert
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons.js";
import moment from 'moment';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import {BACKGROUND_IMAGE} from "../../components/BackGroundImage"

const { width, height } = Dimensions.get("screen");

export default function ProfileScreen({ navigation,route }) {
const [refresh, setRefresh] = useState(false);
const [Details , setDetails] = useState(null);
const [loading, setLoading] = useState(false);
const [toggleStates, setToggleStates] = useState({});
const [openHour, setOpenHour] = useState('');
const [closeHour, setCloseHour] = useState('');
const [image, setImage] = useState(null);
const [staffImage , setStaffImage] = useState({});

const {salonId} = route.params;

const calculateOpenAndCloseTimes = (staff) => {
  let earliestOpen = '23:59';
  let latestClose = '00:00';

  staff.forEach(member => {
    if (member.openDays[0].isOpen) {
      if (member.openDays[0].openHour < earliestOpen) {
        earliestOpen = member.openDays[0].openHour;
      }
      if (member.openDays[0].closeHour > latestClose) {
        latestClose = member.openDays[0].closeHour;
      }
    }
  });
   
  if(earliestOpen == '23:59' || latestClose == '00:00'){
    setCloseHour('');
    setOpenHour('')
  }else{
    setOpenHour(earliestOpen);
    setCloseHour(latestClose);
  } 
};

const fetchDetails = async () => {
  try {
    setLoading(true);
    const url = "https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/get_salon_details";
    const currentDate = moment.utc().startOf('day').toISOString();
    console.log('Request Parameters:', { 
      salonId: salonId, 
      date:currentDate
    });
    const response = await axios.get(url, { params: {  salonId:salonId , date: currentDate} });
    setDetails(response.data.data);
    console.log(response.data);
    setImage(response.data.data.salon[0].image)
    const initialToggleStates = {};
    const initialStaffImage ={};
    response.data.data.staff.forEach(staff => {
    initialToggleStates[staff.staffID] = staff.openDays[0].isOpen;
    initialStaffImage[staff.staffID] = staff.image;
    });
    setToggleStates(initialToggleStates);
    setStaffImage(initialStaffImage);

    console.log(initialStaffImage)
      
  
      if (response.data.data.staff.length > 0) {
        calculateOpenAndCloseTimes(response.data.data.staff);
      }
  } catch (error) {
    console.error(error);
  }finally {
    setLoading(false);
  }
};
useFocusEffect(
  React.useCallback(()=>{
    setDetails([]);
    fetchDetails();
  },[salonId])
);

if (loading || !Details) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
const { salon, staffCount, customerCount, staff,totalAppointmentCount } = Details;

const toggleSwitch = async (staffId) => {
  const newToggleStates = {...toggleStates};
  newToggleStates[staffId] = !newToggleStates[staffId];
  setToggleStates(newToggleStates);
  try {
    setLoading(true);
    const url =
      "https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/update-staffAvailability";
      const currentDate = moment.utc().startOf('day').toISOString();
      console.log('Request Parameters:', { 
        staffId: staffId,
        date:currentDate,
        isOpen: newToggleStates[staffId],
      });
    const response = await axios.put(url, {
      staffId:staffId,
      date:currentDate,
      isOpen: newToggleStates[staffId],
    });
    const result = response.data;
    const { message, status } = result;
    if (status === 200) {
      fetchDetails();
      console.log("Success", message);
    } else {
      console.log("Error",status);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

const SalonToggle = () => {
  staff.forEach(staff => {
    setOpenHour('');
    setOpenHour('');
    setToggleStates({});
    staffUpdate(staff.staffID)
    fetchDetails();
  }); 
}
const Update = () =>{
  if(openHour){
  Alert.alert('Close Salon','Are you sure you want to close the salon?',
    [{
      text:"Cancel",
      onPress:() =>console.log("Cancel"),
    },
  {
    text:"Yes",
    onPress:() => SalonToggle(),
  }]
  )
}
}
    const staffUpdate = async(staffId) => {
    try{ 
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/update-staffAvailability";
        const currentDate = moment.utc().startOf('day').toISOString();
        console.log('Request Parameters:', { 
          staffId: staffId,
          date:currentDate,
          isOpen: false
        });
      const response = await axios.put(url, {
        staffId:staffId,
        date:currentDate,
        isOpen: false,
      });
      const result = response.data;
      const { message, status } = result;
      if (status === 200) {
        console.log("Success", message);
      } else {
        console.log("Error",status);
      }

    }catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  } 
    
  

  
return ( 

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#2E2E2E" />
      <ImageBackground
        source={BACKGROUND_IMAGE}
        style={{
          width: width,
          height: height,
        }}
      >
        
        <Text
          style={{
            color: "#FDFDFD",
            textAlign: "center",
            top: StatusBar.currentHeight + 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          StyleSync
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 68,
          }}
        >
          <Image
            source={ image === null
              ? require("../../../../assets/images.jpg")
              : { uri: image }}
            style={{
              width: 107,
              height: 107,
              backgroundColor: "#FDFDFD",
              borderRadius: 100,
              alignSelf: "center",
            }}
          ></Image>
        </View>
        
        <Text
          style={{
            color: "#FDFDFD",
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 27,
            alignSelf: "center",
          }}
        >
         {salon[0].name}
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: "#FDFDFD",
            fontWeight: "bold",
            marginTop: 7,
            alignSelf: "center",
          }}
        >
          {salon[0].line1}, {salon[0].line2}, {salon[0].city}, {salon[0].country}
        </Text>
        <View
          style={{
            width: "100%",
            height: "55%",
            backgroundColor: "white",
            alignSelf: "center",
            position: "absolute",
            //bottom: 49,
            marginTop:380,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              height: "auto",
              marginTop: -40,
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "rgba(10, 10, 10, 0.1)",
              shadowRadius: 10,
              shadowColor: "black",
              marginBottom:30
            }}
          >
            <View
              style={{
                width: "30%",
                height: 60,
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 5,
                  fontSize: 15,
                }}
              >
               {customerCount}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                Number of
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                Customers
              </Text>
            </View>
            <View
              style={{
                width: "0.5%",
                height: 40,
                backgroundColor: "rgba(10, 10, 10, 0.1)",
              }}
            ></View>
            <View
              style={{
                width: "30%",
                height: 60,
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 5,
                  fontSize: 15,
                }}
              >
                {totalAppointmentCount}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                Number of
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                Appointment
              </Text>
            </View>
            <View
              style={{
                width: "0.5%",
                height: 40,
                backgroundColor: "rgba(10, 10, 10, 0.1)",
              }}
            ></View>
            <View
              style={{
                width: "30%",
                height: 60,
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 5,
                  fontSize: 15,
                }}
              >
                {staffCount}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                Number of
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                Staff
              </Text>
            </View>
          </View>
          <ScrollView>
          <View
            style={{
              marginHorizontal: 15,
              borderWidth: 1,
              borderColor: "rgba(10, 10, 10, 0.1)",
              width: "90%",
              height: 60,
              //marginTop: 30,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={ image === null
                  ? require("../../../../assets/images.jpg")
                  : { uri: image }}
                style={{
                  width: 47,
                  height: 47,
                  backgroundColor: "#FDFDFD",
                  //borderRadius: 5,
                  borderRadius:100,
                  alignSelf: "center",
                  borderWidth: 1,
                  borderColor: "rgba(10, 10, 10, 0.1)",
                  marginLeft: 5,
                }}
              ></Image>
              <View
                style={{
                  marginLeft: 10,
                  marginTop: 8,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {salon[0].name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  <Image
                    source={require("../../../../assets/duration.png")}
                    style={{
                      width: 15,
                      height: 15,
                      backgroundColor: "#FDFDFD",
                      borderRadius: 5,
                      alignSelf: "center",
                      borderWidth: 1,
                      borderColor: "rgba(10, 10, 10, 0.1)",
                      marginLeft: 5,
                    }}
                  ></Image>{" "}
                  { openHour? `${openHour} - ${closeHour}` : "Closed"}
                </Text>
              </View>
            </View>

            <Switch
              style={{}}
              trackColor={{ false: "#767577", true: "#2e2528" }}
              thumbColor={true ? "#8B6C58" : "#8B6C58"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={Update}
              value={openHour? true:false}
            />
          </View>
          
          {staff.map(staff => ( 
          <View
          key={staff.staffID}
            style={{
              marginHorizontal: 15,
              borderWidth: 1,
              borderColor: "rgba(10, 10, 10, 0.1)",
              width: "90%",
              height: 60,
              marginTop: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
           
            <View
           
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={staffImage[staff.staffID] === null
                  ? require("../../../../assets/images.jpg")
                  : { uri:staffImage[staff.staffID] }}
                style={{
                  width: 47,
                  height: 47,
                  backgroundColor: "#FDFDFD",
                  borderRadius: 100,
                  alignSelf: "center",
                  borderWidth: 1,
                  borderColor: "rgba(10, 10, 10, 0.1)",
                  marginLeft: 5,
                }}
              ></Image>
              
              <View
                style={{
                  marginLeft: 10,
                  marginTop: 8,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {staff.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  <Image
                    source={require("../../../../assets/duration.png")}
                    style={{
                      width: 15,
                      height: 15,
                      backgroundColor: "#FDFDFD",
                      borderRadius: 5,
                      alignSelf: "center",
                      borderWidth: 1,
                      borderColor: "rgba(10, 10, 10, 0.1)",
                      marginLeft: 5,
                    }}
                  ></Image>{" "}
                 { staff.openDays[0].isOpen ? `${staff.openDays[0].openHour} - ${staff.openDays[0].closeHour}` : "Closed"}
                </Text>
              </View>
              
            </View>
        
            <Switch
              style={{}}
              trackColor={{ false: "#767577", true: "#2e2528" }}
              thumbColor={true ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>toggleSwitch(staff.staffID)}
              value={toggleStates[staff.staffID]}
            />
          </View>
            ))}
             </ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate("SettingScreen" , {salonId})}
          >
            <View
              style={{
                marginHorizontal: 15,
                borderWidth: 1,
                borderColor: "rgba(10, 10, 10, 0.1)",
                width: "90%",
                height: 60,
                marginTop: 10,
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    marginLeft: 10,
                    flexDirection: "row",
                  }}
                >
                  <Ionicons
                    style={{
                      alignSelf: "center",
                    }}
                    name="settings"
                    size={18}
                    color="black"
                  />

                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 17,
                      textAlignVertical: "center",
                      marginLeft: 10,
                    }}
                  >
                    Settings
                  </Text>
                </View>
              </View>
              <Ionicons
                style={{
                  marginTop: 15,
                }}
                name="chevron-forward-outline"
                size={25}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("StatScreen" ,{salonId})}>
            <View
              style={{
                marginHorizontal: 15,
                borderWidth: 1,
                borderColor: "rgba(10, 10, 10, 0.1)",
                width: "90%",
                height: 60,
                marginTop: 10,
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom:50
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    marginLeft: 10,
                    flexDirection: "row",
                  }}
                >
                  <Ionicons
                    style={{
                      alignSelf: "center",
                    }}
                    name="stats-chart"
                    size={18}
                    color="black"
                  />
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 17,
                      textAlignVertical: "center",
                      marginLeft: 10,
                    }}
                  >
                    Style Stats Show
                  </Text>
                </View>
              </View>
              <Ionicons
                style={{
                  marginTop: 15,
                }}
                name="chevron-forward-outline"
                size={25}
                color="black"
              />
            </View>
          </TouchableOpacity>
         
        </View>
      </ImageBackground>
    </View>
  

);
}