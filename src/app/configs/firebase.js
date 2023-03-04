// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import  'firebase/compat/database';
import "firebase/compat/storage"
import {FIREBASE_KEY} from '../utils/constants'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "test-fcfa8.firebaseapp.com",
  projectId: "test-fcfa8",
  storageBucket: "test-fcfa8.appspot.com",
  messagingSenderId: "895535480500",
  appId: "1:895535480500:web:089d94aaa2694ec97ba1e1",
  measurementId: "G-YLMHF4HZXM"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export const storage =  firebase.storage();
export default firebase
