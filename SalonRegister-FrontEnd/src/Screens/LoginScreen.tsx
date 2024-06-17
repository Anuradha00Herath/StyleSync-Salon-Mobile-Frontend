/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LoginStyles } from '../Styles/LoginScreen';
import { InputArea } from '../Component/InputArea';
import { Button } from '../Component/Button';
import { Background } from '../Component/Background';
import { Header } from '../Component/Header';



function LoginField(p:any) {

    const stack = p.stack;

    return (
        <View style={LoginStyles.Bottomcontainer}>
                <View>
                <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
                    <Text
                        style={LoginStyles.Header}>
                        {'Login\nWelcome back!'}
                    </Text>
                    <InputField stack={stack}/>
                    </KeyboardAwareScrollView>
                </View>
        </View>
    );
}

function InputField( p:any) {

    const stack = p.stack;
    const [isPasswordVisible, setPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };


    return (
        <View style={{ marginTop: 35 }}>
            <View
                style={LoginStyles.UNInputArea}>
                <InputArea placeholder={'Enter Your Username / Email'} />
            </View>
            <View
                style={LoginStyles.PasswordInputArea}>
                <View style={{ flex: 1 }}>
                    <TextInput
                        placeholder="Enter Your Password"
                        placeholderTextColor={'#2E2528'}
                        secureTextEntry={!isPasswordVisible}
                        style={LoginStyles.InputText}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={togglePasswordVisibility}>
                    <View
                        style={LoginStyles.Icon}>
                        <Icon
                            size={25}
                            color={'black'}
                            name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
                            type="ionicon"
                        />
                    </View>
                </TouchableOpacity>
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
        <View style={LoginStyles.container}>
            <Background />
            <Header />
            <LoginField  stack={stack}/>
        </View>
    );
};

export default LoginScreen;
