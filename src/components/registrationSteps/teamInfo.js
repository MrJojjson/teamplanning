import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import { connect } from 'react-redux';
import { TeamSetup } from './data';
import Icon from 'react-native-vector-icons/FontAwesome';
import NextButton from './components/nextButton';
import TextInputComp from '../textInput';
import TextInputMultiLine from '../textInputMultiLine';
import ImageUpload from '../imageUpload';

class TeamInfo extends React.Component{
    static navigationOptions = {
        title: 'Describe your team',
    };

    constructor(){
        super();
        this.state = {
            nameOfTeam: '',
            age: '',
        }
    }

    render(){  
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer}>
                    <View style={styles.viewContainer}>
                        <TextInputComp inArray='registration' inObject='teamClub' placeholder='Club'/>
                        {/* <TextInputComp inArray='registration' inObject='teamName' placeholder='Name'/> */}
                        <TextInputComp inArray='registration' inObject='teamAge' placeholder='Age'/>
                        <TextInputMultiLine inArray='registration' inObject='teamDescription' placeholder='Description'/>
                        <ImageUpload />
                    </View>
                </ScrollView>
                <NextButton navigateTo='LocationInfo' title='Next' {...this.props}/>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(TeamInfo);

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
        flexDirection:'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        width:'100%',
        paddingTop:20,
        paddingBottom:20
    },
  });
  