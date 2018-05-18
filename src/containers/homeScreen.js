import React from 'react';
import {View,Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux';

class HomeScreen extends React.Component{
    
    render(){        

        return(
			<View style={styles.container}>
				<Text>Home</Text>
            </View>
        );
    }
}
export default HomeScreen;
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