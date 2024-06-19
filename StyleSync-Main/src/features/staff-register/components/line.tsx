import React from 'react';
import { View,  StyleSheet } from 'react-native';

export function SeparatorLineWithText() {
  return (
    <View style={styles.separator}>
      <View style={[styles.line]} />
    </View>
  );
};
const styles = StyleSheet.create({
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1, // Adjust thickness as needed
    marginHorizontal: 0,
    backgroundColor:"#808080"
  }, 
});

 