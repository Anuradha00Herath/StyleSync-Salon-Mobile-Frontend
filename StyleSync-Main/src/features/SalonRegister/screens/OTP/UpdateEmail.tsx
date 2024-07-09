import React ,{useState} from "react";
import { View, Text, TextInput, TouchableOpacity,StatusBar,ImageBackground} from 'react-native';
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import { globalStyles } from "../../components/globalstyles";
import { AppName } from "../../../staff-register/components/AppName";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {LoginStyles} from "../Login/styles";
import { Button } from "../../components/Button";
import axios from "axios";

export function UpdateEmailAddress({navigation,route }) {
    const {email,salonId} =route.params;
    const [Email, setEmail] =useState(email);
    const[newEmail , setNewEmail] =useState('');
    const [newEmailError , setNewEmailError] = useState('')
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);
    const [error , setError] =useState('');

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
        if (!newEmail) {
            setNewEmailError('*New Email field is required');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)){
            setNewEmailError('*Email Should be in correct format');
            isValid = false;
        } else {
            setNewEmailError('');
        }
        return isValid;
    };

    const handleSubmit = async () => {
        if(validateInputs()){
            try{
                setLoading(true);
                const url =
                "https://stylesync-backend-test.onrender.com/app/v1/salon/update-salon-email";
                const response = await axios.put(url, {
                email: Email,
                newEmail:newEmail,
                salonId:salonId
                });
                console.log(response.data);
                if(response.data.status === 201){
                console.log(response.data.message)
                const urlTwo =
                "https://stylesync-backend-test.onrender.com/app/v1/salon/generate-salon-otp";
                const responseTwo = await axios.put(urlTwo, {
                email: newEmail,
                salonId:salonId
                });
                console.log(responseTwo.data);
                navigation.navigate("OTP",{contactNo:null ,email:newEmail,salonId});
                }
               
            }catch (error) {
                console.log(error);
               setError("*Email is not found.Please enter the correct current email address")
            } finally {
                setLoading(false);
            }
        }
    }

    return(
    <ImageBackground source={BACKGROUND_IMAGE} style={globalStyles.background}>
          <StatusBar/>
          <AppName/>
          <View style={{height:300}}></View>
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
                                    value={Email}
                                    onChangeText={text =>setEmail(text)}
                                    //style={LoginStyles.InputText}
                                />
                            </View>
                        </View>
                        {emailError ? <Text style={LoginStyles.ErrorText}>{emailError }</Text> : null}
                        <View style={[LoginStyles.PasswordInputArea ,{justifyContent:"flex-start"},emailError? { borderColor: 'red' } : null]}>
                            <View style={{flex:1}}>
                               <TextInput
                                    placeholder="Enter Your New Email"
                                    value={newEmail}
                                    onChangeText={text =>setNewEmail(text)}
                                    //style={LoginStyles.InputText}
                                />
                            </View>
                        </View>
                        {newEmailError ? <Text style={LoginStyles.ErrorText}>{newEmailError}</Text> : null}
                        {error ? <Text style={{color: 'red',
                                                marginTop: 8,
                                                fontSize: 14,
                                                marginHorizontal:30,
                                                marginLeft:40, 
                                                alignSelf:'center',
                                                paddingLeft: 5,}}>{error }</Text> : null}
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