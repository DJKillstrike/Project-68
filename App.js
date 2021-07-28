import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import fb from './Screens/fb';
import insta from './Screens/insta';

export default class App extends React.Component{
  render(){
    return(
        <AppContainer />
    )
  }
}

const tabNavigator = createBottomTabNavigator ({

Facebook: {screen: fb},
Instagram: {screen: insta}
  
})

const AppContainer = createAppContainer (tabNavigator)