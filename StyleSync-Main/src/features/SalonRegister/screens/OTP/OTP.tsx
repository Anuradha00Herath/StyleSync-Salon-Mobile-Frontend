import React ,{useState, useEffect,useRef} from "react";
import { View, Text, TextInput, TouchableOpacity,StatusBar,ImageBackground,Alert} from 'react-native';
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import { globalStyles } from "../../components/globalstyles";
import { AppName } from "../../../staff-register/components/AppName";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {ValidateNumberStyles} from "./style";
import { Button } from "../../components/Button";
import axios from 'axios';

export function OTP({ navigation,route }) {
   const {contactNo ,email,salonId} =route.params;
   const [countdown, setCountdown] = useState(180); // 3 minutes
   const [otp ,setOtp] =useState(Array(6).fill(''));
   const [otpError , setOtpError] =useState('');
   const [loading, setLoading] = useState(false);
   const [resendCount, setResendCount] = useState(0);
   const inputs = useRef([]);
   

   useEffect(() => {
    const interval = setInterval(() => {
        setCountdown(prevCountdown => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
   
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            Alert.alert("Time's up!", "The 3-minute countdown has finished.",
                [{
                  text:"Cancel",
                  onPress:() =>console.log("Cancel"),
                },
              {
                text:"ResendOTP",
                onPress:() => ResendOTP(),
              }]
              )
        }
    }, [countdown]);
    useEffect(() =>{
        setCountdown(180);
    },[salonId,email])

    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;

    const handleResendOTP = () => {
        setCountdown(180); // Reset countdown to 3 minutes
        // Perform any additional actions for resending OTP if needed
    };
    

    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
        
    };

    const otpvalidation = () => {
        let isValid = true;
        if (otp.every(digit => digit !== '')) {
            console.log('OTP is complete:', otpString);
            setOtpError('')
        }else{
            setOtpError("*Enter OTP correctly.")
        }
        return isValid;
    }
    
    const otpString = otp.join('');

    const Submit = async () => {
        if(otpvalidation()){
        try {
          setLoading(true);
          const url =
          "https://stylesync-backend-test.onrender.com/app/v1/salon/verified-salon-email";
          console.log(otpString)
        const responseTwo = await axios.put(url, {
          salonId: salonId,
          otp : otpString,
        });
          console.log(responseTwo.data)
          navigation.navigate('Login');
        } catch (error) {
          console.log(error);
          setOtpError("*OTP is invalid. Please try again.")
        } finally {
          setLoading(false);
        }
    }
      };

    

      const ResendOTP = async () => {
        if (resendCount >= 2) {
            Alert.alert("Submission limit reached", "You can only submit the OTP twice.Please try again later",
                [{text:"Ok",
                onPress: () =>navigation.navigate('Login'),
              }]
            );
        }else{
        try {
          setLoading(true);
          setCountdown(180);
          const url =
          "https://stylesync-backend-test.onrender.com/app/v1/salon/generate-salon-otp";
           const response= await axios.put(url, {
           salonId: salonId,
           email: email,
          });
          console.log(response.data);
          setResendCount(prevCount => prevCount + 1);
        } catch (error) {
          console.log(error);
          setOtpError("*OTP is Invalid. Please try again.")
        } finally {
          setLoading(false);
        }
    }
    
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
                        {'Enter the 6 digits code that we have sent in '}{email}{" "}
                        <Text style={{ fontWeight: 'bold' }}>{`${minutes}:${seconds.toString().padStart(2, '0')}`}</Text>
                    </Text>
                </View>
                <View style={ValidateNumberStyles.OTPSection}>
                    {[...Array(6)].map((digit, index) => (
                    <View key={index} style={[ValidateNumberStyles.OTPView, otpError? { borderColor: 'red' } : null]}>
                        <TextInput
                            inputMode="tel"
                            maxLength={1}
                            value={digit}
                            onChangeText={(text) =>handleChange(text ,index)}
                            style={ValidateNumberStyles.Inputs}
                        />
                    </View>
                ))}
                </View>
                {otpError? <Text style={{color: 'red',
                                        marginTop: 0,
                                        fontSize: 14,
                                        marginHorizontal:"auto", // Adjust the value based on your design
                                        paddingLeft: 5,}}>{otpError }</Text> : null}
                <View>
            <Button text={'Submit'} onPress={Submit} />
            <View>
                <TouchableOpacity onPress={ResendOTP}>
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
                <TouchableOpacity onPress={()=> navigation.navigate("UpdateEmailAddress",{email,salonId})}>
                    <Text
                        style={ValidateNumberStyles.TouchbleText}>
                        {'Change email'}
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