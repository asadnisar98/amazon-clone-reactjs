import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvyqkJNJzqW4Fh2cOa8h_t9Rb5oHDr2Fg",
    authDomain: "clone-ceae1.firebaseapp.com",
    projectId: "clone-ceae1",
    storageBucket: "clone-ceae1.appspot.com",
    messagingSenderId: "444861403264",
    appId: "1:444861403264:web:7c2d6c3671139743695665",
    measurementId: "G-SS4LCTVGLD"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };