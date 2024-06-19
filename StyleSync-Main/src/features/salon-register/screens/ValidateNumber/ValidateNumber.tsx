/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import { View, Text, TextInput, TouchableOpacity,StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ValidateNumberStyles } from './style';
import { Button } from '../../components/Button';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { globalStyle } from '../../components/globalStyle';

function SubmitOTP(p:any) {
    //const { mobileNumber } = route ? route.params : { mobileNumber: '' };
    const stack = p.stack;
    const [countdown, setCountdown] = useState(180); // 3 minutes


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

    return (
        <View style={[globalStyle.Bottomcontainer,{marginTop:340}]}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
                <View>
                    <Text
                        style={globalStyle.mainTopic}>
                        {'Validate Number'}
                    </Text>
                    <Text
                        style={ValidateNumberStyles.SubHeading}>
                        {'Enter the 6 digits code that we have sent in +9474 456 7129 within '}
                        <Text style={{ fontWeight: 'bold' }}>{`${minutes}:${seconds.toString().padStart(2, '0')}`}</Text>
                    </Text>
                </View>
                <EnterOTP />
                <BottomSe stack={stack} handleResendOTP={handleResendOTP}/>
            </KeyboardAwareScrollView>
        </View>
    );
}

function EnterOTP() {
    return (
        <View style={ValidateNumberStyles.OTPSection}>
            {[...Array(6)].map((_, index) => (
                <View key={index} style={ValidateNumberStyles.OTPView}>
                    <TextInput
                        inputMode="tel"
                        maxLength={1}
                        style={ValidateNumberStyles.Inputs}
                    />
                </View>
            ))}
        </View>
    )
}

function BottomSe({ stack, handleResendOTP }: { stack: any; handleResendOTP: () => void }) {
    function gotoCreateAccount() {
        stack.navigate('CreateAccount');
    }
    function gotoAddress() {
        stack.navigate('Address');
    }

    return (
        <View>
            <Button title={'Submit'} onPress={gotoAddress} />
            <View>
                <TouchableOpacity onPress={handleResendOTP}>
                    <Text
                        style={ValidateNumberStyles.TouchbleText}>
                        {'Resend OTP'}
                    </Text>
                </TouchableOpacity>
                <View style={globalStyle.bottomView}>
                    <View style={globalStyle.line} />
                    <View style={{ flex: 1 }}>
                        <Text
                            style={globalStyle.text}>
                            or
                        </Text>
                    </View>
                    <View style={globalStyle.line} />
                </View>
                <TouchableOpacity onPress={gotoCreateAccount}>
                    <Text
                        style={ValidateNumberStyles.TouchbleText}>
                        {'Change number'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}




const ValidateNumber = (props:any) => {
    const stack = props.navigation;
    return (
        <View style={globalStyle.container}>
            <Background />
            <StatusBar/>
            <Header />
            <SubmitOTP stack={stack}/>
        </View>

    );
}

export default ValidateNumber;

