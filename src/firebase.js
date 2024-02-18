// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCLLt12NKND6Blb0PHo8LBxG8NAd_atO3c",
  authDomain: "twitter-clone-71fa7.firebaseapp.com",
  databaseURL: "https://twitter-clone-71fa7-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-71fa7",
  storageBucket: "twitter-clone-71fa7.appspot.com",
  messagingSenderId: "635196049755",
  appId: "1:635196049755:web:1fa2749f6cf49fc396327e",
  measurementId: "G-DV3LNMPGK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProver = new GoogleAuthProvider()


export const db = getFirestore(app)