import React from 'react';
import {View,Text, StyleSheet, TouchableHighlight} from 'react-native'
import { connect } from 'react-redux';
import { logOutUser } from '../actions';

class ProfileScreen extends React.Component{
    
    onLogOutPress = () => {
        this.props.dispatch(logOutUser())
    }
    render(){        

        return(
			<View style={styles.container}>
				<Text>Profile</Text>
                <TouchableHighlight onPress={() => this.onLogOutPress()} style={styles.buttonLoginTouchableOpacity}>
                    <Text style={styles.buttonLoginText}>Log out</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(ProfileScreen);

const styles = StyleSheet.create({
    container: {
      paddingTop: 80,
      width: '100%',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonLoginTouchableOpacity:{
        padding:10,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1
    },
  });