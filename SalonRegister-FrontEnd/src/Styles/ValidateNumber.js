/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const ValidateNumberStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between', // Align items with space between
    },
    Bottomcontainer: {
        height: '57%',
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    Heading: {
        fontSize: 24,
        color: '#2E2528',
        fontWeight: 'bold',
        marginTop: 45,
        textAlign: 'center',
        fontFamily: 'Poppins',
    },
    SubHeading: {
        fontSize: 15,
        color: '#2E2528',
        fontWeight: '500',
        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
        textAlign: 'justify',
        fontFamily: 'Poppins',
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
        fontWeight:'bold',
        textAlign: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        color: '#2E2528',
        fontFamily: 'Poppins',

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
        fontFamily: 'Poppins',
    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Poppins',
        color: '#2E2528',
        fontWeight: 'medium',
    },
    line: {
        borderBottomColor: '#2E2528',
        borderBottomWidth: 1,
        justifyContent:'center',
        flex:4,
        alignItems:'flex-end',
        marginHorizontal:15,
        paddingVertical:0,
    },
});
