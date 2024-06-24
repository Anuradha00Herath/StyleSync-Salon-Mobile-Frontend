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

export default function ConfirmMap({ navigation, route }) {
    const { name, email, contactNo, line1, line2, city, country,latitude,longitude } = route.params;
  const [coordinate, setCoordinate] = useState({
    latitude: latitude,
    longitude: longitude,
  });
  console.log(route.params);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={coordinate}
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
          Reconfirm Salon Location
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginBottom:70
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
          onPress={()=>navigation.navigate("SignUp",{name, email, contactNo, line1, line2, city, country,latitude,longitude})}
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
