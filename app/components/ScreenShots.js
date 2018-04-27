// importing React and React Native modules
import React, { Component } from 'react';
import {
  FlatList,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: 'column',
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    flex: 1,
  },
  crossButton: {
    alignItems: 'flex-end',
    marginTop: 25,
    marginRight: 25,
  },
  imagePreview: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    padding: 15,
    height: height - 150,
  },
});

export default class ScreenShots extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      selectedImage: '',
    };
  }
  render() {
    const data = [
      {
        imageUrl:
          'https://cdn6.f-cdn.com/contestentries/487835/19488362/575b003503322_thumb900.jpg',
        title: 'Introduction to DevOps',
        desc: 'Login Page with Google Sign In',
        id: '1',
      },
      {
        imageUrl:
          'http://gdj.graphicdesignjunction.com/wp-content/uploads/2014/03/009_sign_in_app_design.jpg',
        title: 'Introduction to Docker',
        desc: 'Horizontal Image slider',
        id: '2',
      },
      {
        imageUrl:
          'https://i.pinimg.com/736x/e9/35/30/e93530f69a0b8f8845b3574cf806fc88--mobile-app-apps.jpg',
        title: 'Journey Map',
        desc: 'Parallax Carousel',
        id: '3',
      },
      {
        imageUrl: 'http://images.mobile-patterns.com/1366291875759-2013-04-18%2009.25.57.png',
        title: 'Migrating to PCF',
        desc: 'Conversational Form',
        id: '4',
      },
      {
        imageUrl: 'https://fildo.net/assets/img/terms.png',
        title: 'Auto Fill Form',
        desc: 'Auto Fill Form',
        id: '5',
      },
      {
        imageUrl: 'http://images.mobile-patterns.com/1425567727955-2015-03-02%2015.20.58.png',
        title: 'Offline Maps',
        desc: 'Offline Maps',
        id: 6,
      },
    ];

    return (
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={({ item: rowData }) => (
            <TouchableOpacity
              onPress={() => this.setState({ modalVisible: true, selectedImage: rowData.imageUrl })}
            >
              <View style={styles.container}>
                <Image source={{ uri: rowData.imageUrl }} style={{ height: 150, width: 100 }} />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.crossButton}>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ modalVisible: false });
                }}
              >
                <Image source={require('./../../images/cancel.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.imagePreview}>
              <Image source={{ uri: this.state.selectedImage }} style={styles.imageStyle} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
