import React, { Component } from 'react';
import { ScrollView,StyleSheet, Text,View, Image,FlatList ,TouchableOpacity , YellowBox,Button} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../css/Style_home';


export default class TittleHome extends React.Component {
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
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  componentDidMount(){
    return fetch('http://192.168.1.102/api/product.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

    render() {
      return (
            <ScrollView style={{backgroundColor:'#FF9800'}}>
        
            <View style={styles.slidehome}>
                <Swiper autoplay={true} style={styles.wrapper}>
                  <Image  style={styles.imagenanner} source={require('../src/anh8.jpg')}/>
                  <Image  style={styles.imagenanner} source={require('../src/anh4.jpg')}/>
                  <Image  style={styles.imagenanner} source={require('../src/anh5.jpg')}/>
                  <Image  style={styles.imagenanner} source={require('../src/anh6.jpg')}/>
                  <Image  style={styles.imagenanner} source={require('../src/anh7.png')}/>
                </Swiper>
            </View>

            <View style={styles.product}>
              <FlatList
                horizontal={false}
                numColumns={2}
                data={this.state.dataSource}
                renderItem={({item}) => 
                
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Detailsproduct', {
                                                  name_product: item.name_product,
                                                  price: item.price,
                                                  image: item.img,
                                                  des: item.des
                                                  })}  > 
                  
                  <View style={styles.itemproduct}>
                        <Image
                            style={styles.itemimage}
                            source={{uri: item.img}}
                          />
                        <Text style={styles.itemname}>{item.name_product}</Text>
                        <Text style={styles.itemprice}>{item.price} VNĐ</Text>
                  </View>
                </TouchableOpacity>  
            
              }
              />
          </View>
        </ScrollView>  
      );
    }
  }

  
  