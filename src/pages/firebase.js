// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth, createUserWithEmailAndPassword} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp7NfohLRQZh54kmLAdklj_aOkWpgkchA",
  authDomain: "click-master-7ad97.firebaseapp.com",
  projectId: "click-master-7ad97",
  storageBucket: "click-master-7ad97.appspot.com",
  messagingSenderId: "942126414004",
  appId: "1:942126414004:web:2cc97289c297d4f04abfe1",
  measurementId: "G-SEVXE5D1J4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export {auth , provider} 

