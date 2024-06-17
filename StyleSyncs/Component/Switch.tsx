import React, {useState} from 'react';
import {View, Switch, StyleSheet,Text} from 'react-native';

export function Switch1({isOpen}){
  const [isEnabled, setIsEnabled] = useState(isOpen);
  const toggleSwitch = () => setIsEnabled((previousState: any) => !previousState);
  const getText = () => (isEnabled ? 'Open' : 'Closed');

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: 'gray', true: 'black'}}
        thumbColor={isEnabled ? 'white' : 'white'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ transform: [{ scaleX:1.0 }, { scaleY: 1.0}],padding:0} } 
      />
      <Text style={{fontSize:12,color:"gray"}}>{getText()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:"column",
    alignItems:'flex-start',
    //alignItems:"center",  
  },
});

