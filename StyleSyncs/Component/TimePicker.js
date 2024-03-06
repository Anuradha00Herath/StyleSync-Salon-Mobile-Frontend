
import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity,StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import { IncreaseHours,
  IncreaseMinutes,
  DecreaseHours,
  DecreaseMinutes} from "./get-time-from-backend"

export function TimePicker(){

  const [hours, setHours] = useState({
    startBeforeHour:9,
    startMiddleHour:10,
    startAfterHour:11,
    endBeforeHour:18,
    endMiddleHour:19,
    endAfterHour:20,
    startBeforeMin:59,
    startMiddleMin:0,
    startAfterMin:1,
    endBeforeMin:59,
    endMiddleMin:0,
    endAfterMin:1
  });

  const IncreaseHourPress = ()=>{
    const { startBeforeHour, startMiddleHour, startAfterHour } = hours;
    const newHours = IncreaseHours(startBeforeHour, startMiddleHour, startAfterHour);
    setHours({
        ...hours,
        startBeforeHour: newHours[0],
        startMiddleHour: newHours[1],
        startAfterHour: newHours[2]
    });
    console.log("in function increment:", startBeforeHour, startMiddleHour, startAfterHour);
    }

    const IncreaseMinutesPress = ()=>{
      const { startBeforeMin, startMiddleMin, startAfterMin } = hours;
      const newMin = IncreaseMinutes(startBeforeMin, startMiddleMin, startAfterMin);
      setHours({
          ...hours,
          startBeforeMin: newMin[0],
          startMiddleMin: newMin[1],
          startAfterMin: newMin[2]
      });
      console.log("in function increment:", startBeforeMin, startMiddleMin, startAfterMin);
      }

    const IncreaseHourPressTwo = ()=>{
      const { endBeforeHour, endMiddleHour, endAfterHour } = hours;
      const newSecondHour = IncreaseHours(endBeforeHour,endMiddleHour,endAfterHour);
      setHours({
        ...hours,
        endBeforeHour: newSecondHour[0],
        endMiddleHour: newSecondHour[1],
        endAfterHour: newSecondHour[2]
      })
      //console.log("in function increment:", startBeforeHour, startMiddleHour, startAfterHour);
      }

      const IncreaseMinutesPressTwo = ()=>{
        const { endBeforeMin, endMiddleMin, endAfterMin } = hours;
        const newMin = IncreaseMinutes(endBeforeMin, endMiddleMin, endAfterMin);
        setHours({
            ...hours,
            endBeforeMin: newMin[0],
            endMiddleMin: newMin[1],
            endAfterMin: newMin[2]
        });
        console.log("in function increment:", endBeforeMin, endMiddleMin, endAfterMin);
        }

        const DecreaseHourPress = ()=>{
          const { startBeforeHour, startMiddleHour, startAfterHour } = hours;
          const newHours = DecreaseHours(startBeforeHour, startMiddleHour, startAfterHour);
          setHours({
              ...hours,
              startBeforeHour: newHours[0],
              startMiddleHour: newHours[1],
              startAfterHour: newHours[2]
          });
          console.log("in function increment:", startBeforeHour, startMiddleHour, startAfterHour);
          }

          const DecreaseMinutesPress = ()=>{
            const { startBeforeMin, startMiddleMin, startAfterMin } = hours;
            const newMin = DecreaseMinutes(startBeforeMin, startMiddleMin, startAfterMin);
            setHours({
                ...hours,
                startBeforeMin: newMin[0],
                startMiddleMin: newMin[1],
                startAfterMin: newMin[2]
            });
            console.log("in function increment:", startBeforeMin, startMiddleMin, startAfterMin);
            }

            const DecreaseHourPressTwo = ()=>{
              const { endBeforeHour, endMiddleHour, endAfterHour } = hours;
              const newSecondHour = DecreaseHours(endBeforeHour,endMiddleHour,endAfterHour);
              setHours({
                ...hours,
                endBeforeHour: newSecondHour[0],
                endMiddleHour: newSecondHour[1],
                endAfterHour: newSecondHour[2]
              })
              //console.log("in function increment:", startBeforeHour, startMiddleHour, startAfterHour);
              }
              const DecreaseMinutesPressTwo = ()=>{
                const { endBeforeMin, endMiddleMin, endAfterMin } = hours;
                const newMin = DecreaseMinutes(endBeforeMin, endMiddleMin, endAfterMin);
                setHours({
                    ...hours,
                    endBeforeMin: newMin[0],
                    endMiddleMin: newMin[1],
                    endAfterMin: newMin[2]
                });
              }
    
  return (
    <View       //main view
      style={{
        width: 300,
        height: 187,
        alignSelf: "center",
        marginTop: 28,
        // borderWidth: 1,
        // borderColor: "black",
      }}
    >
      <StatusBar/>
        <View style={{
            flexDirection: 'row'
        }}>
        <TouchableOpacity onPress={IncreaseHourPress}>
        {/* <Image
            source={upArrow}
            style={{
                marginLeft:45,
                marginTop:10
            }}
        ></Image> */}
        <Icon name="up"
              size={20}
              color="#2E2528"
              style={{marginTop:10,marginLeft:45}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={IncreaseMinutesPress}>
        {/* <Image
            source={upArrow}
            style={{
                marginLeft:20,
                marginTop:10
            }}
        ></Image> */}
        <Icon name="up"
              size={20}
              color="#2E2528"
              style={{marginTop:10,marginLeft:25}}/>
    </TouchableOpacity>
    {/* startBeforeHour = IncreaseHours().beforeHour; */}
    <TouchableOpacity onPress={IncreaseHourPressTwo}>
        {/* <Image
            source={upArrow}
            style={{
                marginLeft:95,
                marginTop:10
            }}
        ></Image> */}
        <Icon name="up"
              size={20}
              color="#2E2528"
              style={{marginTop:10,marginLeft:90}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={IncreaseMinutesPressTwo}>
        {/* <Image
            source={upArrow}
            style={{
                marginLeft:20,
                marginTop:10
            }}
        ></Image> */}
        <Icon name="up"
              size={20}
              color="#2E2528"
              style={{marginTop:10,marginLeft:20}}/>
    </TouchableOpacity>
        </View>
      <View     //before store time
        style={{
            marginTop:0,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View   //start before time
          style={{
            width: 130,
            height: 33,
            marginLeft:50
          }}
        >
          <Text
            style={{
              fontSize: 16
            }}
          >
            {hours.startBeforeHour}    :   {hours.startBeforeMin}
          </Text>
        </View>
        <View       //end before time
          style={{
            width: 130,
            height: 33,
            marginLeft: 18
          }}
        >
          <Text
            style={{
              fontSize: 16
            }}
          >
            {hours.endBeforeHour}   :   {hours.endBeforeMin}
          </Text>
        </View>
      </View>
      <View     //middle time
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View       //middle start time
          style={{
            width: 130,
            height: 33,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#2E2528",
            alignItems: "center",
            flexDirection: "row",
            margin: 9,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              marginHorizontal: 32,
            }}
          >
            {hours.startMiddleHour}    :  {hours.startMiddleMin}
          </Text>
        </View>
        <View       //middle end time
          style={{
            width: 130,
            height: 33,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#2E2528",
            alignItems: "center",
            flexDirection: "row",
            margin: 9,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              marginLeft: 40,
            }}
          >
            {hours.endMiddleHour}   :   {hours.endMiddleMin}
          </Text>
        </View>
      </View>
      <View     //after time
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View       //after start time
          style={{
            width: 130,
            height: 33,
            alignItems: "center",
            flexDirection: "row",
            margin: 9,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              marginLeft: 34
            }}
          >
            {hours.startAfterHour}    :   {hours.startAfterMin}
          </Text>
        </View>
        <View       //end after time
          style={{
            width: 130,
            height: 33,
            alignItems: "center",
            flexDirection: "row",
            margin: 9,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              marginLeft: 42
            }}
          >
            {hours.endAfterHour}   :   {hours.endAfterMin}
          </Text>
        </View>
      </View>
      <View style={{
            flexDirection: 'row'
        }}>
        <TouchableOpacity onPress={DecreaseHourPress}>
        {/* <Image
            source={downArrow}
            style={{
                marginLeft:45,
                marginTop:-15
            }}
        ></Image> */}
        <Icon name="down"
              size={20}
              color="#2E2528"
              style={{marginTop:-10,marginLeft:45}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={DecreaseMinutesPress} >
        {/* <Image
            source={downArrow}
            style={{
                marginLeft:20,
                marginTop:-15
            }}
        ></Image> */}
        <Icon name="down"
              size={20}
              color="#2E2528"
              style={{marginTop:-10,marginLeft:25}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={DecreaseHourPressTwo}>
        {/* <Image
            source={downArrow}
            style={{
                marginLeft:95,
                marginTop:-15
            }}
        ></Image> */}
        <Icon name="down"
              size={20}
              color="#2E2528"
              style={{marginTop:-10,marginLeft:90}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={DecreaseMinutesPressTwo}>
        {/* <Image
            source={downArrow}
            style={{
                marginLeft:20,
                marginTop:-15
            }}
        ></Image> */}
        <Icon name="down"
              size={20}
              color="#2E2528"
              style={{marginTop:-10,marginLeft:20}}/>
    </TouchableOpacity>
        </View>
    </View>
  );
};


