import * as React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Calendar } from 'react-native-calendars';

export default function SettingsScreen({ navigation }) {
  return (
      <View style={{ flex: 1 }}>
        <Calendar
          onDayPress={(day) => {
            console.log('selected day', day);
          }}
          monthFormat={'yyyy MMMM'}
          hideArrows={false}
          hideExtraDays={true}
        />
      </View>
    );
}
