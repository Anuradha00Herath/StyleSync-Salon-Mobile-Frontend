import Ionicons from "@expo/vector-icons/Ionicons";
import React ,{ useState} from "react";
import { Image, View, Text,TouchableOpacity  } from "react-native";
import axios from "axios";

export function StaffMember({name,isOpen ,openHour,closeHour,Id,salonId,onPress,fetchDetails}) {
  const [loading, setLoading] = useState(false);

  const OpenTime = () => {
    return isOpen ? `${openHour} - ${closeHour}` : "Closed";
  }

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
            source={require("../../../assets/images.jpg")}
            style={{
              width: 60,
              height: 60,
              alignSelf: "center",
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
                fontSize: 18,
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
              }} name="time-outline" size={15} color="black" />
              <Text
                style={{
                  fontSize: 15,
                }}
              >
             {OpenTime()}
              </Text>
              
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row",}}>
          <TouchableOpacity onPress={handleDelete}>
        <Ionicons
          style={{
            paddingVertical: 17,
            paddingRight:10
          }}
          name="trash"
          size={25}
          color="#000000"
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
         <Ionicons
          style={{
            paddingVertical: 17,
          }}
          name="chevron-forward"
          size={25}
          color="#000000"
        />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
