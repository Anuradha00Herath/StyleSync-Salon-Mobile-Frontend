import {  StyleSheet} from 'react-native';

export const imageStyles= StyleSheet.create({
    container:{
        flex:1,
        resizeMode:"cover"
    },
    Bar:{
        backgroundColor:"#FDFDFD" ,
       // barStyle:"dark-content",
       },
});
export const globaleStyles=StyleSheet.create({
    topic:{
        color:"black",
        fontSize:16,
        fontWeight:"bold",
        textAlign:"left",
    },
    Stopic:{
        fontSize:12,
        marginBottom:15,
        color:"gray"
       },
    back:{
        flex:1,
        backgroundColor: "#FDFDFD", 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        // marginTop:280,
        width:'100%',
        paddingTop:26,
        paddingHorizontal:24,
        position:"relative"
    },
})