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

export const CustomerStyle = StyleSheet.create({
    //comman
    mainView:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    //uniq
    container:{
        backgroundColor: "#FDFDFD",
        width: "100%",
        height: "80%",
        bottom: 0,
        paddingBottom: "auto",
        position: "absolute",
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 10,
    },
    upperView:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    backIcon:{
        marginTop: 10,
        marginLeft: 10,
    },
    staffText:{
        alignSelf: "center",
        fontSize: 14,
        marginRight: 10,
        fontWeight: "bold",
    },
    downView:{
        marginLeft: 31,
        marginTop: 24,
    },
    CImage:{
        height: 100,
        width: 100,
        borderWidth: 1,
        borderColor: "#2E2528",
        borderRadius: 10,
    },
    CNameText:{
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 12,
    },
    CNumberText:{
        fontSize: 12,
    },
    line:{
        borderTopWidth: 1,
        height: 0,
        width: "90%",
        alignSelf: "center",
        marginTop: 12,
        borderColor: "#EFEFEF"
    },
    TopicText:{
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 12,
        marginLeft: 31,
    },
    NPView:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignSelf: "center",
        marginTop: 12
    },
    DTView:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        alignSelf: "center",
        marginTop: 12,
    },
    HistortMView:{
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "90%",
        alignSelf: "center",
        marginTop: 12, 
    },
    HistoryText:{
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 12,
        marginLeft: 31,
    },
    HView1:{
         flexDirection: "row", 
         width:"50%"
    },
    HServiceName:{
        marginLeft: 10
    },
    HDTView:{
        flexDirection: "row", 
        flexGrow:1,
        justifyContent: "space-between",
    },
    AttachmentText:{
        fontSize: 14,
              fontWeight: "bold",
              marginTop: 12,
              marginLeft: 31,
    }
})