import React ,{useState} from "react";
import { View, Text, TextInput, TouchableOpacity,StatusBar,ImageBackground} from 'react-native';
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import { globalStyles } from "../../components/globalstyles";
import { AppName } from "../../../staff-register/components/AppName";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {CreateAccountStyles} from "./style";
import { Button } from "../../components/Button";
import axios from 'axios';

export function CreateAccount({ navigation }) {
    const [name, setName] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [salonNameError, setSalonNameError] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);

    const validateInputs = () => {
        let isValid = true;

        if (!name.trim()) {
            setSalonNameError('*Salon name field is required');
            isValid = false;
        } else {
            setSalonNameError('');
        }

        if (!contactNo.trim()) {
            setMobileNumberError('*Number field is required');
            isValid = false;
        } else if (!/^(\+94)[0-9]{9}$/.test(contactNo)){
            setMobileNumberError('*Number Should be in correct format');
            isValid = false;
        } else {
            setMobileNumberError('');
        }

        if (!email.trim()) {
            setEmailError('*Email field is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)){
            setEmailError('*Email Should be in correct format');
            isValid = false;
        } else {
            setEmailError('');
        }

        return isValid;
    };
   
    
    const handleSubmit = async() => {
        if (validateInputs()) {
            try{
                setLoading(true);
                const url = 'https://stylesync-backend-test.onrender.com/app/v1/salon/register-salon/step1';
                const response = await axios.post(url, { name, contactNo, email });
                const result = response.data;
                const { message, status} = result;

                if(status == 201){
                    console.log('Success: ', message);
                     navigation.navigate("OTP",{email ,number:contactNo});
                } else if (status === 400) {
                    console.log('Failed', message);
                } else {
                    console.log('Something went wrong!');
                }

            } catch (error) {
                console.log(error);
            } 
             
        }
    }

    return(
        <ImageBackground source={BACKGROUND_IMAGE} style={globalStyles.background}>
              <StatusBar/>
              <AppName/>
              <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1}} keyboardShouldPersistTaps={'never'}>
              <View style={[globalStyles.container ,{marginTop:240},]}>
              <View>
                    <Text
                        style={globalStyles.mainTopic}>
                        {'Create Account'}
                    </Text>
                    <Text
                        style={globalStyles.subTopic}>
                        {'Create account for your salon'}
                    </Text>
                    <View style={{ marginTop: 40 }}>
                    <View style={[CreateAccountStyles.TopInput, salonNameError ? { borderColor: 'red' } : null]}>
                            <TextInput
                                placeholder="Enter Salon Name"
                               // style={CreateAccountStyles.InputText}
                                value={name}
                                onChangeText={text => setName(text)}
                            />
                        </View>
                        {salonNameError ? <Text style={CreateAccountStyles.ErrorText}>{salonNameError}</Text> : null}
                        <View style={[CreateAccountStyles.OtherInputs, mobileNumberError ? { borderColor: 'red' } : null]}>
                            <TextInput
                                placeholder="Enter mobile number"
                                inputMode="tel"
                                //style={CreateAccountStyles.InputText}
                                value={contactNo}
                                onChangeText={text => setContactNo(text)}
                            />
                        </View>
                        {mobileNumberError ? <Text style={CreateAccountStyles.ErrorText}>{mobileNumberError}</Text> : null}
                        <View style={[CreateAccountStyles.OtherInputs, emailError ? { borderColor: 'red' } : null]}>
                            <TextInput
                                placeholder="Enter Email address"
                                inputMode="email"
                                //style={CreateAccountStyles.InputText}
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />
                        </View>
                        {emailError ? <Text style={CreateAccountStyles.ErrorText}>{emailError}</Text> : null}
                    </View>
                    <Button text={'Next'} onPress={handleSubmit} />
                    <View style={CreateAccountStyles.BottomSection}>
                        <Text
                            style={CreateAccountStyles.BottomText}>
                            {'Already have an account?    '}
                        </Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={()=>navigation.navigate("Login")}>
                            <Text
                                style={CreateAccountStyles.BottomLogin}>
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