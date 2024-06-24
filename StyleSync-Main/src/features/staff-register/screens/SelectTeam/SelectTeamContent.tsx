import React, { useState, useMemo } from "react";
import { View, Text, Alert } from "react-native";
import RadioGroup, {
  RadioGroup as RadioGroupType,
  RadioButtonProps,
} from "react-native-radio-buttons-group";
import { globaleStyles } from "../../components/globaleStyles";
import { FlatButton } from "../../components/FlatButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export function SelectTeamContent({ id }) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [selectedRadio, setSelectedRadio] = useState("");

  // Memoized radio buttons array
  const radioButtons = useMemo(
    () => [
      { id: "1", label: "Just me", value: "option1" },
      { id: "2", label: "Only Staff", value: "option2" },
      { id: "3", label: "Both Of Us", value: "option3" },
    ],
    []
  );

  // Function to handle navigation based on selected radio button
  const handleNavigation = () => {
    if (selectedRadio === "1" || selectedRadio === "3") {
      navigation.navigate("PersanalInformation", {
        id,
        topic: "Your persanal Information",
      });
    } else if (selectedRadio === "2") {
      navigation.navigate("PersanalInformation", {
        id,
        topic: "Staff persanal Information",
      });
    } else {
      // Alert if no option is selected
      Alert.alert("Sorry!", "Please select an option", [
        { text: "OK", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        paddingTop: 26,
        paddingHorizontal: 24,
        backgroundColor: "#FDFDFD",
        flexDirection:"column",
        justifyContent: "space-between",
        height:"100%"
      }}
    >
      <View>
        <Text style={globaleStyles.topic}>What's Your Team?</Text>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedRadio}
          selectedId={selectedRadio}
          containerStyle={{ alignItems: "flex-start" }}
        />
      </View>
      <View>
        <FlatButton text="Continue" onPress={handleNavigation} />
      </View>
    </View>
  );
}
