import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import NextButton from './components/nextButton';

class RegistrationDone extends React.Component{
    static navigationOptions = {
        title: 'Registration done',
    };

    render(){  
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer}>
                    <Text>DONE</Text>
                </ScrollView>
                <NextButton navigateTo='Root' title='Finished' saveToFirebase {...this.props}/>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(RegistrationDone);

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
    },
    scrollViewContentContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    scrollView:{
        flex:0.9,
    },
    viewContainer:{
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1,
        paddingTop:20,
        paddingBottom:20
    },
  });