import React from "react";
import { StyleSheet,TouchableOpacity,Text,View} from "react-native";
//import Icon from '../../node_modules/@expo/vector-icons/AntDesign';
import Icon from '@expo/vector-icons/AntDesign';

export  function AddMore({onPress} ){
    return(
      
        
        <TouchableOpacity  onPress={onPress} >
            <View style={styles.button}>
                <Icon name="plus" size={22} color={"#000000"} style={styles.icon} />
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
        //backgroundColor:"#FDFDFD",
        borderBlockColor:"#FDFDFD",
        width:"100%",
        height:48,
        marginHorizontal:15,
        marginTop:10

    },
    buttonText:{
        color:"#000000",
        fontSize:16,
        marginHorizontal:5
    },
    icon:{
        height:20,
        width:20,

    }
   
    
})