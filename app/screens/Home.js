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
  YellowBox,
  BackHandler,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

import FlatListSwiper from './../components/FlatListSwiper';

YellowBox.ignoreWarnings(['Warning: isMounted','Warning: Failed prop type']);

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImageContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent:'center'
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
    width: 290,
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
    // marginBottom: 8,
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
  },
  trendingContainer: {
    flex:1,
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
    flex:3,
    flexDirection:'column'
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


  constructor(props)
  {
    super(props);
  }

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
    this.props.navigation.navigate('RapidTalks');
  };
  render() {

    console.log(width,height);

    return (
      <View style={{flex:1}}>
     <View style={{flex:2,justifyContent:'center'}}>
       <ImageBackground
               source={require('./../../images/background.jpg')}
               style={styles.backgroundImageContainer}>
               <View style={styles.trendingContainer}>
                 <Text style={styles.heading}>Trending in Rapid Prototype</Text>
                 <FlatListSwiper />
               </View>
       </ImageBackground>


     </View>

     <View style={styles.categoryContainer}>
       <View style={{flex:1,flexDirection:'row',backgroundColor:'white'}}>
         <View style={{flex:1}}>
           <View style={styles.category}>
           <TouchableOpacity style={styles.category} onPress={this.handleOpportunityPress}>
              <Image source={require('./../../images/coding.png')} style={styles.imageStyle} />
              <Text style={styles.heading1}>Opportunities</Text>
            </TouchableOpacity>
          </View>
         </View>

         <View style={{flex:1}}>
             <View style={styles.category}>
               <TouchableOpacity style={styles.category} onPress={this.handleMicroComponentsPress}>
                  <Image source={require('./../../images/puzzle.png')} style={styles.imageStyle} />
                  <Text style={styles.heading1}>Micro Components</Text>
                </TouchableOpacity>
              </View>
         </View>
       </View>

       <View style={{flex:1,flexDirection:'row',backgroundColor:'white'}}>
         <View style={{flex:1}}>
             <View style={styles.category}>
               <TouchableOpacity style={styles.category} onPress={this.handleTechStackPress}>
                 <Image
                   source={require('./../../images/responsive.png')}
                   style={styles.imageStyle}
                 />
                 <Text style={styles.heading1}>Tech Stack</Text>
               </TouchableOpacity>
             </View>
         </View>

         <View style={{flex:1}}>
             <View style={styles.category}>
               <TouchableOpacity style={styles.category} onPress={this.handleRapidTalksPress}>
                 <Image
                   source={require('./../../images/video.png')}
                   style={styles.imageStyle}/>
                 <Text style={styles.heading1}>Ted Talks</Text>
               </TouchableOpacity>
             </View>
         </View>
       </View>
     </View>
   </View>
    );
  }
}
