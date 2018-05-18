import firebase from './firebase'; 

export function loginUser (email, password){
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            dispatch({
                type: 'LOGIN_USER',
                user: user,
                isLoggedIn: true
            })
        })
        .catch((error) => {
            dispatch({
                type: 'ERROR_WHILE_LOGIN',
                messageToDisplay: error,
                user: null,
                isLoggedIn: false
            })
        });
        
    }
}

export function registrateUser (props){
    const email = props.registration.userEmail;
    const password = props.registration.userPassword;
    const registrationInformaiton = props.registration;
    const codeForTeam = props.registration.codeForTeam;
    const regAsUserOrTeam = props.registration.regAsUserOrTeam;
    const navigation = props.navigation;
    const navigateTo = props.navigateTo;
    //const userToSet = {userRegCode: userRegCode, created: Firebase.ServerValue.TIMESTAMP}

    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            let uid = user.uid
            let email = user.email
            let d = new Date();
            let n = d.getTime();
            firebase.database().ref(`users/${uid}`).set({
                'codeForTeam': codeForTeam, 
                'createdAccount': n,
                'email': email
            }).then(() => {
                if(regAsUserOrTeam === 'Team') {
                    firebase.database().ref(`team/${codeForTeam}`).set({
                        registrationInformaiton
                    }).then(() => {
                    dispatch({
                        type: 'REGISTRATE_USER',
                        user: user,
                        isLoggedIn: true
                    })
                })
                } else {
                    dispatch({
                        type: 'REGISTRATE_USER',
                        user: user,
                        isLoggedIn: true
                    })
                }
                    
            })
            
        })
        .catch((error) => {
            dispatch({
                type: 'ERROR_WHILE_REGISTRATE',
                messageToDisplay: error,
                user: null,
                isLoggedIn: false
            })
        });
        
    }
}

export function logOutUser (email, password){
    return (dispatch) => {
        firebase.auth().signOut()
        .then(() => {
            dispatch({
                type: 'LOG_OUT_USER',
                user: null,
                isLoggedIn: false
            })
        })
        .catch((error) => {
            dispatch({
                type: 'ERROR_WHILE_LOG_OUT',
                messageToDisplay: error,
            })
        });
    }
}

/*REGISTRATION*/

export function onUserOrTeamPress(name) {
    return (dispatch) => {
        dispatch({
            type: 'SELECT_USER_OR_TEAM',
            value: name
        })
    }
}

export function onSportPress(name) {
    return (dispatch) => {
        dispatch({
            type: 'SELECT_SPORT_GENRE',
            value: name
        })
    }
}

export function onChangeTextInput(value, inArray, inObject) {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_TEXT_INPUT',
            value:  value,
            inArray: inArray,
            inObject: inObject
        })
    }
}

export function onChangeTextInputArray(value, inArray, inObject, inIndex) {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_TEXT_INPUT_ARRAY',
            value:  value,
            inArray: inArray,
            inObject: inObject,
            inIndex: inIndex
        })
    }
}

export function onChangeGeoLocationPos(addressGeoLocation, inArray, inObject) {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_GEO_LOCATION_POS',
            value:  addressGeoLocation,
            inArray: inArray,
            inObject: inObject
        })
    }
}

export function onChangeGeoLocationMarker(markerGeoLocation, inArray, inObject) {
    return (dispatch) => {
        dispatch({
            type: 'CHANGE_GEO_LOCATION_MARKER',
            value:  markerGeoLocation,
            inArray: inArray,
            inObject: inObject
        })
    }
}

export function onChangeRandomCodeString(code, inArray, inObject) {  
    return (dispatch) => {
        dispatch({
            type: 'SET_RANDOM_CODE_FOR_TEAM',
            value: code,
            inArray: inArray,
            inObject: inObject
        })
    }
}

export function onSetNumberOfEmailInput(value, inArray, inObject) {  
    return (dispatch) => {
        dispatch({
            type: 'SET_NUMBER_OF_EMAIL_INPUTS',
            value: value,
            inArray: inArray,
            inObject: inObject
        })
    }
}

export function onIncreaseNumberOfEmailInput(value, inArray, inObject) {  
    return (dispatch) => {
        dispatch({
            type: 'INCREASE_NUMBER_OF_EMAIL_INPUTS',
            value: value,
            inArray: inArray,
            inObject: inObject
        })
    }
}

export function onDecreaseNumberOfEmailInput(inArray, inObject, inIndex) {  
    return (dispatch) => {
        dispatch({
            type: 'DECREASE_NUMBER_OF_EMAIL_INPUTS',
            inArray: inArray,
            inObject: inObject,
            inIndex: inIndex,
        })
    }
}

export function getTeamData (user){
    const codeForTeam = user.codeForTeam;
    return (dispatch) => {
        dispatch({
            type: 'GET_TEAM_DATA',
            codeForTeam: codeForTeam,
        })
    }
}




