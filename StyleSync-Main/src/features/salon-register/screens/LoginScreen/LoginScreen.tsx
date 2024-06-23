/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, TouchableOpacity,StatusBar,ImageBackground} from 'react-native';
import React, { useState } from 'react';
import { Icon } from '@rneui/themed'
//import Icon from '@expo/vector-icons/AntDesign';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LoginStyles } from './Styles';
import { InputArea } from '../../components/InputArea';
import { Button } from '../../components/Button';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { globalStyle } from '../../components/globalStyle';


function LoginField(p:any) {

    const stack = p.stack;

    return (
        <View style={[globalStyle.Bottomcontainer,{marginTop:280}]}>   
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
                <View>
                        <Text
                            style={globalStyle.mainTopic}>
                            {'Login\nWelcome back!'}
                        </Text>
                        <InputField stack={stack}/>
                </View>
        </KeyboardAwareScrollView>
        </View>
        
    );
}

function InputField( p:any) {

    const stack = p.stack;
    const [isPasswordVisible, setPasswordVisible] = React.useState(false); 
    const [email, setEmail] =useState("");
    const [password , setPassword]=useState("");
    const [emailError, setEmailError] = useState('');
    const [errorPassword , setErrorPassword] =useState("")

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };
    const validateInputs = () => {
        let isValid = true;

        if (!email) {
            setEmailError('*Email field is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)){
            setEmailError('*Email Should be in correct format');
            isValid = false;
        } else {
            setEmailError('');
        }
        if (!password) {
            setErrorPassword('pasword field is required');
            isValid = false;
        } else {
            setErrorPassword('');
        }
        return isValid;
    };

    const handleSubmit = async() => {
        if (validateInputs()) {
            stack.navigate('ValidateNumber')
        }}


    return (
        <View style={{ marginTop: 35 }}>
            <View style={[LoginStyles.PasswordInputArea ,{justifyContent:"flex-start"}, emailError ? { borderColor: 'red' } : null]}>
                <View style={{flex:1}}>
                    <TextInput
                                placeholder="Enter Your Username / Email"
                                value={email}
                                onChangeText={text =>setEmail(text)}
                                //style={LoginStyles.InputText}
                            />
                </View>
                {emailError ? <Text style={LoginStyles.ErrorText}>{emailError }</Text> : null}
            </View>
            <View style={[LoginStyles.PasswordInputArea ,{justifyContent:"center"} ,errorPassword? { borderColor: 'red' } : null]}>
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
                {errorPassword? <Text style={LoginStyles.ErrorText}>{errorPassword }</Text> : null}
            </View>
            <BottomFeild stack={stack}/>
        </View>
    );
}

function BottomFeild(p:any) {

    const stack = p.stack;

    function gotoCreateAccount(){
        stack.navigate('CreateAccount');
    }
    return (
        <View>
            <View>
                <TouchableOpacity>
                    <Text
                        style={LoginStyles.FogotP}>
                        {'Forgot Password?'}
                    </Text>
                </TouchableOpacity>
                <Button title={'Login'} onPress={()=>{}} />

            </View>
            <View style={LoginStyles.BottomSection}>
                <Text
                    style={LoginStyles.BottomText}>
                    {"Don't have an account ?    "}
                </Text>
                <TouchableOpacity style={{ flex: 1 }} onPress={gotoCreateAccount}>
                    <Text
                        style={LoginStyles.BottomSignUp}>
                        {'Signup'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const LoginScreen = (props:any) => {
    const stack = props.navigation;

    return (
        <View style={globalStyle.container}>
            <Background />
            <Header />
            <StatusBar/>
            <LoginField  stack={stack}/>
        </View>
    );
};

export default LoginScreen;

//export default function  LoginScreen({navigation,route}){}