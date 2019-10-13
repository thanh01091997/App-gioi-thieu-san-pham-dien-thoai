import React, { Component } from 'react';
import styles from '../css/Style_search';
import { ScrollView,FlatList,TouchableOpacity,StyleSheet, Text, View , Button, TextInput, Image, ImageBackground } from 'react-native';
// import search from '../css/search';

export default class Search extends Component{
    static navigationOptions = {
        title: 'TÌM KIẾM',
        headerStyle: {
          backgroundColor: '#FF9800',
          height: 50,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        marginLeft: 140
        },
    }
    constructor(props) {
        super(props);
        this.state = {
          textsearch: '',
         
        };
      }
    _onPress(){   
            const {textsearch} = this.state;
                fetch('http://192.168.1.102/api/search.php',
                {
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                      "search":textsearch,
                    })
                })
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
            <ScrollView style={{backgroundColor:'#ECF0F1'}}>
                <View style = {styles.search}>
                    <TextInput onChangeText ={(textsearch) => this.setState({textsearch})} placeholderTextColor="white" placeholder={'Nhập từ khóa cần tìm kiếm...'} style={styles.textsearch}></TextInput>
                    <TouchableOpacity onPress = {this._onPress.bind(this)}>
                        <Image
                            style={styles.imgsearch}
                            source={require('../src/icon_search.png')}
                        />
                    </TouchableOpacity>
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
                                                            })}  key={item.id_product}> 
                            
                            <View style={styles.itemproduct}>
                                    <Image
                                        style={styles.itemimage}
                                        source={{uri: item.img}}
                                    />
                                    <Text style={styles.itemname}>{item.name_product}</Text>
                                    <Text style={styles.itemprice}>{item.price}$</Text>
                            </View>
                            </TouchableOpacity>  
                        }
                        />
                    </View>
                    {/* <FlatList
                        data={this.state.dataSource}
                        renderItem={({item}) => 
                        
                        <TouchableOpacity> 
                        
                        <View style={styles.itemproduct}>
            
                                <Text style={styles.itemname}>{item.name_product}</Text>
                                <Text style={styles.itemprice}>{item.price}$</Text>
                        </View>
                        </TouchableOpacity>  
                    
                    }
                    />
                    <Text>gdgdsg</Text> */}
            </ScrollView>
        );
    }
}



