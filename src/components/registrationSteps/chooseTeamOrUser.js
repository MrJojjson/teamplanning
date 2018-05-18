import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import { connect } from 'react-redux';
import { TeamSetup, UserOrTeam } from './data';
import Icon from 'react-native-vector-icons/FontAwesome';
import { onUserOrTeamPress } from '../../actions';
import NextButton from './components/nextButton';

class ChooseToRegTeamOrUser extends React.Component{
    static navigationOptions = {
        title: 'Choose your sport',
    };

    onUserOrTeamPress = (name) => {
        this.props.dispatch(onUserOrTeamPress(name))
    }

    renderTeamSetup = () => {
        return UserOrTeam.map((el, i) => {
            let active = this.props.registration.regAsUserOrTeam === el.name;
            return (
                <TouchableOpacity key={i} onPress={() => this.onUserOrTeamPress(el.name)} style={styles.teamSetupContainer}>
                    <View style={[styles.teamSetupContainer, active ? styles.setActive : null]}>
                        <Text>{el.name}</Text>
                        <Icon name={el.icon} type="entypo" size={24} color="#ddd" />
                    </View>
                </TouchableOpacity>
            )
        })
    }

    render(){  
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer}>
                    <View style={styles.viewContainer}>
                       {this.renderTeamSetup()}
                    </View>
                </ScrollView>
                <NextButton navigateTo='UserRegistration' title='Next' {...this.props}/>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(ChooseToRegTeamOrUser);

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
    },
    scrollViewContentContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height:'100%',
    },
    scrollView:{
        flex:0.9,
        height:'100%',
    },
    viewContainer:{
        width:'100%',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    teamSetupContainer: {
        width:'100%',
        flex:1,
        backgroundColor: '#bbb',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:1
    },
    setActive: {
        width:'100%',
        backgroundColor: '#ddd',
    }
  });