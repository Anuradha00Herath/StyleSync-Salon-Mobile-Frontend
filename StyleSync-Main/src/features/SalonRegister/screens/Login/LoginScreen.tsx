import React ,{useState} from "react";
import { View, Text, TextInput, TouchableOpacity,StatusBar,ImageBackground} from 'react-native';
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import { globalStyles } from "../../components/globalstyles";
import { AppName } from "../../../staff-register/components/AppName";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {LoginStyles} from "./styles";
import { Icon } from '@rneui/themed'
import { Button } from "../../components/Button";

export function Login({ navigation }) {

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
        // } else if (!/\S+@\S+\.\S+/.test(email)){
        //     setEmailError('*Email Should be in correct format');
        //     isValid = false;
        } else {
            setEmailError('');
        }
        if (!password) {
            setErrorPassword('*pasword field is required');
            isValid = false;
        } else {
            setErrorPassword('');
        }
        return isValid;
    };

    const handleSubmit = async() => {
        if (validateInputs()) {
           {() => navigation.navigate("SignUp")}
        }}
   return(
      <ImageBackground source={BACKGROUND_IMAGE} style={globalStyles.background}>
         <StatusBar/>
         <AppName/>
         <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1}} keyboardShouldPersistTaps={'never'}>
                <View style={[globalStyles.container ,{marginTop:280},]}>
                    <View>
                        <Text
                            style={globalStyles.mainTopic}>
                            {'Login\nWelcome back!'}
                        </Text>   
                    </View>
                    <View style={{ marginTop: 35 }}>
                        <View style={[LoginStyles.PasswordInputArea ,{justifyContent:"flex-start"},emailError? { borderColor: 'red' } : null]}>
                            <View style={{flex:1}}>
                               <TextInput
                                    placeholder="Enter Your Username / Email"
                                    value={email}
                                    onChangeText={text =>setEmail(text)}
                                    //style={LoginStyles.InputText}
                                />
                            </View>
                        </View>
                        {emailError ? <Text style={LoginStyles.ErrorText}>{emailError }</Text> : null}
                    </View>
                    <View style={[LoginStyles.PasswordInputArea ,{justifyContent:"center"},errorPassword? { borderColor: 'red' } : null]}>
                        <View style={{ flex: 1}}>
                            <TextInput
                                //value={password}
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
                     </View>
                     {errorPassword? <Text style={LoginStyles.ErrorText}>{errorPassword }</Text> : null}
                     <BottomFeild navigation={navigation} onPress={handleSubmit}/>
                </View>
         </KeyboardAwareScrollView>
      </ImageBackground>

   );
}

function BottomFeild({navigation ,onPress}) {
   
    return (
        <View>
            <View>
                <TouchableOpacity>
                    <Text
                        style={LoginStyles.FogotP}>
                        {'Forgot Password?'}
                    </Text>
                </TouchableOpacity>
                <Button text={'Login'} onPress={onPress} />

            </View>
            <View style={LoginStyles.BottomSection}>
                <Text
                    style={LoginStyles.BottomText}>
                    {"Don't have an account ?    "}
                </Text>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate("CreateAccount")}>
                    <Text
                        style={LoginStyles.BottomSignUp}>
                        {'Signup'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}