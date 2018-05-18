import update from 'immutability-helper';
import firebase from './firebase'; 

export default function reducer(state = {
    user: null,
    isLoggedIn: false,
    registration: []
}, action) {
    switch(action.type) {
        case 'LOGIN_USER':
        return update(state, { 
            user: { $set: action.user},
            isLoggedIn: {$set: action.isLoggedIn}
          });
        break;

        case 'ERROR_WHILE_LOGIN':
        return update(state, { 
            user: {$set: action.user},
            messageToDisplay: {$set: action.messageToDisplay},
            isLoggedIn: {$set: action.isLoggedIn}
          });
        break;

        case 'REGISTRATE_USER':
        return update(state, { 
            user: {$set: action.user},
            isLoggedIn: {$set: action.isLoggedIn}
          });
        break;

        case 'ERROR_WHILE_REGISTRATE':
        return update(state, { 
            user: {$set: action.user},
            messageToDisplay: {$set: action.messageToDisplay},
            isLoggedIn: {$set: action.isLoggedIn}
          });
        break;

        case 'LOG_OUT_USER':
        return update(state, { 
            user: {$set: action.user},
            isLoggedIn: {$set: action.isLoggedIn}
          });
        break;

        case 'ERROR_WHILE_LOG_OUT':
        return update(state, { 
            messageToDisplay: {$set: action.messageToDisplay},
          });
        break;

        case 'SELECT_USER_OR_TEAM':
        return update(state, {
            registration:{
                regAsUserOrTeam: {$set: action.value}
            }
        })
        break;

        case 'SELECT_SPORT_GENRE':
        return update(state, {
            registration:{
                sport: {$set: action.value}
            }
        })
        break;

        case 'CHANGE_TEXT_INPUT':
        return update(state, {
            [action.inArray]:{
                [action.inObject]: {$set: action.value} 
            }
        })
        break;
        
        case 'CHANGE_TEXT_INPUT_ARRAY':
        return update(state, {
            [action.inArray]:{
                [action.inObject]:{
                    [action.inIndex]:{ 
                        value: {$set: action.value} 
                    }
                }
            }
        })
        break;
       
        case 'CHANGE_GEO_LOCATION_POS':
        return update(state, {
            [action.inArray]:{
                [action.inObject]: {$set: action.value} 
            }
        })
        break;

        case 'CHANGE_GEO_LOCATION_MARKER':
        return update(state, {
            [action.inArray]:{
                [action.inObject]: {$set: action.value} 
            }
        })
        break;

        case 'SET_RANDOM_CODE_FOR_TEAM':        
        return update(state, {
            [action.inArray]:{
                [action.inObject]: {$set: action.value} 
            }
        })
        break;

        case 'SET_NUMBER_OF_EMAIL_INPUTS':
        return update(state, {
            [action.inArray]:{
                [action.inObject]: {$set: [action.value]} 
            }
        })
        break;

        case 'INCREASE_NUMBER_OF_EMAIL_INPUTS':
        return update(state, {
            [action.inArray]:{
                [action.inObject]: {$push: [action.value]} 
            }
        })
        break;
        
        case 'DECREASE_NUMBER_OF_EMAIL_INPUTS':
        return update(state, { 
            [action.inArray]: { 
                [action.inObject]: { $splice: [[action.inIndex, 1]] }
            }
        })
        break;

        case 'GET_TEAM_DATA':
        console.log('action.codeForTeam', action.codeForTeam)
        firebase.database().ref(`team/${[action.codeForTeam]}`).on('child_added', snapshot => {
            const snap = snapshot.val();
            console.log('snap', snap)
            return update(state, {
                teamData: {$push: snap}
            })
        })
        
        
        
    }

    return state 

}