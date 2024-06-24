import React from "react-native";
import { StyleSheet,TouchableOpacity,Text,View } from "react-native";
import Icon from '@expo/vector-icons/AntDesign';

export  function Button({text,text1,onPress1,onPress} ){
    return(
        <View style={styles.mainView}>
            <View style={styles.button1}>
                <TouchableOpacity  onPress={onPress1}>
                        <Text style={styles.buttonText}>{text1}</Text>
                </TouchableOpacity>                 
            </View>
            <View style={styles.button2}>
                 <TouchableOpacity  onPress={onPress}>
                        <Text style={styles.buttonText}>{text}</Text>
                </TouchableOpacity>  
            </View>
        </View>
    )
}
const styles =StyleSheet.create({
mainView:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
},
button1:{
    flexGrow:1,
    borderRadius: 5,
    backgroundColor: "#844704",
    padding: 15,
    flexBasis: 68,
    height: 48,
    width:"50%",
    position: "relative",
    bottom: 0,
    marginRight:5,
},
button2:{
    flexGrow:1,
    borderRadius: 5,
    backgroundColor: "#844704",
    padding: 15,
    flexBasis: 68,
    height: 48,
    width:"50%",
    position: "relative",
    bottom: 0,
    marginLeft:5
},
buttonText:{
    color:"#FFFFFF",
    textAlign:"center",
    fontSize:14,
    fontWeight:"bold",
},
     
})