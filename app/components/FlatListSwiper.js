// importing React and React Native modules
import React, { Component } from 'react';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity, Modal, AlertIOS, Platform, AppRegistry} from 'react-native';

//importing Video modules
import Video from 'react-native-video';

import { withNavigation } from 'react-navigation';


const styles = StyleSheet.create({
  title: {
    paddingTop: 10,
    marginTop: 0,
    color: 'white',
    fontSize: 14,
    width: 100,
    textAlign: 'center',
    marginBottom: 40,
  },
  ImageContainer: {
    margin: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
  },
  image: {
    height: 80,
    width: 80,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: 'absolute',
    bottom: 44,
    left: 4,
    right: 4,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: 10,
  },
  skinControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ignoreSilentSwitchControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
  nativeVideoControls: {
    top: 184,
    height: 300
  }
});

const data = [
  {
    imageUrl: 'https://cdn3.iconfinder.com/data/icons/design-and-development-3-6/140/138-512.png',
    title: 'Journey Map',
    desc: 'Parallax Carousel',
    id: 1,
  },
  {
    imageUrl: 'http://2015.nyccamp.org/sites/default/files/styles/icon_-_header/public/nycc-icon-devops.png?itok=pM2RKIqn',
    title: 'Introduction to DevOps',
    desc: 'Login Page with Google Sign In',
    id: 2
  }
];


export default class FlatListSwiper extends  Component
{

  constructor(props)
  {
    super(props);
    this.state={
      modalVisible:false,
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      controls: false,
      paused: false,
      skin: 'custom',
      ignoreSilentSwitch: null,
      isBuffering: false,
      videoTag:require('./../../images/JourneyMap.mp4')
    }

    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onBuffer = this.onBuffer.bind(this);
  }

  handleModalOpen(data)
  {
    if(data.id == 1)
    {
      this.setState({modalVisible:true})
      var temp = require('./../../images/JourneyMap.mp4');
      this.setState({videoTag:temp});
    }

    else
    {
      this.setState({modalVisible:true})
      var temp = require('./../../images/devops.mp4');
      this.setState({videoTag:temp});
    }

  }

  handleModalClose()
  {
    this.setState({modalVisible:false})
  }

  onLoad(data) {
    console.log('On load fired!');
    this.setState({duration: data.duration});
  }

  onProgress(data) {
    this.setState({currentTime: data.currentTime});
  }

  onBuffer({ isBuffering }: { isBuffering: boolean }) {
    this.setState({ isBuffering });
  }

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    } else {
      return 0;
    }
  }


  renderRateControl(rate) {
    const isSelected = (this.state.rate == rate);

    return (
      <TouchableOpacity onPress={() => { this.setState({rate: rate}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    )
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode == resizeMode);

    return (
      <TouchableOpacity onPress={() => { this.setState({resizeMode: resizeMode}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl(volume) {
    const isSelected = (this.state.volume == volume);

    return (
      <TouchableOpacity onPress={() => { this.setState({volume: volume}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  renderIgnoreSilentSwitchControl(ignoreSilentSwitch) {
    const isSelected = (this.state.ignoreSilentSwitch == ignoreSilentSwitch);

    return (
      <TouchableOpacity onPress={() => { this.setState({ignoreSilentSwitch: ignoreSilentSwitch}) }}>
        <Text style={[styles.controlOption, {fontWeight: isSelected ? "bold" : "normal"}]}>
          {ignoreSilentSwitch}
        </Text>
      </TouchableOpacity>
    )
  }

  renderCustomSkin() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.fullScreen} onPress={() => {this.setState({paused: !this.state.paused})}}>
          <Video
            source={this.state.videoTag}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            ignoreSilentSwitch={this.state.ignoreSilentSwitch}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onBuffer={this.onBuffer}
            onProgress={this.onProgress}
            onEnd={() => { AlertIOS.alert('Done!') }}
            repeat={true}
          />
        </TouchableOpacity>

        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.skinControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>
          <View style={styles.generalControls}>
            <View style={styles.rateControl}>
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(2.0)}
            </View>

            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>
          </View>
          <View style={styles.generalControls}>
            {
              (Platform.OS === 'ios') ?
                <View style={styles.ignoreSilentSwitchControl}>
                  {this.renderIgnoreSilentSwitchControl('ignore')}
                  {this.renderIgnoreSilentSwitchControl('obey')}
                </View> : null
            }
          </View>

          <View style={styles.trackingControls}>
            <View style={styles.progress}>
              <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]} />
              <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]} />
            </View>
          </View>
        </View>
      </View>
    );
  }

  render()
  {
    return(
      <View >
        <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      renderItem={({ item: rowData }) => (
        <TouchableOpacity onPress={()=>this.handleModalOpen(rowData)}>
          <View style={styles.ImageContainer}>
            <Image
              source={{ uri: rowData.imageUrl }}
              style={styles.image}
            />
            <Text style={styles.title}>{rowData.title}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item, index) => index.toString()}
    />

    <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={this.handleModalClose}>
          {this.renderCustomSkin()}
        </Modal>

  </View>);
  }
}
