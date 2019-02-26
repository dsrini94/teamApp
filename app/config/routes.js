//importing navigation modules
import { StackNavigator, NavigationActions, DrawerNavigator, DrawerItems,SwitchNavigator } from 'react-navigation';
import {TouchableOpacity, Image, View, Text, ScrollView, StyleSheet, AsyncStorage} from 'react-native';

//importing react modules
import React, { Component } from 'react';

//importing Screens
import Login from '../screens/Login';
import Home from '../screens/Home';
import OpportunityDetails from '../screens/PocDetails';
import MicroComponents from '../screens/MCHome';
import MicroComponentsDetails from '../screens/MCDetails';
import Opportunities from '../screens/Opportunities';
import TechStack from '../screens/TechStack';
import TechDescription from '../screens/TechDescription';
import Tabs from '../screens/Tabs';
import RapidTalks from './../screens/RapidTalks.js';
import Developers from './../screens/Developers.js';
import AuthLoadingScreen from './../screens/authLoadingScreen.js';
import SignOut from './../screens/signOut.js';


//importing Components
import MenuButton from './../components/menuButton.js';

var userToken='';
var _bootstrapAsync = async () => {
    userToken = await AsyncStorage.getItem('userToken');
    console.log(userToken);
 };

 _bootstrapAsync();



const HomeNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Rapid Prototyping',
      headerTintColor: '#fff',
      headerLeft: <MenuButton navigation={navigation}  />,
      headerStyle: {
        backgroundColor: '#a5154a',
      },
    }),
  },
  MicroComponents: {
    screen: MicroComponents,
    navigationOptions: {
      headerTitle: 'Micro Components',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#a5154a',
      },
    },
  },
  TechStack: {
    screen: TechStack,
    navigationOptions: {
      headerTitle: 'Tech Stacks',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#a5154a',
      },
    },
  },
  MicroComponentsDetails: {
    screen: MicroComponentsDetails,
    navigationOptions: {
      headerTitle: 'Micro Components',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#a5154a',
      },
    },
  },
  TechDescription: {
    screen: TechDescription,
    navigationOptions: {
      headerTitle: 'Tech',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#a5154a',
      },
    },
  },
  Opportunities: {
    screen: Opportunities,
    navigationOptions: {
      headerTitle: 'Opportunities',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#a5154a',
      },
    },
  },
  OpportunityDetails: {
    screen: OpportunityDetails,
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#a5154a',
      },
    },
  },
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      headerTitle: 'Daily Status',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#a5154a',
      },
    },
  },
  RapidTalks: {
    screen: RapidTalks,
    navigationOptions: {
      headerTitle: 'Rapid Talks',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#a5154a',
      },
    },
  },
});





const MainNavigator = DrawerNavigator({
  Menu: {
    screen: HomeNavigator,
  },
  Developers:{
    screen:Developers
  },
  SignOut:{
    screen:SignOut
  }
},
{
  contentComponent: (props) => (
                  <View style={{flex:1}}>
                    <View style={{flexDirection:'row',backgroundColor:'#a5154a',paddingBottom:20}}>
                      <View style={{flex:1}}>
                        <Image source={require('./../../images/default.png')} style={{marginLeft:10,marginTop:20,height:80,width:80,borderRadius:40}}/>
                      </View>
                      <View style={{flex:2}}>
                        <Text style={{color:'white',fontSize:14,fontWeight:'bold',marginLeft:10,marginTop:30}}>Welcome to,</Text>
                        <Text style={{color:'white',fontSize:14,fontWeight:'bold',marginLeft:10,marginTop:10}}>Rapid Prototyping Team</Text>
                      </View>
                    </View>

                    <View style={{flex:1,backgroundColor:'white'}}>
                      <DrawerItems
                        {...props}
                        getLabel = {(scene) => (
                            <View style={{fmarginTop:20,justifyContent:'center',alignItems:'center',padding:10}}>
                              <Text style={{color:'#a5154a',fontSize:20,marginTop:10,fontWeight:'bold'}}>{props.getLabel(scene)}</Text>
                            </View>
                        )}
                      />
                    </View>
                  </View>
            ),
  drawerBackgroundColor: "transparent",
  drawerOpenRoute:'DrawerOpen',
  drawerCloseRoute:'DrawerClose',
  drawerToggleRoute:'DrawerToggle'
});

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainNavigator,
    Auth: Login,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);


const styles = StyleSheet.create({
  listItem:{
    color:'#a5154a',
  fontSize:20,
  marginTop:10,
  fontWeight:'bold'
},
  listContainer:{
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  container2:{
    flex:1,
    backgroundColor:'white'
  },
  outerContainer:{
    flex:1
  },
  container1:{
    flexDirection:'row',
    backgroundColor:'#a5154a',
    paddingBottom:20
  },
  icon:{
    marginLeft:10,
    marginTop:20,
    height:80,
    width:80,
    borderRadius:40
  },
  welcomeText:{
    color:'white',
    fontSize:14,
    fontWeight:'bold',
    marginLeft:10,
    marginTop:30
  },
  userNameText:{
    color:'white',
    fontSize:14,
    fontWeight:'bold',
    marginLeft:10,
    marginTop:10
  }

})
