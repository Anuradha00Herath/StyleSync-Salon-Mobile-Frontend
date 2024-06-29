import React ,{useState} from "react";
import { View,StyleSheet,Text,TextInput} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SeparatorLineWithText } from "../../components/line";
import { Button}  from "../../components/Button";
import { globaleStyles } from "../../components/globaleStyles";

export  function AddMoreContant(){
   
    const navigation = useNavigation();
    const [serviceName, setServiceName] = useState( "" );
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const handleSave = () => {
        if (!serviceName || !duration || !price) {
          alert("Please fill in all fields."); 
          return; 
        }
        navigation.goBack(); 
      };
    return(
       
        <View style={[globaleStyles.back,{marginTop:300,height:"65%" }]}>
            <View>
                <Text style={globaleStyles.topic}>Pricing/Duration - {serviceName}</Text> 
                <Text style={globaleStyles.Stopic}>When can client book with you</Text>

                <Text style={styles.text1}>Service Name</Text>
                <TextInput style={styles.input} value={serviceName} 
                                                onChangeText={text => setServiceName(text)} 
                                                placeholder="Enter Service Type"/>
                <SeparatorLineWithText/>
           
                <Text style={styles.text1}>Service duration</Text>
                <TextInput style={styles.input} value={duration} 
                                                onChangeText={text => setDuration(text)} 
                                                placeholder="Enter Duration"/>
                <SeparatorLineWithText/>
            
                <Text style={styles.text1}>Price</Text>
                <TextInput style={styles.input} value={price} 
                                                onChangeText={text => setPrice(text)} 
                                                placeholder="Enter Price" 
                                                keyboardType="decimal-pad"/>
                <SeparatorLineWithText/>
            </View>

            <View style={styles.buttonContainer}>
                <Button text={"Ok"}  onPress={handleSave} onPress1={() =>navigation.goBack()} text1={"Cancel"} />
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