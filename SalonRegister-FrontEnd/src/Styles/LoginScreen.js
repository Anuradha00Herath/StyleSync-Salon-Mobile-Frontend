/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between', // Align items with space between
    },
    Bottomcontainer: {
        height: '63%',
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    Header: {
        fontSize: 24,
        color: '#2E2528',
        fontWeight: 'bold', // Set to bold
        marginTop: 30,
        textAlign: 'center',
        fontFamily: 'Poppins',
    },
    UNInputArea: {
        borderRadius: 10,
        borderColor: '#2E2528',
        borderWidth: 1,
        height: 55,
        width: '75%',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
    },
    InputText: {
        fontSize: 15,
        color: '#2E2528',
        fontFamily: 'Poppins',
    },
    PasswordInputArea: {
        borderRadius: 10,
        borderColor: '#2E2528',
        borderWidth: 1,
        height: 55,
        width: '75%',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
        marginTop: 10,
        flexDirection: 'row',
    },
    Icon: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10,
    },
    FogotP: {
        fontSize: 15,
        color: '#844704',
        fontWeight: 'bold', // Set to bold
        marginTop: 35,
        textAlign: 'center',
        fontFamily: 'Poppins',
    },
    ButtonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottomSection: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    BottomText: {
        flex: 2,
        fontSize: 15,
        color: '#2E2528',
        fontWeight: 'normal', // Set to bold
        marginTop: 12,
        textAlign: 'right',
        justifyContent: 'flex-end',
        fontFamily: 'Poppins',
    },
    BottomSignUp: {
        fontSize: 15,
        color: '#844704',
        fontWeight: 'normal', // Set to bold
        marginTop: 12,
        textAlign: 'left',
        fontFamily: 'Poppins',
    },


});
