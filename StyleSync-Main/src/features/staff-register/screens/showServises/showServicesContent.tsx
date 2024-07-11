import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, ScrollView ,Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { globaleStyles } from "../../components/globaleStyles";
import { FlatButton } from "../../components/FlatButton";
import { AddMore } from "../../components/AddMore";
import Icon from "@expo/vector-icons/AntDesign";
import { ContainerStyles } from "./styles";
import { SeparatorLineWithText } from "../../components/line";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";



export function ShowSevicesContent({
  serviceType,
  service,
  staffId,
  handleFetchService,
  salonId,
}) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  console.log("salonId=", {salonId});

  return (
    <View
      style={{
        width: "100%",
        paddingTop: 26,
        paddingHorizontal: 24,
        backgroundColor: "#FDFDFD",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >  
      <View>
        <Text style={globaleStyles.topic}>{serviceType} - Your Services</Text>
        <Text style={globaleStyles.Stopic}>When can client book with you</Text>
        <View style={{ height: 300, justifyContent: "flex-start" }}>
          <FlatList
            data={service}
            renderItem={({ item }) => (
              <ServiceContainer
                text={item.name}
                price={item.price}
                duration={item.duration}
                serviceId={item.id}
                staffId={staffId}
                handleFetchservice={handleFetchService}
              />
            )}
            ListFooterComponent={() => (
              <View style={{ alignItems: "flex-start", marginBottom: 20 }}>
                <AddMore
                  onPress={() =>
                    navigation.navigate("AddMoreDetails", {
                      serviceType: serviceType,
                      staffId: staffId,
                    })
                  }
                />
              </View>
            )}
          />
        </View>
      </View>
      <FlatButton text="Continue" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ServiceContainer({
  text,
  price,
  duration,
  serviceId,
  staffId,
  handleFetchservice,
}) {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleDelete = async () => {
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/service/delete-staff-service";
      const response = await axios.delete(url, {
        params: { serviceId, staffId },
      });
      const result = response.data;
      const { status, message } = result;
      if (status === 200) {
        console.log("Success", message);
        handleFetchservice();
        //fetchBusinessHours();
      }
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };
  const Delete = () =>{
    Alert.alert('Delete' ,"Are you sure you want to delete this service? ",
      [{
        text:"Cancel",
        onPress:() =>console.log("Cancel"),
      },
    {
      text:"Yes",
      onPress:() => handleDelete(),
    }]
    )
  }
  const convertMinutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}H ${remainingMinutes}Min`;
  };
  return (
    <View>
      <View style={ContainerStyles.mainView}>
        <View style={ContainerStyles.subView1}>
          <Text style={ContainerStyles.spText}>{text}</Text>
          <Text style={ContainerStyles.durationText}>{convertMinutesToHours(duration)}</Text>
        </View>
        <View style={ContainerStyles.subView2}>
          <View>
            <Text style={ContainerStyles.spText}>LKR{price}</Text>
          </View>
          <View style={{ width: 30, alignItems: "center" }}>
            <Ionicons
              style={{
                marginTop: 5,
              }}
              name="trash-outline"
              size={20}
              color="black"
              onPress={Delete}
            />
          </View>
          <View style={{ width: 30, alignItems: "center" }}>
            <Ionicons
              style={{
                marginTop: 5,
              }}
              name="chevron-forward-outline"
              size={20}
              color="black"
              onPress={() =>
                navigation.navigate("EditServiceDetails", {
                  serviceName: text,
                  price,
                  duration,
                  serviceId,
                  staffId,
                })
              }
            />
          </View>
        </View>
      </View>
      <SeparatorLineWithText />
    </View>
  );
}
