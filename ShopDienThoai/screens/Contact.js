import React, { Component } from 'react';
import { FlatList,ScrollView,StyleSheet,Text,View, Image, TouchableOpacity , YellowBox,Button} from 'react-native';
import styles from '../css/Style_contact';

export default class Contact extends Component{
    static navigationOptions = {
        title: 'LIÊN HỆ',
        headerStyle: {
          backgroundColor: '#FF9800',
          height: 50,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        marginLeft: 150
        },
    }
    render(){
        return(
            <ScrollView style={{backgroundColor:'#FF9800'}}>
                <View style={styles.allcontact}>
                    <View >
                        <Image 
                            style ={styles.img}
                            source = {{uri: 'http://onetele.online/wp-content/uploads/2019/01/logo-TT-Solution.png'}}
                        />
                    </View>
                    <View style={styles.item}>
                        <Image 
                            style ={styles.imgitem}
                            source = {{uri: 'https://png.pngtree.com/svg/20170710/address_orange_322201.png'}}
                        />
                        <Text style ={styles.textaddress}>99,Phường Mường Thanh,TP Điện Biên</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style ={styles.item}>
                        <Image 
                            style ={styles.imgitem}
                            source = {{uri: 'https://bomnhapkhau.net/wp-content/uploads/2018/08/kpi-icons-01.png'}}
                        />
                        <Text style ={styles.texttelephone}>0339 999 999</Text>
                    </View>
                    <View style={styles.line}></View>
                    <View style ={styles.item}>
                        <Image 
                            style ={styles.imgitem}
                            source = {{uri: 'https://www.trzcacak.rs/myfile/detail/367-3677222_orange-transparent-email-icon-light-blue-mail-icon.png'}}
                        />
                        <Text style ={styles.textemail}>thanhmobile@gmail.com</Text>
                    </View>
                    <View style={styles.line}></View>
                </View>
            </ScrollView>
        );
    }
}


  