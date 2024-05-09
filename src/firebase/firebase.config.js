// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABH2AQxkaMyJdZ-bgvVWb8D7V6Ul8udgI",
  authDomain: "auth-login-register-3.firebaseapp.com",
  projectId: "auth-login-register-3",
  storageBucket: "auth-login-register-3.appspot.com",
  messagingSenderId: "114111152454",
  appId: "1:114111152454:web:8406bd9e091805721a2547"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;