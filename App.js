import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import LawListScreen from './src/screens/LawListScreen';
import LawDetailScreen from './src/screens/LawDetailScreen';
// import Appbar from './src/components/Appbar';
import {createStackNavigator, createAppContainer} from 'react-navigation';



const App = createStackNavigator(
  {
    Home:LawListScreen,
    Detail:LawDetailScreen
  },
  {
    initialRouteName:'Home'
  }
  );


export default createAppContainer(App)