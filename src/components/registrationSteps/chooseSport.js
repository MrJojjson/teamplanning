import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import { connect } from 'react-redux';
import { TeamSetup } from './data';
import Icon from 'react-native-vector-icons/FontAwesome';
import { onSportPress } from '../../actions';
import NextButton from './components/nextButton';

class ChooseSport extends React.Component{
    static navigationOptions = {
        title: 'Choose your sport',
    };

    onSportPress = (name) => {
        this.props.dispatch(onSportPress(name))
    }

    renderTeamSetup = () => {
        return TeamSetup.map((el, i) => {
            let active = this.props.registration.sport === el.name;
            return (
                <TouchableOpacity key={i} onPress={() => this.onSportPress(el.name)} style={styles.teamSetupContainer}>
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
                        { this.renderTeamSetup() }
                    </View>
                </ScrollView>
                <NextButton navigateTo='TeamInfo' title='Next' {...this.props}/>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(ChooseSport);

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
    teamSetupContainer: {
        width:'42%',
        height:150,
        backgroundColor: '#bbb',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10
    },
    setActive: {
        width:'100%',
        backgroundColor: '#ddd',
    }
  });