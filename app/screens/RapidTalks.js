//importing react and react native modules
import React,{Component} from 'react'
import { ImageBackground,View,Text,StyleSheet } from 'react-native';

export default class RapidTalks extends Component
{
  render()
  {
    return(
      <View style={STYLES.container}>
        <Text style={STYLES.text}>No Posts Yet !!!</Text>
      </View>
    );
  }
}

const STYLES = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:18,
    fontWeight:'bold'
  }
});
