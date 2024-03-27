import React from "react";
import { View ,StyleSheet,Text,TextInput,TouchableOpacity} from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { globaleStyles } from "../Component/globaleStyles";
import { useNavigation } from "@react-navigation/native";

export function Page02Content({topic}){
    const navigation = useNavigation();
    const [selected, setSelected] = React.useState("");
    const [name, setName] = React.useState("");
    const [contactNumber, setContactNumber] = React.useState("");
  
  const data = [
      {key:'1', value:'Male'},
      {key:'2', value:'Female'},
     ];
      // Function to handle continue button press
     const handleContinue = () => {
        let errors = [];  // Array to hold validation errors
    
        if (!name) errors.push("Please enter your name.");
        if (!selected) errors.push("Please select your gender.");
        if (!contactNumber) errors.push("Please enter your contact number.");
    
        if (errors.length > 0) {
          alert(errors.join("\n")); // Display a combined alert with all errors
          return;
        }
    
        // Proceed with navigation or other actions here
        navigation.navigate("Page03");
      };
    
    return(
        <View style={[globaleStyles.back,{marginTop:280}]}>
            <View style={{flex:1,justifyContent:"flex-start"}}>
            <Text style={globaleStyles.topic}>{topic}</Text>
             <TextInput style={styles.Text} placeholder='Enter Your Name'
                                            value={name}
                                            onChangeText={setName} />
              <View>
                     <SelectList
                           setSelected={(val) => setSelected(val)} 
                           data={data} 
                           save="value"
                           placeholder='choose Gender'
                           inputStyles={{ color: selected ? '#2E2528' : '#999999', 
                                          fontSize: 12}}
                           boxStyles={{borderRadius:10,
                                       height:48,
                                       width:"100%",
                                       marginTop:30,
                                       padding:15,
                                       borderWidth:1,
                                       borderColor:"black",}}
                           search={false}
                           closeicon={false}
                           dropdownStyles={{borderRadius:10,
                                            borderWidth:1,
                                            borderColor:"black",
                                            shadowColor:'grey',}}
                           dropdownTextStyles={{fontSize:12}}                
                        />
                </View>
                    
                <TextInput style={styles.Text} placeholder='Contact Number' 
                                            keyboardType="numeric" 
                                            value={contactNumber}
                                            onChangeText={setContactNumber}/>
             </View>
             <View>
             <TouchableOpacity  onPress={handleContinue} >
            <View style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>);
}

export const styles= StyleSheet.create({
    Text:{
        height:48,
        width:"100%",
        marginTop:30,
        padding:10,
        borderWidth:1,
        borderRadius:10,
        fontSize:12,
      },
      button:{
        borderRadius:5,
        backgroundColor:"#844704",
        padding:15,
        width:"100%",
        height:48,
        marginBottom:14,
        
    },
    buttonText:{
        color:"white",
        textAlign:"center",
        fontSize:14,
        fontWeight:"bold",
  
    },
})