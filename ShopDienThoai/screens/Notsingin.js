import React, { Component } from 'react';
import { ScrollView,FlatList,TouchableOpacity,StyleSheet, Text, View , Button, TextInput, Image, ImageBackground } from 'react-native';
import styles from '../css/Style_notsingin';

export default class Drawerscreen extends Component{
    static navigationOptions = {
        title: 'THÀNH MOBILE',
        headerStyle: {
          backgroundColor: '#FF9800',
          height: 50,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        marginLeft: 120
        },
      }
    render(){
        return(
            <View style={styles.drawer}>
                <Image
                    style={styles.imguser}
                    source={require('../src/user.png')}
                />
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('dangnhap')}>
                    <Text style={styles.dangnhap}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('dangky')}>
                    <Text style={styles.dangky}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

