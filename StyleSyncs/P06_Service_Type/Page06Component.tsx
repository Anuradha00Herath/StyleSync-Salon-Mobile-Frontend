import {  View, StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SeparatorLineWithText } from '../Component/line';

export  function Page06Component({text,price,duration,onPress}) {
    return (
        <View>
              <View style={{flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',}}>
                <View style={{ flex:1,
                               flexDirection:"column",}}>
                      <Text style={{fontSize:14,}}>{text}</Text>
                      <Text style={{fontSize:10,}}>{duration}Min</Text>
                </View>
                <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                }}>
                  <View>
                     <Text style={{fontSize:14,}}>LKR{price}</Text>
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
                  <View style={{ width: 30, alignItems: "center" }}>
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
    );}

    