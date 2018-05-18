import React from 'react';
import {View,Text, StyleSheet, Button, TextInput, TouchableHighlight} from 'react-native'
import { connect } from 'react-redux';
import { loginUser, registrateUser, onRegistrationChangeStep } from '../actions';

class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onEmailInputChange(email){        
        this.setState({email}); 
    }

    onPasswordInputChange(password){
        this.setState({password});
    }

    onLoginPress = () => {
        this.props.dispatch(loginUser(this.state.email, this.state.password))
    }

    onRegistratePress = () => {
        //this.props.dispatch(registrateUser(this.state.email, this.state.password))
        this.props.navigation.navigate('ChooseToRegTeamOrUser')
    }

    render(){        
        return(
			<View style={styles.container}>
				<TextInput 
                    style={styles.inputField}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    label='Email Address'
                    placeholder='youremail@domain.com'
                    autoCapitalize = 'none'
                    placeholderTextColor='#ddd'
                    value={this.state.email}
                    onChangeText={email => this.onEmailInputChange(email)}
                />
                <TextInput
                    style={styles.inputField} 
                    label='Password'
                    autoCorrect={false}
                    placeholder='*******'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor={'#ddd'}
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.onPasswordInputChange(password)}
                />
                <TouchableHighlight onPress={() => this.onLoginPress()} style={styles.buttonLoginTouchableOpacity}>
                    <Text style={styles.buttonLoginText}>Log in</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.onRegistratePress()} style={styles.buttonLoginTouchableOpacity}>
                    <Text style={styles.buttonLoginText}>Registrate</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
      ...state,
    };
  }

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'transparent'
    },
    inputFieldView:{
        flex:0.55,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    inputField:{
        width:200,
        margin:5,
        padding:10,
        borderBottomWidth:1,
        borderBottomColor: '#aaa',
        fontSize:16,
        color:'#4a4a4a',
    },
    buttonView:{
        flex:0.45,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-around',
        width:200,
    },
    buttonLoginTouchableOpacity:{
        padding:10,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1
    },
});
