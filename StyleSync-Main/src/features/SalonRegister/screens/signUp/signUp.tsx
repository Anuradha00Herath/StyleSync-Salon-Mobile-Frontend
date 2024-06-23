import React ,{useState} from "react";
import { View, Text, TextInput, TouchableOpacity,StatusBar,ImageBackground,Alert} from 'react-native';
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import { globalStyles } from "../../components/globalstyles";
import { AppName } from "../../../staff-register/components/AppName";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {  signUp  } from "./styles";
import { Icon } from '@rneui/themed'
import { Button } from "../../components/Button";
import axios from 'axios';

export function SignUp({ navigation ,route }) {
    const {email} =route.params;
    const [isPasswordVisible, setPasswordVisible] = React.useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);



    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!isConfirmPasswordVisible);
    };
    const [username, setUsername] = useState();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError , setUsernameError] =useState('');
    const [passwordError , setPasswordError] =useState('');
    const [confirmPasswordError , setConfirmPasswordError] = useState('');
    const [loading, setLoading] = useState(false);


    const validateInputs = () => {
        let isValid = true;

        // if (!username) {
        //     setUsernameError('*Username filed is required');
        //     isValid = false;
        // } else {
        //     setUsernameError('');
        // }
        if (!password) {
            setPasswordError('*Password filed is required');
            isValid = false;
        } else {
            setPasswordError('');
        }
        if (!confirmPassword) {
            setConfirmPasswordError('*confirmPassword filed is required');
            isValid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('*confirmPassword and Passwords does not match ');
            setPasswordError('*confirmPassword and Passwords does not match ');
            isValid = false;
        }
        else {
            setConfirmPasswordError('');
        }
       
        return isValid;
    };
    const handleSubmit = async() => {
        if (validateInputs()) {
            try{
                setLoading(true);
                const url = "http://localhost:8000/app/v1/salon/register-salon/set-password";
                console.log('Request parameters',
                    {email:email,
                    password:confirmPassword
                   });
                const response = await axios.put(url, {email:email, password:confirmPassword });
                console.log(response.data)
                const result = response.data;
                const { message, status} = result;

                if(status == 201){
                    console.log('Success: ', message);
                    navigation.navigate("Login");
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
            <View style={[globalStyles.container ,{marginTop:220},]}>
            <View>
                    <Text
                        style={globalStyles.mainTopic}>
                        {'Sign Up'}
                    </Text>
                    <Text
                        style={globalStyles.subTopic}>
                        {'Create your account'}
                    </Text>
                    <View style={{ marginTop: 40 }}>
                        <View
                            style={[signUp.TopInput ,usernameError? { borderColor: 'red' } : null]}>
                            <TextInput
                                placeholder="Enter Username"
                                //style={signUp.InputText}
                                value={email}
                                //onChangeText={setUsername}
                            />
                        </View>
                        {usernameError ? <Text style={ signUp .ErrorText}>{usernameError}</Text> : null}
                        <View
                            style={[signUp.OtherInputs ,passwordError? { borderColor: 'red' } : null]}>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    placeholder="Enter Password"
                                    secureTextEntry={!isPasswordVisible}
                                    //style={[signUp.InputText, password !== confirmPassword ? { borderColor: 'red' } : null]}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.4}
                                onPress={togglePasswordVisibility}>
                                <View
                                    style={signUp.Icon}>
                                    <Icon
                                        size={20}
                                        color={'black'}
                                        name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
                                        type="ionicon"
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        {passwordError? <Text style={ signUp .ErrorText}>{passwordError}</Text> : null}
                        <View
                            style={[signUp.OtherInputs , confirmPasswordError? { borderColor: 'red' } : null]}>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    placeholder="Confirm Password"
                                    secureTextEntry={!isConfirmPasswordVisible}
                                    //style={[signUp.InputText, password !== confirmPassword ? { borderColor: 'red' } : null]}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.4}
                                onPress={toggleConfirmPasswordVisibility}>
                                <View
                                    style={signUp.Icon}>
                                    <Icon
                                        size={20}
                                        color={'black'}
                                        name={isConfirmPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
                                        type="ionicon"
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        {confirmPasswordError? <Text style={ signUp .ErrorText}>{confirmPasswordError}</Text> : null}
                    </View>
                    <Button text={'Sign up'} onPress={()=>(navigation.navigate("Login"))} />
                    <View style={signUp.BottomSection}>
                        <Text
                            style={signUp.BottomText}>
                            {'Already have an account?    '}
                        </Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate("Login")}>
                            <Text
                                style={signUp.BottomLogin}>
                                {'Login'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={globalStyles.bottomView}>
                        <View style={globalStyles.line} />
                        <View style={{ flex: 1 }}>
                            <Text
                                style={globalStyles.text}>
                                or
                            </Text>
                        </View>
                        <View style={globalStyles.line} />
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text
                                style={signUp.BottomPlace}>
                                {'Sign up with Google'}
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>
            </View>
            </KeyboardAwareScrollView>
        </ImageBackground>
    )
}