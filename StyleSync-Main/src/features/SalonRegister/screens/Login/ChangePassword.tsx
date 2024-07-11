import React ,{useState} from "react";
import { View, Text, TextInput, TouchableOpacity,StatusBar,ImageBackground} from 'react-native';
import { BACKGROUND_IMAGE } from "../../components/BackGroundImage";
import { globalStyles } from "../../components/globalstyles";
import { AppName } from "../../../staff-register/components/AppName";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {LoginStyles} from "./styles";
import { Button } from "../../components/Button";
import { Icon } from "@rneui/themed";
import axios from "axios";

export function ChangePassword({navigation,route}) {
    const {Email} = route.params;
    const [email, setEmail] =useState(Email);
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const[otp ,setotp] =useState('');
    const [otpError ,setOtpError] =useState('');
    const [loading, setLoading] = useState(false);
    const[error ,setError] = useState('')

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const validateInputs = () => {
    let isValid = true;

    if (!email) {
      setEmailError('*Email field is required');
      isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      setEmailError('*Email Should be in correct format');
      isValid = false;
  } else {
      setEmailError('');
  }
  if (!otp) {
    setOtpError("*otp is required");
    isValid = false;
  } else {
    setOtpError("");
  }
    if (!password) {
      setPasswordError("*Password filed is required");
      isValid = false;
    }  else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(password)){
      setPasswordError('*Password is not strong enough');
      isValid = false;
  }
    else {
      setPasswordError("");
    }
    if (!confirmPassword) {
      setConfirmPasswordError("*confirmPassword filed is required");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("*confirmPassword and Passwords does not match ");
      setPasswordError("*confirmPassword and Passwords does not match ");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = async () => {
    if(validateInputs()){
      try{
      setLoading(true);
      const url =
      "https://stylesync-backend-test.onrender.com/app/v1/salon/change-salon-password";
       const response= await axios.put(url, {
       email: email,
       otp:otp,
       password:password
      });
      console.log(response.data);
      navigation.navigate("Login")
    } catch (error) {
      console.log(error);
      setError("*Otp or Email is invalid. Please try again.")
      setotp('')
    } finally {
      setLoading(false);
    }
    }
  }
    return(
        <ImageBackground source={BACKGROUND_IMAGE} style={globalStyles.background}>
          <StatusBar/>
          <AppName/>
          <View style={{height:200}}></View>
          <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1}} keyboardShouldPersistTaps={'never'}>
            <View style={[globalStyles.container,]}>
               <View>
                    <Text
                        style={globalStyles.mainTopic}>
                        {'Forgot Password'}
                    </Text>
                    <Text
                        style={globalStyles.subTopic}>
                        {'Change your password'}
                    </Text>
                    <View style={{ marginTop: 35 }}>
                        <View style={[LoginStyles.PasswordInputArea ,{justifyContent:"flex-start"},emailError? { borderColor: 'red' } : null]}>
                            <View style={{flex:1}}>
                               <TextInput
                                    placeholder="Enter Your Email"
                                    value={email}
                                    onChangeText={text =>setEmail(text)}
                                    //style={LoginStyles.InputText}
                                />
                            </View>
                        </View>
                        {emailError ? <Text style={LoginStyles.ErrorText}>{emailError }</Text> : null}
                        <View style={[LoginStyles.PasswordInputArea ,{justifyContent:"flex-start"},otpError? { borderColor: 'red' } : null]}>
                            <View style={{flex:1}}>
                               <TextInput
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChangeText={text =>setotp(text)}
                                    //style={LoginStyles.InputText}
                                />
                            </View>
                        </View>
                        {otpError ? <Text style={LoginStyles.ErrorText}>{otpError }</Text> : null}
                        <View  style={{ borderRadius: 10,
                                        borderColor: passwordError ? "red"  : '#2E2528',
                                        borderWidth: 1,
                                        height: 55,
                                        width: '75%',
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        paddingLeft: 5,
                                        marginTop: 15,
                                        flexDirection: 'row',
                                        alignItems:'center'
                          }}
                        >
                      
                            <View style={{ flex: 1 }}>
                              <TextInput
                                placeholder="Enter new Password"
                                secureTextEntry={!isPasswordVisible}
                                //style={[signUp.InputText, password !== confirmPassword ? { borderColor: 'red' } : null]}
                                value={password}
                                onChangeText={setPassword}
                              />
                            </View>
                            <TouchableOpacity
                              activeOpacity={0.4}
                              onPress={togglePasswordVisibility}
                            >
                              <View style={{ flex: 1,
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            paddingRight: 10,}}>
                                <Icon
                                  size={20}
                                  color={"black"}
                                  name={
                                    isPasswordVisible ? "eye-outline" : "eye-off-outline"
                                  }
                                  type="ionicon"
                                />
                              </View>
                            </TouchableOpacity>
                        </View>
                        {passwordError ? (<Text style={{ color: 'red',
                                          marginTop: 2,
                                          fontSize: 12,
                                          marginLeft: '12%', // Adjust the value based on your design
                                          paddingLeft: 5,}}>{passwordError}</Text>) : null}
                                  
                        <View  style={{ borderRadius: 10,
                                        borderColor: passwordError ? "red"  : '#2E2528',
                                        borderWidth: 1,
                                        height: 55,
                                        width: '75%',
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        paddingLeft: 5,
                                        marginTop: 15,
                                        flexDirection: 'row',
                                        alignItems:'center'
                                    }}
                        >
                            <View style={{ flex: 1 }}>
                              <TextInput
                                placeholder="Enter Confirm Password"
                                secureTextEntry={!isConfirmPasswordVisible}
                                //style={[signUp.InputText, password !== confirmPassword ? { borderColor: 'red' } : null]}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                              />
                            </View>
                            <TouchableOpacity
                              activeOpacity={0.4}
                              onPress={toggleConfirmPasswordVisibility}
                            >
                              <View style={{ flex: 1,
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            paddingRight: 10,}}>
                                <Icon
                                  size={20}
                                  color={"black"}
                                  name={
                                    isConfirmPasswordVisible ? "eye-outline" : "eye-off-outline"
                                  }
                                  type="ionicon"
                                />
                              </View>
                            </TouchableOpacity>
              </View>
              {confirmPasswordError? (<Text style={{ color: 'red',
                                marginTop: 2,
                                fontSize: 12,
                                marginLeft: '12%', // Adjust the value based on your design
                                paddingLeft: 5,}}>{confirmPasswordError}</Text>) : null}
                {error? (<Text style={{ color: 'red',
                                marginTop: 5,
                                fontSize: 14,
                                marginHorizontal:"auto",
                                }}>{error}</Text>) : null}
                    </View>
                    <Button text={'Submit'} onPress={handleSubmit} />
                      <View style={{  flexDirection: 'row',
                                      justifyContent: 'center',}}>
                        <Text
                            style={{flex: 2,
                                    fontSize: 15,
                                    color: '#2E2528',
                                    fontWeight: 'normal', // Set to bold
                                    marginTop: 12,
                                    textAlign: 'right',
                                    justifyContent: 'flex-end',}}>
                            {'Already have an account?    '}
                        </Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={()=>navigation.navigate("Login")}>
                            <Text
                                style={{ fontSize: 15,
                                        color: '#844704',
                                        fontWeight: 'normal', // Set to bold
                                        marginTop: 12,
                                        textAlign: 'left',}}>
                                {'Login'}
                            </Text>
                        </TouchableOpacity>
                    </View>
               </View>
            
            </View>
          </KeyboardAwareScrollView>


        </ImageBackground>

    );
}