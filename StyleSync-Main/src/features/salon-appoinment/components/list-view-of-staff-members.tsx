import Ionicons from "@expo/vector-icons/Ionicons";
import React ,{ useState} from "react";
import { Image, View, Text,TouchableOpacity,Alert } from "react-native";
import axios from "axios";

export function StaffMember({name,isOpen ,openHour,closeHour,Id,salonId,onPress,fetchDetails,image}) {
  const [loading, setLoading] = useState(false);

  const OpenTime = () => {
    return isOpen ? `${openHour} - ${closeHour}` : "Closed";
  }
  console.log(image)

  const handleDelete = async () => {
    try{
      setLoading(true);
      const url = "https://stylesync-backend-test.onrender.com/app/v1/SalonProfile/delete_staff_members";
      const response = await axios.delete(url, { params: {salonId, staffId:Id} });
      const result = response.data;
      const {status, message} = result;
      if (status === 200){
        console.log("Success", message);
        fetchDetails();
      }
    }catch{
      console.log("error");
    }finally{
      setLoading(false);
    }
  }
  const Delete = () =>{
    Alert.alert('Delete' ,"Are you sure you want to delete this staff member?  ",
      [{
        text:"Cancel",
        onPress:() =>console.log("Cancel"),
      },
    {
      text:"Yes",
      onPress:handleDelete,
    }]
    )
  }
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between",
          width: "95%",
          alignSelf: "center",
          borderBottomWidth: 1,
          borderColor: "grey",
          borderRadius: 10,
          padding: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
          
            source={image === null
              ? require("../../../assets/images.jpg")
              : { uri:image }}
            style={{
              width: 40,
              height: 40,
              alignSelf: "center",
              borderRadius: 100,
            }}
          ></Image>
          <View
            style={{
              marginLeft: 10,
              paddingVertical: 5,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
             {name}
            </Text>
            <View
              style={{
                marginTop: 1,
                flexDirection: "row",
              }}
            >
              <Ionicons style={{
                padding: 3
              }} name="time-outline" size={14} color="black" />
              <Text
                style={{
                  fontSize: 14,
                }}
              >
             {OpenTime()}
              </Text>
              
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row",}}>
          <TouchableOpacity onPress={Delete}>
        <Ionicons
          style={{
            paddingVertical: 17,
            paddingRight:10
          }}
          name="trash"
          size={20}
          color="#000000"
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
         <Ionicons
          style={{
            paddingVertical: 17,
          }}
          name="chevron-forward"
          size={20}
          color="#000000"
        />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
