import {  View, StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SeparatorLineWithText } from '../Component/line';

export  function StaffComponent({name,Service,onPress}){
    return(
        <View>
             <View style={{ flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: "space-between",}}>
                <View style={{flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent:"flex-start"}}>
                    <View style={{width:30,
                                  height:30,
                                  backgroundColor:"#D9D9D9",
                                  borderRadius:5,}}>
                    </View> 
                    <View style={{ marginLeft:7}}>
                        <Text>{name}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row",
                               alignItems: "center",
                               justifyContent: "flex-start",}}>
                <View>
                    <Text>{Service}</Text>
                </View>
                <View style={{ width: 30, alignItems: "center" }}>
                    <Icon
                      name="delete"
                      size={20}
                      color={"#71797E"}
                      style={{ width: 20, height: 20 }}
                      onPress={onPress}
                />
                </View>
                <View style={{ width: 40, alignItems: "center" }}>
              <Icon
                name="right"
                size={20}
                color={"#71797E"}
                style={{ width: 20, height: 20 }}
                onPress={onPress}
              />
            </View>
                </View>
             </View>
             <SeparatorLineWithText lineColor={"gray"}/>
        </View>
    )
}

