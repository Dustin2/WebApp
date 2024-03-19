import {SafeAreaView, Text, StyleSheet} from 'react-native';
import React from 'react';
import {HomeScreen} from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: '#ffff',
   
  },
  title: {},
});
