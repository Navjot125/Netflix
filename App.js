import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainComponent from './Components/MainComponent';

const App = () => {
  return (
    <NavigationContainer>
      <MainComponent />
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
