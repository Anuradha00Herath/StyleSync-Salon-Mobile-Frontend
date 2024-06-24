import React from "react-native";
import { StyleSheet,TouchableOpacity,Text,View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export  function Button({text,onPress1,onPress} ){
    return(
        <View style={styles.bottom}>
            <TouchableOpacity  onPress={onPress1}>
                    <View style={styles.button1}>
                        <Icon name="delete" size={20} color={"#FDFDFD"} style={styles.icon}onPress={onPress}/>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexGrow:1}} onPress={onPress} >
                    <View style={styles.button}>
                       <Text style={styles.buttonText}>{text}</Text>
                    </View>
            </TouchableOpacity>
        </View> 
    )
}
const styles =StyleSheet.create({
    button1: {
        borderRadius: 5,
        backgroundColor: "#844704",
        padding: 15,
        flexBasis: 68,
        height: 48,
        position: "relative",
        bottom: 0,
        marginRight:10,  
    },
    button: {
        flex:1,
        flexGrow:1,
        borderRadius: 5,
        backgroundColor: "#844704",
        padding: 15,
        height: 48,
        position: "relative",
        bottom: 0,    
    },
    icon:{
        height:20,
        width:20,
        textAlign:"center",
    },
    buttonText:{
        color:"white",
        textAlign:"center",
        fontSize:14,
        fontWeight:"bold",
    },
     bottom:{
        
        flex:1,
         flexDirection:'row',
         justifyContent:'flex-start',     
    }
})