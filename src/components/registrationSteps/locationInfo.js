import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

import { TeamSetup } from './data';
import NextButton from './components/nextButton';
import TextInputComp from '../textInput';
import MapComp from '../map';

import { onChangeGeoLocationPos, onChangeGeoLocationMarker } from '../../actions';

const IN_ARRAY='registration', IN_OBJECT='locationAddressGeo', IN_OBJECT_TEXT='locationAddress';

class LocationInfo extends React.Component{
    static navigationOptions = {
        title: 'Define your location',
    };

    constructor(){
        super();
        this.state = {
            error: {}
        }
    }

    componentWillMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                var geoLoc = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }
                this.props.dispatch(onChangeGeoLocationPos(geoLoc, IN_ARRAY, IN_OBJECT))
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
          );
    }

    render(){ 
        return(
            <View style={styles.container}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer}>
                    <View style={styles.viewContainer}>
                        <MapComp inArray={IN_ARRAY} inObject={IN_OBJECT}/>
                        <TextInputComp inArray={IN_ARRAY} inObject={IN_OBJECT_TEXT} placeholder='Clubhouse location' searchable/>
                    </View>
                </ScrollView>
                <NextButton navigateTo='MembersInfo' title='Next' {...this.props}/>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(LocationInfo);

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
        paddingBottom:20
    },
    mapView: {
        width:'100%',
        height:250,
    }
  });