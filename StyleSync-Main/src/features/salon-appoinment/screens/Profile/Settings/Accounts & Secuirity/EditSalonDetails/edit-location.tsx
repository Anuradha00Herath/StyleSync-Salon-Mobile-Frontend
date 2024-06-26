import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { View, Text, TouchableOpacity } from "react-native";
import axios from "axios";

export default function EditLocation({ navigation, route }) {
  const { salonId } = route.params;
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState<number>(6.791163502);
  const [longitude, setLongitude] = useState<number>(79.900496398);
  const [dataFetched, setDataFetched] = useState(false); // New state variable

  const fetchDetails = async () => {
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/get-salon-location";
      console.log("Request parameters", { salonId });
      const response = await axios.get(url, { params: { salonId } });
      setLatitude(response.data.data[0].latitude);
      setLongitude(response.data.data[0].longtitude);
      setDataFetched(true); // Update state to trigger re-render
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const handleChange = async () => {
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/update-location";
      console.log("Request parameters", { salonId, latitude, longitude });
      const response = await axios.put(url, { salonId, latitude, longitude });
      fetchDetails();
      navigation.goBack();
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
      {dataFetched && (
        <Map
          latitude={latitude}
          longitude={longitude}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
        />
      )}
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
            alignSelf: "center",
            marginTop: 5,
          }}
        >
          Drag the map to move the pin
        </Text>
        <View
          style={{
            marginTop: 15,
          }}
        >
          <View
            style={{
              width: "80%",
              alignSelf: "center",
            }}
          >
            <TouchableOpacity onPress={handleChange}>
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
        </View>
      </View>
    </View>
  );
}

function Map({ latitude, longitude, setLatitude, setLongitude }) {
  return (
    <MapView
      style={{
        height: "66%",
        width: "100%",
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 20,
      }}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker
        coordinate={{ latitude, longitude }}
        draggable={true}
        onDragEnd={(e) => {
          setLatitude(e.nativeEvent.coordinate.latitude);
          setLongitude(e.nativeEvent.coordinate.longitude);
        }}
      />
    </MapView>
  );
}
