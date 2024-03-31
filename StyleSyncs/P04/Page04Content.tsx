import React ,{  useState } from 'react';
import {  View ,Text,StyleSheet,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import CircleCheckBox  from 'react-native-circle-checkbox';
import { SeparatorLineWithText } from '../Component/line';
import { FlatButton } from '../Component/FlatButton';
import { globaleStyles } from '../Component/globaleStyles';

export function Page04Content(){
  const navigation = useNavigation<StackNavigationProp<any>>();
    //const navigation = useNavigation();
 
    const Skills=[
        {id:1,  name:"Hair Service",},
        {id:2,  name:"Nail servise",},
        {id:3,  name:"Facials",     },
        {id:4,  name:"Waxing",      },
        {id:5,  name:"Body Massage",},
        {id:6,  name:"Pre-bridal grooming",},
        {id:7,  name:"Others",      },
      ]
       // State variables for managing selected checkboxes
      const [selectedCheck, setSelectedCheck] = useState(Skills.map(() => false));
      const [hasSelected, setHasSelected] = useState(false);
      // Function to handle checkbox click
      const handleCheckboxClick = (index) => {
        const newSelectedCheck = [...selectedCheck];
        newSelectedCheck[index] = !newSelectedCheck[index];
        setSelectedCheck(newSelectedCheck);
        // Update selection state
        setHasSelected(newSelectedCheck.some((checked) => checked)); 
      };
      // Function to handle continue button press
      const handleContinue = () => {
        if (!hasSelected) {
          alert('Please select at least one service.'); // Display error message
          return; // Prevent navigation when no service is selected
        }
        // Filtering selected services and getting their names
        const selectedServiceNames = Skills
          .filter((skill, index) => selectedCheck[index])
          .map((skill) => skill.name);
        navigation.navigate('Page05', { selectedServices: selectedServiceNames });
      };
                const outerSize = 18;
                const innerSize = 12;
    return(
        <View style={[globaleStyles.back,{marginTop:200}]}>
             <Text style={globaleStyles.topic}>Your Services</Text>
            <Text style={globaleStyles.Stopic}>When can client book with you</Text>
            <View>
                 {Skills.map((item, index) => (
                      <TouchableOpacity key={index} onPress={() => handleCheckboxClick(index)}>
                        <View style={styles.checkBox}>
                          <Text style={{ fontSize: 14 }}>{item.name}</Text>
                          <CircleCheckBox
                            onToggle={() => handleCheckboxClick(index)}
                            checked={selectedCheck[index]}
                            outerColor="#000000"
                            innerColor="#000000"
                            outerSize={outerSize} 
                            innerSize={innerSize}
                          />
                        </View>
                        <SeparatorLineWithText lineColor={"gray"}/>
                     </TouchableOpacity>
                    ))}
             </View>
             <FlatButton text='Continue' onPress={handleContinue} />
         </View>

    );
}

export const styles= StyleSheet.create({
    checkBox:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 3 
    }
})