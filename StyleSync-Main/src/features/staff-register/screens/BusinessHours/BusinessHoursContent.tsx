import React, { useState, useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/AntDesign";
import { globaleStyles } from "../../components/globaleStyles";
import { SeparatorLineWithText } from "../../components/line";
import { FlatButton } from "../../components/FlatButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { day } from "./styles";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

export function BusinessHoursContent({ staffId, salonId }) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [businessHours, setBusinessHours] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("salonId=", {salonId})

  useFocusEffect(
    React.useCallback(() => {
      const fetchBusinessHours = async () => {
        try {
          setLoading(true);
          const url =
            "https://stylesync-backend-test.onrender.com/app/v1/time/get-opendays-and-hours";
          const response = await axios.get(url, { params: { staffId } });
          const sortedBusinessHours = response.data.data.sort((a, b) => {
            const daysOfWeek = [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ];
            return (
              daysOfWeek.indexOf(a.dayName) - daysOfWeek.indexOf(b.dayName)
            );
          });
          setBusinessHours(sortedBusinessHours);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchBusinessHours();
      // Clean up function
      return () => {
        // Any cleanup code goes here
      };
    }, [staffId])
  );

  return (
    <View
      style={{
        width: "100%",
        paddingTop: 26,
        paddingHorizontal: 24,
        backgroundColor: "#FDFDFD",
        flexDirection:"column",
        justifyContent:"space-between",
        height:"100%"
      }}
    >
      <View>
        <Text style={globaleStyles.topic}> Your Business Hours</Text>
        <Text style={globaleStyles.Stopic}>Set your desired work schedule</Text>
        {businessHours.map((day) => (
          <View key={day.dayName}>
            <Day
              text={day.dayName}
              isOpen={day.isOpen}
              openHour={day.openHour}
              closeHour={day.closeHour}
              onPress={() =>
                navigation.navigate("SetTime", {
                  staffId: staffId,
                  name: day.dayName,
                  isOpen: day.isOpen,
                  openHour: day.openHour,
                  closeHour: day.closeHour,
                  salonId:salonId
                })
              }
            />
            <SeparatorLineWithText />
          </View>
        ))}
      </View>
      <FlatButton
        text="Continue"
        onPress={() => navigation.navigate("SelectServicesTypes", { staffId,salonId })}
        // onPress={navigation.goBack()}
      />
    </View>
  );
}

function Day({ text, isOpen, openHour, closeHour, onPress }) {
  const formattedTime = isOpen ? `${openHour} - ${closeHour}` : "Closed";

  return (
    <View>
      <View style={day.view2}>
        <View style={day.view3}>
          <Text style={day.text}>{text}</Text>
        </View>
        <View style={day.view4}>
          <Text style={day.text}>{formattedTime}</Text>
        </View>
        <View>
          <Icon name="right" size={20} color={"#808080"} onPress={onPress} />
        </View>
      </View>
    </View>
  );
}
