import Ionicons from "@expo/vector-icons/Ionicons";
import React, {useState , useEffect} from "react";
import { View, Text, TouchableOpacity, ScrollView,Alert,Switch } from "react-native";

import { DropdownList, TouchableArea } from "../../../components/touchable-area-in-profile";
import { styles } from "react-native-gifted-charts/src/LineChart/styles";
import axios from "axios";

export default function SettingsScreen({navigation ,route}) {
  const {salonId} = route.params;
  const[notification , setNotification] =useState(true);
  const [isEnabled, setIsEnabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    try {
      setLoading(true);
      const url = "https://stylesync-backend-test.onrender.com/app/v1/notification/salonNotificationAvailability";
      console.log('Request Parameters:', { 
        salonId:salonId 
      });
      const response = await axios.get(url, { params: {  salonId:salonId } });
      const data = response.data.data;
      console.log('Response data:', data);
      console.log(data.notification)
      if(data > 0){
        setNotification(true)
        setIsEnabled(true)
      }else{
        setNotification(false);
        setIsEnabled(false)
      }
      
    } catch (error) {
      console.error(error);
    }finally {
      setLoading(false);
    }
  };

  useEffect(()  => {
    fetchDetails();
  },[]);

  //const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const toggleSwitch = async() => {
    setIsEnabled(previousState => !previousState);
    console.log(!notification);
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/notification/UpdateSalonNotification";
        console.log('Request Parameters:', { 
          salonId:salonId ,
          notification:!notification
         
        });
      const response = await axios.put(url, {
            salonId:salonId ,
            notification:!notification
      });
      const result = response.data;
      const { message, status } = result;
      if (status === 201) {
        console.log("Success", message);
      } else {
        console.log("Error",status);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


  const LogOut = (staffId:any) =>{
    Alert.alert('Confirm Logout' ,"Are you sure to log out? ",
      [{
        text:"Cancel",
        onPress:() =>console.log("Cancel"),
      },
    {
      text:"Confirm",
      onPress:() => navigation.navigate("Login"),
    }]
    )
  }
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
          size={25}
          color="black"
          onPress={()=>navigation.goBack()}
          // onPress={() => navigation.navigate("Profile")}
          />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Settings
        </Text>
      </View>
      <ScrollView>
        {/* General Settings */}
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          General
        </Text>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-start',
            //backgroundColor:'#2F4F4F',
            flexDirection:'row',
            width:'88%',
            marginHorizontal:10,
            
          }}
          onPress={toggleSwitch}
        >
          <TouchableArea name="Dark Mode" iconName="moon" option="switch"/>
          <Switch
              style={{}}
              trackColor={{ false: "#767577", true: "#2e2528" }}
              thumbColor={true ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              //onValueChange={toggleSwitch}
              //value={isEnabled}
      />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
        >
          <DropdownList name="Language" iconName="language" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-start',
            //backgroundColor:'#2F4F4F',
            flexDirection:'row',
            width:'88%',
            marginHorizontal:10,
           
          }}
          onPress={toggleSwitch}
        >
          <TouchableArea name="Notifications" iconName="notifications" option="switch"/>
          <Switch
              style={{}}
              trackColor={{ false: "#767577", true: "#2e2528" }}
              thumbColor={true ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
      />
        </TouchableOpacity>

        {/* Account Seetings */}
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          Account & Secuirity
        </Text>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("EditLogin" ,{salonId:salonId})}
        >
          <TouchableArea name="Edit Login Details" iconName="log-in" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("EditSalonProfile" , {salonId:salonId})}
        >
          <TouchableArea name="Edit Salon Profile" iconName="bag-handle" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("EditSalonAddress" ,{salonId:salonId})}
        >
          <TouchableArea name="Edit Salon Address" iconName="pencil" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("EditLocation" ,{salonId:salonId})}
        >
          <TouchableArea name="Edit Location" iconName="location" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("StaffListView" ,{salonId:salonId})}
        >
          <TouchableArea name="Edit Staff Members Profiles" iconName="people" option="touch"/>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
          onPress={LogOut}
        >
          <TouchableArea name="Log Out" iconName="log-out" option=""/>
        </TouchableOpacity>

        {/* Other Settings */}
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          Other
        </Text>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
        >
          <TouchableArea name="Privacy Policies" iconName="bag" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
        >
          <TouchableArea name="Terms & Conditions" iconName="document-text" option="touch"/>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
        >
          <TouchableArea name="Help" iconName="help-buoy" option="touch"/>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
