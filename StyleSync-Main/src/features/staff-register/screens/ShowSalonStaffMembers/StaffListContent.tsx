import React ,{useState}from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert
} from "react-native";
import { globaleStyles } from "../../components/globaleStyles";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/AntDesign";
import { SeparatorLineWithText } from "../../components/line";
import { ContainerStyles } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { AddMore } from "../../components/AddMore";
import { FlatButton } from "../../components/FlatButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";

export function StaffContent({ staffName, salonId ,fetchServiceName }) {
  const navigation = useNavigation<any>();
  const [loading, setLoading] = useState(false);
  // Flatten the array of arrays into a single array of objects
  const flattenedStaff = staffName.flatMap((array) => array);
  

     const handleDelete = async (staffId:any) => {
      try{
        setLoading(true);
        const url = "https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/delete_staff_members";
        const response = await axios.delete(url, { params: {salonId, staffId} });
        const result = response.data;
        const {status, message} = result;
        if (status === 200){
          console.log("Success", message);
          fetchServiceName();
        }
      }catch{
        console.log("error");
      }finally{
        setLoading(false);
      }
    }
    const Delete = (staffId:any) =>{
      Alert.alert('Delete' ,"Are you sure you want to delete this staff member? ",
        [{
          text:"Cancel",
          onPress:() =>console.log("Cancel"),
        },
      {
        text:"Ok",
        onPress:() => handleDelete(staffId),
      }]
      )
    }

  return (
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
        
        <Text style={globaleStyles.topic}>Your Staff</Text>
        <Text style={globaleStyles.Stopic}>When can clients book with you</Text>
        <View style={{ justifyContent: "flex-start", height:"77%" }}>
          <FlatList
            data={flattenedStaff}
            renderItem={({ item }) => (
              <StaffComponent
                name={item.name}
                image={item.image}
                handleDelete={() =>Delete(item.id)}
              />
            )}
            ListFooterComponent={() => (
              <View style={{ alignItems: "flex-start", marginBottom: 20 }}>
                <AddMore
                  onPress={() =>
                    navigation.navigate("PersanalInformation", {
                      topic: "Staff personal Information",
                      id:salonId
                    })
                  }
                />
              </View>
            )}
          />
        </View>
      </View>      
      <FlatButton
        text="Continue"
        onPress={() => navigation.navigate("Main", { salonId:salonId })}
      />
    </View>
  );
}

export function StaffComponent({ name,handleDelete,image }) {
  //console.log(name);
  return (
    <View>
      <View style={ContainerStyles.mainView}>
        <View style={ContainerStyles.subView1}>
        {/* <View style={ContainerStyles.imageView}></View> */}
        <Image
                source={image === null
                  ? require("../../../../assets/images.jpg")
                  : { uri:image}}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#FDFDFD",
                  borderRadius: 100,
                  alignSelf: "center",
                  borderWidth: 1,
                  borderColor: "rgba(10, 10, 10, 0.1)",
                  marginLeft: 5,
                }}
              ></Image>
          <View style={ContainerStyles.text}>
            <Text>{name}</Text>
          </View>
        </View>

        <View style={ContainerStyles.subView2}>
          <TouchableOpacity onPress={handleDelete}>
            <Ionicons
              style={{
                marginTop: 5,
              }}
              name="trash-outline"
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      <SeparatorLineWithText />
    </View>
  );
}
