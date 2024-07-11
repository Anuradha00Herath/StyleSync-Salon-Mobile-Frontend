import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Icon from "react-native-vector-icons/AntDesign";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import moment from "moment";

const { width, height } = Dimensions.get("screen");

interface Appointment {
  id: string;
  bookingTime: string;
  customerAppointmentBlock: Array<{
    customer: {
      name: string;
      image: string | null;
    };
    date: string;
    isCancel: boolean;
  }>;
  staff: {
    name: string;
  };
  startTime: string;
}

interface ResponseData {
  data: Appointment[];
}

export default function NotificationScreen({ route, navigation }) {
  const { salonId } = route.params;

  const [loading, setLoading] = useState(false);
  const [newAppointments, setNewAppointments] = useState<Appointment[]>([]);
  const [todayAppointments, setTodayAppointments] = useState<Appointment[]>([]);
  const [yesterdayAppointments, setYesterdayAppointments] = useState<Appointment[]>([]);
  const [earlierAppointments, setEarlierAppointments] = useState<Appointment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [lastVisited, setLastVisited] = useState<Date | null>(null);
  const [highlightNew, setHighlightNew] = useState<boolean>(true);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const urlNew =
        "https://stylesync-backend-test.onrender.com/app/v1/notification/get_new_appoinment";
      const responseNew = await axios.get<ResponseData>(urlNew, {
        params: { salonId },
      });

      const newAppointmentsData = responseNew.data.data;
      const sortedNewAppointments = newAppointmentsData.sort(
        (a, b) =>
          new Date(b.bookingTime).getTime() - new Date(a.bookingTime).getTime()
      );

      const today = moment().startOf("day");
      const yesterday = moment().subtract(1, "day").startOf("day");

      const todayAppointmentsData = sortedNewAppointments.filter((appointment) =>
        moment(appointment.bookingTime).isSame(today, "day")
      );

      const yesterdayAppointmentsData = sortedNewAppointments.filter((appointment) =>
        moment(appointment.bookingTime).isSame(yesterday, "day")
      );

      const earlierAppointmentsData = sortedNewAppointments.filter((appointment) =>
        moment(appointment.bookingTime).isBefore(yesterday, "day")
      );

      setNewAppointments(sortedNewAppointments);
      setTodayAppointments(todayAppointmentsData);
      setYesterdayAppointments(yesterdayAppointmentsData);
      setEarlierAppointments(earlierAppointmentsData);
    } catch (error: any) {
      console.error("Error fetching appointments:", error);
      setError(error.message || "Request failed");
    } finally {
      setLoading(false);
    }
  };

  const fetchLastVisited = async () => {
    try {
      const lastVisitedString = await AsyncStorage.getItem("lastVisited");
      if (lastVisitedString) {
        setLastVisited(new Date(lastVisitedString));
      }
    } catch (error) {
      console.error("Error fetching last visited time:", error);
    }
  };

  const saveLastVisited = async () => {
    try {
      await AsyncStorage.setItem("lastVisited", new Date().toISOString());
    } catch (error) {
      console.error("Error saving last visited time:", error);
    }
  };

  const fetchHighlightFlag = async () => {
    try {
      const highlightFlag = await AsyncStorage.getItem("highlightNew");
      if (highlightFlag !== null) {
        setHighlightNew(JSON.parse(highlightFlag));
      }
    } catch (error) {
      console.error("Error fetching highlight flag:", error);
    }
  };

  const saveHighlightFlag = async () => {
    try {
      await AsyncStorage.setItem("highlightNew", JSON.stringify(false));
    } catch (error) {
      console.error("Error saving highlight flag:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchLastVisited();
      fetchHighlightFlag();
      fetchAppointments();
      return () => {
        saveLastVisited();
        saveHighlightFlag();
      };
    }, [])
  );

  const renderAppointment = (appointment: Appointment) => {
    const isNew = highlightNew && lastVisited && new Date(appointment.bookingTime) > lastVisited;

    return (
      <View
        key={appointment.id}
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          margin: 10,
          width: "95%",
          backgroundColor: isNew ? "#e0ffe0" : "transparent", // Highlight new appointments
        }}
      >
        <View style={{ marginHorizontal: 5 }}>
          <Image
            source={
              appointment.customerAppointmentBlock[0].customer.image === null
                ? require("../../../../assets/images.jpg")
                : { uri: appointment.customerAppointmentBlock[0].customer.image }
            }
            style={{
              width: 40,
              height: 40,
              borderColor: "green",
              borderWidth: 2,
              borderRadius: 20,
              marginTop: 8,
            }}
          />
        </View>
        <View
          style={{
            marginLeft: 10,
            paddingRight: 10,
            flexDirection: "column",
            width: "85%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {appointment.customerAppointmentBlock[0].customer.name}
            </Text>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CustomerInfo", { appointment })
                }
              >
                <Icon name="right" size={18} color={"black"} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {appointment.customerAppointmentBlock[0].isCancel ? (
              <Text>
                {appointment.staff.name}'s appointment on{" "}
                {
                  new Date(appointment.customerAppointmentBlock[0].date)
                    .toISOString()
                    .split("T")[0]
                }{" "}
                at {appointment.startTime} has been canceled
              </Text>
            ) : (
              <Text>
                {appointment.staff.name} has a new appointment on{" "}
                {
                  new Date(appointment.customerAppointmentBlock[0].date)
                    .toISOString()
                    .split("T")[0]
                }{" "}
                at {appointment.startTime}
              </Text>
            )}
          </View>
          <View>
            <Text style={{ color: "gray", marginTop: 5 }}>
              {new Date(appointment.bookingTime)
                .toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })
                .replace(",", "")}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ marginHorizontal: 20 }}>
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Notification</Text>
        <Ionicons
          name="search"
          size={20}
          style={{ textAlign: "center", marginTop: 5 }}
        />
      </View>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
            Today
          </Text>
          <View style={{ backgroundColor: "#FDFEFE" }}>
            {todayAppointments.map(renderAppointment)}
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
            Yesterday
          </Text>
          <View style={{ backgroundColor: "#FDFEFE" }}>
            {yesterdayAppointments.map(renderAppointment)}
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
            Earlier
          </Text>
          <View style={{ backgroundColor: "#FDFEFE" }}>
            {earlierAppointments.map(renderAppointment)}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
