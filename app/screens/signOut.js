//importing React and React native modules

import React,{ Component } from 'react';
import {View, Text, StyleSheet, Image, Animated, Easing, TouchableOpacity, AsyncStorage} from 'react-native';

import AnimatedLoader from './../components/customLoadingComponent.js'

export default class SignOut extends Component
{

  static navigationOptions = {
    drawerLabel: 'SignOut',
    drawerIcon: () => (
      <Image
        source={require('./../../images/signout.png')} style={{marginTop:10,height:25,width:25}}/>
    )
  }

  constructor()
  {
    super();
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount()
  {
    this.spin();
  }

  spin()
  {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue,{
      toValue:1,
      duration:2000,
      easing:Easing.linear
    }).start(()=> this.spin());
  }

  _signOutAsync = async () => {
   await AsyncStorage.clear();
   this.props.navigation.navigate('Auth');
 };

  render()
  {
    const spin = this.spinValue.interpolate({
      inputRange:[0,1],
      outputRange:['0deg','360deg']
    });

    return(
      <View style={STYLES.outerContainer}>
        <View style={STYLES.appBar}>
            <Text style={STYLES.appBarText}>Sign Out</Text>
        </View>

        <View style={STYLES.container}>
          <Animated.Image source={require('./../../images/redLogo.png')} resizeMode='contain' style={{marginTop:-150,height:'40%',width:'40%',transform:[{rotateY:spin}]}} />

          <Text style={STYLES.text}>Please Come back and visit us to know more about Rapid Prototyping Team</Text>

          <TouchableOpacity onPress={this._signOutAsync}>
            <Text style={STYLES.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const STYLES = StyleSheet.create({
  outerContainer:{
    flex:1
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  appBar:{
    backgroundColor:'#a5154a',
    padding:18
  },
  appBarText:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  },
  text:{
    fontSize:16,
    fontWeight:'bold',
    color:'black',
    marginTop:-50,
    textAlign:'center',
    marginHorizontal:20
  },
  buttonText: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'white',
    backgroundColor: '#a5154a',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
    marginTop:20
  }
});
