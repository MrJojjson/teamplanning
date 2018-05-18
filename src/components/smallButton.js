import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class SmallButton extends React.Component{

    actionFromProp = () => {
        this.props.makeAction();
    }

    render(){
        const { title } = this.props;
        return(
            <TouchableOpacity onPress={() => this.actionFromProp()} style={styles.smallButtonView}>
                <Text>{title}</Text>
            </TouchableOpacity>
        );
    }
}

export default SmallButton;

const styles = StyleSheet.create({
    smallButtonView:{
        width:'auto',
        height:30,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
    }
  });