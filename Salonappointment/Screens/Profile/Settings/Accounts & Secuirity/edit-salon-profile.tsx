import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  Platform,
  GestureResponderEvent,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";
import { TextInputArea } from "../../../../Components/text-input-area-in-settings";
import * as ImagePicker from 'expo-image-picker';

export default function EditSalonProfile({ navigation }) {
    const [image, setImage] = useState(require("../../../../assets/images.jpg"));
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'android') {
            const libraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (libraryStatus.status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
    
            const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
            if (cameraStatus.status !== 'granted') {
              alert('Sorry, we need camera permissions to make this work!');
            }
          }
        })();
      }, []);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.canceled) {
          setImage(result);
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
          Edit Salon Profile
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 30
        }}
      >
        <Image
          source={image}
          style={{
            width: 150,
            height: 150,
            marginTop: 50,
            alignSelf: "center",
            borderRadius: 150,
          }}
        ></Image>
        <View
          style={{
            marginTop: 165,
            marginLeft: -40,
            backgroundColor: "rgba(0,0,0,0.2)",
            padding: 5,
            height: "auto",
            borderRadius: 50,
          }}
        >
          <Ionicons
            name="camera-outline"
            size={25}
            color="white"
            onPress={pickImage}
          />
        </View>
      </View>

      <KeyboardAvoidingView behavior="height">
        <ScrollView
          style={{
            alignSelf: "center",
          }}
        >
          <TextInputArea
            name="Salon Name"
            value="Name of Salon"
            editable={true}
            isSecure={false}
            placeholder={""}
          />
          <TextInputArea
            name="Mobile Number"
            value="+9412589632"
            editable={true}
            isSecure={false}
            placeholder={""}
          />
          <TextInputArea
            name="Targeting Gender"
            value="All"
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