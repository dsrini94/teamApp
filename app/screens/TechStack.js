// Importing React and React Native modules
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import GridView from 'react-native-super-grid';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    // height: 150,
    alignItems: 'center',
  },
  itemName: {
    fontSize: 18,
    color: '#a5154a',
    fontWeight: '600',
    textAlign: 'center',
    padding: 5,
  },
  itemCreator: {
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
});

export default class TechStack extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      loader: true,
      loadingMsg: 'Fetching Data from the server...',
      isDataLoaded:false
    };
  }

  componentDidMount() {
    fetch('http://ec2-13-126-105-122.ap-south-1.compute.amazonaws.com:8080/techstack ')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson, isDataLoaded: true, loader: false });
      })
      .catch(() => {
        this.setState({ loadingMsg: 'Problem Connecting to Network', loader: false });
      });
  }

  renderTechStack()
  {
    return(
      <GridView
        itemDimension={130}
        items={this.state.data}
        style={styles.gridView}
        renderItem={item => (
          <TouchableOpacity
            style={styles.loadingContainer}
            onPress={() =>
              this.props.navigation.navigate('TechDescription', {
                details: item,
              })
            }
          >
            <View style={[styles.itemContainer]}>
              <Image
                source={{ uri: item.imageUrl }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
              />
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCreator}>{item.tag}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }

  render() {

    if(this.state.isDataLoaded == false)
    {
      return(
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>{this.state.loadingMsg}</Text>
        </View>
      );
    }
    else
    {
      return (
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.loadingContainer}>
            {this.renderTechStack()}
          </View>
        </ScrollView>
      );
    }
  }
}
