import React, {Component} from 'react';
import { TouchableOpacity,ScrollView,Image,StyleSheet,View, Text,Button,navigation } from 'react-native';
import styles from '../css/Style_details';

export default class DetailsScreen extends Component {
  static navigationOptions =  {
      title: 'CHI TIẾT SẢN PHẨM',
        headerStyle: {
          backgroundColor: '#FF9800',
          height: 50,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        marginLeft: 50
      },
    };
  
 
  render() {
    return (
      <ScrollView>
            <View style={styles.alldetail}>
                  <View style={styles.viewimg}>
                        <Image
                              style={styles.itemimage}
                              source={{uri: this.props.navigation.getParam('image', 'NO-ID')}}
                          />
                  </View>
                  <View style={styles.viewtext}>
                        <Text style={styles.textname}>{this.props.navigation.getParam('name_product', 'NO-ID')}</Text>
                        <Text style={styles.textprice}>{this.props.navigation.getParam('price', 'NO-ID')} VNĐ</Text>
                  </View>
            </View>
            <View style={styles.des}>
                <Text style={styles.destext}>Thông tin chi tiết:</Text>
                <Text style={styles.infodes}>{this.props.navigation.getParam('des', 'NO-ID')}</Text>
            </View>
      </ScrollView>
    );
  }
}


