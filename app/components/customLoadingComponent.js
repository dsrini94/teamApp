import React,{ Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing
} from 'react-native';

export default class AnimatedLoader extends Component
{

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

  render()
  {
    const spin = this.spinValue.interpolate({
      inputRange:[0,1],
      outputRange:['0deg','360deg']
    });

    return(
      <View style={STYLES.container}>
        <Animated.Image source={require('./../../images/redLogo.png')} resizeMode='contain' style={{height:'40%',width:'40%',transform:[{rotateY:spin}]}} />
        <Text style={STYLES.text}>{this.props.loadingMsg}</Text>
      </View>
    );
  }
}

const STYLES = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:-190
  },
  text:{
    fontSize:16,
    fontWeight:'bold',
    color:'black',
    marginTop:-80
  }
});
