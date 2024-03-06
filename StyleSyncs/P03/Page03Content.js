import {View,StyleSheet,Text,StatusBar} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/AntDesign';
import { globaleStyles } from '../Component/globaleStyles';
import { SeparatorLineWithText} from "../Component/line";
import { FlatButton } from '../Component/FlatButton';

export function Page03Content(){
    const navigation = useNavigation();
    return(
        <View style={[globaleStyles.back,{marginTop:200}]}>
            <Text style={globaleStyles.topic}> Your business Hours</Text>
            <Text style={globaleStyles.Stopic}>When can client book with you</Text>
            <Day text='Monday' onPress={() =>navigation.navigate("SetTime",{name:"Monday"})}/>
            <SeparatorLineWithText lineColor={"gray"}/>
            <Day text='Tuesday'onPress={() =>navigation.navigate("SetTime",{name:"Tuesday"})}/>
            <SeparatorLineWithText lineColor={"gray"}/>
            <Day text='Wednesday' onPress={() =>navigation.navigate("SetTime",{name:"Wednesday"})}/>
            <SeparatorLineWithText lineColor={"gray"}/>
            <Day text='Thursday'onPress={() =>navigation.navigate("SetTime",{name:"Thursday"})}/>
            <SeparatorLineWithText lineColor={"gray"}/>
            <Day text='Friday'onPress={() =>navigation.navigate("SetTime",{name:"Friday"})}/>
            <SeparatorLineWithText lineColor={"gray"}/>
            <Day text='Saturday'onPress={() =>navigation.navigate("SetTime",{name:"Saturday"})}/>
            <SeparatorLineWithText lineColor={"gray"}/>
            <Day text='sunday'onPress={() =>navigation.navigate("SetTime",{name:"Sunday"})}/>
            <FlatButton text='Continue' onPress={() =>navigation.navigate("Page04")} /> 
        </View>
    );
}
export  function Day({text,onPress}) {
    return (
      <View>
        <StatusBar/>
        <View style={styles.container}>
        <View style={styles.new}>
           <Text style={styles.text}>{text}</Text>
           </View>
           <View style={styles.new}>
           <Text style={styles.text}>time</Text>
           </View>
           <Icon name="right" size={20} color={"gray"} style={styles.icon} onPress={onPress}/>
        </View>
      </View>
    );
}

export const styles= StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      text: {
       fontSize:14,
      },
      icon:{
        marginLeft: 20, 
      },
      new:{
        flex:1,
      } 
})