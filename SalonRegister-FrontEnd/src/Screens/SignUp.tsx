/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';
import { SignUp } from '../Styles/SignUp';
import { Button } from '../Component/Button';
import { Background } from '../Component/Background';
import { Header } from '../Component/Header';

function FillingArea(p:any) {
    const stack = p.stack;
    const [isPasswordVisible, setPasswordVisible] = React.useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!isConfirmPasswordVisible);
    };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    //const [error, setError] = useState('');

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            Alert.alert('SignUP Error', 'Passwords does not match ');
            return;
        }
        // Your sign up logic here
    };

    const gotoLogin = () => {
        stack.navigate('Login');
    };

    return (
        <View style={SignUp.Bottomcontainer}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
                <View>
                    <Text
                        style={SignUp.MainTopic}>
                        {'Sign up'}
                    </Text>
                    <Text
                        style={SignUp.SubTopic}>
                        {'Create your account'}
                    </Text>
                    <View style={{ marginTop: 40 }}>
                        <View
                            style={SignUp.TopInput}>
                            <TextInput
                                placeholder="Enter Username"
                                placeholderTextColor={'#2E2528'}
                                style={SignUp.InputText}
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>
                        <View
                            style={SignUp.OtherInputs}>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    placeholder="Enter Password"
                                    placeholderTextColor={'#2E2528'}
                                    secureTextEntry={!isPasswordVisible}
                                    style={[SignUp.InputText, password !== confirmPassword ? { borderColor: 'red' } : null]}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.4}
                                onPress={togglePasswordVisibility}>
                                <View
                                    style={SignUp.Icon}>
                                    <Icon
                                        size={25}
                                        color={'black'}
                                        name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
                                        type="ionicon"
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={SignUp.OtherInputs}>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    placeholder="Confirm Password"
                                    placeholderTextColor={'#2E2528'}
                                    secureTextEntry={!isConfirmPasswordVisible}
                                    style={[SignUp.InputText, password !== confirmPassword ? { borderColor: 'red' } : null]}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.4}
                                onPress={toggleConfirmPasswordVisibility}>
                                <View
                                    style={SignUp.Icon}>
                                    <Icon
                                        size={25}
                                        color={'black'}
                                        name={isConfirmPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
                                        type="ionicon"
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Button title={'Sign up'} onPress={handleSignUp} />
                    <View style={SignUp.BottomSection}>
                        <Text
                            style={SignUp.BottomText}>
                            {'Already have an account?    '}
                        </Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={gotoLogin}>
                            <Text
                                style={SignUp.BottomLogin}>
                                {'Login'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <View style={SignUp.line} />
                        <View style={{ flex: 1 }}>
                            <Text
                                style={SignUp.text}>
                                or
                            </Text>
                        </View>
                        <View style={SignUp.line} />
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text
                                style={SignUp.BottomPlace}>
                                {'Sign up with Google'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}
const SignUP = (props:any) => {
    const stack = props.navigation;
    return (
        <View style={SignUp.container}>
            <Background />
            <Header />
            <FillingArea stack={stack}/>
        </View>

    );
};

export default SignUP;
