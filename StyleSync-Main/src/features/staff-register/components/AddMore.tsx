import React from "react";
import { StyleSheet,TouchableOpacity,Text,View} from "react-native";
//import Icon from '../../node_modules/@expo/vector-icons/AntDesign';
import Icon from '@expo/vector-icons/AntDesign';

export  function AddMore({onPress} ){
    return(
      
        
        <TouchableOpacity  onPress={onPress} >
            <View style={styles.button}>
                <Icon name="plus" size={20} color={"#808080"} style={styles.icon} />
                <Text style={styles.buttonText}>Add More</Text>
            </View>
        </TouchableOpacity>
       
    )
}
const styles =StyleSheet.create({
    button:{
        flexDirection:"row",
        justifyContent:'flex-start',
        borderRadius:5,
        backgroundColor:"#FDFDFD",
        borderBlockColor:"#FDFDFD",
        width:"100%",
        height:48,
        
    },
    buttonText:{
        color:"#808080",
        fontSize:14,
    },
    icon:{
        height:20,
        width:20,

    }
   
    
})