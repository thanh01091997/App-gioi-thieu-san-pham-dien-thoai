import React, {Component} from 'react';
import { Button, Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator,DrawerActions } from 'react-navigation-drawer';


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
 
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class AppScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details111"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: {
      screen: HomeScreen,
  },
  Details: {
      screen: DetailsScreen,
  }
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen,
});
const AppStack = createStackNavigator({
  App: AppScreen,
  Details: DetailsScreen,
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Settings: SettingsStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Home',
      tabBarOptions: {
        showIcon: true,
        activeTintColor: 'blue',
        labelStyle: {
          fontSize: 12, 
        },
        style: {
          backgroundColor: 'lightgray',
        },
      }
    }
  )

);



import * as React from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';

class TabOne extends React.Component {
  render(){
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Open Drawer"
        />
      </View>
    );
  }
}
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />

        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Open Drawer"
        />

      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}


const BottomNavigator = createBottomTabNavigator(
  {
    HomeTab: TabOne,
    SettingsTab:TabOne,
    DetailsTab:TabOne,
  }
);


const MyApp = createDrawerNavigator({
  BottomNavigator: {
    screen: BottomNavigator,
  },
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
}, {
  navigationOptions: {
    drawerLockMode: 'locked-closed'
  }
});


export default createAppContainer(MyApp);