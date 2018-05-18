import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import firebase from '../../../firebase';
import { registrateUser } from '../../../actions';

class NextButton extends React.Component{

    goToNextStep = (saveToFirebase) => {
        if(saveToFirebase){
            this.saveRegistrationToFirebase();
        }
        else{
            console.log('this.props.navigateTo', this.props.navigateTo)
            this.props.navigation.navigate(this.props.navigateTo);
        }
    }

    saveRegistrationToFirebase = () => {
        this.props.dispatch(registrateUser(this.props))
    }

    render(){
        const { title, saveToFirebase } = this.props;
        return(
			<View style={styles.nextStepButtonContainer}>
                <TouchableOpacity onPress={() => this.goToNextStep(saveToFirebase)} style={styles.nextStepButton}>
                    <Text>{title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default NextButton;

const styles = StyleSheet.create({
    nextStepButtonContainer:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        flex:0.1
    },
    nextStepButton:{
        width:'80%',
        height:'70%',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
    }
  });