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
  ActivityIndicator
} from "react-native";
import { TextInputArea } from "../../../../Components/text-input-area-in-settings";
import axios from 'axios';

export default function EditSalonAddress({ navigation }) {
  const [refresh, setRefresh] = useState(false);
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const[line1 , setLine1]=useState("");
  const[line2 ,setLine2]=useState("");
  const[city ,setCity]=useState("");
  const[error, setError]=useState("")
  const[country, setCountry] =useState("");

  const fetchAddress = async () => {
    try {
      setLoading(true);
      const url = "https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/get_salon-address";
      console.log('Request Parameters:', { 
        salonId: 1, 
      });
      const response = await axios.get(url, { params: {  salonId: 1} });
      const addressData = response.data.data[0];
      setAddress(addressData);
      setLine1(addressData.line1);
      setLine2(addressData.line2);
      setCity(addressData.city);
      setCountry(addressData.country);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }finally {
      setLoading(false);
    }
  };

  const validateInputs = () => {
    let isValid = true;

    if (!line1.trim() || !line2.trim()) {
      setError("*line1,line2 field is required");
      isValid = false;
      alert("line1,line2 field is required");
    } else {
      setError("");
    }
    if (!city.trim()) {
      setError("*city field is required");
      isValid = false;
      alert("city field is required");
    } else {
      setError("");
    }
    if (!country.trim()) {
      setError("*country field is required");
      isValid = false;
      alert("country field is required");
    } else {
      setError("");
    }
    
    return isValid;
  };

  const handleSubmit = async () => {
      if (validateInputs()){
      try {
        setLoading(true);
        const url =
          "https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/Update_salon-address";
        const response = await axios.put(url, {
          salonId: 1,
          line1,
          line2,
          city,
          country,
        });

       console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }else {
      console.log({ error });
    }
   
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefresh(true);
    }, 5000); 
  
    return () => clearInterval(intervalId);
  }, []);

  if (loading || !address) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  //const {line1,line2,city,country} = address;
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
          Edit Salon Address
        </Text>
      </View>
      <Image
        source={require("../../../../assets/Salon.png")}
        style={{
          width: 150,
          height: 150,
          marginTop: 50,
          alignSelf: "center",
        }}
      ></Image>
      <KeyboardAvoidingView behavior="height">
        <ScrollView
          style={{
            alignSelf: "center",
          }}
        >
          <TextInputArea
            name="Address Line 1"
            value={line1}
            editable={true}
            isSecure={false}
            placeholder={""}
            onChangeText={(text) => setLine1(text)}
          />
          <TextInputArea
            name="Address Line 2"
            value={line2}
            editable={true}
            isSecure={false}
            placeholder={""}
            onChangeText={(text) => setLine2(text)}
          />
          <TextInputArea
            name="city"
            value={city}
            editable={true}
            isSecure={false}
            placeholder={""}
            onChangeText={(text) => setCity(text)}
          />
          <TextInputArea
            name="country"
            value={country}
            editable={true}
            isSecure={false}
            placeholder={""}
            onChangeText={(text) => setCountry(text)}
          />
          <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: "40%",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View
                style={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 9,
                  alignItems: "center",
                }}
              >
                <Text>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "40%",
            }}
          >
            <TouchableOpacity onPress={handleSubmit}>
              <View
                style={{
                  backgroundColor: "#8B6C58",
                  borderRadius: 10,
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>

      </KeyboardAvoidingView>
    </View>
  );
}