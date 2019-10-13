import React, { Component } from 'react';
import { StyleSheet,Text,View, Image, TouchableOpacity , YellowBox,Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Singin from './screens/Singin';
import Singup from './screens/Singup';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import TittleHome from './screens/TittleHome';
import Search from './screens/Search';
import DetailsScreen from './screens/DetailsScreen';
import Contact from './screens/Contact';
import NotSingin from './screens/Notsingin';
import Icon from 'react-native-vector-icons/Ionicons';


const Home_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: TittleHome,
  },
  Detailsproduct: {
    screen: DetailsScreen,
  }
});

const Search_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Second: {
    screen: Search,
  },
});

const Contact_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Second: {
    screen: Contact,
  },
 
});
 
const Notsingin_StackNavigator = createStackNavigator({
  First:{
    screen: NotSingin,
  },
  dangnhap:{
    screen: Singin,
  },
  dangky:{
    screen: Singup,
  },
 
});

const BottomNavigator = createBottomTabNavigator(
  {
    Home: Home_StackNavigator,
    Search: Search_StackNavigator,
    contact: Contact_StackNavigator,
    User: Notsingin_StackNavigator,
  }
);

const color = {
  ACTIVE: '#147efb',
  INACTIVE:  '#ccc'
}

Home_StackNavigator.navigationOptions = {
  tabBarLabel: 'Trang chủ',
  tabBarIcon: ({ focused}) =>{
    return <Icon  name="ios-home" size={25} color={focused ? color.ACTIVE: color.INACTIVE} />
   }
}
Search_StackNavigator.navigationOptions = {
tabBarLabel: 'Tìm kiếm',
tabBarIcon: ({ focused}) =>{
  return <Icon  name="ios-search" size={25} color={focused ? color.ACTIVE: color.INACTIVE} />
 }
}
Contact_StackNavigator.navigationOptions = {
tabBarLabel: 'Liên hệ',
tabBarIcon: ({ focused}) =>{
  return <Icon name="ios-contacts" size={25} color={focused ? color.ACTIVE: color.INACTIVE} />
 }
}
Notsingin_StackNavigator.navigationOptions = {
tabBarLabel: 'Người dùng',
tabBarIcon: ({ focused}) =>{
  return <Icon name="ios-person" size={25} color={focused ? color.ACTIVE: color.INACTIVE} />
 }
}

export default createAppContainer(BottomNavigator);

