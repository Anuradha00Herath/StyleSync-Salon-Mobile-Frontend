import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import { globalStyles } from "../../components/globalstyles";
import { AppName } from "../../../staff-register/components/AppName";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Address } from "./style";
import { Button } from "../../components/Button";
import axios from "axios";

export function InputAddress({ navigation, route }) {
  const { name, email, contactNo } = route.params;
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address1Error, setAddress1Error] = useState("");
  const [address2Error, setAddress2Error] = useState("");
  const [cityError, setCityError] = useState("");
  const [countryError, setCountryError] = useState("");

  // Regular expression to check if the string contains any numbers
  const containsNumbers = /\d/;

  const validateInputs = () => {
    let isValid = true;

    if (!line1.trim()) {
      setAddress1Error("*Address Line 1 is required");
      isValid = false;
    } else {
      setAddress1Error("");
    }

    if (!line2.trim()) {
      setAddress2Error("*Address Line 2 is required");
      isValid = false;
    } else {
      setAddress2Error("");
    }

    if (!city.trim()) {
      setCityError("*City is required");
      isValid = false;
    } else if (containsNumbers.test(city)) {
      // Check if city contains numbers
      setCityError("*City cannot contain numbers");
      isValid = false;
    } else {
      setCityError("");
    }

    if (!country.trim()) {
      setCountryError("*Country is required");
      isValid = false;
    } else if (containsNumbers.test(country)) {
      // Check if country contains numbers
      setCountryError("*Country cannot contain numbers");
      isValid = false;
    } else {
      setCountryError("");
    }

    return isValid;
  };
  const onPressHandle = () => {
    if (validateInputs()) {
      navigation.navigate("SetMap", {
        name: name,
        email: email,
        contactNo: contactNo,
        line1: line1,
        line2: line2,
        city: city,
        country: country,
      });
    }
  };

  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={globalStyles.background}>
      <StatusBar />
      <AppName />
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={"never"}
      >
        <View style={[globalStyles.container, { marginTop: 110 }]}>
          <View>
            <Text style={globalStyles.mainTopic}>{"Enter Address"}</Text>
            <Text style={globalStyles.subTopic}>
              {"Add your salon address for validation"}
            </Text>
            <View style={{ marginTop: 40 }}>
              <View
                style={[
                  Address.TopInput,
                  address1Error ? { borderColor: "red" } : null,
                ]}
              >
                <TextInput
                  placeholder="Address line 1"
                  value={line1}
                  //style={Address.InputText}
                  onChangeText={(text) => setLine1(text)}
                />
              </View>
              {address1Error ? (
                <Text style={Address.ErrorText}>{address1Error}</Text>
              ) : null}
              <View
                style={[
                  Address.OtherInputs,
                  address2Error ? { borderColor: "red" } : null,
                ]}
              >
                <TextInput
                  placeholder="Address line 2"
                  value={line2}
                  //style={Address.InputText}
                  onChangeText={(text) => setLine2(text)}
                />
              </View>
              {address2Error ? (
                <Text style={Address.ErrorText}>{address2Error}</Text>
              ) : null}
              <View
                style={[
                  Address.OtherInputs,
                  cityError ? { borderColor: "red" } : null,
                ]}
              >
                <TextInput
                  placeholder="City"
                  value={city}
                  //style={Address.InputText}
                  onChangeText={(text) => setCity(text)}
                />
              </View>
              {cityError ? (
                <Text style={Address.ErrorText}>{cityError}</Text>
              ) : null}
              <View
                style={[
                  Address.OtherInputs,
                  countryError ? { borderColor: "red" } : null,
                ]}
              >
                <TextInput
                  placeholder="Country"
                  value={country}
                  //style={Address.InputText}
                  onChangeText={(text) => setCountry(text)}
                />
              </View>
              {countryError ? (
                <Text style={Address.ErrorText}>{countryError}</Text>
              ) : null}
            </View>
            <Button text={"Submit"} onPress={onPressHandle} />
            <View style={Address.BottomSection}>
              <Text style={Address.BottomText}>
                {"Already have an account?    "}
              </Text>
              <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation}>
                <Text style={Address.BottomLogin}>{"Login"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
}
