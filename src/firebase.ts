// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, addDoc, getDocs ,Timestamp  } from "firebase/firestore";

import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG4jvwAl5mZ4XMoaeEFRXXbWPi6Echf8w",
  authDomain: "fb-clone-f3c6d.firebaseapp.com",
  projectId: "fb-clone-f3c6d",
  storageBucket: "fb-clone-f3c6d.appspot.com",
  messagingSenderId: "878239396693",
  appId: "1:878239396693:web:e542c03af7cf10c025b5dc",
  measurementId: "G-N27N3RZG6N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, signInWithPopup, provider, collection, addDoc, getDocs,Timestamp  };
export default db;
