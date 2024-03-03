/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import { TextInput } from 'react-native'
import React from 'react'

interface InputAreaProps {
    placeholder: string; // Define the type of placeholder prop as string
}

const InputArea: React.FC<InputAreaProps> = ({placeholder})=> {
    return (
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#2E2528'}
                style={{
                    fontSize: 15,
                    color: '#2E2528',
                    fontFamily: 'Poppins',
                }}
            />
    )
}

export {InputArea};
