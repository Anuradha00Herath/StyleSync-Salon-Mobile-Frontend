import React ,{useState,useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity,StatusBar,ImageBackground} from 'react-native';
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import { globalStyles } from "../../components/globalstyles";
import { AppName } from "../../../staff-register/components/AppName";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {useFocusEffect , useNavigation } from "@react-navigation/native";
import {LoginStyles} from "./styles";
import { Icon } from '@rneui/themed'
import { Button } from "../../components/Button";

import axios from "axios";

export function Login({ navigation }) {

    const [isPasswordVisible, setPasswordVisible] = useState(false); 
    const [email, setEmail] =useState("");
    const [password , setPassword]=useState("");
    const [emailError, setEmailError] = useState('');
    const [errorPassword , setErrorPassword] =useState("")
    const [loading, setLoading] = useState(false)
    const [validation ,setValidation] =useState("")

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const validateInputs = () => {
        let isValid = true;

        if (!email) {
            setEmailError('*Email field is required');
            isValid = false;
        } else {
            setEmailError('');
        }
        if (!password) {
            setErrorPassword('*pasword field is required');
            isValid = false;
        } else {
            setErrorPassword('');
        }
        return isValid;
    };

    const handleSubmit = async() => {
        if (validateInputs()) {
            try {
                setLoading(true);
                const url = "https://stylesync-backend-test.onrender.com/app/v1/salon/salon-login";
                const response = await axios.get(url, {params:{email,password}});
                console.log(response.data.count._count.staffID);
                const result = response.data;
                const id = result.data[0].id;
                const staffCount = result.count._count.staffID;
                const { message, status } = result;
                if (status == 201) {
                  console.log("Success: ", id);
                  if(staffCount>0){
                    navigation.navigate("Main", { salonId:id })
                  }
                  else{
                    navigation.navigate("SelectTeam", {id});
                  } 
                } else if (status === 500) {
                  console.log("Failed", message);
                } else {
                  console.log("Something went wrong!");
                }
              } catch (error) {
                console.log(error);
                setValidation("*Incorrect username or password. please try again.")
                setPassword("")
                
              }
            }
        }
        useFocusEffect(
            React.useCallback(()=>{
              setEmail("");
              setPassword("");
              setEmailError("");
              setErrorPassword("");
              setValidation("");
            },[])
          );
   return(
      <ImageBackground source={BACKGROUND_IMAGE} style={globalStyles.background}>
         <StatusBar/>
         <AppName/>
         <View style={{
            height:200
         }}>

         </View>
         <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1}} keyboardShouldPersistTaps={'never'}>
                <View style={[globalStyles.container,]}>
                    <View>
                        <Text
                            style={globalStyles.mainTopic}>
                            {'Login\nWelcome back!'}
                        </Text>   
                    </View>
                    <View style={{ marginTop: 35 }}>
                        {validation? <Text style={LoginStyles.ErrorText}>{validation}</Text> : null}
                        <View style={[LoginStyles.PasswordInputArea ,{justifyContent:"flex-start"},emailError? { borderColor: 'red' } : null]}>
                            <View style={{flex:1}}>
                               <TextInput
                                    placeholder="Enter Your Username / Email"
                                    value={email}
                                    onChangeText={text =>setEmail(text)}
                                    //style={LoginStyles.InputText}
                                />
                            </View>
                        </View>
                        {emailError ? <Text style={LoginStyles.ErrorText}>{emailError }</Text> : null}
                    </View>
                    <View style={[LoginStyles.PasswordInputArea ,{justifyContent:"center"},errorPassword? { borderColor: 'red' } : null]}>
                        <View style={{ flex: 1}}>
                            <TextInput
                                value={password}
                                placeholder="Enter Your Password"
                                secureTextEntry={!isPasswordVisible}
                                onChangeText={text =>setPassword(text)}
                                //style={LoginStyles.InputText}
                            />
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={togglePasswordVisibility}>
                            <View  style={LoginStyles.Icon}>
                                <Icon
                                    size={20}
                                    color={'black'}
                                    name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                                    type="ionicon"
                                />
                            </View>
                        </TouchableOpacity>
                     </View>
                     {errorPassword? <Text style={LoginStyles.ErrorText}>{errorPassword }</Text> : null}
                     <BottomFeild navigation={navigation} onPress={handleSubmit}/>
                </View>
         </KeyboardAwareScrollView>
      </ImageBackground>

   );
}

function BottomFeild({navigation ,onPress}) {
   
    return (
        <View>
            <View>
                <TouchableOpacity>
                    <Text
                        style={LoginStyles.FogotP}>
                        {'Forgot Password?'}
                    </Text>
                </TouchableOpacity>
                <Button text={'Login'} onPress={onPress} />

            </View>
            <View style={LoginStyles.BottomSection}>
                <Text
                    style={LoginStyles.BottomText}>
                    {"Don't have an account ?    "}
                </Text>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate("CreateAccount")}>
                    <Text
                        style={LoginStyles.BottomSignUp}>
                        {'Signup'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}