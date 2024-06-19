import {  StyleSheet, View} from 'react-native';


export const day = StyleSheet.create({
  view2:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  view3:{
    flex: 1
  },
  view4:{
    flex:1
  },
  text:{
    fontSize:14,
  } 
  });


export const breaksStyle = StyleSheet.create({
  mainView:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  subView:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  deleteView:{
    width: 30, 
    alignItems: "center" 
  },
  rightView:{
    width: 40, 
    alignItems: "center"
  },
  icon:{
    width: 20, 
    height: 20 
  }
});

export const setTimeStyle = StyleSheet.create({
  mainView:{
     flexDirection: "row", 
     justifyContent: "space-between"
  },
  View1:{
    flexDirection: "column", 
    justifyContent: "space-between" 
  },
  View2:{
    alignItems: "center" 
  },
  switchText:{
    fontSize: 12, 
    color: "#808080"
  },
  breakTopic:{
    color: "#000000", 
    fontSize: 14, 
    fontWeight: "400" 
  }

})