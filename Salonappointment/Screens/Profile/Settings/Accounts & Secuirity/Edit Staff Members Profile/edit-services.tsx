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
import { TextInputArea } from "../../../../../Components/text-input-area-in-settings";
import { StaffMember } from "../../../../../Components/list-view-of-staff-members";
import { ServiceShow } from "../../../../../Components/service-show";
import axios from "axios";

export default function EditService({ navigation }) {

  const [refresh, setRefresh] = useState(false);
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);

 
  const fetchService = async () => {
    try {
      setLoading(true);
      const url = "https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/get_staff_members_Service";
      console.log('Request Parameters:', { 
        staffId:1, 
      });
      const response = await axios.get(url, { params: { staffId:1 } });
      setService(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchService();
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

  // const groupedservice = {};
  // service.forEach((service) => {
  //   const serviceType = service.serviceType;
  //   if (groupedservice[serviceType]) {
  //     groupedservice[serviceType].push(service);
  //   } else {
  //     groupedservice[serviceType] = [service];
  //   }
  // });
  const groupedservice = service.reduce((acc, service) => {
    const serviceType = service.serviceType;
    if (acc[serviceType]) {
      acc[serviceType].push(service);
    } else {
      acc[serviceType] = [service];
    }
    return acc;
  }, {});

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
          Anuradha's Services
        </Text>
      </View>
      <Image
        source={require("../../../../../assets/Services.png")}
        style={{
          width: 250,
          height: 150,
          marginTop: 50,
          alignSelf: "center",
        }}
      ></Image>
      <ScrollView>
      {Object.keys(groupedservice ).map((serviceType) => (
      <View key={serviceType}>
      <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          {serviceType}
        </Text>
        {groupedservice[serviceType].map((service) => (
      <TouchableOpacity key={service.id}>
          <ServiceShow service={service}/>
      </TouchableOpacity>
        ))}
      </View>
      ))}
      </ScrollView>
      {/* <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          Nail Services
        </Text>
      <TouchableOpacity>
          <ServiceShow/>
      </TouchableOpacity>
      <TouchableOpacity>
          <ServiceShow/>
      </TouchableOpacity> */}
    </View>
  );
}
