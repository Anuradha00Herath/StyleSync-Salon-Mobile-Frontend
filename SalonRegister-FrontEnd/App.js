import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigation from './src/Navigations/AppNavigation';
import 'react-native-gesture-handler';

function App() {
  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;

