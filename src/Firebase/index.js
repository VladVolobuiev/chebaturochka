import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAzSCoZlMYMEWV7NuXMvcfHw1IofZQLnp8',
//   authDomain: 'epikur-web.firebaseapp.com',
//   projectId: 'epikur-web',
//   storageBucket: 'epikur-web.appspot.com',
//   messagingSenderId: '76356809158',
//   appId: '1:76356809158:web:353da980d287a33bf782c7',
//   measurementId: 'G-WHS4QZVNHG',
// };
const firebaseConfig = {
  apiKey: 'AIzaSyCbE5ugFWTvGtCO87WB3QF0BTAcS-HYC1Q',
  authDomain: 'chebaturochkanew.firebaseapp.com',
  projectId: 'chebaturochkanew',
  storageBucket: 'chebaturochkanew.appspot.com',
  messagingSenderId: '529313157575',
  appId: '1:529313157575:web:817d6568f6a4a2cf9d49e2',
  measurementId: 'G-SPLMPW2LTT',
};

export const fire = firebase.initializeApp(firebaseConfig);

/*
// Allow read/write access to all users under any conditions
// Warning: **NEVER** use this rule set in production; it allows
// anyone to overwrite your entire database.
service cloud.firestore {
    match /databases/{database}/documents {
    match /{document=**} {
        allow read, write: if true;
    }
}
}*/
