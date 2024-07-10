import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import CircleCheckBox from "react-native-circle-checkbox";
import { RoundedCheckbox } from "react-native-rounded-checkbox";
import { SeparatorLineWithText } from "../../components/line";
import { FlatButton } from "../../components/FlatButton";
import { globaleStyles } from "../../components/globaleStyles";
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import axios from "axios";

export function SelectServicesTypeContent({ staffId, salonId }) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]); 
  const [selectedCheck, setSelectedCheck] = useState([]);
  const [hasSelected, setHasSelected] = useState(false);

  console.log("salonId=", {salonId})

  useFocusEffect(
    React.useCallback(() => {
      const fetchServiceType = async () => {
        try {
          setLoading(true);
          const url =
            "https://stylesync-backend-test.onrender.com/app/v1/service/get-all-service-type";
          const response = await axios.get(url, { params: { staffId } });
          setServices(response.data.data);
          console.log(response.data.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      fetchServiceType();
      return () => {
         // Clean up function
      };
    }, [staffId])
  );

 

  const handleCheckboxClick = (index) => {
    const newSelectedCheck = [...selectedCheck];
    newSelectedCheck[index] = !newSelectedCheck[index];
    setSelectedCheck(newSelectedCheck);
    setHasSelected(newSelectedCheck.some((checked) => checked));
  };
  //generating an array of selected service names based on the checkboxes
  const selectedServiceNames = services
    .filter((service, index) => selectedCheck[index])
    .map((service) => service);
    console.log(selectedServiceNames);
    console.log(staffId);

  const handleContinue = async () => {
    if (!hasSelected) {
      alert("Please select at least one service.");
      return;
    } else {
      try {
        const url =
          "https://stylesync-backend-test.onrender.com/app/v1/service/staff-service-create";
        const response = await axios.post(url, {
          staffId: staffId,
          serviceType: selectedServiceNames,
        });
        const result = response.data;
        const { status, message } = result;
        if (status === 200) {
          console.log("Success", message);
          navigation.navigate("ShowServicesType", { staffId, salonId });
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
  };
  

  const outerSize = 18;
  const innerSize = 12;

  return (
    <View style={{
      width:'100%',
      paddingTop:26,
      paddingHorizontal:24,
      backgroundColor:"#FDFDFD",
      flexDirection: "column",
      justifyContent:"space-between",
      height:"100%"
    }}>
      <View>
        <Text style={globaleStyles.topic}>Your Service Types</Text>
        <Text style={globaleStyles.Stopic}>Select your service type</Text>
        <View>
          {services &&
            services.map((item, index) => (
              <View
                key={index}
              >
                <View style={styles.checkBox}>
                  <Text style={{ fontSize: 14 }}>{item}</Text>
                  <RoundedCheckbox
                    isChecked={false}
                    onPress={() => handleCheckboxClick(index)}
                    text={""}
                    checkedColor="#000000"
                    uncheckedColor="#FDFDFD"
                    outerStyle={{
                      backgroundColor: selectedCheck[index]? "#FDFDFD":"#000000",
                      width: 20,
                      height: 20,
                      alignItems: "center",
                      borderColor: "#000000",
                    }}
                    innerStyle={{
                      backgroundColor: "#FDFDFD",
                      width: selectedCheck[index]? 14 :16,
                      height: selectedCheck[index]? 14 :16,
                      alignItems: "center", 
                    }}
                  />
                </View>
                <SeparatorLineWithText />
              </View>
            ))}
        </View>
      </View>
      <FlatButton text="Continue" onPress={handleContinue} />
    </View>
  );
}

export const styles = StyleSheet.create({
  checkBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
});
