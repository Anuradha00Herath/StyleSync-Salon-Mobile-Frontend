import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SeparatorLineWithText } from "../../components/line";
import { Button } from "../../components/Button";
import { globaleStyles } from "../../components/globaleStyles";
import { styles } from "./styles";
import axios from "axios";

export function EditServiceDetailsContent({
  initialServiceName,
  initialDuration,
  initialPrice,
  serviceId,
  staffId,
}) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  //const navigation = useNavigation();
  const [serviceName, setServiceName] = useState(initialServiceName);
  const [duration, setDuration] = useState(initialDuration);
  const [price, setPrice] = useState(initialPrice);
  const[serviceError , setServiceError] =useState("")
  const[durationError , setDurationError] =useState("");
  const[priceError , setPriceError]=useState("");

  const validateInputs = () => {
    let isValid = true;

    if (!serviceName) {
      setServiceError("*service is required");
      isValid = false;
    } else {
      setServiceError("");
    }
    if (!duration) {
      setDurationError("*Duration is required");
      isValid = false;
    } else {
      setDurationError("");
    }
    if (!price) {
      setPriceError("*Price is required");
      isValid = false;
    } else {
      setPriceError("");
    }
    return isValid;
  };
  

  const handleSave = async () => {
    if (validateInputs()) {
    try {
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/service/update-staff-service-info";
      const response = await axios.put(url, {
        serviceId,
        price: parseInt(price),
        duration: duration,
      });
      const result = response.data;
      const { status, message, data } = result;
      if (status === 201) {
        console.log("success", message, data);
      } else {
        console.log("error", message);
      }
    } catch (error) {
      console.log(error);
    }
    navigation.goBack(); 
  }else {
    console.log("error");
  }
  };
  return (
    <View style={[
        globaleStyles.back,{ marginTop: 300,height:"65%"},]}>
      <View>
        <Text style={globaleStyles.topic}>
          Pricing/Duration - {serviceName}
        </Text>
        <Text style={globaleStyles.Stopic}>When can client book with you</Text>

        <Text style={styles.text1}>Service Name</Text>
        <TextInput
          style={styles.input}
          placeholder={serviceError}
          placeholderTextColor="#E32222" 
          value={serviceName}
          onChangeText={(text) => setServiceName(text)}
        />
        <SeparatorLineWithText/>
        
        <Text style={styles.text1}>Service duration</Text>
        <TextInput
          style={styles.input}
          placeholder={durationError}
          placeholderTextColor="#E32222"
          value={duration}
          onChangeText={(text) => setDuration(text)}
        />
        <SeparatorLineWithText/>

        <Text style={styles.text1}>Price</Text>
        <TextInput
          style={styles.input}
          placeholder={priceError}
          placeholderTextColor="#E32222"
          value={price.toString()}
          onChangeText={(text) => setPrice(text)}
          keyboardType="decimal-pad"
        />
        <SeparatorLineWithText/>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          text1={"Cancel"}
          text={"Ok"}
          onPress={handleSave}
          onPress1={() =>navigation.goBack()}
        />
      </View>
    </View>
  );
}


