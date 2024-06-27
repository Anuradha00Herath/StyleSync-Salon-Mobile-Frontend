import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TextInputArea } from "../../../../../components/text-input-area-in-settings";
import { StaffMember } from "../../../../../components/list-view-of-staff-members";
import axios from "axios";
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';

export default function StaffListView({ navigation, route}) {
  const {salonId} = route.params;
  const [refresh, setRefresh] = useState(false);
  const [Details , setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    try {
      setLoading(true);
      const url = "https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/get_salon_staff_members";
      const currentDate = moment.utc().startOf('day').toISOString();
      console.log('Request Parameters:', { 
        salonId: salonId, 
        date:currentDate
      });
      const response = await axios.get(url, { params: {  salonId: salonId, date: currentDate} });
      setDetails(response.data.data);
      console.log(response.data);
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

 
  return (
    <View >
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
          Staff Members
        </Text>
      </View>
      <Image
        source={require("../../../../../../../assets/staff.png")}
        style={{
          width: 250,
          height: 150,
          marginTop: 50,
          alignSelf: "center",
        }}
      ></Image>
      <ScrollView>
        <View style={{marginHorizontal:10}}>
      {Details.map((details, index) =>(
      <View
      key={index}
      >
      <StaffMember  name={details.staff.name} 
                    Id={details.staffID} 
                    salonId= {details.salonId} 
                    openHour={details.staff.openDays[0].openHour} 
                    closeHour={details.staff.openDays[0].closeHour}
                    fetchDetails={fetchDetails}
                    onPress={() => navigation.navigate("EditStaffProfile" ,{name:details.staff.name ,
                                                                            Id:details.staffID ,
                                                                            salonId:details.salonId})}/>
      </View>
      ))}
        </View>
      </ScrollView>
    </View>
  );
}
