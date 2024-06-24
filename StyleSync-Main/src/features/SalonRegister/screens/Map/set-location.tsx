import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { AppName } from "../../components/AppName";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function MapText({ navigation, route }) {
  const { name, email, contactNo, line1, line2, city, country } = route.params;
  const [latitude, setLatitude] = useState(6.791163502);
  const [longitude, setLongitude] = useState(79.900496398);
  console.log(route.params);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 6.791163502,
          longitude: 79.900496398,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          draggable
          coordinate={{ latitude, longitude }}
          onDragEnd={(e) => (
            setLatitude(e.nativeEvent.coordinate.latitude),
            setLongitude(e.nativeEvent.coordinate.longitude)
          )}
        />
      </MapView>
      <View
        style={{
          display: "flex",
          backgroundColor: "white",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          Confirm Salon Location
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginBottom: 70,
          }}
        >
          Add Salon Location for
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#844704",
            width: "90%",
            marginBottom: 30,
            borderRadius: 8,
          }}
          onPress={() =>
            navigation.navigate("ConfirmMap", {
              name,
              email,
              contactNo,
              line1,
              line2,
              city,
              country,
              latitude,
              longitude,
            })
          }
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              textAlign: "center",
              padding: 15,
            }}
          >
            Set as Salon Location
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
