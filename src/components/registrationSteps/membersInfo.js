import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextComp from '../text';
import TextInputComp from '../textInput';
import NextButton from './components/nextButton';
import SmallButton from '../smallButton';

import { onChangeRandomCodeString, onSetNumberOfEmailInput, onIncreaseNumberOfEmailInput, onDecreaseNumberOfEmailInput } from '../../actions';

const IN_ARRAY='registration', IN_OBJECT='codeForTeam';
const EMAILINPUT = {
    value: '',
}

class MembersInfo extends React.Component{
    static navigationOptions = {
        title: 'Who are your teammates',
    };

    componentWillMount(){
        this.props.dispatch(onSetNumberOfEmailInput(EMAILINPUT, IN_ARRAY, 'emailInputs'))
        var code = this.props.registration.teamClub += this.generateRandomString();
        code = code.toUpperCase();
        this.props.dispatch(onChangeRandomCodeString(code, IN_ARRAY, IN_OBJECT))
    }

    generateRandomString = () => {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
        var lengthOfRandom = 5;
        var randomString = '';
        for (var i = 0; i < lengthOfRandom; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomString += chars.substring(rnum,rnum+1);
        }
        if(randomString.length){
            return randomString;
        }
    }

    increaseNewTextInput = () => {
        this.props.dispatch(onIncreaseNumberOfEmailInput(EMAILINPUT, IN_ARRAY, 'emailInputs'))
    }

    decreaseNewTextInput = (inArray, inObject, inIndex) => {
        this.props.dispatch(onDecreaseNumberOfEmailInput(IN_ARRAY, inObject, inIndex))
    }

    renderEmailInputs = () => {
        var emailInputs = this.props.registration.emailInputs;
        return emailInputs.map((elem, i) => {
            return <TextInputComp email key={i} makeAction={() => this.decreaseNewTextInput(IN_ARRAY, 'emailInputs', i)} isArray removeable inArray={IN_ARRAY} inObject='emailInputs' inIndex={i} placeholder={`Email to member ${i + 1}`}/>
        })
    }

    render(){          
        var text = this.props.registration.codeForTeam || 'TEST12Ab5'
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer}>
                    <View style={styles.viewContainer}>
                        <TextComp showTitle alignCenter big bg='#eee' title='Code to register new members' text={text}/>
                        {this.props.registration.emailInputs ? this.renderEmailInputs() : null}
                        <SmallButton title='Add more emails' makeAction={() => this.increaseNewTextInput()}/>
                    </View>
                </ScrollView>
                <NextButton navigateTo='RegistrationDone' title='Next' {...this.props}/>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(MembersInfo);

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
          alignItems:'center',
          width:'100%',
          flex: 1,
          paddingTop:20,
          paddingBottom:20,
      },
  });