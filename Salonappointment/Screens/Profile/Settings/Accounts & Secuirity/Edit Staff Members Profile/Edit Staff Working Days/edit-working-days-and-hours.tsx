import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { WorkingDaysAndHours } from "../../../../../../Components/working-days-and-hours";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function EditWorkingDays({ navigation }) {
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
          Staff Members
        </Text>
      </View>

      <Image
        source={require("../../../../../../assets/staff.png")}
        style={{
          width: 250,
          height: 150,
          marginTop: 50,
          alignSelf: "center",
        }}
      ></Image>
      <View
      style={{
        marginTop: 30,
      }}
      >
      <TouchableOpacity>
        <WorkingDaysAndHours name="Monday" time="12.00 - 13.00" />
      </TouchableOpacity>
      <TouchableOpacity>
        <WorkingDaysAndHours name="Tuesday" time="12.00 - 13.00" />
      </TouchableOpacity>
      <TouchableOpacity>
        <WorkingDaysAndHours name="Wednesday" time="12.00 - 13.00" />
      </TouchableOpacity>
      <TouchableOpacity>
        <WorkingDaysAndHours name="Thursday" time="12.00 - 13.00" />
      </TouchableOpacity>
      <TouchableOpacity>
        <WorkingDaysAndHours name="Friday" time="12.00 - 13.00" />
      </TouchableOpacity>
      <TouchableOpacity>
        <WorkingDaysAndHours name="Satuday" time="Closed" />
      </TouchableOpacity>
      <TouchableOpacity>
        <WorkingDaysAndHours name="Sunday" time="Closed" />
      </TouchableOpacity>

      </View>
    </View>
  );
}
