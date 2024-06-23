import React from "react";
import { View, Text, TextInput } from "react-native";

export function TextInputArea({ name, value , editable, isSecure, placeholder, onChangeText }) {

  return (
    <View
    style={{
        width: "100%",
        marginTop:  10
    }}
    >
      <Text>{name}</Text>
      <View>
        <TextInput
        style={{
            borderWidth: 1,
            borderColor: "black",
            height: 50,
            width: 360,
            borderRadius: 10,
            padding: 10,
            marginTop: 8
        }}
        editable={editable} value={value} secureTextEntry={isSecure} placeholder={placeholder} onChangeText={onChangeText}></TextInput>
      </View>
    </View>
  );
}
