/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Text } from 'react-native';
import React from 'react';

const Header = () => {
    return (
        <Text
            style={{
                fontSize: 20,
                color: 'white',
                fontWeight: '500', // Medium bold
                textAlign: 'center',
                fontFamily: 'Poppins',
            }}>
            {'StyleSync'}
        </Text>
    );
};

export { Header };
