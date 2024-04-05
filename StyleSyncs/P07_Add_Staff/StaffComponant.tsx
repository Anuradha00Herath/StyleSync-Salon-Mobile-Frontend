import {  View, StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { SeparatorLineWithText } from '../Component/line';

export  function StaffComponent({name,Service,onPress}){
    return(
        <View>
             <View style={styles.container}>
                <View style={styles.FlexBox1}>
                <View style={styles.Box}></View> 
                <View style={{ marginLeft:7}}>
                    <Text>{name}</Text>
                </View>
                </View>
                <View style={styles.FlexBox2}>
                    <Text>{Service}</Text>
                </View>
                <View style={styles.FlexBox3}>
                      <Icon name='right' size={20} color={"black"} style={{width:20,height:20}}onPress={onPress}/>
                </View>
             </View>
             <SeparatorLineWithText lineColor={"gray"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
      },
    FlexBox1:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    Box:{
        width:30,
        height:30,
        backgroundColor:"#D9D9D9",
        borderRadius:5,
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
})