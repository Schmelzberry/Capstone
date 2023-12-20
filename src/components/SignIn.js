import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function SignIn() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);
  const [userIsSignedIn, setUserIsSignedIn] = useState(auth.currentUser !== null);

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`);
        setUserIsSignedIn(true);
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}!`);
      });
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`);
        setUserIsSignedIn(true);
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`);
      });
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setSignOutSuccess("You have successfully signed out!");
        setUserIsSignedIn(false);
      })
      .catch((error) => {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  return (
    <React.Fragment>
      <Box className="auth-form-container">

        {/* SIGN UP FORM  */}
        <Typography variant="h5" gutterBottom component="div">Sign-up</Typography>
        {!userIsSignedIn && (
          <>
            {signUpSuccess}
            <form onSubmit={handleSignUp}>
              <TextField label="Email" name="email" fullWidth />
              <TextField label="Password" name="password" type="password" fullWidth />
              <Button type="submit" variant="contained" color="primary">Sign up</Button>
            </form>
          </>
        )}

        {/* SIGN IN FORM  */}
        <Typography variant="h5" gutterBottom component="div">Sign-In</Typography>
        {signInSuccess}
        <form onSubmit={handleSignIn}>
          <TextField label="Email" name="email" fullWidth />
          <TextField label="Password" name="password" type="password" fullWidth />
          <Button type="submit" variant="contained" color="primary">Sign-in</Button>
        </form>

        {/* SIGN OUT BUTTON  */}
        {signOutSuccess}
        {userIsSignedIn && <Button onClick={handleSignOut} variant="contained" color="secondary">Sign-out</Button>}
      </Box>
    </React.Fragment>
  );
}

export default SignIn;

// import React, { useState } from "react";
// import { auth } from "./../firebase.js";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


// function SignIn() {
//   const [signUpSuccess, setSignUpSuccess] = useState(null);
//   const [signInSuccess, setSignInSuccess] = useState(null);
//   const [signOutSuccess, setSignOutSuccess] = useState(null);

//   const userIsSignedIn = auth.currentUser !== null;


//   function doSignUp(event) {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
//     })
//     .catch((error) => {
//       setSignUpSuccess(`There was an error signing up: ${error.message}!`)
//     });
//   }

//   function doSignIn(event) {
//     event.preventDefault();
//     const email = event.target.signinEmail.value;
//     const password = event.target.signinPassword.value;
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
//       })
//       .catch((error) => {
//         setSignInSuccess(`There was an error signing in: ${error.message}!`)
//       });
//   }

//   function doSignOut() {
//     signOut(auth)
//       .then(function() {
//         setSignOutSuccess("You have successfully signed out!");
//       }).catch(function(error) {
//         setSignOutSuccess(`There was an error signing out: ${error.message}!`);
//       });
//   }
//   return (
//     <React.Fragment>
//       <div className="auth-form-container">

//         {/* SIGN UP FORM  */}
//         <h1 className="auth-form-title">Sign-up</h1>
//         {/* Error message, initially set to null to not show inherently show in form */}
//         {!userIsSignedIn && (
//           <>
//         {signUpSuccess}
//         <form className="auth-form" onSubmit={doSignUp}>
//           <input type="text" name="email" placeholder="email" />
//           <input type="password" name="password" placeholder="Password" />
//           <button type="submit">Sign up</button>
//         </form>
//         </>
//         )}

//         {/* SIGN IN FORM  */}
//         <h1 className="auth-form-title">Sign-In</h1>
//         {signInSuccess}
//         <form className="auth-form" onSubmit={doSignIn}>
//           <input type="text" name="signinEmail" placeholder="email" />
//           <input type="password" name="signinPassword" placeholder="Password" />
//           <button type="submit">Sign-in</button>
//         </form>
//           {/* SIGN OUT BUTTON  */}
  
//         {signOutSuccess}
//         <br />
//         <button onClick={doSignOut}>Sign-out</button>
//       </div>
//     </React.Fragment>
//   );
// }

// export default SignIn;