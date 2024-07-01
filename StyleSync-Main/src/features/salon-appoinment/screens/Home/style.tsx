import {  StyleSheet} from 'react-native';
import { Dimensions} from "react-native";

const { width, height } = Dimensions.get("screen");

export const HomeStyle = StyleSheet.create({
    //coman
    mainView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundI:{
        width: width,
        height: height,
    },
    salonName:{
        color: "#FDFDFD",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    calenderView:{
        position: "absolute",
        alignSelf: "center",
        marginTop: 82,
    },
    //uniq
    container:{
        backgroundColor: "#f1f1f1",
        width: "100%",
        height: "70%",
        bottom: 45,
        position: "absolute",
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    upperRow:{
        height: 40,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    topicText:{
        marginTop: 6,
        marginLeft: 13,
        fontSize: 14,
        fontWeight: "bold",
        color: "#2E2528"
    },
    rightText:{
        marginTop: 6,
        marginRight: 13,
        fontSize: 14,
    },
    timeText:{
        fontWeight: "bold",
        color: "#2E2528"
    }
   
});

