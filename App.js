import React from 'react';
import { View } from 'react-native';

import { Tabs } from './src/routes';
import store from './src/store'
import { Provider } from "react-redux";
import firebase from './src/firebase';
import Geocoder from 'react-native-geocoding';

import {NavigationFactory} from './src/routes';

let Navigation = NavigationFactory && NavigationFactory.getNavigation();

class App extends React.Component{
  
  componentDidMount(){
    Geocoder.init('AIzaSyCKU8iWK9l7K5YUp3fOZMK_BE4ulCGutUE'); // use a valid API key
  }

	render() { 
		return (
			<Provider store={store}>
				<Navigation {...this.props}/>
			</Provider>
		);
	}
  }

  export default App;