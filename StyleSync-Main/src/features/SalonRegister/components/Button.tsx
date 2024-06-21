import React from "react-native";
import { StyleSheet,TouchableOpacity,Text,View } from "react-native";

export  function Button({text,onPress} ){
    return(
        
            <TouchableOpacity onPress={onPress} >
                <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
                </View>
            </TouchableOpacity>
       
    )
}
const styles =StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: "#844704",
        padding: 15,
        width: "75%",
        height: 48,
        //position: "relative",
        //bottom: 0
        marginTop: 20,
        marginRight:'auto',
        marginLeft:'auto',
    },
    buttonText:{
        color:"#FFFFFF",
        textAlign:"center",
        fontSize:14,
        fontWeight:"bold",
    },
    // TouchableOpacity styles
    //  bottom:{
    //      position: "absolute",
    //     bottom: 14,
    //     width:"100%",
    //     marginHorizontal:24,
    // }    
})