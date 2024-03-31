import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import RadioGroup, { RadioGroup as RadioGroupType, RadioButtonProps } from 'react-native-radio-buttons-group';
import { globaleStyles } from "../Component/globaleStyles";
import { FlatButton } from "../Component/FlatButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export function Page01Content() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [selectedRadio, setSelectedRadio] = useState<string | undefined>();

    // Memoized radio buttons array
    const radioButtons = useMemo(() => ([
        {id: '1', label: 'Just me',     value: 'option1'},
        {id: '2', label: 'Only Staff',  value: 'option2'},
        {id: '3', label: 'Both Of Us',  value: 'option3'}
    ]), []);

    // Function to handle navigation based on selected radio button
    const handleNavigation = () => {
       if (selectedRadio === '1' ) {
         navigation.navigate('Page02' ,{name:"Your persanal Information"});
       } else if (selectedRadio === '2') {
         navigation.navigate('Page02' ,{name:"Staff persanal Information"});
       } else if(selectedRadio === '3'){
         navigation.navigate('Page02',{name:"Your persanal Information"});
       } else {
    // Alert if no option is selected
         Alert.alert('Sorry!', 'Please select an option',[
        {text:'OK' ,onPress:()=>console.log('alert closed')}
    ])
  }
};

return (
    <View style={[globaleStyles.back ,{marginTop:280}]}>
        <Text style={globaleStyles.topic}>
            What's Your Team? 
        </Text>
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedRadio}
            selectedId={selectedRadio}
            containerStyle={styles.container}
        />
        <FlatButton text='Continue' onPress={handleNavigation}/>
    </View>
);
}

const styles= StyleSheet.create({
    container:{
        alignItems:"flex-start"
      }
});






// import { useState,useMemo} from "react";
// import {  View , Text,StyleSheet,Alert} from "react-native";
// import RadioGroup from 'react-native-radio-buttons-group';
// import { globaleStyles } from "../Component/globaleStyles";
// import { FlatButton} from "../Component/FlatButton";
// import { useNavigation } from "@react-navigation/native";

// export function Page01Content(){
//     const navigation = useNavigation();
//     const[selectedRadio,setSelectedRadio]=useState()      
//      // Memoized radio buttons array
//     const radioButtons = useMemo(() => ([
//         {id: '1', label: 'Just me',     value: 'option1'},
//         {id: '2', label: 'Only Staff',  value: 'option2'},
//         {id: '3', label: 'Both Of Us',  value: 'option3'}
//     ]), []);
//     // Function to handle navigation based on selected radio button
//     const handleNavigation = () => {
//        if (selectedRadio === '1' ) {
//          navigation.navigate('Page02' ,{name:"Your persanal Information"});
//        } else if (selectedRadio==='2') {
//          navigation.navigate('Page02' ,{name:"Staff persanal Information"});
//        } else if(selectedRadio ==="3"){
//          navigation.navigate('Page02',{name:"Your persanal Information"});
//        } else{
//     // Alert if no option is selected
//          Alert.alert('Sorry!', 'Please select an option',[
//         {text:'OK' ,onPress:()=>console.log('alert closed')}
//     ])
//   }
// };

// return(
//     <View style={[globaleStyles.back ,{marginTop:280}]}>
//         <Text style={globaleStyles.topic}>
//             What's Your Team? 
//         </Text>
//         <RadioGroup 
//             radioButtons={radioButtons} 
//             onPress={setSelectedRadio}
//             selectedId={selectedRadio}
//             containerStyle={styles.container}
//         />
//         <FlatButton text='Continue' onPress={handleNavigation}/>
//     </View>
// );
// }

// export const styles= StyleSheet.create({
//     container:{
//         alignItems:"flex-start"
//       }
// })