import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity
} from "react-native";
import { TextInputArea } from "../../../salon-appoinment/components/text-input-area-in-settings";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";

export default function AddStaffImage({ navigation ,route }) {
  const {staffId ,salonId} =  route.params;
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "android") {
        const libraryStatus =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (libraryStatus.status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }

        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        if (cameraStatus.status !== "granted") {
          alert("Sorry, we need camera permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      let newfile = {
        uri: result.assets[0].uri,
        type: `test/${result.assets[0].uri.split(".")[1]}`,
        name: `test.${result.assets[0].uri.split(".")[1]}`,
      };
      imageUpload(newfile);
    }
  };

  const imageUpload = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "StyleSync");
    data.append("cloud_name", "dtnhlsuin");

    fetch("https://api.cloudinary.com/v1_1/dtnhlsuin/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url);
        console.log(data.url);
      });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/staff/update-staff-image";
      const response = await axios.put(url, {
        salonId: salonId,
        staffId:staffId,
        image: image,
      });
      console.log(response.data);
      navigation.navigate("Staff",{salonId});
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [name, setName]       =useState("");
  const [contactNo, setContactNo] =useState("");
  const [gender, setGender]=useState("All")

  const fetchDetails = async() =>{
    try{
      setLoading(true);
      const url="https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/get_staff_member_profileDetails";
      console.log('Request parameters',
        {salonId: salonId,
         staffId:staffId
       });
      const response = await axios.get(url, {params:{salonId: salonId,staffId:staffId}});
      const addressData =response.data.data[0];
      setDetails(addressData);
      setName(addressData.staff.name);
      setContactNo(addressData.staff.staffContact[0].contactNo);
      console.log(response.data)

    }catch(error){
      console.error(error);
      
    }finally{
      setLoading(false);
    }
  };

  

  useEffect(() => {
    fetchDetails();
  }, []);

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
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Edit Staff Profile
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
          source={image === null
            ? require("../../../../assets/images.jpg")
            : { uri: image }}
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
            name="Name"
            value={name}
            editable={false}
            isSecure={false}
            placeholder={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInputArea
            name="Mobile Number"
            value={contactNo}
            editable={false}
            isSecure={false}
            placeholder={contactNo}
            onChangeText={(text) => setContactNo(text)}
          />
          <TextInputArea
            name="Targeting Gender"
            value="All"
            editable={false}
            isSecure={false}
            placeholder={"All"}
            onChangeText={(text)=> setGender(text)}
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
            <TouchableOpacity onPress={() => navigation.navigate("Staff",{salonId})}>
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
            <TouchableOpacity  onPress={handleSave}>
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