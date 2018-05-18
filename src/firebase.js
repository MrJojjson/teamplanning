import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCZPd-vTcZZEbj5Nrae6_tPOzrpkL4NEzk",
    authDomain: "teamplanning-5ebd0.firebaseapp.com",
    databaseURL: "https://teamplanning-5ebd0.firebaseio.com",
    projectId: "teamplanning-5ebd0",
    storageBucket: "teamplanning-5ebd0.appspot.com",
    messagingSenderId: "671169784933"
};

var firebaseApp = null;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
}

export default firebaseApp;