import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//Here I want to import the seed file
//  import { seedDatabase } from '../seed';

//Call the seed file only ONCE
const config = {
    apiKey: "AIzaSyAMw9zfTCDsnGcSS5ZJA_SnSmCn7N3c3y8",
    authDomain: "instagram-md.firebaseapp.com",
    projectId: "instagram-md",
    storageBucket: "instagram-md.appspot.com",
    messagingSenderId: "29860662613",
    appId: "1:29860662613:web:be39cfe90afcdc4367b3dc"
};

const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;
// const firebase = window.firebase.initializeApp(config);
// const {FieldValue} = window.firebase.firestore;

//  seedDatabase(firebase);
// console.log('firebase', firebase);
export {firebase, FieldValue};