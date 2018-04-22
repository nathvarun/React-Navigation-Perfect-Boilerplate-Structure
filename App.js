import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import DrawerNavigator from './screens/DrawerNavigator'
export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = new StackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: 'none'
    }
  }
}, {
    navigationOptions: {
      gesturesEnabled: false
    }
  })


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
