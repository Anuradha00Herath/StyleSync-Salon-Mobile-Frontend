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
import { TextInputArea } from "../../../../../components/text-input-area-in-settings";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";

export default function EditProfile({ navigation ,route }) {
    const {Id ,salonId} =  route.params;
    const [refresh, setRefresh] = useState(false);
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [name, setName]       =useState("");
    const [contactNo, setContactNo] =useState("");
    const [error, setError] = useState("");
    const [gender, setGender]=useState("")
    const [image, setImage] = useState(null);
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

  

  const fetchDetails = async() =>{
    try{
      setLoading(true);
      const url="https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/get_staff_member_profileDetails";
      console.log('Request parameters',
        {salonId: salonId,
         staffId:Id
       });
      const response = await axios.get(url, {params:{salonId: salonId,staffId:Id}});
      const addressData =response.data.data[0];
      setDetails(addressData);
      setName(addressData.staff.name);
      setContactNo(addressData.staff.staffContact[0].contactNo);
      setGender(addressData.staff.gender)
      setImage(addressData.staff.image);
      console.log(response.data)

    }catch(error){
      console.error(error);
    }finally{
      setLoading(false);
    }
  };

  const validateInputs = () => {
    let isValid = true;

    if (!name.trim()) {
      setError("*Name field is required");
      isValid = false;
      alert("Name field is required");
    } else {
      setError("");
    }

    if (!gender.trim()) {
      setError("*Gender field is required");
      isValid = false;
      alert("Gender field is required");
    } else {
      setError("");
    }

    if (!contactNo.trim()) {
      setError("*Conatct field is required");
      isValid = false;
      alert("Conatct field is required");
    } else if (!/^(\+94)[0-9]{9}$/.test(contactNo)) {
      setError("*Number Should be in correct format");
      isValid = false;
      alert("Number Should be in correct format");
    } else {
      setError("");
    }
    return isValid;
  };

  const handleSubmit = async () => {
    if (validateInputs()){
    try {
      setLoading(true);
      const url =
        "https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/Update_staff_member_profileDetails";
      const response = await axios.put(url, {
        salonId: salonId,
        staffId:Id,
        name,
        contactNo,
        gender
      });
      const urlTwo =
      "https://stylesync-backend-test.onrender.com/app/v1/staff/update-staff-image";
    const responseTwo = await axios.put(urlTwo, {
      salonId: salonId,
      staffId:Id,
      image: image,
    });

     console.log(response.data ,responseTwo.data);
     navigation.goBack();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    }else {
      console.log({ error });
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
            ? require("../../../../../../../assets/images.jpg")
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
            editable={true}
            isSecure={false}
            placeholder={""}
            onChangeText={(text) => setName(text)}
          />
          <TextInputArea
            name="Mobile Number"
            value={contactNo}
            editable={true}
            isSecure={false}
            placeholder={""}
            onChangeText={(text) => setContactNo(text)}
          />
          <TextInputArea
            name="Targeting Gender"
            value={gender}
            editable={true}
            isSecure={false}
            placeholder={"Male/Female/Both"}
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
            <TouchableOpacity  onPress={handleSubmit}>
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