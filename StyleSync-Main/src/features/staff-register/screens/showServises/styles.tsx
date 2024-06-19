import {  StyleSheet, View} from 'react-native';


export const ContainerStyles = StyleSheet.create({
  mainView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  subView1:{ 
    flex:1,
    flexDirection:"column",
  },
  spText:{
    fontSize:14
  },
  durationText:{
    fontSize:10
  },
  subView2:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  icon:{
    height:20,
    width:20
  }
 
});

export const styles = StyleSheet.create({
    input: {
      height: 30,
      width: "100%",
      marginTop: 1,
      padding: 5,
      fontSize: 14,
      fontWeight: "300",
      // borderWidth:1,
    },
    text1: {
      fontSize: 14,
      fontWeight: "400",
    },
    buttonContainer: {
      marginBottom: 14,
    },
  });