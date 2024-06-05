import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TextInputArea } from "../../../../Components/text-input-area-in-settings";

export default function EditSalonAddress({ navigation }) {

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
          Edit Salon Address
        </Text>
      </View>
      <Image
        source={require("../../../../assets/Salon.png")}
        style={{
          width: 150,
          height: 150,
          marginTop: 50,
          alignSelf: "center",
        }}
      ></Image>
      <KeyboardAvoidingView behavior="height">
        <ScrollView
          style={{
            alignSelf: "center",
          }}
        >
          <TextInputArea
            name="Address Line 1"
            value="No. 256"
            editable={true}
            isSecure={false}
            placeholder={""}
          />
          <TextInputArea
            name="Address Line 2"
            value="Katubedda"
            editable={true}
            isSecure={false}
            placeholder={""}
          />
          <TextInputArea
            name="Address Line 3"
            value="Moratuwa"
            editable={true}
            isSecure={false}
            placeholder={""}
          />
          <TextInputArea
            name="City"
            value="Colombo"
            editable={true}
            isSecure={false}
            placeholder={""}
          />
          <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: "40%",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#F5F5F5",
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 9,
                  alignItems: "center",
                }}
              >
                <Text>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "40%",
            }}
          >
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#8B6C58",
                  borderRadius: 10,
                  padding: 10,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>

      </KeyboardAvoidingView>
    </View>
  );
}