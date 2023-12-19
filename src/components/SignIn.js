import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


function SignIn() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);


  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
    })
    .catch((error) => {
      setSignUpSuccess(`There was an error signing up: ${error.message}!`)
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`)
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }
  return (
    <React.Fragment>
      <div className="auth-form-container">
        <h1 className="auth-form-title">Sign-up to see our list of artists</h1>
        {/* Error message, initially set to null to not show inherently show in form */}
        {signUpSuccess}
        <form className="auth-form" onSubmit={doSignUp}>
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Sign up</button>
        </form>

        <h1 className="auth-form-title">Sign In</h1>
        {signInSuccess}
        <form className="auth-form" onSubmit={doSignIn}>
          <input type="text" name="signinEmail" placeholder="email" />
          <input type="password" name="signinPassword" placeholder="Password" />
          <button type="submit">Sign in</button>
        </form>

        <h6 className="signOut">Sign Out</h6>
        {signOutSuccess}
        <br />
        <button onClick={doSignOut}>Sign out</button>
      </div>
    </React.Fragment>
  );
}

export default SignIn;