import {  ImageBackground, View , StatusBar,Text} from "react-native";
import { AppName } from "../../../Component/StaffMemberRegister/AppName";
import { globaleStyles,imageStyles} from "../../../Styles/StaffMemberRegistor/globaleStyles";
import { FlatButton } from "../../../Component/StaffMemberRegister/FlatButton";
import { useNavigation } from "@react-navigation/native";
import { TimePicker } from "../../../Component/StaffMemberRegister/TimePicker";
import axios from "axios";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";

const backImg=require("../../../../assets/StyleSync.jpeg")

export default function SetBreakTime({route}) {
    const{staffId , dayName,isOpen, openHour, closeHour, type}=route.params;
    const [bStart, setBStart]  = useState("12:00");
    const [bEnd, setBEnd] = useState("13:00");
    const [loading, setLoading] =useState(false);
    const navigation = useNavigation<StackNavigationProp<any>>();
    const handleOpenTimeValue = (value: any) => {
        setBStart(value);
      };
      const handleCloseTimeValue = (value: any) => {
        setBEnd(value);
      };

    const onHandleAddBreak = async () => {
        try {
            setLoading(true);
          const url =
            "https://stylesync-backend-test.onrender.com/app/v1/time/create-break";
          const response = await axios.post(url, {
            staffId: staffId,
            dayName: dayName,
            breakStart : bStart,
            breakEnd : bEnd,
          });
          const result = response.data;
          const { message, status } = result;
          if (status === 201) {
            navigation.navigate("SetTime", {staffId:staffId, name: dayName, isOpen: isOpen, openHour: openHour,closeHour:closeHour });
            console.log("Success", message);
          } else {
            console.log("Error", message);
          }
        } catch (error) {
          console.log(error);
        }
        finally {
            setLoading(false);
          }
      };

      const onHandleUpdate = async () => {
          try {
            setLoading(true);
            const url =
              "https://stylesync-backend-test.onrender.com/app/v1/time/update-breaks";
            const response = await axios.put(url, {
              staffId: staffId,
              dayName: dayName,
              breakStart: bStart,
              breakEnd: bEnd
            });
            const result = response.data;
            const { message, status } = result;
            if (status === 201) {
                navigation.navigate("SetTime", {staffId:staffId, name: dayName, isOpen: isOpen, openHour: openHour,closeHour:closeHour });
              console.log("Success", message);
            } else {
              console.log("Error", message);
            }
          } catch (error) {
            console.log(error);
          }
          finally {
            setLoading(false);
          }
        };
    return (
    
        <ImageBackground source={backImg} style={imageStyles.container}>
        <StatusBar />
           <AppName/>
           <View style={[globaleStyles.back,{marginTop:400}]}>
           <Text style={globaleStyles.topic}>Breaks</Text>
           
           <TimePicker
              onOpenTime={bStart}
              onCloseTime={bEnd}
              onHandleOpenTimeValue={handleOpenTimeValue}
              onHandleCloseTimeValue={handleCloseTimeValue}
            />
              <FlatButton text='Ok' onPress={type === "New" ? onHandleAddBreak: onHandleUpdate} />
           </View>
        </ImageBackground>
    );
}