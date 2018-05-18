import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './containers/homeScreen';
import LoginScreen from './containers/loginScreen';
import LoadingScreen from './containers/loadingScreen';
import ProfileScreen from './containers/profileScreen';

import ChooseToRegTeamOrUser from './components/registrationSteps/chooseTeamOrUser';
import UserRegistration from './components/registrationSteps/userReg';
import ChooseSport from './components/registrationSteps/chooseSport';
import TeamInfo from './components/registrationSteps/teamInfo';
import LocationInfo from './components/registrationSteps/locationInfo';
import MembersInfo from './components/registrationSteps/membersInfo';
import RegistrationDone from './components/registrationSteps/regDone';

const tabIconSize = 24;

const Tabs = TabNavigator({
    Home: {
      screen: HomeScreen, // Replaced Feed with FeedStack
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => <Icon name="home" type="entypo" size={tabIconSize} color={focused ? '#eee' : "#ddd"} />,
        header: null,
    },
    },
    Profile: {
        screen: ProfileScreen, // Replaced Feed with FeedStack
        navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => <Icon name="home" type="entypo" size={tabIconSize} color={focused ? '#eee' : "#ddd"} />,
          header: null,
        },
      },
    
  }, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    lazy:true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#ccc',
      showIcon: true,
      showLabel:false,
  },
  });



export const Navigation = StackNavigator({

    Root: {
        screen: LoadingScreen,
        navigationOptions: {
            header: null,
        },
    },
    Tabs: {screen: Tabs},
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null,
        },
    },

    ChooseToRegTeamOrUser: {screen: ChooseToRegTeamOrUser},
    UserRegistration: {screen: UserRegistration},
    ChooseSport: {screen: ChooseSport},
    TeamInfo: {screen: TeamInfo},
    LocationInfo: {screen: LocationInfo},
    MembersInfo: {screen: MembersInfo},
    RegistrationDone: {screen: RegistrationDone},

    },
    {
        initialRouteName: 'Root',
        swipeEnabled: false,
        lazy: true,
        navigationOptions: {
        gesturesEnabled: false,
        },
    }
  );
  
  let _navigation = null;
  export class NavigationFactory {
      static getNavigation() {
          if (!_navigation) {
              _navigation = Navigation;
          }
          return _navigation;
      }
  }