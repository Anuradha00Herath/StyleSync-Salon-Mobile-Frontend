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
//import { PersanalInformationContent } from "./PersanalInformationContent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { globaleStyles } from "../../components/globaleStyles";
import { SelectList } from "react-native-dropdown-select-list";
import { StackNavigationProp } from "@react-navigation/stack";
import { FlatButton } from "../../components/FlatButton";
import { styles } from "./styles";
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import axios from "axios";

const backImg = require("../../../../assets/StyleSync.jpeg");

export default function PersanalInformation({ route }) {
  const { id, topic } = route.params;
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [staffContact, setStaffContact] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Reset state when a new topic is passed
    setGender("");
    setName("");
    setStaffContact("");
  }, [topic]); // Dependency array with 'topic' as a dependency

  const validateInputs = () => {
    let isValid = true;

    if (!name.trim()) {
      setError("*Name field is required");
      isValid = false;
      alert("Name field is required");
    } else {
      setError("");
    }

    if (!gender.trim()) {
      setError("*Gender field is required");
      isValid = false;
      alert("Gender field is required");
    } else {
      setError("");
    }

    if (!staffContact.trim()) {
      setError("*Conatct field is required");
      isValid = false;
      alert("Conatct field is required");
    } else if (!/^(\+94)[0-9]{9}$/.test(staffContact)) {
      setError("*Number Should be in correct format");
      isValid = false;
      alert("Number Should be in correct format");
    } else {
      setError("");
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
      } finally {
        setLoading(false);
      }
    } else {
      console.log({ error });
    }
  };

  const data = [
    { key: "1", value: "Male" },
    { key: "2", value: "Female" },
  ];
  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={imageStyles.container}>
      <StatusBar />
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
                    style={styles.Text}
                    placeholder="Enter Your Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                  />
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
                      boxStyles={styles.boxStyles}
                      search={false}
                      //closeicon={false}
                      dropdownStyles={styles.dropdownStyles}
                      dropdownTextStyles={styles.dropdownTextStyles}
                    />
                  </View>

                  <TextInput
                    style={styles.Text}
                    placeholder="Contact Number"
                    keyboardType="numeric"
                    value={staffContact}
                    onChangeText={(text) => setStaffContact(text)}
                  />
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
