import firebase from 'firebase/app';
import 'firebase/database'

firebase.initializeApp({
    apiKey: "AIzaSyBZOI2haajXb_xBI2Fm7mWJf5yIU0awDBw",
    authDomain: "namatandon.firebaseapp.com",
    projectId: "namatandon",
    storageBucket: "namatandon.appspot.com",
    messagingSenderId: "836094868451",
    appId: "1:836094868451:web:955ac8adbced9919ffbed6"
});

const FIREBASE = firebase;

export default FIREBASE;