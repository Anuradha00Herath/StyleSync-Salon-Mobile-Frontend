import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { imageStyles } from "../../components/globaleStyles";
import { AppName } from "../../components/AppName";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { globaleStyles } from "../../components/globaleStyles";
import { SelectList } from "react-native-dropdown-select-list";
import { StackNavigationProp } from "@react-navigation/stack";
import { FlatButton } from "../../components/FlatButton";
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import axios from "axios";

//const backImg = require("../../../../assets/StyleSync.jpeg");

export default function PersanalInformation({  route }) {
  const { id, topic } = route.params;
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [staffContact, setStaffContact] = useState("");
  const [error, setError] = useState("");
  const [nameError , setNameError] =useState("");
  const [genderError , setGenderError] =useState("");
  const[numberError , setNumberError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Reset state when a new topic is passed
    setGender("");
    setName("");
    setStaffContact("");
    setGenderError("");
    setNameError('');
    setNumberError('')
    
  }, [id,topic]); // Dependency array with 'topic' as a dependency

  const validateInputs = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("*Name field is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!gender.trim()) {
      setGenderError("*Gender field is required");
      isValid = false;
    } else {
      setGenderError("");
    }

    if (!staffContact.trim()) {
      setNumberError("*Conatct field is required");
      isValid = false;
    } else if (!/^(\+94)[0-9]{9}$/.test(staffContact)) {
      setNumberError("*Number Should be in correct format");
      isValid = false;
    } else {
      setNumberError("");
    }
    return isValid;
  };

  const handleSubmit = async () => {
    if (validateInputs()) {
      try {
        setLoading(true);
        const url =
          "https://stylesync-backend-test.onrender.com/app/v1/staff/register-staff";
        const response = await axios.post(url, {
          salonId: id,
          name,
          gender,
          staffContact,
        });
        const result = response.data;
        const { message, status, staff } = result;

        const urlTwo =
          "https://stylesync-backend-test.onrender.com/app/v1/time/create-open-hours";
        const responseTwo = await axios.post(urlTwo, {
          staffId: staff.id,
        });
        const resultTwo = responseTwo.data;
        const { messageTwo, statusTwo } = resultTwo;

        if (status === 201) {
          console.log("Success", message);
          console.log("Success", messageTwo);
          navigation.navigate("BusinessHours", { salonId:id,staffId: staff.id });
        } else if (status === 400) {
          console.log("Failed", message);
        } else {
          console.log("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
        setNumberError("*Contact number already exists.");
      } finally {
        setLoading(false);
      }
    } else {
      console.log({ error });
    }
  };

  const data = [
    { key: "1", value: "Male" },
    { key: "2", value: "Female"},
    { key: "3", value: "Both"},
  ];
  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={imageStyles.container}>
       <StatusBar barStyle="light-content" backgroundColor="#2E2E2E" />
      <View
        style={{
          display:"flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          
        }}
      >
        <View >
          <AppName />
        </View>
        <View style={{
          height:"65%",
          backgroundColor: "#FDFDFD", 
          borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        }}>
              <View style={[globaleStyles.back]}>
              <KeyboardAvoidingView behavior="height">
                <ScrollView>
                  <Text style={globaleStyles.topic}>{topic}</Text>
                  
                  <TextInput
                    style={{ height: 48,
                            width: "100%",
                            marginTop: 20,
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 10,
                            fontSize: 12,
                            borderColor: nameError ? '#E32222'  : null}}
                    placeholder="Enter Your Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                  />
                  {nameError  ? <Text style={{color:"#E32222",fontSize:12,marginLeft:12}}>{nameError}</Text> : null}
                  <View>
                    <SelectList
                      setSelected={(value) => setGender(value)}
                      data={data}
                      save="value"
                      placeholder="Choose Targeting Gender"
                      inputStyles={{
                        color: gender ? "#2E2528" : "#999999",
                        fontSize: 12,
                      }}
                      boxStyles={{borderRadius: 10,
                                  height: 48,
                                  width: "100%",
                                  marginTop: 20,
                                  padding: 15,
                                  borderWidth: 1, 
                                  borderColor: genderError? "#E32222" :"#000000"}}
                      search={false}
                      //closeicon={false}
                      dropdownStyles={{borderRadius: 10,
                                        borderWidth: 1,
                                        borderColor: "#000000",
                                        shadowColor: "#808080",}}
                      dropdownTextStyles={{fontSize: 12}}
                    />
                  </View>
                  {genderError ? <Text style={{color:"#E32222",fontSize:12,marginLeft:12}}>{genderError}</Text> : null}
                  <TextInput
                    style={{ height: 48,
                              width: "100%",
                              marginTop: 20,
                              padding: 10,
                              borderWidth: 1,
                              borderRadius: 10,
                              fontSize: 12,
                              borderColor: numberError ? '#E32222'  : null}}
                    placeholder="Contact Number"
                    keyboardType="numeric"
                    value={staffContact}
                    onChangeText={(text) => setStaffContact(text)}
                  />
                  {numberError ? <Text style={{color:"#E32222",fontSize:12,marginLeft:12}}>{numberError}</Text> : null}
                  <View style={{
                  marginTop:30,
                  marginBottom:190
                }} >
                  <FlatButton text="Continue" onPress={handleSubmit} />
                </View>
                </ScrollView>
                </KeyboardAvoidingView>
              </View>
          
        </View>
      </View>
    </ImageBackground>
  );
}
