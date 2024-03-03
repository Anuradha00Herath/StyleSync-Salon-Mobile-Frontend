import React ,{useState} from "react";
import { View,StyleSheet,Text,TextInput} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SeparatorLineWithText } from "../Component/line";
import { Button } from "../Component/Button";
import { globaleStyles } from "../Component/globaleStyles";

export  function Page06Sub({ initialServiceName,initialDuration,initialPrice}){
    
    const navigation = useNavigation();
    const [serviceName, setServiceName] = useState( initialServiceName );
    const [duration, setDuration] = useState(initialDuration);
    const [price, setPrice] = useState(initialPrice);
    
    const handleSave = () => {
        if (!serviceName || !duration || !price) {
          alert("Please fill in all fields."); // Alert user about missing information
          return; // Prevent navigation back and data update if fields are empty
        }
    
        navigation.goBack(); // Go back to the previous screen (HairService)
        // Call the provided onUpdateService function to update the data (assuming it exists)
      };
    return(
       
        <View style={[globaleStyles.back,{marginTop:300}]}>
            <View>
                <Text style={globaleStyles.topic}>Pricing/Duration - {serviceName}</Text> 
                <Text style={globaleStyles.Stopic}>When can client book with you</Text>

                <Text style={styles.text1}>Service Name</Text>
                <TextInput style={styles.input} value={serviceName} 
                                                onChangeText={text => setServiceName(text)}/>
                <SeparatorLineWithText lineColor={"gray"}/>
           
                <Text style={styles.text1}>Service duration</Text>
                <TextInput style={styles.input} value={duration} 
                                                onChangeText={text => setDuration(text)}/>
                <SeparatorLineWithText lineColor={"gray"}/>
            
                <Text style={styles.text1}>Price</Text>
                <TextInput style={styles.input} value={price} 
                                                onChangeText={text => setPrice(text)} 
                                                keyboardType="decimal-pad"/>
                <SeparatorLineWithText lineColor={"gray"}/>
            </View>

            <View style={styles.buttonContainer}>
                <Button text={"OK"}  
                        onPress={handleSave} 
                        onPress1={() =>navigation.navigate("Page03")} />
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