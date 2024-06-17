import React, { useState,useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign';
import { globaleStyles } from '../Component/globaleStyles';
import { SeparatorLineWithText } from "../Component/line";
import { FlatButton } from '../Component/FlatButton';
import { StackNavigationProp } from "@react-navigation/stack";
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

export function BusinessHoursContent({ staffId }) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [businessHours, setBusinessHours] = useState([]);
  const [loading,setLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const fetchBusinessHours = async () => {
        try {
          setLoading(true);
          const url = "https://stylesync-backend-test.onrender.com/app/v1/time/get-opendays-and-hours";
          const response = await axios.get(url, { params: { staffId } });
          const sortedBusinessHours = response.data.data.sort((a, b) => {
            const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            return daysOfWeek.indexOf(a.dayName) - daysOfWeek.indexOf(b.dayName);
          });
          setBusinessHours(sortedBusinessHours);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBusinessHours();
  
      // Clean up function
      return () => {
        // Any cleanup code goes here
      };
    }, [staffId])
  );

  return (
    <View style={[globaleStyles.back, { marginTop: 200 }]}>
      <Text style={globaleStyles.topic}> Your business Hours</Text>
      <Text style={globaleStyles.Stopic}>When can client book with you</Text>
      {businessHours.map(day => (
        <View key={day.dayName}>
          <Day
            text={day.dayName}
            isOpen={day.isOpen}
            openHour={day.openHour}
            closeHour={day.closeHour}
            onPress={() => navigation.navigate("SetTime", {staffId:staffId, name: day.dayName, isOpen: day.isOpen, openHour: day.openHour,closeHour:day.closeHour })}
          />
          <SeparatorLineWithText lineColor={"gray"} />
        </View>
      ))}
      <FlatButton text='Continue' onPress={() => navigation.navigate("SelectServices",{staffId})} />
    </View>
  );
}

function Day({ text, isOpen, openHour, closeHour, onPress }) {
  
  const formattedTime = isOpen ? `${openHour} - ${closeHour}` : 'Closed';

  return (
    <View>
      <View style={{flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',}}>
        <View style={{flex: 1}}>
          <Text style={{ fontSize: 14,}}>{text}</Text>
        </View>
      <View style={{flex: 1}}>
          <Text style={{ fontSize: 14,}}>{formattedTime}</Text>
        </View>
        <View>
        <Icon name="right" size={20} color={"gray"}  onPress={onPress} />
        </View>
      </View>
    </View>
  );
}

