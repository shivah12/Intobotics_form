import { initializeApp } from "firebase/app"
import {getFirestore} from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDynokjzYQf1Xb2r7D-rgYZU5aqSoUnkXw",
  authDomain: "intobiotics-383be.firebaseapp.com",
  databaseURL: "https://intobiotics-383be-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "intobiotics-383be",
  storageBucket: "intobiotics-383be.appspot.com",
  messagingSenderId: "359622857192",
  appId: "1:359622857192:web:8fb39d55019e0566a5545d",
  measurementId: "G-5FLXWW9QZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)