import React, { Component } from 'react';
import { ScrollView,FlatList,TouchableOpacity,StyleSheet, Text, View , Button, TextInput, Image, ImageBackground } from 'react-native';

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
                    source={require('../src/bksingin_up.jpg')}
                />
                <Text style={styles.tendangnhap}>Thành Béo</Text>
                <TouchableOpacity onPress={() =>this.props.navigation.navigate('dangnhap_ky')}>
                    <Text style={styles.dangxuat}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    drawer:{
        backgroundColor:'#ECF0F1',
        justifyContent:'center',
        alignItems:'center',
        height:470
    },
    imguser:{
        width: 150,
        height:150,
        borderRadius: 100,
   
    },
    tendangnhap:{
        color: '#FF9800',
        textAlign:'center',
        fontSize: 17,
        marginTop: 20
    },
    dangxuat:{
        width: 170,
        height: 35,
        backgroundColor:'#FF9800',
        color: '#fff',
        borderRadius: 20,
        textAlign:'center',
        fontSize: 17,
        paddingTop: 5,
        marginTop: 10
    },
})