import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { TextInputArea } from "../../../../Components/text-input-area-in-settings";

export default function EditLoginDetails({ navigation }) {
  const [isEdit, setIsEdit] = useState(false);

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
          Edit Login Details
        </Text>
      </View>
      <Image
        source={require("../../../../assets/password.png")}
        style={{
          width: 150,
          height: 150,
          marginTop: 50,
          alignSelf: "center",
        }}
      ></Image>
      <KeyboardAvoidingView behavior="height">
        <ScrollView
          style={{
            alignSelf: "center",
          }}
        >
          <TextInputArea
            name="Email"
            value="abc.hsfdj.com"
            editable={false}
            isSecure={false}
            placeholder={""}
          />
          <TextInputArea
            name="Username"
            value="abc.hsfdj.com"
            editable={true}
            isSecure={false}
            placeholder={""}
          />
          <EditPassword isEdit={isEdit} setIsEdit={setIsEdit}/>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
function EditPassword({ isEdit, setIsEdit }) {
    const onPress = () => setIsEdit(false);
    const onPress2 = () => setIsEdit(true);
  if (isEdit === true) {
    return (
      <View>
        <TextInputArea
          name="Enter Current Password"
          value=""
          editable={true}
          isSecure={true}
          placeholder={"Current Password"}
        />
        <TextInputArea
          name="Enter new Password"
          value=""
          editable={true}
          isSecure={true}
          placeholder={"New Password"}
        />
        <TextInputArea
          name="Confirm new Password"
          value=""
          editable={true}
          isSecure={true}
          placeholder={"Confirm New Password"}
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
            <TouchableOpacity onPress={onPress}>
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
            <TouchableOpacity onPress={onPress}>
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
      </View>
    );
  } else if (isEdit === false) {
    return (
      <View>
        <TextInputArea
          name="Password"
          value="abc.hsfdj.com"
          editable={false}
          isSecure={true}
          placeholder={""}
        />
        <Text
          style={{
            alignSelf: "flex-end",
            fontWeight: "bold",
          }}
          onPress={onPress2}
        >
          Change Password
        </Text>
      </View>
    );
  }
}
