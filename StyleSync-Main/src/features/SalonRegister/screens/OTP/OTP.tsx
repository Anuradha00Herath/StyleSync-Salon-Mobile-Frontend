import React ,{useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity,StatusBar,ImageBackground,Alert} from 'react-native';
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import { globalStyles } from "../../components/globalstyles";
import { AppName } from "../../../staff-register/components/AppName";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {ValidateNumberStyles} from "./style";
import { Button } from "../../components/Button";
import axios from 'axios';

export function OTP({ navigation,route }) {
   const {number ,email} =route.params;
   const [countdown, setCountdown] = useState(180); // 3 minutes
   const [otp ,setOtp] =useState('');
   const [otpError , setOtpError] =useState('');

   useEffect(() => {
    const interval = setInterval(() => {
        setCountdown(prevCountdown => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
    }, []);

    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;

    const handleResendOTP = () => {
        setCountdown(180); // Reset countdown to 3 minutes
        // Perform any additional actions for resending OTP if needed
    };
    

    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(text);
    };
   
   return(
        <ImageBackground source={BACKGROUND_IMAGE} style={globalStyles.background}>
            <StatusBar/>
            <AppName/>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1}} keyboardShouldPersistTaps={'never'}>
            <View style={[globalStyles.container ,{marginTop:345},]}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
                <View>
                    <Text
                        style={globalStyles.mainTopic}>
                        {'Validate Number'}
                    </Text>
                    <Text
                        style={ValidateNumberStyles.SubHeading}>
                        {'Enter the 6 digits code that we have sent in '}{number}{" "}
                        <Text style={{ fontWeight: 'bold' }}>{`${minutes}:${seconds.toString().padStart(2, '0')}`}</Text>
                    </Text>
                </View>
                <View style={ValidateNumberStyles.OTPSection}>
                    {[...Array(6)].map((_, index) => (
                    <View key={index} style={[ValidateNumberStyles.OTPView, otpError ? { borderColor: 'red' } : null]}>
                        <TextInput
                            inputMode="tel"
                            maxLength={1}
                            style={ValidateNumberStyles.Inputs}
                        />
                    </View>
                ))}
                </View>
                <View>
            <Button text={'Submit'} onPress={()=>navigation.navigate("SignUp",{email:email})} />
            <View>
                <TouchableOpacity onPress={handleResendOTP}>
                    <Text
                        style={ValidateNumberStyles.TouchbleText}>
                        {'Resend OTP'}
                    </Text>
                </TouchableOpacity>
                <View style={globalStyles .bottomView}>
                    <View style={globalStyles .line} />
                    <View style={{ flex: 1 }}>
                        <Text
                            style={globalStyles .text}>
                            or
                        </Text>
                    </View>
                    <View style={globalStyles .line} />
                </View>
                <TouchableOpacity onPress={()=>navigation}>
                    <Text
                        style={ValidateNumberStyles.TouchbleText}>
                        {'Change number'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
                
            </KeyboardAwareScrollView>

            </View>
            </KeyboardAwareScrollView>

        </ImageBackground>
    )

}