import React ,{useState} from "react";
import { View,StyleSheet,Text,TextInput} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SeparatorLineWithText } from "../../components/line";
import { Button}  from "../../components/Button";
import { globaleStyles } from "../../components/globaleStyles";
import axios from "axios";

export  function AddMoreContant({serviceType,staffId}){
   
    const navigation = useNavigation();
    const [serviceName, setServiceName] = useState( "" );
    const [duration, setDuration] = useState("");
    const [price, setPrice] = useState("");
    const[serviceError , setServiceError] =useState("")
    const[durationError , setDurationError] =useState("");
    const[priceError , setPriceError]=useState("");

    const validateInputs = () => {
        let isValid = true;
    
        if (!serviceName) {
          setServiceError("*service is required");
          isValid = false;
        } else {
          setServiceError("");
        }
        if (!duration) {
          setDurationError("*Duration is required");
          isValid = false;
        } else {
          setDurationError("");
        }
        if (!price) {
          setPriceError("*Price is required");
          isValid = false;
        } else {
          setPriceError("");
        }
        return isValid;
      };
       const handleSave = async() => {
        if (validateInputs()) {
          try {
            const url =
              "https://stylesync-backend-test.onrender.com/app/v1/service/staff-new-service-create";
              console.log('Request Parameters:', { 
                staffId:staffId,
                name:serviceName,
                serviceType:serviceType,
                price:parseInt(price),
                duration:duration
              });
            const response = await axios.post(url, {
              staffId:staffId,
              name:serviceName,
              serviceType:serviceType,
              price:parseInt(price),
              duration:duration
            });
            const result = response.data;
            const { status, message, data } = result;
            if (status === 201) {
              console.log("success", message, data);
            } else {
              console.log("error", message);
            }
          } catch (error) {
            console.log(error);
          }
          navigation.goBack(); 
        }
        else {
            console.log("error");
          }
      };
    return(
       
        <View style={[globaleStyles.back,{marginTop:300,height:"65%" }]}>
            <View>
                <Text style={globaleStyles.topic}>Pricing/Duration - {serviceName}</Text> 
                <Text style={globaleStyles.Stopic}>When can client book with you</Text>

                <Text style={styles.text1}>Service Name</Text>
                <TextInput style={styles.input} value={serviceName} 
                                                onChangeText={text => setServiceName(text)} 
                                                placeholder={serviceError? serviceError :"Enter Service Type"}
                                                placeholderTextColor={serviceError? "#E32222" :null}
                                                //placeholder="Enter Service Type"
                                                />
                <SeparatorLineWithText/>
           
                <Text style={styles.text1}>Service duration</Text>
                <TextInput style={styles.input} value={duration} 
                                                onChangeText={text => setDuration(text)} 
                                                placeholder={durationError? durationError:"Enter Duration"}
                                                placeholderTextColor={durationError? "#E32222" :null}
                                                //placeholder="Enter Duration"
                                                />
                <SeparatorLineWithText/>
            
                <Text style={styles.text1}>Price</Text>
                <TextInput style={styles.input} value={price} 
                                                onChangeText={text => setPrice(text)} 
                                                placeholder={priceError? durationError:"Enter Price"}
                                                placeholderTextColor={priceError? "#E32222" :null}
                                                //placeholder="Enter Price" 
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