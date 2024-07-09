import React ,{useState} from "react";
import { View, Text, TextInput, TouchableOpacity,StatusBar,ImageBackground} from 'react-native';
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import { globalStyles } from "../../components/globalstyles";
import { AppName } from "../../../staff-register/components/AppName";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {LoginStyles} from "./styles";
import { Button } from "../../components/Button";
import axios from "axios";

export function ForgotPassword({navigation}) {
    const [email, setEmail] =useState("");
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);

    const validateInputs = () => {
        let isValid = true;
        if (!email) {
            setEmailError('*Email field is required');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setEmailError('*Email Should be in correct format');
            isValid = false;
        } else {
            setEmailError('');
        }
        return isValid;
    };

    const handleSubmit = async () => {
        if(validateInputs()){
            try{
                setLoading(true);
                const urlTwo =
                "https://stylesync-backend-test.onrender.com/app/v1/salon/generate-salon-forgotPassword-otp";
                const responseTwo = await axios.put(urlTwo, {
                email: email,
                });
                console.log(responseTwo.data);
                if(responseTwo.data.status == 404){
                    console.log(responseTwo.data.message)
                    setEmailError("*Email is not found")
                }else if(responseTwo.data.status === 200){
                    console.log(responseTwo.data.message)
                navigation.navigate("ChangePassword",{Email:email});
                }else{
                    setEmailError("*Something went Wrong")
                }
            }catch (error) {
                console.log(error);
                setEmailError("*Email is not found")
            } finally {
                setLoading(false);
            }
        }
    }

    return(
    <ImageBackground source={BACKGROUND_IMAGE} style={globalStyles.background}>
          <StatusBar/>
          <AppName/>
          <View style={{height:350}}></View>
          <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1}} keyboardShouldPersistTaps={'never'}>
                <View style={[globalStyles.container,]}>
                    <View>
                    <Text
                        style={globalStyles.mainTopic}>
                        {'Forgot Password'}
                    </Text>
                    <Text
                        style={globalStyles.subTopic}>
                        {'Enter your email address'}
                    </Text>
                    <View style={{ marginTop: 35 }}>
                        
                        <View style={[LoginStyles.PasswordInputArea ,{justifyContent:"flex-start"},emailError? { borderColor: 'red' } : null]}>
                            <View style={{flex:1}}>
                               <TextInput
                                    placeholder="Enter Your Email"
                                    value={email}
                                    onChangeText={text =>setEmail(text)}
                                    //style={LoginStyles.InputText}
                                />
                            </View>
                        </View>
                        {emailError ? <Text style={LoginStyles.ErrorText}>{emailError }</Text> : null}
                    </View>
                      <Button text={'Submit'} onPress={handleSubmit} />
                      <View style={{  flexDirection: 'row',
                                      justifyContent: 'center',}}>
                        <Text
                            style={{flex: 2,
                                    fontSize: 15,
                                    color: '#2E2528',
                                    fontWeight: 'normal', // Set to bold
                                    marginTop: 12,
                                    textAlign: 'right',
                                    justifyContent: 'flex-end',}}>
                            {'Already have an account?    '}
                        </Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={()=>navigation.navigate("Login")}>
                            <Text
                                style={{ fontSize: 15,
                                        color: '#844704',
                                        fontWeight: 'normal', // Set to bold
                                        marginTop: 12,
                                        textAlign: 'left',}}>
                                {'Login'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    
                </View>
          </KeyboardAwareScrollView>
      

    </ImageBackground>
    )
}