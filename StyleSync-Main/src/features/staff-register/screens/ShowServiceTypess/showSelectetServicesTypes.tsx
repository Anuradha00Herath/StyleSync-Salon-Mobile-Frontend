import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
} from "react-native";
import { globaleStyles, imageStyles } from "../../components/globaleStyles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Icon from "@expo/vector-icons/AntDesign";
import { SeparatorLineWithText } from "../../components/line";
import { FlatButton } from "../../components/FlatButton";
import { AppName } from "../../components/AppName";
import { AddMore } from "../../components/AddMore";
import { styles } from "./styles";
import React, { useState } from "react";
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

//const backImg=require("../../../../assets/StyleSync.jpeg")

export function ShowServicesType({ route }) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { staffId, salonId } = route.params;
  const [loading, setLoading] = useState(false);
  const [selectServices, setSelectServices] = useState([]);
  console.log("salonId=", {salonId});
  useFocusEffect(
    React.useCallback(() => {
      fetchBusinessHours();
      return () => {};
    }, [staffId])
  );

  const fetchBusinessHours = async () => {
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/service/view-staff-service-type";
      const response = await axios.get(url, { params: { staffId } });
      setSelectServices(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (serviceName: any) => {
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/service/delete-staff-service-type";
      const response = await axios.delete(url, {
        params: { staffId, serviceType: serviceName },
      });
      const result = response.data;
      const { status, message } = result;
      if (status === 200) {
        console.log("Success", message);
        fetchBusinessHours();
      }
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={imageStyles.container}>
      <StatusBar />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <View>
          <AppName />
        </View>
        <View
          style={{
            height: "65%",
            backgroundColor: "#FDFDFD",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
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
              <Text style={globaleStyles.topic}>Your Services</Text>
              <Text style={globaleStyles.Stopic}>
                When can client book with you
              </Text>
              {selectServices.map((serviceType, index) => (
                <View key={index}>
                  <View style={styles.mainView}>
                    <View>
                      <Text>{serviceType}</Text>
                    </View>
                    <View style={styles.subView}>
                      <View style={{ width: 30, alignItems: "center" }}>
                        <Ionicons
                          style={{
                            marginTop: 5,
                          }}
                          name="trash-outline"
                          size={20}
                          color="black"
                          onPress={() => handleDelete(serviceType)}
                        />
                      </View>
                      <View style={{ width: 40, alignItems: "center" }}>
                        <Ionicons
                          style={{
                            marginTop: 5,
                          }}
                          name="chevron-forward-outline"
                          size={20}
                          color="black"
                          onPress={() =>
                            navigation.navigate("ShowSevices", {
                              serviceType,
                              staffId,
                              salonId
                            })
                          }
                        />
                      </View>
                    </View>
                  </View>
                  <SeparatorLineWithText />
                </View>
              ))}
              <AddMore onPress={() => navigation.navigate("AddServicesTypes",{salonId,staffId})} />
            </View>
            <FlatButton
              text="Continue"
              onPress={() => navigation.navigate("AddStaffImage",{salonId,staffId})}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
