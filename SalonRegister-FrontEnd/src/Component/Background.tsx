/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { ImageBackground } from 'react-native';
import React from 'react';


const Background = () => {
    return (
        <ImageBackground
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
            }}
            source={require('../../asserts/img/bg.png')}
            resizeMode="stretch" />
    );
};

export { Background };

