import {  View, StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SeparatorLineWithText } from '../Component/line';

export  function Page06Component({text,price,duration,onPress}) {
    return (
        <View>
              <View style={styles.container}>
                <View style={styles.FlexBox1}>
                      <Text style={styles.text}>{text}</Text>
                      <Text style={styles.text1}>{duration}Min</Text>
                </View>
                <View style={styles.FlexBox2}>
                      <Text style={styles.text}>LKR{price}</Text>
                </View>
                <View style={styles.FlexBox3}>
                      <Icon name='right' size={20} color={"black"} style={{width:20,height:20}}onPress={onPress}/>
                </View>
              </View>
                <SeparatorLineWithText lineColor={"gray"}/>
        </View>
    );}

    const styles = StyleSheet.create({
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        FlexBox1:{
          flex:1,
          flexDirection:"column",
          },
        text: {
          fontSize:14,
        },
        text1:{
          fontSize:10,
          },
        FlexBox2:{
          flexGrow:1,
          alignItems:"flex-end"
        },
        FlexBox3:{
          flex:0.2,
          width:50,
          alignItems:"center",
          //alignItems:"flex-end"
          
        },
    }
    );