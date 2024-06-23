/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const ValidateNumberStyles = StyleSheet.create({
    
    SubHeading: {
        fontSize: 14,
        color: '#808080',
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
        textAlign: 'justify',
    },
    OTPSection: {
        flexDirection: 'row',
        margin: 20,
    },
    OTPView: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#2E2528',
        borderRadius: 5,
        margin: 8,
    },
    Inputs: {
        fontSize: 15,
        height:45,
        width: 45,
        //fontWeight:'bold',
        textAlign: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        color: '#2E2528',
        //fontFamily: 'Poppins',
    },
    ButtonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TouchbleText: {
        fontSize: 15,
        color: '#844704',
        fontWeight: '700',
        marginTop: 12,
        textAlign: 'center',
        //fontFamily: 'Poppins',
    }
});
