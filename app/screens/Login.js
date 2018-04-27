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
} from 'react-native';
import PropTypes from 'prop-types';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImageContainer: {
    height: '100%',
    width: '100%',
  },
  logoAndTitleContainer: {
    flex: 1,
    height: win.height / 3 + 50,
    width:win.width,
    marginTop:20
  },
  scrollContainer: {
    flex: 1,
  },
  logo: {
    height: 250,
    width: 250,
    flex: 1,
    marginTop: 20,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
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
    flex: 1,
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
  },
  googleButtonContainer: {
    alignItems: 'center',
    marginBottom: 20,
    flex: 1,
  },
  googleButtonText: {
    padding: 0,
    color: 'white',
    fontSize: 16,
  },
  googleButton: {
    marginTop: 0,
  },
});

export default class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handleLoginPress = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <ImageBackground
        source={require('./../../images/background.jpg')}
        style={styles.backgroundImageContainer}
      >
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.logoAndTitleContainer}>
            <View style={styles.logoContainer}>
              <Image source={require('./../../images/logo.png')} style={styles.logo} />
              <Text style={styles.leftTagLine}>Concept to Reality...</Text>
              <Text style={styles.titleText}>Rapid Prototyping</Text>
            </View>

            <View>
              <Text style={styles.rightTagLine}>Seeing is Believing...</Text>
            </View>
          </View>

          <View style={{ justifyContent: 'center' }}>
            <View style={styles.loginContainer}>
              <TextInput
                style={styles.inputText}
                underlineColorAndroid="#7c1265"
                placeholder="Username"
                placeholderTextColor="#7c1265"
              />
              <TextInput
                style={styles.inputText}
                secureTextEntry
                underlineColorAndroid="#7c1265"
                placeholder="Password"
                placeholderTextColor="#7c1265"
              />
              <TouchableOpacity style={styles.button} onPress={this.handleLoginPress}>
                <Text style={styles.buttonText}>Sign Me In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
