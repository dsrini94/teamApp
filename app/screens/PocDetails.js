// importing React and Reat Native Modiles
import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import PropTypes from 'prop-types';

// import DonePage from './../components/donePage';
// import tabNavigation from './../config/tabRoute.js';

const styles = StyleSheet.create({
  buttonText: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'white',
    backgroundColor: '#a5154a',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
  },
  descText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 20,
    marginRight: 10,
  },
  aboutText: {
    fontSize: 20,
    color: '#a5154a',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  container3: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    flex: 1,
  },
  container1: {
    flex: 1,
  },
  keyText: {
    fontSize: 15,
    color: 'white',
  },
  valueText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  keyValueContainer: {
    flex: 1,
    marginLeft: 30,
  },
  container2: {
    flex: 1,
  },
  bgImageContainer: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
  knowMoreContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 8,
  },
});

export default class PocDetails extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.details.name}`,
  });
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  handleDailyStatusPress = (data) => {
    this.props.navigation.navigate('Tabs', {
      details: data,
      // this: this,
    });
  };
  render() {
    const { params } = this.props.navigation.state;
    const data = params ? params.details : null;

    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container1}>
          <ImageBackground
            source={require('./../../images/background.jpg')}
            style={styles.bgImageContainer}
          >
            <View style={styles.container1}>
              <View style={styles.infoContainer}>
                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: 10,
                    flex: 1,
                    marginLeft: 25,
                  }}
                >
                  <Text style={styles.keyText}>Opportunity Owner</Text>
                  <Text style={styles.valueText}>{data.opportunity_owner}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: 10,
                    flex: 1,
                    marginLeft: 25,
                  }}
                >
                  <Text style={styles.keyText}>SDET</Text>
                  <Text style={styles.valueText}>{data.sdnet}</Text>
                </View>
              </View>
              <View style={styles.infoContainer}>
                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: 10,
                    flex: 1,
                    marginLeft: 25,
                  }}
                >
                  <Text style={styles.keyText}>Product Owner</Text>
                  <Text style={styles.valueText}>{data.product_owner}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: 10,
                    flex: 1,
                    marginLeft: 25,
                  }}
                >
                  <Text style={styles.keyText}>Scrum Master</Text>
                  <Text style={styles.valueText}>{data.scrum_master}</Text>
                </View>
              </View>
              <View style={styles.infoContainer}>
                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: 10,
                    flex: 1,
                    marginLeft: 25,
                  }}
                >
                  <Text style={styles.keyText}>User Stories</Text>
                  <Text style={styles.valueText}>2</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: 10,
                    flex: 1,
                    marginLeft: 25,
                  }}
                >
                  <Text style={styles.keyText}>Opportunity Value</Text>
                  <Text style={styles.valueText}>{data.business_dollar_value}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.container2}>
          <View style={styles.container}>
            <Text style={styles.aboutText}>About</Text>
            <Text style={styles.descText} numberOfLines={4} ellipsizeMode="tail">
              {data.description}
            </Text>
          </View>
          <View style={styles.knowMoreContainer}>
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  modalVisible: true,
                })
              }
            >
              <Text>Know more</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container3}>
            <TouchableOpacity onPress={() => this.handleDailyStatusPress(data)}>
              <Text style={styles.buttonText}>Daily Status</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text style={styles.aboutText}>Description</Text>
              <Text style={styles.descText}>{data.description}</Text>
              <View style={styles.container3}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ modalVisible: !this.state.modalVisible });
                  }}
                >
                  <Text style={styles.buttonText}>Hide Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}
