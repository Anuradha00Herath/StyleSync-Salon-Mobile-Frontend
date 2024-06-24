import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
//import { TextInputArea } from "../../../../components/text-input-area-in-settings";

export default function EditLocation({ navigation }) {
  const [location, setLocation] = useState({
    latitude: 6.791163502,
    longitude: 79.900496398,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  function onRegionChange({region}) {
    setLocation(region);
  }
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
          Change Location
        </Text>
      </View>
      <MapView
        style={{
          height: "66%",
          width: "100%",
          alignSelf: "center",
          marginTop: 10,
          borderRadius: 20,
        }}
        initialRegion={location}
        
      ><Marker coordinate={{latitude: 6.79517502, longitude: 79.900866398}} draggable={true}/></MapView>
      <View
        style={{
          alignSelf: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            height: 3,
            width: 120,
            backgroundColor: "grey",
            alignSelf: "center",
            marginTop: 5,
            borderRadius: 10,
          }}
        ></View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            alignSelf: "center",
            marginTop: 15,
          }}
        >
          Set Your Salon Location
        </Text>
        <Text
          style={{
            fontSize: 15,
            //fontWeight: "bold",
            alignSelf: "center",
            marginTop: 5,
          }}
        >
          Drag the map to move the pin
        </Text>
        <View
          style={{
            //   flexDirection: "row",
            //   justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <View
            style={{
              width: "80%",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#8B6C58",
                  borderRadius: 10,
                  padding: 10,
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  Confirm Salon Location
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 9,
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Text>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
            }}
          ></View>
        </View>
      </View>
    </View>
  );
}
