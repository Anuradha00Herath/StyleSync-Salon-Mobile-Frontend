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
} from "react-native";
import Calendar from "../../Components/calenderInHome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AppointmentSet } from "../../Components/appointmentSet";
import mockAppointments from "./GetDataFromBackend/AppointmentDetails";
import { useNavigation } from "@react-navigation/native";
import { StaffView } from "../../Components/mobile-salon-profile-staff-view";

const { width, height } = Dimensions.get("screen");

export default function HomeScreen() {
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
            width: "100%",
            height: "70%",
            backgroundColor: "white",
            alignSelf: "center",
            position: "absolute",
            bottom: 49,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images.jpg")}
            style={{
              width: 150,
              height: 150,
              backgroundColor: "#FDFDFD",
              borderRadius: 100,
              marginTop: -75,
              borderColor: 'rgba(10, 10, 10, 0.1)',
              borderWidth: 3,
            }}
          ></Image>
          <Text
            style={{
              color: "#2E2528",
              fontSize: 18,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Salon Name
          </Text>
          <View
            style={{
              backgroundColor: "rgba(10, 10, 10, 0.1)",
              width: "90%",
              height: 1,
              marginTop: 10,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 60,
              marginTop: 10,
              justifyContent: "space-around",
              alignItems: "center",
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
                  textAlign: "center",
                }}
              >
                Number of
              </Text>
              <Text>Customers</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 5,
                }}
              >
                50
              </Text>
            </View>
            <View
              style={{ width: "0.5%", height: 40, backgroundColor: "rgba(10, 10, 10, 0.1)" }}
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
                  textAlign: "center",
                }}
              >
                Number of
              </Text>
              <Text>Likes</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 5,
                }}
              >
                40
              </Text>
            </View>
            <View
              style={{ width: "0.5%", height: 40, backgroundColor: "rgba(10, 10, 10, 0.1)" }}
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
                  textAlign: "center",
                }}
              >
                Number of
              </Text>
              <Text>Staff</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 5,
                }}
              >
                5
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "rgba(10, 10, 10, 0.1)",
              width: "90%",
              height: 1,
              marginTop: 10,
            }}
          ></View>

          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-start",
              marginLeft: 20,
              marginTop: 20
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17
              }}
            >
              Addresss -{" "}
            </Text>
            <Text style={{
              fontSize: 17
            }}>No. 123, Salon Street, Salon.</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-start",
              marginLeft: 20,
              marginTop: 10
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17
              }}
            >
              Contact Number -{" "}
            </Text>
            <Text style={{
              fontSize: 17
            }}>07* - *******</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-start",
              marginLeft: 20,
              marginTop: 10
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17
              }}
            >
              City -{" "}
            </Text>
            <Text style={{
              fontSize: 17
            }}>cityName</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-start",
              marginLeft: 20,
              marginTop: 10
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17
              }}
            >
              ... See your profile info
            </Text>
          </View>
          <TouchableOpacity
          style={{
            height: 40,
            width:'90%',
            backgroundColor: 'rgba(139, 108, 88, 0.4)',
            marginTop: 10,
            borderRadius: 10,
            alignItems:'center',
          }}>
            <Text style={{
              padding: 10,
              fontSize: 15,
              color: 'rgba(139, 108, 88, 0.8)'
            }}>Edit salon details</Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "rgba(10, 10, 10, 0.1)",
              width: "90%",
              height: 1,
              marginTop: 10,
            }}
          ></View>
          <View style={{
            width: '90%',
            alignItems: 'flex-start',
            flexDirection: 'row',
            marginTop:10
          }}>
          <StaffView/>
          <StaffView/>
          </View>
          <TouchableOpacity
          style={{
            height: 40,
            width:'90%',
            backgroundColor: 'rgba(139, 108, 88, 0.4)',
            marginTop: 10,
            borderRadius: 10,
            alignItems:'center',
          }}>
            <Text style={{
              padding: 10,
              fontSize: 15,
              color: 'rgba(139, 108, 88, 1)'
            }}>Edit staff details</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
