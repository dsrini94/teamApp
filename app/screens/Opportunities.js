import React, { Component } from 'react';
import {
  ScrollView,
  ImageBackground,
  TouchableHighlight,
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

//importing Custom loading Component
import AnimatedLoader from './../components/customLoadingComponent.js'

const styles = StyleSheet.create({
  info: {
    color: 'black',
  },
  wrapper: {
    marginHorizontal: 5,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 0,
    backgroundColor: 'rgba(255,255,255,1)',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 50,
    padding: 10,
    // borderWidth: 1,
    // borderRadius: 7,
    // borderColor: "#ddd",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    // elevation: 8,
  },
  image: {
    width: 120,
    height: 120,
    // borderRadius: 50,
    marginHorizontal: 20,
    marginTop: 20,
    // marginRight: 15,
    // elevation: 30,
    // marginBottom: -80,
  },
  imageContainer: {
    elevation: 100,
    position: 'absolute',
  },
  rightSide: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftSide: {
    width: 150,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '800',
    color: '#a5154a',
    flex: 1,
    flexWrap: 'wrap',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
});

class Opportunities extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isDataLoaded: false,
      loader: true,
      loadingMsg: 'Fetching data from the server...',
    };
    this.handleOpportunityDetailsPress = this.handleOpportunityDetailsPress.bind(this);
  }

  componentDidMount() {
    fetch('http://ec2-13-126-105-122.ap-south-1.compute.amazonaws.com:8080/opportunities ')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson, isDataLoaded: true, loader: false });
      })
      .catch(() => {
        this.setState({ loadingMsg: 'Problem Connecting to Network', loader: false });
      });
  }

  handleOpportunityDetailsPress = (item) => {
    this.props.navigation.navigate('OpportunityDetails', {
      details: item,
    });
  };

  renderOpportunities = ()=>
  {
    return(
      this.state.data.map((item, key) => (
        <TouchableHighlight onPress={() => this.handleOpportunityDetailsPress(item)} key={key}>
          <View style={styles.wrapper}>
            <View style={styles.imageContainer}>
              <Image resizeMode="cover" source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={styles.container}>
              <View style={styles.leftSide} />
              <View style={styles.rightSide}>
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                  <Text style={styles.info}>Vertical: {item.vertical}</Text>
                  <Text style={styles.info}>Proposed Value: {item.business_dollar_value}</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      ))
    );
  }

  render() {
    if (this.state.isDataLoaded === false) {
      return (
        <AnimatedLoader loadingMsg={this.state.loadingMsg}/>
      );
    }

    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../../images/background.jpg')} >
        <ScrollView>
          {this.renderOpportunities()}
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Opportunities;
