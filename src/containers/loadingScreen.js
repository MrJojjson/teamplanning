import React from 'react';
import {View,Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux';
import firebase from '../firebase';

import { getTeamData } from '../actions';

class LoadingScreen extends React.Component{

    componentWillMount(){
        this.navigateCorrectIfLoggedIn()    
    }

    navigateCorrectIfLoggedIn(){
        firebase.auth().onAuthStateChanged((user) => { 
            if(user){
                console.log('p', this.props)
                this.props.dispatch(getTeamData(user))
                this.props.navigation.navigate('Tabs')
            }
            else {
                this.props.navigation.navigate('Login')
            }
        })
    }

    render(){ 
        return(
			<View style={styles.container}>
				<Text>Loading Screen</Text>
            </View>
        );
    }
}
function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(LoadingScreen);
const styles = StyleSheet.create({
    container: {
      paddingTop: 80,
      width: '100%',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });