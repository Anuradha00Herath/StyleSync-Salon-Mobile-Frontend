import React ,{  useState } from 'react';
import {  View ,Text,StyleSheet,TouchableOpacity} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import CircleCheckBox  from 'react-native-circle-checkbox';
import { SeparatorLineWithText } from '../../../Component/StaffMemberRegister/line';
import { FlatButton } from '../../../Component/StaffMemberRegister/FlatButton';
import { globaleStyles } from '../../../Styles/StaffMemberRegistor/globaleStyles';
import axios from 'axios';

export function SelectServicesContent({ staffId }) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]); // Provide a default empty array

  useFocusEffect(
    React.useCallback(() => {
      const fetchBusinessHours = async () => {
        try {
          setLoading(true);
          const url = "https://stylesync-backend-test.onrender.com/app/v1/service/get-all-service-type";
          const response = await axios.get(url, { params: { staffId } });
          setServices(response.data.data);
          console.log(response.data.data)
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchBusinessHours();

      return () => {
        // Clean up function
      };
    }, [staffId])
  );

  const [selectedCheck, setSelectedCheck] = useState([]);
  const [hasSelected, setHasSelected] = useState(false);

  const handleCheckboxClick = (index) => {
    const newSelectedCheck = [...selectedCheck];
    newSelectedCheck[index] = !newSelectedCheck[index];
    setSelectedCheck(newSelectedCheck);
    setHasSelected(newSelectedCheck.some((checked) => checked));
  };

  const handleContinue = async () => {
    if (!hasSelected) {
      alert('Please select at least one service.');
      return;
    }
    else{
      try{
        const url =
          "https://stylesync-backend-test.onrender.com/app/v1/service/staff-service-create";
          const response = await axios.post(url,{
            staffId : staffId,
            serviceType : selectedServiceNames
          })
          const result = response.data;
          const { status , message} = result;
          if (status === 200) {
            console.log("Success", message);
            navigation.navigate('SalonServices', { staffId });
          } else if (status === 400) {
            console.log("Failed", message);
          } else {
            console.log("Something went wrong!");
          }
      }catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

  };
  //generating an array of selected service names based on the checkboxes 
  const selectedServiceNames = services
      .filter((service, index) => selectedCheck[index])
      .map((service) => service);

      console.log(staffId);

  const outerSize = 18;
  const innerSize = 12;

  return (
    <View style={[globaleStyles.back, { marginTop: 200 }]}>
      <Text style={globaleStyles.topic}>Your Services</Text>
      <Text style={globaleStyles.Stopic}>When can client book with you</Text>
      <View>
        {services && services.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleCheckboxClick(index)}>
            <View style={styles.checkBox}>
              <Text style={{ fontSize: 14 }}>{item}</Text>
              <CircleCheckBox
                onToggle={() => handleCheckboxClick(index)}
                checked={selectedCheck[index]}
                outerColor="#000000"
                innerColor="#000000"
                outerSize={outerSize}
                innerSize={innerSize}
              />
            </View>
            <SeparatorLineWithText lineColor={"gray"} />
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