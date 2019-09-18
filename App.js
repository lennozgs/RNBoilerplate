/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Rooter from './navigation/Router';

const App = () => {
  return (
      <Rooter style={{flex:1}}/>
  );
};

const styles = StyleSheet.create({

});

export default App;
