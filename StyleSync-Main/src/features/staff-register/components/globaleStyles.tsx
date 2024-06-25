import {  StyleSheet} from 'react-native';
import { Dimensions} from "react-native";

const { width, height } = Dimensions.get("screen");


export const imageStyles = StyleSheet.create({
    container:{
        flex:1,
        height:height,
        width:width
    },
    Bar:{
        backgroundColor:"#FDFDFD" ,
      // barStyle:"dark-content",
       },
});
export const globaleStyles = StyleSheet.create({
    topic:{
        color:"black",
        fontSize:16,
        fontWeight:"bold",
        textAlign:"left"
    },
    Stopic:{
        fontSize:12,
        marginBottom:15,
        color:"gray"
       },
    back:{
        flexGrow:1,
        // marginTop:280,
        width:'100%',
        paddingTop:26,
        paddingHorizontal:24,
        backgroundColor:"#FDFDFD"
        //position:"relative"
    },
})