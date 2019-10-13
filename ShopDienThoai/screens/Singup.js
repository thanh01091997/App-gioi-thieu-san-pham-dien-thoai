import React, { Component } from 'react';
import {Alert,TouchableOpacity,StyleSheet, Text, View , Button, TextInput, Image, ImageBackground } from 'react-native';
import styles from '../css/Style_singup';
 
export default class Screen1 extends Component {
  static navigationOptions = {
    title: 'ĐĂNG KÝ',
    headerStyle: {
      backgroundColor: '#FF9800',
      height: 50,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
    marginLeft: 90
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      useremail: '',
      userpassword:'',
      userrepass:'',
    };
  }
  _onPress(){
        const {username, useremail, userpassword, userrepass} = this.state;
        fetch('http://192.168.1.102/api/insert_singup.php',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
              "name":username,
              "email":useremail, 
              "password":userpassword,
              "repassword":userrepass  
            })
        })
      .then((response) => response.json()) 
      .then((responseJson) => {
          alert(responseJson);
          if(responseJson == 'Đăng ký thành công!!') return this.onSingin();
      })
      .catch((error) =>{
        console.error(error);
      });
      
  }
  onSingin(){
    Alert.alert(
      'Notice',
      'Đăng ký thành công!!!',
      [
        { text: 'ok', onPress:() => this.props.navigation.navigate('dangnhap')}
      ],
      { cancelabel: false},
    );
  }
 
  render() {
    return (
      <View>
            <ImageBackground source={require('../src/bksingin_up.jpg')} style={{width: 400, height: 600}}>
              <TextInput onChangeText ={(username) => this.setState({username})} placeholderTextColor="white" placeholder={'Tên tài khoản'} style={styles.textinputname}></TextInput>
              <TextInput onChangeText ={(useremail) => this.setState({useremail})} placeholderTextColor="white" placeholder={'Email'} style={styles.textinputemail}></TextInput>
              <TextInput onChangeText ={(userpassword) => this.setState({userpassword})} placeholderTextColor="white" secureTextEntry={true} placeholder={'Mật khẩu'} style={styles.textinputpass}></TextInput>
              <TextInput onChangeText ={(userrepass) => this.setState({userrepass})} placeholderTextColor="white" secureTextEntry={true} placeholder={'Nhập lại mật khẩu'} style={styles.textinputpass}></TextInput>
              <TouchableOpacity onPress={this._onPress.bind(this)}>
                  <Text style={styles.submit}>Đăng ký</Text>
              </TouchableOpacity>
            </ImageBackground>
      </View>
      
    );
  }
}
 
 