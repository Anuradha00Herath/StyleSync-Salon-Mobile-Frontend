import {  ImageBackground, View , StatusBar,Text} from "react-native";
import { AppName } from "../Component/AppName";
import { globaleStyles,imageStyles} from "../Component/globaleStyles";
import { FlatButton } from "../Component/FlatButton";
import { useNavigation } from "@react-navigation/native";
import { TimePicker } from "../Component/TimePicker";

const backImg=require("../assets/StyleSync.jpeg")

export default function SetBreakTime({route}) {
    const{name}=route.params;
    const navigation = useNavigation();
    return (
    
        <ImageBackground source={backImg} style={imageStyles.container}>
        <StatusBar style={imageStyles.Bar} />
           <AppName/>
           <View style={[globaleStyles.back,{marginTop:400}]}>
           <Text style={globaleStyles.topic}>Breaks-{name}</Text>
           
            <TimePicker/>
            
              <FlatButton text='Ok' onPress={() =>navigation.goBack()} />
           </View>
        </ImageBackground>
  
    );
}