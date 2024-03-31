import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { globaleStyles } from "../Component/globaleStyles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";

export function Page02Content({ topic }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [staffContact, setStaffContact] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateInputs = () => {
    let isValid = true;

    if (!name.trim()) {
      setError("*Name field is required");
      isValid = false;
    } else {
      setError("");
    }

    if (!gender.trim()) {
      setError("*Gender field is required");
      isValid = false;
    } else {
      setError("");
    }

    if (!staffContact.trim()) {
      setError("*Conatct field is required");
      isValid = false;
    } else if (!/^(\+94)[0-9]{9}$/.test(staffContact)) {
      setError("*Number Should be in correct format");
      isValid = false;
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
          salonId : 2,
          name,
          gender,
          staffContact,
        });
        const result = response.data;
        const { message, status } = result;

        if (status === 201) {
          console.log("Success", message);
          navigation.navigate("Page03");
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
    }
    else{
      console.log({error});
    }
  };

  const navigation = useNavigation<StackNavigationProp<any>>();
  //const navigation = useNavigation();
  const [selected, setSelected] = React.useState("");
  //const [name, setName] = React.useState("");
  //const [contactNumber, setContactNumber] = React.useState("");

  // Function to handle continue button press
  const handleContinue = () => {
    let errors = []; // Array to hold validation errors

    if (!name) errors.push("Please enter your name.");
    if (!selected) errors.push("Please select your gender.");
    if (!staffContact) errors.push("Please enter your contact number.");

    if (errors.length > 0) {
      alert(errors.join("\n")); // Display a combined alert with all errors
      return;
    }

    // Proceed with navigation or other actions here
    // navigation.navigate("Page03");
  };

  const data = [
    { key: "1", value: "Male" },
    { key: "2", value: "Female" },
  ];

  return (
    <View style={[globaleStyles.back, { marginTop: 280 }]}>
      <View style={{ flex: 1, justifyContent: "flex-start" }}>
        <Text style={globaleStyles.topic}>{topic}</Text>
        <TextInput
          style={styles.Text}
          placeholder="Enter Your Name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <View>
          <SelectList
            setSelected={(val) => setGender("text")}
            data={data}
            save="value"
            placeholder="choose Gender"
            inputStyles={{
              color: selected ? "#2E2528" : "#999999",
              fontSize: 12,
            }}
            boxStyles={{
              borderRadius: 10,
              height: 48,
              width: "100%",
              marginTop: 30,
              padding: 15,
              borderWidth: 1,
              borderColor: "black",
            }}
            search={false}
            //closeicon={false}
            dropdownStyles={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "black",
              shadowColor: "grey",
            }}
            dropdownTextStyles={{ fontSize: 12 }}
          />
        </View>

        <TextInput
          style={styles.Text}
          placeholder="Contact Number"
          keyboardType="numeric"
          value={staffContact}
          onChangeText={text => setStaffContact(text)}
        />
      </View>
      <View>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  Text: {
    height: 48,
    width: "100%",
    marginTop: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 12,
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#844704",
    padding: 15,
    width: "100%",
    height: 48,
    marginBottom: 14,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});
