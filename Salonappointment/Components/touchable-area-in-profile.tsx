import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export function TouchableArea({ name, iconName, option }) {
  return (
    <View
      style={{
        //borderWidth: 1,
        //borderColor: "rgba(10, 10, 10, 0.1)",
        width: "95%",
        height: 40,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginLeft: 10,
            flexDirection: "row",
          }}
        >
          <Ionicons
            style={{
              alignSelf: "center",
            }}
            name={iconName}
            size={20}
            color="black"
          />

          <Text
            style={{
              //fontWeight: "bold",
              fontSize: 17,
              textAlignVertical: "center",
              marginLeft: 10,
            }}
          >
            {name}
          </Text>
        </View>
      </View>
      <Option option={option} />
    </View>
  );
}

function Option({ option }) {
  if (option === "touch") {
    return (
      <Ionicons
        style={{
          marginTop: 15,
        }}
        name="chevron-forward-outline"
        size={15}
        color="black"
      />
    );
  } else if (option === "switch") {
    return (
      <Switch
        style={{}}
        trackColor={{ false: "#767577", true: "#2e2528" }}
        thumbColor={true ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        //onValueChange={toggleSwitch}
        value={false}
      />
    );
  } else {
    return (
      <Ionicons
        style={{
          marginTop: 15,
        }}
        name="information-circle-outline"
        size={17}
        color="black"
      />
    );
  }
}

export function DropdownList({ name, iconName }) {
  const [selected, setSelected] = React.useState("English");
  const data = [
    { key: "1", value: "English"},
    { key: "2", value: "Sinhala" },
  ];
  return (
    <View
      style={{
        //borderWidth: 1,
        //borderColor: "rgba(10, 10, 10, 0.1)",
        width: "95%",
        height: 40,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginLeft: 10,
            flexDirection: "row",
          }}
        >
          <Ionicons
            style={{
              alignSelf: "center",
            }}
            name={iconName}
            size={20}
            color="black"
          />

          <Text
            style={{
              //fontWeight: "bold",
              fontSize: 17,
              textAlignVertical: "center",
              marginLeft: 10,
            }}
          >
            {name}
          </Text>
        </View>
      </View>
      <View>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
          boxStyles={{borderWidth: 0, width: 120}}
          defaultOption={{ key:'1', value:'English' }}
          search={false}
          dropdownStyles={{borderColor: "#fdfdfd", marginTop: -51}} 
        />
      </View>
    </View>
  );
}
