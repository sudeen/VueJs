import firebase from 'firebase';


// Initialize Firebase
const config = {
    apiKey: "AIzaSyCsriZKFxR5Nktmi3IAj6YG2eQ0p0bF-HE",
    authDomain: "turnout-7a2ef.firebaseapp.com",
    databaseURL: "https://turnout-7a2ef.firebaseio.com",
    projectId: "turnout-7a2ef",
    storageBucket: "turnout-7a2ef.appspot.com",
    messagingSenderId: "778202103898"
};

export const firebaseApp=firebase.initializeApp(config);
export const eventsRef=firebaseApp.database().ref().child('events')