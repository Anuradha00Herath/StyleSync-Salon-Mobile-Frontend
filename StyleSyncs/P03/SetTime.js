import {  ImageBackground, View , StatusBar,Text} from "react-native";
import { AppName } from "../Component/AppName";
import { globaleStyles,imageStyles} from "../Component/globaleStyles";
import { FlatButton } from "../Component/FlatButton";
import { useNavigation } from "@react-navigation/native";
import { Switch1} from "../Component/Switch" ;
import { TimePicker } from "../Component/TimePicker";
import { AddMore } from "../Component/AddMore";

const backImg=require("../assets/StyleSync.jpeg")

export default function SetTime({route}) {
    const{name}=route.params;
    const navigation = useNavigation();
    return (
    
        <ImageBackground source={backImg} style={imageStyles.container}>
        <StatusBar style={imageStyles.Bar} />
           <AppName/>
           <View style={[globaleStyles.back,{marginTop:200}]}>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
           <Text style={globaleStyles.topic}>{name}</Text>
           <Switch1/>
           </View>
           
           <Text style={globaleStyles.Stopic}>Set your business hours here. 
                                             Head to opening calender from settings 
                                             menu if you need to adjust hours for a single day.
            </Text>
            <TimePicker/>
            <Text style={{color:"#000000",fontSize:14,fontWeight:400}}>Breaks</Text>
            <AddMore onPress={() =>navigation.navigate("SetBreakTime",{name:name})}/>
              <FlatButton text='Ok' onPress={() =>navigation.goBack()} />
           </View>
        </ImageBackground>
  
    );
}