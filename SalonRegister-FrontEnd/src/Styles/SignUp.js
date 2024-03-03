/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const SignUp = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between', // Align items with space between
    },
    Bottomcontainer: {
        height: '75%',
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    MainTopic: {
        fontSize: 24,
        color: '#2E2528',
        fontWeight: 'bold', // Set to bold
        marginTop: 25,
        textAlign: 'center',
        fontFamily: 'Poppins',
    },
    SubTopic: {
        fontSize: 15,
        color: '#2E2528',
        fontWeight: '500',
        marginTop: 5,
        textAlign: 'center',
        fontFamily: 'Poppins',
    },
    TopInput: {
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
    OtherInputs: {
        borderRadius: 10,
        borderColor: '#2E2528',
        borderWidth: 1,
        height: 55,
        width: '75%',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
        marginTop: 30,
        flexDirection: 'row',
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
    BottomLogin: {
        fontSize: 15,
        color: '#844704',
        fontWeight: 'normal', // Set to bold
        marginTop: 12,
        textAlign: 'left',
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
    BottomPlace: {
        fontSize: 15,
        color: '#844704',
        fontWeight: 'normal', // Set to bold
        marginTop: 12,
        textAlign: 'center',
        fontFamily: 'Poppins',
    },
    Icon: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10,
    },
    ErrorText: {
        color: 'red',
        marginTop: 2,
        fontSize: 12,
        marginLeft: '12%', // Adjust the value based on your design
        paddingLeft: 5,
        fontFamily: 'Poppins',
    },
});
