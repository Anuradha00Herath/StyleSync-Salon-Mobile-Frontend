/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, TextInput, TouchableOpacity,StatusBar } from 'react-native';
import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '../../components/Button';
import { Address } from './style';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { globalStyle } from '../../components/globalStyle';


function AddAddress(p:any) {

    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [address1Error, setAddress1Error] = useState('');
    const [address2Error, setAddress2Error] = useState('');
    const [cityError, setCityError] = useState('');
    const [countryError, setCountryError] = useState('');

    // Regular expression to check if the string contains any numbers
    const containsNumbers = /\d/;

    const validateInputs = () => {
        let isValid = true;

        if (!address1.trim()) {
            setAddress1Error('*Address Line 1 is required');
            isValid = false;
        } else {
            setAddress1Error('');
        }

        if (!address2.trim()) {
            setAddress2Error('*Address Line 2 is required');
            isValid = false;
        } else {
            setAddress2Error('');
        }

        if (!city.trim()) {
            setCityError('*City is required');
            isValid = false;
        } else if (containsNumbers.test(city)) { // Check if city contains numbers
            setCityError('*City cannot contain numbers');
            isValid = false;
        } else {
            setCityError('');
        }

        if (!country.trim()) {
            setCountryError('*Country is required');
            isValid = false;
        } else if (containsNumbers.test(country)) { // Check if country contains numbers
            setCountryError('*Country cannot contain numbers');
            isValid = false;
        }  else {
            setCountryError('');
        }

        return isValid;
    };

    const stack = p.stack;

    const gotoLogin = () => {
        stack.navigate('Login');
    };
    const gotoSignUp = () =>{
        if (validateInputs()) {
            stack.navigate('SignUP');
        }
    };
    return (
        <View style={[globalStyle.Bottomcontainer,{marginTop:100}]}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
                <View>
                    <Text
                        style={globalStyle.mainTopic}>
                        {'Enter Address'}
                    </Text>
                    <Text
                        style={globalStyle.subTopic}>
                        {'Add your salon address for validation'}
                    </Text>
                    <View style={{ marginTop: 40 }}>
                        <View style= {[Address.TopInput, address1Error ? { borderColor: 'red' } : null]}>
                            <TextInput
                                placeholder="Address line 1"
                                value={address1}
                                //style={Address.InputText}
                                onChangeText={text => setAddress1(text)}
                            />
                        </View>
                        {address1Error ? <Text style={Address.ErrorText}>{address1Error}</Text> : null}
                        <View style={[Address.OtherInputs, address2Error ? { borderColor: 'red' } : null]}>
                            <TextInput
                                placeholder="Address line 2"
                                value={address2}
                                //style={Address.InputText}
                                onChangeText={text => setAddress2(text)}
                            />
                        </View>
                        {address2Error ? <Text style={Address.ErrorText}>{address2Error}</Text> : null}
                        <View style={[Address.OtherInputs, cityError ? { borderColor: 'red' } : null]}>
                            <TextInput
                                placeholder="City"
                                value={city}
                                //style={Address.InputText}
                                onChangeText={text => setCity(text)}
                            />
                        </View>
                        {cityError ? <Text style={Address.ErrorText}>{cityError}</Text> : null}
                        <View style={[Address.OtherInputs, countryError ? { borderColor: 'red' } : null]}>
                            <TextInput
                                placeholder="Country"
                                value={country}
                                //style={Address.InputText}
                                onChangeText={text => setCountry(text)}
                            />
                        </View>
                        {countryError ? <Text style={Address.ErrorText}>{countryError}</Text> : null}
                    </View>
                    <Button title={'Submit'} onPress={gotoSignUp} />
                    <View style={Address.BottomSection}>
                        <Text
                            style={Address.BottomText}>
                            {'Already have an account?    '}
                        </Text>
                        <TouchableOpacity style={{ flex: 1 }} onPress={gotoLogin}>
                            <Text
                                style={Address.BottomLogin}>
                                {'Login'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={globalStyle.bottomView}>
                    <View style={globalStyle.line} />
                    <View style={{ flex: 1 }}>
                        <Text style={globalStyle.text}>
                            or
                        </Text>
                    </View>
                    <View style={globalStyle.line} />
                </View>
                <View>
                <TouchableOpacity>
                            <Text
                                style={Address.BottomPlace}>
                                {'Works on customer place'}
                            </Text>
                        </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}
const FillAddress = (props:any) => {
    const stack = props.navigation;
    return (
        <View style={globalStyle.container}>
            <StatusBar/>
            <Background />
            <Header />
            <AddAddress stack={stack}/>
        </View>

    );
};

export default FillAddress;
