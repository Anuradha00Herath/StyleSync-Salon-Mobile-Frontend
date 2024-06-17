import React from 'react';
import { StyleSheet,Text} from "react-native";

export  function AppName() {
    return (
       <Text style={styles.Top}>StyleSync</Text>
    );
}
const styles = StyleSheet.create({
    Top:{
         color:"#FDFDFD",
         fontSize:20,
         fontWeight: "500",
         textAlign: "center"
    }, 
})