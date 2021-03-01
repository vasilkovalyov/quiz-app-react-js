import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyC5V7Cv_wYrjhpA86SBWlDC-M-myqmohoQ",
    authDomain: "quizappreactjs.firebaseapp.com",
    projectId: "quizappreactjs",
    storageBucket: "quizappreactjs.appspot.com",
    messagingSenderId: "558119156250",
    appId: "1:558119156250:web:5f520f5b657e6be2f92fa3"
}

class Firebase {
    constructor() {
        // Initialize Firebase
		firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.database = firebase.database();
        this.firebase = firebase;
        this.storage = firebase.storage();
    }
}

const fb = new Firebase();

export default fb;