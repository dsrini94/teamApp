import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';
import OpportunityDetails from '../screens/PocDetails';
import MicroComponents from '../screens/MCHome';
import MicroComponentsDetails from '../screens/MCDetails';
import Opportunities from '../screens/Opportunities';
import TechStack from '../screens/TechStack';
import TechDescription from '../screens/TechDescription';
import Tabs from '../screens/Tabs';
import Videos from './../screens/Videos.js';

export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: () => null,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Rapid Prototyping',
      headerTintColor: '#fff',
      // headerLeft: <DrawerButton navigation={navigation} />,
      //     headerLeft: <Text onPress={() =>
      // navigation.navigate('DrawerOpen')}>Menu</Text>,
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
  Videos: {
    screen: Videos,
    navigationOptions: {
      headerTitle: 'Rapid Talks',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#a5154a',
      },
    },
  },
});
