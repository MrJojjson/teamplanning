import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import { connect } from 'react-redux';
import { TeamSetup } from './data';
import Icon from 'react-native-vector-icons/FontAwesome';
import { onSportPress } from '../../actions';
import NextButton from './components/nextButton';
import TextInputComp from '../textInput';
import ImageUpload from '../imageUpload';
import firebase from '../../firebase';

class UserRegistration extends React.Component{
    static navigationOptions = {
        title: 'Add your information',
    };

    constructor(){
        super();
        this.state  = {
            arrayOfTeamCodes: []
        }
    }

    componentWillMount(){
        // firebase.database().ref(`team`).on('child_added', snapshot => {
        //     var teamCode = snapshot.key;
        //     this.state.arrayOfTeamCodes.push(teamCode)            
        // });
        
    }

    checkIfUserReqCodeExists = (userRegCode) => {
        // var arrayOfCodes = this.state.arrayOfTeamCodes;
        // var exists = arrayOfCodes.includes(userRegCode);
        // exists ? console.log('Yes') : console.log('No');
    }

    render(){  
        var userRegCode = this.props.registration.userRegCode;
        if(userRegCode && userRegCode.length > 5){
            this.checkIfUserReqCodeExists(userRegCode)
        }

        const navigateTo = this.props.registration.regAsUserOrTeam === 'Team' ? 'ChooseSport' : 'RegistrationDone';
        const showRegTeamCode = this.props.registration.regAsUserOrTeam === 'User' ? <TextInputComp inArray='registration' inObject='userRegCode' placeholder='Team code'/> : null;
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer}>
                    <View style={styles.viewContainer}>
                        <TextInputComp isVerified inArray='registration' inObject='userName' placeholder='Name'/>
                        <TextInputComp email inArray='registration' inObject='userEmail' placeholder='Email'/>
                        <TextInputComp password inArray='registration' inObject='userPassword' placeholder='Password'/>
                        {showRegTeamCode}
                        <ImageUpload />
                    </View>
                </ScrollView>
                <NextButton navigateTo={navigateTo} title='Next' {...this.props}/>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(UserRegistration);

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