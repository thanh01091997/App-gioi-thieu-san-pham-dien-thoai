
import React, { Component } from 'react';
import {FlatList,TouchableOpacity,StyleSheet, Text, View , Button, TextInput, Image, ImageBackground } from 'react-native';
import styles from '../css/Style_singin';
 
export default class Screen1 extends Component {
  static navigationOptions = {
    title: 'ĐĂNG NHẬP',
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
      useremail: '',
      userpass:'',
    };
  }
  
  _onPress(){
    const {useremail, userpass} = this.state;
        fetch('http://192.168.1.102/api/singin.php',
        {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
              "email":useremail, 
              "password":userpass
            })
        })
      .then((response) => response.json()) 
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
        alert(responseJson)
       
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  
  render() {
    return (
  
      <View>   
            <ImageBackground source={require('../src/bksingin_up.jpg')} style={{width: 400, height: 600}}>
              <TextInput onChangeText ={(useremail) => this.setState({useremail})} placeholderTextColor="white" placeholder={'Email'} style={styles.textinputemail}></TextInput>
              <TextInput onChangeText ={(userpass) => this.setState({userpass})} placeholderTextColor="white" secureTextEntry={true} placeholder={'Mật khẩu'} style={styles.textinputpass}></TextInput>
              <TouchableOpacity onPress = {this._onPress.bind(this)}>
                  <Text  style={styles.submit}>Đăng nhập</Text>
              </TouchableOpacity>
              <Text>
                 
              </Text>
              <View style={styles.product}>
              <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => 
                
                <TouchableOpacity> 
                  
                  <View style={styles.itemproduct}>
    
                        <Text style={styles.itemname}>{item.name}</Text>
                        <Text style={styles.itemprice}>{item.id_user}$</Text>
                  </View>
                </TouchableOpacity>  
            
              }
              />
          </View>
            </ImageBackground>
      </View>

    );
  }
}
 
 