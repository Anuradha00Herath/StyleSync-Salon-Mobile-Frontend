import { StyleSheet } from 'react-native';
import { Dimensions} from "react-native";

const { width, height } = Dimensions.get("screen");

export const globalStyle = StyleSheet.create({
      mainTopic:{
        fontSize: 24,
        color: '#2E2528',
        fontWeight: 'bold', // Set to bold
        marginTop: 30,
        textAlign: 'center'
      },
      subTopic:{
        fontSize: 14,
        color: '#2E2528',
        marginTop: 5,
        textAlign: 'center',
      },
      container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between', // Align items with space between
    },
     BackgroundImageStyle:{
        flex:1,
        height:height,
        width:width
    },
    Bottomcontainer: {
        flexGrow:1,
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    line:{
        borderBottomColor: '#2E2528',
        borderBottomWidth: 1,
        justifyContent:'center',
        flex:4,
        alignItems:'flex-end',
        marginHorizontal:15,
        paddingVertical:0,
    },
    text:{
        fontSize: 15,
        textAlign: 'center',
        //fontFamily: 'Poppins',
        color: '#2E2528',
        fontWeight: 'medium',
    },
    bottomView:{
        flexDirection: 'row', 
        marginTop: 5,
        alignItems:"center"
    }

})    