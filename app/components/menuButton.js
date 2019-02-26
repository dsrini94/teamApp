// importing React and React Native moduiles
import React, { Component } from 'react';
import {TouchableOpacity, Image, View} from 'react-native';


const MenuButton = (props) => {
	return (
    <View>
      <TouchableOpacity onPress={() => {props.navigation.navigate('DrawerOpen')}}>
        <Image
          source={require('../../images/menu.png')}
          style={{marginLeft:20}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MenuButton
