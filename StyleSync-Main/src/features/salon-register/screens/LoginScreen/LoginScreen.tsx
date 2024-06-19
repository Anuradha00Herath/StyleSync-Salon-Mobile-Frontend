/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, TouchableOpacity,StatusBar,ImageBackground} from 'react-native';
import React from 'react';
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

    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={{ marginTop: 35 }}>
            <View style={[LoginStyles.PasswordInputArea ,{justifyContent:"flex-start"}]}>
                <View style={{flex:1}}>
                    <TextInput
                                placeholder="Enter Your Username / Email"
                                //style={LoginStyles.InputText}
                            />
                </View>
            </View>
            <View style={[LoginStyles.PasswordInputArea ,{justifyContent:"center"}]}>
                <View style={{ flex: 1}}>
                    <TextInput
                        placeholder="Enter Your Password"
                        secureTextEntry={!isPasswordVisible}
                        //style={LoginStyles.InputText}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={togglePasswordVisibility}>
                    <View  style={LoginStyles.Icon}>
                        <Icon
                            size={25}
                            color={'black'}
                            name={isPasswordVisible ? "eye-outline" : "eye"}
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
        <View style={globalStyle.container}>
            <Background />
            <Header />
            <StatusBar/>
            <LoginField  stack={stack}/>
        </View>
    );
};

export default LoginScreen;
