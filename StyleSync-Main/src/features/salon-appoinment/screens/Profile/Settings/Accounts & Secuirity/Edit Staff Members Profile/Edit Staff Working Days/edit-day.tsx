import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StatusBar,
  Text,
  Switch,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TimePicker } from "../../../../../../components/TimePicker";
import { SeparatorLineWithText } from '../../../../../../components/line';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function SetTime({navigation ,route, onPress}) {
    const { staffId, name, isOpen, openHour, closeHour } = route.params;
    const [isEnabled, setIsEnabled] = useState(isOpen);
    const [openTime, setOpenTime] = useState(openHour);
    const [closeTime, setCloseTime] = useState(closeHour);
    const [breaks, setBreaks] = useState([]);
    const [loading, setLoading] = useState(false);
    
  
    useFocusEffect(
      React.useCallback(() => {
        fetchBreaksTimes();
      }, [openHour])
    );
    const fetchBreaksTimes = async () => {
      try {
        setLoading(true);
        const url =
          "https://stylesync-backend-test.onrender.com/app/v1/time/get-breaks";
        const response = await axios.get(url, {
          params: { staffId: staffId, dayName: name },
        });
        setBreaks(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleOpenTimeValue = (value: any) => {
      setOpenTime(value);
    };
    const handleCloseTimeValue = (value: any) => {
      setCloseTime(value);
    };
  
    const toggleSwitch = () => {
      setIsEnabled((isEnabled: any) => !isEnabled);
    };
    const getText = () => (isEnabled ? "Open" : "Closed");
   
  
    const onHandleOk = async () => {
      try {
        setLoading(true);
        const url =
          "https://stylesync-backend-test.onrender.com/app/v1/time/update-open-close-hours";
        const response = await axios.put(url, {
          staffId: staffId,
          dayName: name,
          openHour: openTime,
          closeHour: closeTime,
          isOpen: isEnabled,
        });
        const result = response.data;
        const { message, status } = result;
        if (status === 201) {
          navigation.navigate("EditWorkingDays", { Id:staffId });
          console.log("Success", message);
        } else {
          console.log("Error", message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    const handleDelete = async (breakStart: any) => {
      try {
        setLoading(true);
        const url =
          "https://stylesync-backend-test.onrender.com/app/v1/time/delete-break";
        const response = await axios.delete(url, {
          params: { staffId: staffId, dayName: name, breakStart },
        });
        const result = response.data;
        const { message, status } = result;
        if (status === 200) {
          fetchBreaksTimes();
          console.log("Success", message);
        } else {
          console.log("Error", message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    function Breaks({ breakStart, breakEnd }) {
      const formattedTime = `${breakStart} - ${breakEnd}`;
      function onHandleDelete() {
        return handleDelete(breakStart);
      }
      return (
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text>{formattedTime}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <View style={{ width: 30, alignItems: "center" }}>
                <Ionicons
                  name="trash"
                  size={20}
                  color={"#71797E"}
                  style={{ width: 20, height: 20 }}
                  onPress={onHandleDelete}
                />
              </View>
              <View style={{ width: 40, alignItems: "center" }}>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={"#71797E"}
                  style={{ width: 20, height: 20 }}
                  onPress={() =>
                    navigation.navigate("SetBreakTime", {
                      staffId: staffId,
                      dayName: name,
                      isOpen: isOpen,
                      openHour: openHour,
                      closeHour: closeHour,
                      type: "Update",
                    })
                  }
                />
              </View>
            </View>
          </View>
          <SeparatorLineWithText lineColor={"gray"} />
        </View>
      );
    }
       
    return(
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
         Edit Open-Close Hours
        </Text>
      </View>

      <Image
        source={require("../../../../../../../../assets/staff.png")}
        style={{
          width: 250,
          height: 150,
          marginTop: 50,
          alignSelf: "center",
        }}
      ></Image>
      <View style={{marginHorizontal:25}}>
       <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
          <View>
            <Text 
            style={{
                color:"black",
                fontSize:16,
                fontWeight:"bold",
                textAlign:"left"
            }}>
             {name}
            </Text>
          </View>
          <View
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <View>
              <Switch
                trackColor={{ false: "gray", true: "black" }}
                thumbColor={isEnabled ? "white" : "white"}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{
                  transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }],
                  height: 25,
                }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 12, color: "gray" }}>{getText()}</Text>
            </View>
          </View>
        </View>

        {isEnabled && (
          <>
           
            <TimePicker
              onOpenTime={openHour}
              onCloseTime={closeHour}
              onHandleOpenTimeValue={handleOpenTimeValue}
              onHandleCloseTimeValue={handleCloseTimeValue}
            />
            <ScrollView>
            <Text style={{ color: "#000000", fontSize: 14, fontWeight: "400" }}>
              Breaks
            </Text>
            {breaks.map((b) => (
              <View key={b.breakStart}>
                <Breaks
                  breakEnd={b.breakEnd}
                  breakStart={b.breakStart}
                />
              </View>

            ))}
            {/* <AddMore
              onPress={() =>
                navigation.navigate("SetBreakTime", {
                  staffId: staffId,
                  dayName: name,
                  isOpen: isOpen,
                  openHour: openHour,
                  closeHour: closeHour,
                  type: "New",
                })
              }
            /> */}
            <TouchableOpacity  onPress={() =>
                navigation.navigate("SetBreakTime", {
                  staffId: staffId,
                  dayName: name,
                  isOpen: isOpen,
                  openHour: openHour,
                  closeHour: closeHour,
                  type: "New",
                })
              } >
            <View style={{  flexDirection:"row",
                            justifyContent:'flex-start',
                            borderRadius:5,
                            borderBlockColor:"#FDFDFD",
                            width:"100%",
                            height:48,}}>
                <Ionicons name="add" size={20} color={"gray"} style={{height:20,
                                                                   width:20,}} />
                <Text style={{color:"gray",
                              fontSize:14,}}>Add More</Text>
            </View>
            
        </TouchableOpacity>
            </ScrollView>
            </>
        )}
            
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
                <TouchableOpacity onPress={() => navigation.goBack()}>
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
                <TouchableOpacity onPress={onHandleOk }>
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
       </View>
    );

    
}