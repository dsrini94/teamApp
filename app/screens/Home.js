// importing React and React Native moduiles
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  YellowBox
} from 'react-native';
import PropTypes from 'prop-types';

import FlatListSwiper from './../components/FlatListSwiper';

YellowBox.ignoreWarnings(['Warning: isMounted','Warning: Failed prop type']);

const styles = StyleSheet.create({
  backgroundImageContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  center: {
    alignItems: 'center',
  },
  headingBanerText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    padding: 15,
    backgroundColor: '#a5154a',
  },
  headingBaner: {
    backgroundColor: 'white',
    width: 290,
    marginTop: -30,
  },
  heading1: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  imageStyle: {
    marginTop: 24,
    height: 80,
    width: 80,
    marginBottom: 8,
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
  },
  trendingContainer: {
    backgroundColor: 'rgba(0, 0, 0,0.2)',
    padding: 10,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
  },
  category: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  categoryText: {
    flexDirection: 'row',
  },
});

export default class NewHomePage extends Component {

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./../../images/cancel.png')}
        style={{tintColor: '#fff'}}
      />
    ),
  };


  static propTypes = {
    navigation: PropTypes.object,
  };
  handleOpportunityPress = () => {
    this.props.navigation.navigate('Opportunities');
  };

  handleMicroComponentsPress = () => {
    this.props.navigation.navigate('MicroComponents');
  };
  handleTechStackPress = () => {
    this.props.navigation.navigate('TechStack');
  };
  handleRapidTalksPress = () => {
    // this.props.navigation.navigate('Videos');
  };
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View>
          <View>
            <ImageBackground
              source={require('./../../images/background.jpg')}
              style={styles.backgroundImageContainer}
              >
              <View style={styles.trendingContainer}>
                <Text style={styles.heading}>Trending in Rapid Prototype</Text>
                <FlatListSwiper />
              </View>
            </ImageBackground>
          </View>

          <View style={styles.center}>
            <View style={styles.headingBaner}>
              <Text style={styles.headingBanerText}>What we do... How we do...</Text>
            </View>
          </View>

          <View style={styles.categoryContainer}>
            <View style={styles.category}>
              <TouchableOpacity style={styles.category} onPress={this.handleOpportunityPress}>
                <Image source={require('./../../images/coding.png')} style={styles.imageStyle} />
                <Text style={styles.heading1}>Opportunities</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.category}>
              <TouchableOpacity style={styles.category} onPress={this.handleMicroComponentsPress}>
                <Image source={require('./../../images/puzzle.png')} style={styles.imageStyle} />
                <Text style={styles.heading1}>Micro Components</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.categoryContainer}>
            <View style={styles.category}>
              <TouchableOpacity style={styles.category} onPress={this.handleTechStackPress}>
                <Image
                  source={require('./../../images/responsive.png')}
                  style={styles.imageStyle}
                />
                <Text style={styles.heading1}>Tech Stack</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.category}>
              <TouchableOpacity style={styles.category} onPress={this.handleRapidTalksPress}>
                <Image source={require('./../../images/video.png')} style={styles.imageStyle} />
                <Text style={styles.heading1}>Rapid Talks</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

// export const Drawer = DrawerNavigator({
//   Login: {
//     screen: Login,
//   },
//   Home: {
//     screen: Home,
//   },
//   MicroComponents: {
//     screen: MicroComponents,
//   },
//   Opportunities: {
//     screen: Opportunities,
//   },
//   TechStack: {
//     screen: TechStack,
//   },
// });

// HomeScreen.navigationOptions = {
//   drawer: () => ({
//     label: 'Home',
//   }),
//   header: (navigation, defaultHeader) => ({
//     ...defaultHeader,
//     title: 'Items list',
//   }),
// };
