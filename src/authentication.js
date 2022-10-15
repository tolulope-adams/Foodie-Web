import React from 'react';
import {useNavigate} from "react-router-dom";

import {firebaseConfig} from './config.js';

import './authentication.css';

import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


const app = initializeApp(firebaseConfig);
const authInstance = getAuth(app);

function Authentication() {
  let navigate = useNavigate();

  
  
  const validatePassword = (password, confirmPassword) => {
    if(password && confirmPassword && password == confirmPassword){
      return true;
    }
    return false;
  }

  const signup = event => {
    var signupEmail = document.getElementById("signup-email");
    var signupPassword = document.getElementById("signup-password");
    var signupConfirmPassword = document.getElementById("confirm-signup-password");

    event.preventDefault();
  
    if(validatePassword(signupPassword.value, signupConfirmPassword.value)){
      createUserWithEmailAndPassword(authInstance, signupEmail.value, signupPassword.value)
        .then((userCredential) => {
          // Sign-up suceessful
          var user = userCredential.user;
          navigate("/home");
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

  const login = event => {
    var loginEmail = document.getElementById("login-email");
    var loginPassword = document.getElementById("login-password");
    
    event.preventDefault();

    signInWithEmailAndPassword(authInstance, loginEmail, loginPassword)
      .then((userCredential) => {
        // Sign-in suceessful
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }

  

  return <div>

    <div id="signup-container">
      <form onSubmit={signup} method="POST">
        <label for="signup-email">Email</label>

        <input id="signup-email" name="email" type="email"/>

        <label for="signup-password">Password</label>

        <input id="signup-password" name="password" type="password"/>

        <label for="confirm-signup-password">Confirm Password</label>

        <input id="confirm-signup-password" type="password"/>

        <button id='signup-button' type="submit">Sign up</button>
      </form>
    </div>

    <div id="login-container">
      <form onSubmit={login} method="POST">
          <label for="login-email">Email</label>

          <input id="login-email" name="email" type="email"/>

          <label for="login-password">Password</label>

          <input id="login-password" name="password" type="password"/>

          <button id='login-button' type="submit">Login</button>
      </form>
    </div>
    
  </div>;
}

export default Authentication;