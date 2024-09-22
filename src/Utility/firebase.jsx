import firebase from "firebase/compat/app";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// auth
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2HlOJ6sRtN47vJUYDs0q2SAGuy80a5iE",
  authDomain: "clone-58df5.firebaseapp.com",
  projectId: "clone-58df5",
  storageBucket: "clone-58df5.appspot.com",
  messagingSenderId: "319879930057",
  appId: "1:319879930057:web:9bb4fecbec4e66dfe8ad18"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = app.firestore()