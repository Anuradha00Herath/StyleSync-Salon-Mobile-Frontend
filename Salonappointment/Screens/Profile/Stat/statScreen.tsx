import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Dimensions,
} from "react-native";
import { PieChart, BarChart } from "react-native-gifted-charts";
import Ionicons from "@expo/vector-icons/Ionicons.js";

const { width, height } = Dimensions.get("screen");

export default function StatScreen({navigation}) {
  const pieData = [
    { value: 10, color: "#177AD5" },
    { value: 4, color: "#F5A623" },
    { value: 2, color: "lightgray" },
  ];
  const barData = [
    { value: 25, label: "M" },
    { value: 50, label: "T", frontColor: "#177AD5" },
    { value: 74, label: "W", frontColor: "#177AD5" },
    { value: 32, label: "T" },
    { value: 60, label: "F", frontColor: "#177AD5" },
    { value: 25, label: "S" },
    { value: 30, label: "S" },
  ];
  var curr = new Date(); // get current date
  var first = curr.getDate() - curr.getDay();
  first = first - 6;
  var firstdayOb = new Date(curr.setDate(first));
  var options = { day: "numeric", month: "short" };
  var firstday = firstdayOb.toLocaleDateString("en-GB", Object(options));
  var firstdayTemp = new Date(firstdayOb);
  var lastdayOb = new Date(firstdayTemp.setDate(firstdayTemp.getDate() + 6));
  var lastday = lastdayOb.toLocaleDateString("en-GB", Object(options));

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#2E2E2E" />
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
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
            size={25}
            color="black"
            onPress={()=>navigation.goBack()}/>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Statistics
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 10,
            marginTop: 15,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Weekly Report
          </Text>
          <Text
            style={{
              fontSize: 15,
            }}
          >
            {firstday}-{lastday}
          </Text>
        </View>
        <View
          style={{
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            45 Appointments
          </Text>
          <Text
            style={{
              fontSize: 10,
            }}
          >
            Daily Average Appointments
          </Text>
          <View
            style={{
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            <BarChart
              barWidth={23}
              noOfSections={3}
              barBorderRadius={4}
              frontColor="lightgray"
              data={barData}
              yAxisThickness={0}
              xAxisThickness={0}
            />
          </View>
        </View>
        <View
          style={{
            marginLeft: 10,
            marginTop: 15,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Today Report
          </Text>
          <View
            style={{
              marginTop: 20,
              alignSelf: "center",
            }}
          >
            <PieChart
              donut
              radius={80}
              innerRadius={50}
              data={pieData}
              centerLabelComponent={() => {
                return (
                  <View>
                    <Text style={{ fontSize: 20, textAlign: "center" }}>
                      16
                    </Text>
                    <Text style={{ fontSize: 10, textAlign: "center" }}>
                      Appointments
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            marginLeft: 25,
            marginRight: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Ionicons name="ellipse" size={20} color="#177AD5" />
              <Text
                style={{
                  fontSize: 15,
                  textAlignVertical: "center",
                  marginLeft: 10,
                }}
              >
                Paul
              </Text>
            </View>
            <Text
              style={{
                fontSize: 15,
                textAlignVertical: "center",
                marginLeft: 10,
              }}
            >
              16
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Ionicons name="ellipse" size={20} color="#F5A623" />
              <Text
                style={{
                  fontSize: 15,
                  textAlignVertical: "center",
                  marginLeft: 10,
                }}
              >
                Martin
              </Text>
            </View>
            <Text
              style={{
                fontSize: 15,
                textAlignVertical: "center",
                marginLeft: 10,
              }}
            >
              4
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
