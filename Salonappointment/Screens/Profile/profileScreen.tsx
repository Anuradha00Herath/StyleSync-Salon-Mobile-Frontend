import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons.js";

const { width, height } = Dimensions.get("screen");

export default function ProfileScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#2E2E2E" />
      <ImageBackground
        source={require("../../assets/background3.png")}
        style={{
          width: width,
          height: height,
        }}
      >
        <Text
          style={{
            color: "#FDFDFD",
            textAlign: "center",
            top: StatusBar.currentHeight + 20,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          StyleSync
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 68,
          }}
        >
          <Image
            source={require("../../assets/images.jpg")}
            style={{
              width: 107,
              height: 107,
              backgroundColor: "#FDFDFD",
              borderRadius: 100,
              alignSelf: "center",
            }}
          ></Image>
        </View>

        <Text
          style={{
            color: "#FDFDFD",
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 27,
            alignSelf: "center",
          }}
        >
          Salon Name
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: "#FDFDFD",
            fontWeight: "bold",
            marginTop: 7,
            alignSelf: "center",
          }}
        >
          No. 123, Salon Street, Salon.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <Image
            source={require("../../assets/images.jpg")}
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#FDFDFD",
              borderRadius: 100,
              marginTop: 29,
              alignSelf: "center",
              borderWidth: 1,
              borderColor: "black",
            }}
          ></Image>
          <Image
            source={require("../../assets/images.jpg")}
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#FDFDFD",
              borderRadius: 100,
              marginTop: 29,
              alignSelf: "center",
              borderWidth: 1,
              borderColor: "black",
              marginLeft: -15,
            }}
          ></Image>
          <Image
            source={require("../../assets/images.jpg")}
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#FDFDFD",
              borderRadius: 100,
              marginTop: 29,
              alignSelf: "center",
              borderWidth: 1,
              borderColor: "black",
              marginLeft: -15,
            }}
          ></Image>
          <Image
            source={require("../../assets/images.jpg")}
            style={{
              width: 30,
              height: 30,
              backgroundColor: "#FDFDFD",
              borderRadius: 100,
              marginTop: 29,
              alignSelf: "center",
              borderWidth: 1,
              borderColor: "black",
              marginLeft: 15,
            }}
          ></Image>
        </View>
        <View
          style={{
            width: "100%",
            height: "47%",
            backgroundColor: "white",
            alignSelf: "center",
            position: "absolute",
            bottom: 49,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              height: "auto",
              marginTop: -40,
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "rgba(10, 10, 10, 0.1)",
              shadowRadius: 10,
              shadowColor: "black",
            }}
          >
            <View
              style={{
                width: "30%",
                height: 60,
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 5,
                  fontSize: 15,
                }}
              >
                50
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                Number of
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                Customers
              </Text>
            </View>
            <View
              style={{
                width: "0.5%",
                height: 40,
                backgroundColor: "rgba(10, 10, 10, 0.1)",
              }}
            ></View>
            <View
              style={{
                width: "30%",
                height: 60,
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 5,
                  fontSize: 15,
                }}
              >
                40
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                Number of
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                Likes
              </Text>
            </View>
            <View
              style={{
                width: "0.5%",
                height: 40,
                backgroundColor: "rgba(10, 10, 10, 0.1)",
              }}
            ></View>
            <View
              style={{
                width: "30%",
                height: 60,
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 5,
                  fontSize: 15,
                }}
              >
                5
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                Number of
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 10,
                }}
              >
                Staff
              </Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "rgba(10, 10, 10, 0.1)",
              width: "90%",
              height: 60,
              marginTop: 30,
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
              <Image
                source={require("../../assets/images.jpg")}
                style={{
                  width: 47,
                  height: 47,
                  backgroundColor: "#FDFDFD",
                  borderRadius: 5,
                  alignSelf: "center",
                  borderWidth: 1,
                  borderColor: "rgba(10, 10, 10, 0.1)",
                  marginLeft: 5,
                }}
              ></Image>
              <View
                style={{
                  marginLeft: 10,
                  marginTop: 8,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Salon Name
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  <Image
                    source={require("../../assets/duration.png")}
                    style={{
                      width: 15,
                      height: 15,
                      backgroundColor: "#FDFDFD",
                      borderRadius: 5,
                      alignSelf: "center",
                      borderWidth: 1,
                      borderColor: "rgba(10, 10, 10, 0.1)",
                      marginLeft: 5,
                    }}
                  ></Image>{" "}
                  09:00 - 19:00
                </Text>
              </View>
            </View>

            <Switch
              style={{}}
              trackColor={{ false: "#767577", true: "#2e2528" }}
              thumbColor={true ? "#8B6C58" : "#8B6C58"}
              ios_backgroundColor="#3e3e3e"
              //onValueChange={toggleSwitch}
              value={true}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "rgba(10, 10, 10, 0.1)",
              width: "90%",
              height: 60,
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
              <Image
                source={require("../../assets/images.jpg")}
                style={{
                  width: 47,
                  height: 47,
                  backgroundColor: "#FDFDFD",
                  borderRadius: 100,
                  alignSelf: "center",
                  borderWidth: 1,
                  borderColor: "rgba(10, 10, 10, 0.1)",
                  marginLeft: 5,
                }}
              ></Image>
              <View
                style={{
                  marginLeft: 10,
                  marginTop: 8,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Staff Name
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                  }}
                >
                  <Image
                    source={require("../../assets/duration.png")}
                    style={{
                      width: 15,
                      height: 15,
                      backgroundColor: "#FDFDFD",
                      borderRadius: 5,
                      alignSelf: "center",
                      borderWidth: 1,
                      borderColor: "rgba(10, 10, 10, 0.1)",
                      marginLeft: 5,
                    }}
                  ></Image>{" "}
                  09:00 - 19:00
                </Text>
              </View>
            </View>

            <Switch
              style={{}}
              trackColor={{ false: "#767577", true: "#2e2528" }}
              thumbColor={true ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              //onValueChange={toggleSwitch}
              value={false}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SettingScreen")}
          >
            <View
              style={{
                borderWidth: 1,
                borderColor: "rgba(10, 10, 10, 0.1)",
                width: "90%",
                height: 60,
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
                    name="settings"
                    size={18}
                    color="black"
                  />

                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 17,
                      textAlignVertical: "center",
                      marginLeft: 10,
                    }}
                  >
                    Settings
                  </Text>
                </View>
              </View>
              <Ionicons
                style={{
                  marginTop: 15,
                }}
                name="chevron-forward-outline"
                size={25}
                color="black"
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("StatScreen")}>
            <View
              style={{
                borderWidth: 1,
                borderColor: "rgba(10, 10, 10, 0.1)",
                width: "90%",
                height: 60,
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
                    name="stats-chart"
                    size={18}
                    color="black"
                  />
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 17,
                      textAlignVertical: "center",
                      marginLeft: 10,
                    }}
                  >
                    Style Stats Show
                  </Text>
                </View>
              </View>
              <Ionicons
                style={{
                  marginTop: 15,
                }}
                name="chevron-forward-outline"
                size={25}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
