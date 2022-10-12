import React from 'react';
import './authentication.css';
import { useNavigate} from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTAFj9odjieaRK56kO9VJrvFwoTrV5VyE",
  authDomain: "foodie-42bf4.firebaseapp.com",
  projectId: "foodie-42bf4",
  storageBucket: "foodie-42bf4.appspot.com",
  messagingSenderId: "568117973905",
  appId: "1:568117973905:web:0fce2d93cfc426e9f3c030",
  measurementId: "G-WWT4Q14G3D"
};


const app = initializeApp(firebaseConfig);
const authInstance = getAuth(app);
// const analytics = getAnalytics(app);

function validatePassword(password, confirmPassword){
  if(password !== confirmPassword){
    
    return false;
  }
  return true;
}

function signup() {
  var signupEmail = document.getElementById("signup-email");
  var signupPassword = document.getElementById("signup-password");
  var signupConfirmPassword = document.getElementById("confirm-signup-password");

  if(validatePassword(signupPassword.value, signupConfirmPassword.value)){
    createUserWithEmailAndPassword(authInstance, signupEmail.value, signupPassword.value)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        alert("success");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }else{
    alert("failed");
    //...
  }
}

function login(authInstance, email, password){
  signInWithEmailAndPassword(authInstance, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function Authentication() {
  const navigate = useNavigate();

  return <div>

    <div id="signup-container">
      
        <label for="signup-email">Email</label>

        <input id="signup-email" type="email"/>

        <label for="signup-password">Password</label>

        <input id="signup-password" type="password"/>

        <label for="confirm-signup-password">Confirm Password</label>

        <input id="confirm-signup-password" type="password"/>

        <button id='signup-button' onClick={() => navigate("/home")}>Login</button>

    </div>

    <div id="login-container">
      
        <label for="login-email">Email</label>

        <input id="login-email" type="email"/>

        <label for="login-password">Password</label>

        <input id="login-password" type="password"/>

        <button id='login-button' onClick={login}>Login</button>

    </div>
    
  </div>;
}

export default Authentication;