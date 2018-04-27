import React, { Component } from 'react';
import { Dimensions, Image, ListView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ScreenShots from './../components/ScreenShots';

const window = Dimensions.get('window');
const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  desc: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
  ssContainer: {
    margin: 20,
  },
  ssText: {
    fontSize: 20,
    color: '#a5154a',
    fontWeight: 'bold',
  },
  flatListSwiper: {},
  container2: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT,
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end',
  },
  stickySectionText: {
    color: 'white',
    fontSize: 18,
    margin: 10,
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20,
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2,
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5,
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5,
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  rowText: {
    fontSize: 20,
  },
});

export default class Talks extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }).cloneWithRows(['Simplicity Matters']),
    };
  }

  render() {
    const { params } = this.props.navigation.state;
    const data = params ? params.details : null;

    const { onScroll = () => {} } = this.props;
    return (
      <ListView
        ref="ListView"
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={rowData => (
          <View key={rowData} style={styles.container2}>
            <View style={styles.ssContainer}>
              <View style={styles.flatListSwiper}>
                <Text style={styles.ssText}>Screenshots</Text>
                <ScreenShots />
              </View>
            </View>

            <View style={styles.ssContainer}>
              <Text style={styles.ssText}>About</Text>
              <Text style={styles.desc}>{data.description}</Text>
            </View>

            <View style={styles.ssContainer}>
              <Text style={styles.ssText}>Description</Text>
              <Text style={styles.desc}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </Text>
            </View>
          </View>
        )}
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}
            headerBackgroundColor="#333"
            stickyHeaderHeight={STICKY_HEADER_HEIGHT}
            parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT - 50}
            backgroundSpeed={10}
            renderBackground={() => (
              <View key="background">
                <Image source={require('./../../images/background.jpg')} />

                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    width: window.width,
                    backgroundColor: 'rgba(0,0,0,.4)',
                    height: PARALLAX_HEADER_HEIGHT,
                  }}
                />
              </View>
            )}
            renderForeground={() => (
              <View key="parallax-header" style={styles.parallaxHeader}>
                <Image style={styles.avatar} source={require('./../../images/red.jpg')} />
                <Text style={styles.sectionSpeakerText}>{data.name}</Text>
                <Text style={styles.sectionTitleText}>{data.creator}</Text>
              </View>
            )}
            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>More about Micro Components</Text>
              </View>
            )}
          />
        )}
      />
    );
  }
}
