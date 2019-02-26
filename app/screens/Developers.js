import React,{ Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

import {
  ParallaxSwiper,
  ParallaxSwiperPage,
} from 'react-native-parallax-swiper';
import LinearGradient from 'react-native-linear-gradient';

// import data from './data';

const smallRetweetIcon = 'https://png.icons8.com/color/1600/retweet.png';
const smallHeartIcon = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-128.png';
const smallEllipsesIcon = 'https://png.icons8.com/metro/1600/ellipse-stroked.png';
const xIcon = 'https://cdn0.iconfinder.com/data/icons/modagraphica-interface/30/cancel-512.png';
const heartIcon = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/heart-128.png';
const shareIcon = 'https://cdn3.iconfinder.com/data/icons/social-media-2-2/256/Share-512.png';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');
const myAnimatedValue = new Animated.Value(0);


export default class Developers extends Component
{

  static navigationOptions = {
    drawerLabel: 'Engineers',
    drawerIcon: () => (
      <Image
        source={require('./../../images/learning.png')} style={{marginTop:10}}/>
    )
  }

  render()
  {

    var data = [
  {
    id: '1',
    userName: 'Mohan Kumar Subramani',
    userHandle: '@MO',
    text: 'The Scrum Master',
    retweetCount: 424,
    likeCount: 2000,
    media:require('./../../images/mohan.jpg'),
  },
  {
    id: '2',
    userName: 'Akila D',
    userHandle: '@AK354349',
    text: 'The Devops Girl',
    retweetCount: 9,
    likeCount: 53,
    media:require('./../../images/akila.jpg'),
  },
  {
    id: '3',
    userName: 'Aswini K',
    userHandle: '@AS351911',
    text: 'The Foodie',
    retweetCount: 19,
    likeCount: 113,
    media:require('./../../images/aswini.jpg'),
  },
  {
    id: '4',
    userName: 'Athul Satheesh',
    userHandle: '@AT356731',
    text: 'Creative Head',
    retweetCount: 19,
    likeCount: 113,
    media:require('./../../images/athul.jpg'),
  },

  {
    id: '5',
    userName: 'Hemavathi Tamilmaran',
    userHandle: '@HE351544',
    text: 'Apple iOS11 Siri visual effect motion',
    retweetCount: 19,
    likeCount: 113,
    media:require('./../../images/hema.jpg'),
  },
  {
    id: '6',
    userName: 'Lakhveer Kaur',
    userHandle: '@LA354338',
    text: 'The Silent Coder',
    retweetCount: 19,
    likeCount: 113,
    media:require('./../../images/lakhveer.jpg'),
  },
  {
    id: '7',
    userName: 'Maneesha',
    userHandle: '@MA351934',
    text: 'The Lady DON',
    retweetCount: 19,
    likeCount: 113,
    media:require('./../../images/maneesha.png'),
  },
  {
    id: '8',
    userName: 'Navin Prasad',
    userHandle: '@NA351942',
    text: 'MR AWS',
    retweetCount: 19,
    likeCount: 113,
    media:require('./../../images/navin.jpg'),
  },
  {
    id: '9',
    userName: 'Prateek Pandey',
    userHandle: '@PR356827',
    text: 'Cursed with knowledge',
    retweetCount: 19,
    likeCount: 113,
    media:require('./../../images/prateek.jpg'),
  },
  {
    id: '9',
    userName: 'Rubanraj R',
    userHandle: '@RU353746',
    text: 'The Machine Learner',
    retweetCount: 19,
    likeCount: 113,
    media:require('./../../images/ruban.jpg'),
  },
  {
    id: '10',
    userName: 'Shubam Khandelwal',
    userHandle: '@SH356401',
    text: 'The Playboy',
    retweetCount: 19,
    likeCount: 113,
    media:require('./../../images/shubam.jpg'),
  },
  {
    id: '11',
    userName: 'Srinivasan Durairaj',
    userHandle: '@SR354095',
    text: 'Mr Rapid',
    retweetCount: 19,
    likeCount: 113,
    media:require('./../../images/srini.jpg'),
  },
  {
    id: '12',
    userName: 'Tarun Thota',
    userHandle: '@TH351984',
    text: 'The Jet',
    retweetCount: 19,
    likeCount: 113,
    media:require('./../../images/tarun.jpg'),
  },
];

    return(<View>
      <ParallaxSwiper
        speed={0.75}
        dividerWidth={6}
        dividerColor="black"
        animatedValue={myAnimatedValue}
      >
        {data.map(tweet =>
          (<ParallaxSwiperPage
            key={tweet.id}
            BackgroundComponent={
              <Image
                style={styles.image}
                source={tweet.media}
              />
            }
            ForegroundComponent={
              <View style={styles.innerContainer}>
                <View style={styles.gradient}>
                  <View style={styles.twitterNameAndHandleContainer}>
                    <Text style={styles.twitterName}>
                      {tweet.userName}
                    </Text>
                    <Text style={styles.twitterHandle}>
                      {tweet.userHandle}
                    </Text>
                  </View>
                  <View style={styles.tweetTextContainer}>
                    <Text style={styles.tweetText}>
                      {tweet.text}
                    </Text>
                  </View>

                </View>
              </View>
            }
          />),
        )}
      </ParallaxSwiper>
      <View style={styles.progressBarContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              transform: [
                {
                  translateX: myAnimatedValue.interpolate({
                    inputRange: [0, (deviceWidth + 6) * (data.length - 1)],
                    outputRange: [-deviceWidth, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </View>)
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: deviceWidth,
    height: deviceHeight,
  },
  gradient: {
    paddingHorizontal: 12,
    paddingVertical: 24,
    backgroundColor: 'transparent',
  },
  twitterNameAndHandleContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  twitterName: {
    marginRight: 4,
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  twitterHandle: {
    fontSize: 16,
    color: 'white',
  },
  tweetTextContainer: {
    marginBottom: 12,
  },
  tweetText: {
    fontSize: 16,
    color: 'white',
  },
  buttonWithTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  bottomIconsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    tintColor: 'white',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.5)',
  },
  smallButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  smallButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 12,
  },
  smallButtonWithTextIconContainer: {
    marginRight: 12,
  },
  largeButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 12,
    width: 32,
    height: 32,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 16,
  },
  progressBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  progressBar: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
  },
});
