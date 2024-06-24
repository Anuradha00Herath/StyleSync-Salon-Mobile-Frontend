import React from "react";
import{View,Text,StyleSheet,FlatList,TouchableOpacity } from  'react-native';
import { globaleStyles } from "../../components/globaleStyles";
import { useNavigation } from "@react-navigation/native";
import Icon from '@expo/vector-icons/AntDesign';
import { SeparatorLineWithText } from '../../components/line';
import{ContainerStyles} from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { AddMore } from "../../components/AddMore";
import { FlatButton } from "../../components/FlatButton";


export function StaffContent({ staffName }) {
   const navigation = useNavigation<StackNavigationProp<any>>();
   // Flatten the array of arrays into a single array of objects
   const flattenedStaff = staffName.flatMap(array => array);

//    const handleDelete = async () => {
//     try{
//       setLoading(true);
//       const url = "https://stylesync-backend-test.onrender.com/app/v1/service/delete-staff-service";
//       const response = await axios.delete(url, { params: {serviceId, staffId} });
//       const result = response.data;
//       const {status, message} = result;
//       if (status === 200){
//         console.log("Success", message);
//         handleFetchservice();
//         //fetchBusinessHours();
//       }
//     }catch{
//       console.log("error");
//     }finally{
//       setLoading(false);
//     }
//   }

   return (
       <View style={[globaleStyles.back,{marginTop:400}]}>
         <View>
           <Text style={globaleStyles.topic}>Your Staff</Text> 
           <Text style={globaleStyles.Stopic}>When can clients book with you</Text>
           <View style={{height:300 ,justifyContent:"flex-start"}}>
               <FlatList
                   data={flattenedStaff}
                   renderItem={({ item }) => (
                       <StaffComponent
                           name={item.name}
                           // You can pass other props here if needed
                       />
                   )}
                   ListFooterComponent={() => (
                       <View style={{ alignItems: "flex-start", marginBottom: 20 }}>
                           <AddMore onPress={() => navigation.navigate('PersanalInformation', { name: "Staff personal Information" })}/>
                       </View>
                   )}
               />
           </View>
           </View>
           <FlatButton text='Continue' onPress={"Page07"}/>
       </View>
   );
}

export  function StaffComponent({name}){
    //console.log(name);
    return(
        <View>
             <View style={ContainerStyles.mainView}>
                <View style={ContainerStyles.subView1}>
                    <View style={ContainerStyles.imageView}>
                    </View> 
                    <View style={ContainerStyles.text}>
                        <Text>{name}</Text>
                    </View>
                </View>
               
                <View style={ContainerStyles.subView2}>
                <TouchableOpacity>
                    <Icon
                      name="delete"
                      size={20}
                      color={"#71797E"}
                      style={{ width: 20, height: 20 }}
                /> 
                </TouchableOpacity>
                </View>
                
                
             </View>
             <SeparatorLineWithText/>
        </View>
    )
}


