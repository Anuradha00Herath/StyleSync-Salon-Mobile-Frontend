import * as React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <LinearGradient colors={['rgba(0,0,0,0.9)', 'transparent']} start={[0, 0]}>
        <View style={{
            height: 150,
            width: 330,
            borderWidth:2,
            borderColor: "black", 
            overflow: "hidden",
        }}>

        </View>    
        </LinearGradient>
        
      
    </View>
  );
}
