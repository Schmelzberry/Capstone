import React from "react";

function SignIn() {
  return (
    <React.Fragment>
      <h1>Sign-in too see our list of artists</h1>
      <form onSubmit={doSignUp}>
        <input 
        type="text" 
        name="email" 
        placeholder="email" 
        />
        <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        />
        <button type="submit">Sign up</button>
      </form>
    </React.Fragment>
  );
}

export default SignIn;
