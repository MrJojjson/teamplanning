import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

import { onChangeTextInput } from '../actions';

class TextInputMultiLine extends React.Component{

    onChangeText = (value, inArray, inObject) => {
        this.props.dispatch(onChangeTextInput(value, inArray, inObject))
    }

    render(){
        const {inArray, inObject, placeholder} = this.props; 
        var value = this.props[inArray][inObject];
        const floatingLabel = value ? <Text style={styles.inputFloatingLabel}>{placeholder}</Text> : null          
        return(
			<View style={styles.inputFieldView}>
                {floatingLabel}
                <TextInput 
                    style={styles.inputField}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    label={placeholder}
                    placeholder={placeholder}
                    placeholderTextColor='#bbb'
                    value={value}
                    numberOfLines={5}
                    multiline={true}
                    onChangeText={value => this.onChangeText(value, inArray, inObject)}
                />
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(TextInputMultiLine);

const styles = StyleSheet.create({
    inputFieldView:{
        alignItems:'center',
        justifyContent:'center',
        width:'80%',
        margin:5,
    },
    inputField:{
        width:'100%',
        padding:10,
        height:150,
        borderBottomWidth:1,
        borderBottomColor: '#aaa',
        backgroundColor:'#f6f6f6',
        fontSize:16,
        color:'#4a4a4a',
    },
    inputFloatingLabel:{
        alignSelf:'flex-start',
        fontSize:10,
        marginLeft:10,
        marginBottom:5,
        color:'#aaa'
    }
  });