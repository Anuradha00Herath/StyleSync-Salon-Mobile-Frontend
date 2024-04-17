import {View,StyleSheet,Text,StatusBar,ImageBackground} from 'react-native';
import { globaleStyles ,imageStyles} from '../Component/globaleStyles';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/AntDesign';
import { SeparatorLineWithText } from '../Component/line';
import { FlatButton } from '../Component/FlatButton';
import { AppName } from '../Component/AppName';
import { AddMore } from '../Component/AddMore';

const backImg=require("../assets/StyleSync.jpeg")

export function SalonServices({ route }){
  const navigation = useNavigation<StackNavigationProp<any>>();
    //const navigation = useNavigation();
    const { selectedServices } = route.params;
    // Function to navigate to respective service pages
    const navigateToServicePage = (serviceName) => {
      switch (serviceName) {
        case "Hair Service":
          navigation.navigate("HairService");
          break;
        case "Nail servise":
          navigation.navigate("NailService");
          break;
          case "Facials":
            navigation.navigate("Facials");
            break;
            //Add additional cases for other service names and their corresponding pages
        default:
          // Handle case where service name doesn't match any known option (optional)
          console.warn(`Unknown service name: ${serviceName}`);
      }
    };

    return(
    <ImageBackground source={backImg} style={imageStyles.container}>
        <StatusBar/>
        <AppName/>
        <View style={[globaleStyles.back,{marginTop:400}]}>
              <Text style={globaleStyles.topic}>Your Services</Text>
              <Text style={globaleStyles.Stopic}>When can client book with you</Text>
                 {selectedServices.map((serviceName, index) => (
                      <View key={index} >
                         <View style={{flexDirection: 'row',
                                       alignItems: 'center',
                                       justifyContent: 'space-between',
                                      }}>
                            <View>
                            <Text>{serviceName}</Text>
                            </View>
                            <View
                                style={{
                                       flexDirection: "row",
                                       alignItems: "center",
                                       justifyContent: "flex-start",
                                      }}
                            >
                             <View style={{ width: 30, alignItems: "center" }}>
                                <Icon
                                  name="delete"
                                  size={20}
                                  color={"#71797E"}
                                  style={{ width: 20, height: 20 }}
                                  onPress={() =>navigation.navigate("Staff")}
                               />
                            </View>
                            <View style={{ width: 40, alignItems: "center" }}>
                                <Icon
                                  name="right"
                                  size={20}
                                  color={"#71797E"}
                                  style={{ width: 20, height: 20 }}
                                  onPress={() => navigation.navigate("SetBreakTime", )}
                               />
                            </View>
                          </View>
                          </View>
                          <SeparatorLineWithText lineColor={"gray"}/>
                       </View>
                   ))}
                   <AddMore onPress={() =>navigation.navigate("Staff")}/>
                 <FlatButton text='Continue' onPress={() =>navigation.navigate("Staff")} />
         </View>
    </ImageBackground>
    );
}
