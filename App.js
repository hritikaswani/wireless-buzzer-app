import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import fb from './screens/fb';
import In from './screens/in';

export default class App extends React.Component {
  render(){
  return (
    
      <AppContainer/>
    
  );
  }
}

const TabNavigator=createBottomTabNavigator({
  Fb:{screen:fb},
  In:{screen:In},
})

const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});