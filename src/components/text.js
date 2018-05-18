import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

class TextComp extends React.Component{

    render(){
        const {text, title, showTitle, textStyle, alignCenter, small, normal, big, bg} = this.props;  
        return(
			<View style={[styles.textView, bg ? {backgroundColor: bg} : null]}>
                {showTitle ? 
                <Text style={[
                    styles.textTitle, 
                    alignCenter ? {textAlign:'center'} : null,
                    ]}>{title}
                </Text> : null}
                <Text 
                    style={[
                        styles.textField, 
                        alignCenter ? {textAlign:'center'} : null,
                        small ? {fontSize:12} : null,
                        normal ? {fontSize:16} : null,
                        big ? {fontSize:22} : null,
                    ]}
                >
                {text}
                </Text>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(TextComp);

const styles = StyleSheet.create({
    textView:{
        alignItems:'center',
        justifyContent:'center',
        width:'80%',
        margin:10,
        padding:10,
    },

    textTitle:{
        width:'100%',
        fontSize:14,
        marginLeft:10,
        color:'#aaa',
        padding:5
    },
    textField:{
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor: '#aaa',
        fontSize:16,
        color:'#4a4a4a',
    },
  });