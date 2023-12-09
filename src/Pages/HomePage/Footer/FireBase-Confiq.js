// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyDlJIP5fizFK4kNyv84C2A7gD2enqDBz-U",
    authDomain: "keep-learning-30a4a.firebaseapp.com",
    projectId: "keep-learning-30a4a",
    storageBucket: "keep-learning-30a4a.appspot.com",
    messagingSenderId: "631620563527",
    appId: "1:631620563527:web:c426ffc02a09d2efb93762"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
export default Auth