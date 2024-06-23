import { StyleSheet } from 'react-native';

export const signUp = StyleSheet.create({

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
        //fontFamily: 'Poppins',
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
        alignItems:'center'
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
        //fontFamily: 'Poppins',
    },
    BottomLogin: {
        fontSize: 15,
        color: '#844704',
        fontWeight: 'normal', // Set to bold
        marginTop: 12,
        textAlign: 'left',
       // fontFamily: 'Poppins',
    },
    BottomPlace: {
        fontSize: 15,
        color: '#844704',
        fontWeight: 'normal', // Set to bold
        marginTop: 12,
        textAlign: 'center',
        //fontFamily: 'Poppins',
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
       // fontFamily: 'Poppins',
    },
});
