import {  StyleSheet, View} from 'react-native';


export const ContainerStyles = StyleSheet.create({
    mainView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },
    subView1:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"flex-start"
    },
    subView2:{
         width: 30, 
         alignItems: "center"
    },
    imageView:{
        width:30,
        height:30,
        backgroundColor:"#D9D9D9",
        borderRadius:5
    },
    text:{
        marginLeft:7
    }
})