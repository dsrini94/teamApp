// importing react and react native modules
import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import PropTypes from 'prop-types';

//importing snackbar modules
import SnackBar from 'react-native-custom-snackbar';

//obtaining the dimesions of the mobile screen
const win = Dimensions.get('window');

const styles = StyleSheet.create({

  backgroundImageContainer: {
    height: '100%',
    width: '100%',
  },
  logoAndTitleContainer: {
      flex:3,
      justifyContent:'center',
      alignItems:'center'
  },
  logo: {
    height: 200,
    width: 200,
    marginBottom:20
  },
  titleText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Cochin',
  },
  leftTagLine: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    marginRight: 140,
  },
  rightTagLine: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    marginLeft: 140,
  },
  loginContainer: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 15,
    justifyContent: 'center',
  },
  inputText: {
    height: 40,
    fontSize: 16,
    color: '#7c1265',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#a5154a',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 16,
    textAlign: 'center',
  }
});

export default class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };


  constructor(props)
  {
    super(props);
    this.state={
      Username:'',
      Password:'',
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = async () => {

    if(this.state.Username == '' || this.state.Password == '')
    {
      this.refs.mySnackBar.show("Please fill all the fields");
    }
    else {

      try {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
      } catch (error) {
          this.refs.mySnackBar.show("Problem with the Sign In");
      }
    }

  };


  render() {
    return (
      <ScrollView contentContainerStyle={{flex:1}}>
        <ImageBackground source={require('./../../images/background.jpg')} style={styles.backgroundImageContainer}>
          <View style={{flex:1}}>
            <View style={styles.logoAndTitleContainer}>
              <Image source={require('./../../images/logo.png')} resizeMode="cover" style={styles.logo}/>
                 <View>
                   <Text style={styles.leftTagLine}>Concept to Reality...</Text>
                   <Text style={styles.titleText} minimumFontScale={0.5}>Rapid Prototyping</Text>
                   <Text style={styles.rightTagLine}>Seeing is Believing...</Text>
                 </View>
            </View>

            <View style={{flex:2}}>
                   <View style={styles.loginContainer}>
                     <TextInput
                       style={styles.inputText}
                       underlineColorAndroid="#7c1265"
                       placeholder="Username"
                       placeholderTextColor="#7c1265"
                       keyboardType='email-address'
                       onChange = {(Username)=>{this.setState({Username})}}
                     />
                     <TextInput
                       style={styles.inputText}
                       secureTextEntry
                       underlineColorAndroid="#7c1265"
                       placeholder="Password"
                       placeholderTextColor="#7c1265"
                       onChange = {(Password)=>{this.setState({Password})}}
                     />
                     <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                       <Text style={styles.buttonText}>Sign Me In</Text>
                     </TouchableOpacity>
                   </View>
            </View>
          </View>

          <View >
            <SnackBar snackBarBackColor = "rgba(0,0,0,1)"
              ref = "mySnackBar"
              closeText = "close"/>
          </View>

        </ImageBackground>
      </ScrollView>
    );
  }
}
