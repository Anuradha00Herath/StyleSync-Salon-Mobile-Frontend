import React from "react-native";
import { StyleSheet,TouchableOpacity,Text,View } from "react-native";

export  function FlatButton({text,onPress} ){
    return(
        <TouchableOpacity style={styles.bottom} onPress={onPress} >
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles =StyleSheet.create({
    button: {
        borderRadius: 5,
        backgroundColor: "#844704",
        padding: 15,
        width: "100%",
        height: 48,
        position: "relative",
        bottom: 0
    },
    buttonText:{
        color:"#FFFFFF",
        textAlign:"center",
        fontSize:14,
        fontWeight:"bold",
    },
     bottom:{
         position: "absolute",
        bottom: 14,
        width:"100%",
        marginHorizontal:24,
    }    
})