/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { ImageBackground, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get("screen");
const Background = () => {
    return (
        <ImageBackground
            style={{
                width: width,
                height: height ,
                position: 'absolute',
            }}
            source={require('../../../assets/bg.png')}
            resizeMode="stretch" />
    );
};

export { Background };

