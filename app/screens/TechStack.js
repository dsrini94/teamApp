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
    fontSize: 20,
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
      data: [
        {
          name: 'React Native',
          tag: 'Native Mobile Apps',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoP-Y5EFtucwednBXGI7UONmYRxosma2JnKVxZDCX7u1ByN65',
        },
        {
          name: 'React',
          tag: 'Hybrid Mobile and Web Apps',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJlVjxZwje9e5DcmieaTylGRVp8E-vxYDdmOm_qLW_XKAouH7',
        },
        {
          name: 'Java',
          tag: 'Stand Alone Apps',
          imageUrl: 'http://www.stickpng.com/assets/images/58480979cef1014c0b5e4901.png',
        },
        {
          name: 'Python',
          tag: 'Machine Learning',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2000px-Python.svg.png',
        },
        {
          name: 'HTML5',
          tag: 'Web Apps',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2000px-HTML5_logo_and_wordmark.svg.png',
        },
        {
          name: 'CSS3',
          tag: 'To style the Components',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png',
        },
        {
          name: 'Jenkins',
          tag: 'Devops',
          imageUrl:
            'https://wiki.jenkins.io/download/attachments/2916393/headshot.png?version=1&modificationDate=1302753947000&api=v2',
        },
        {
          name: 'Rabbit MQ',
          tag: 'Message Queue',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9KUvYzakCMjljl2Q16C4jQ-UDGhw0g3eiIOhuxus-OaCyA5a',
        },
        {
          name: 'Redux',
          tag: 'Data Persistance across the App',
          imageUrl: 'https://devstickers.com/assets/img/pro/h8ci.png',
        },
        {
          name: 'Angular',
          tag: 'Hybrid Mobile and Web Apps',
          imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
        },
        {
          name: 'MongoDB',
          tag: 'DataBase',
          imageUrl: 'https://cdn-images-1.medium.com/max/276/1*NRCOyVBY6Jiqr4Q9A1zoaQ.png',
        },
        {
          name: 'Docker',
          tag: 'Containerisation',
          imageUrl: 'https://major.io/wp-content/uploads/2014/03/docker-whale.png',
        },
        {
          name: 'FireBase',
          tag: 'Backend Business Logic',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bQbAGxdxG4fehdT3tAYHBFxsplJxNBH8r476NEjteIpOzb09',
        },
      ],
      // isLoading: false,
      // loader: true,
      // loadingMsg: 'Fetching Data from the server...',
    };
  }

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View>
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
        </View>
      </ScrollView>
    );
  }
}
