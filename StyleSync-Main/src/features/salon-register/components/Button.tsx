/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
// Button.tsx

import { StyleProp, TextStyle, View, ViewStyle, TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface ButtonProps {
    title: string;
    buttonStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, buttonStyle, titleStyle, containerStyle }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[{
                justifyContent: 'center', // Center horizontally
                alignItems: 'center',
                backgroundColor: '#844704',
                borderRadius: 5,
                height: 50,
                width: '75%',
                marginTop: 20,
                marginRight:'auto',
                marginLeft:'auto',
            }, buttonStyle]}>
                <Text style={[{
                    //fontWeight: '700',
                    fontSize: 16,
                    color:"#FFFFFF"
                }, titleStyle]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export { Button };
