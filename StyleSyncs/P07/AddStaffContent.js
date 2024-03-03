import React ,{useState} from "react";
import { View,StyleSheet,Text,TextInput} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SeparatorLineWithText } from "../Component/line";
import { Button } from "../Component/Button";
import { globaleStyles } from "../Component/globaleStyles";

export  function AddStaffContant(){
   
    const navigation = useNavigation();
    const [Name, setName] = useState( "" );
    const [Service, setService] = useState("");
    const [Gender, setGender] = useState("");
    
    return(
       
        <View style={[globaleStyles.back,{marginTop:300}]}>
            <View>
                <Text style={globaleStyles.topic}>{Name}</Text> 
                <Text style={globaleStyles.Stopic}>When can client book with you</Text>

                <Text style={styles.text1}> Name</Text>
                <TextInput style={styles.input} value={Name} 
                                                onChangeText={text => setName(text)} 
                                                placeholder="Enter Name"/>
                <SeparatorLineWithText lineColor={"gray"}/>
           
                <Text style={styles.text1}>Service type</Text>
                <TextInput style={styles.input} value={Service} 
                                                onChangeText={text => setService(text)} 
                                                placeholder="Select Service Type"/>
                <SeparatorLineWithText lineColor={"gray"}/>
            
                <Text style={styles.text1}>Gender</Text>
                <TextInput style={styles.input} value={Gender} 
                                                onChangeText={text => setGender(text)} 
                                                placeholder="Select Gender"/>
                <SeparatorLineWithText lineColor={"gray"}/>
            </View>

            <View style={styles.buttonContainer}>
                <Button text={"OK"}  onPress={() =>navigation.goBack()} onPress1={() =>navigation.goBack()} />
            </View>
                
        </View>
        
    );
}

export const styles= StyleSheet.create({
    input:{
        height:30,
        width:"100%",
        marginTop:1,
        padding:5,
        fontSize:14,
        fontWeight:"300",
        // borderWidth:1,
      },
      text1:{
          fontSize:14,
          fontWeight:"400"
      },
      buttonContainer:{
        marginBottom:14,
      }
})