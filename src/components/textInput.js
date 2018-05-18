import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { onChangeTextInput, onChangeTextInputArray, onChangeGeoLocationPos, onChangeGeoLocationMarker } from '../actions';
import { GetGeoLocationFromAddress } from './geoLocation';

class TextInputComp extends React.Component{

    onChangeText = (value, inArray, inObject, isArray, inIndex) => {
        if(value.length < 1) {
            console.log('not verified'); 
            
        }
        if(isArray){
            this.props.dispatch(onChangeTextInputArray(value, inArray, inObject, inIndex))
        }
        else {
            this.props.dispatch(onChangeTextInput(value, inArray, inObject))
        }
    }

    onSearch = (value, inArray, inObject) => {
        if(inObject.toLowerCase().includes('address') && value){
            const addressGeoLocation = GetGeoLocationFromAddress(value);
            addressGeoLocation.then(result => {
                inObject += 'Geo';
                const changeToSupportSyntax = {
                    latitude: result.lat,
                    longitude: result.lng
                }
                this.props.dispatch(onChangeGeoLocationPos(changeToSupportSyntax, inArray, inObject))
                this.props.dispatch(onChangeGeoLocationMarker(changeToSupportSyntax, inArray, inObject += 'Marker'))
            }).catch(error => {
                console.log('error', error);
            })
        }
    }

    renderRemoveIcon = () => {        
        return (
            <TouchableOpacity onPress={() => this.props.makeAction()}>
                <Icon name="minus" type="entypo" size={16} style={styles.removeIcon}/>
            </TouchableOpacity>
        )
    }

    render(){
        const {inArray, inObject, placeholder, searchable, isArray, inIndex, removeable, makeAction, email, password, isVerified} = this.props;  
         
        var value = this.props[inArray][inObject];
        if(isArray){
            value = this.props[inArray][inObject][inIndex].value;
        }
        const showRemoveIcon = removeable ? this.renderRemoveIcon() : null;
        const floatingLabel = value ? <Text style={[styles.inputFloatingLabel, removeable ? {marginLeft:25} : null]}>{placeholder}</Text> : null
        return(
			<View style={styles.inputFieldView}>
                <View style={styles.textAndFloatingView}>
                    {floatingLabel}
                    <TextInput 
                        style={[styles.inputField, removeable ? {width:'90%'} : {width:'100%'}]}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        label={placeholder}
                        placeholder={placeholder}
                        placeholderTextColor='#ccc'
                        value={value}
                        onChangeText={value => this.onChangeText(value, inArray, inObject, isArray, inIndex, isVerified)}
                        onSubmitEditing={searchable ? () => this.onSearch(value, inArray, inObject) : null}
                        autoCapitalize={email ? 'none' : 'sentences'}
                        secureTextEntry={password ? true : false}
                    />
                </View>
                {showRemoveIcon}
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(TextInputComp);

const styles = StyleSheet.create({
    inputFieldView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'80%',
        margin:10,
    },
    textAndFloatingView: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
    },
    inputField:{
        padding:10,
        borderBottomWidth:1,
        borderBottomColor: '#aaa',
        fontSize:16,
        color:'#4a4a4a',
    },
    inputFloatingLabel:{
        alignSelf:'flex-start',
        fontSize:10,
        color:'#aaa',
        marginLeft:10
    },
    removeIcon:{
       margin:5,
       padding:5,
       color:'#b22222'
    }
  });