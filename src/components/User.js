import React from "react";
import auth from './../firebase.js';



function User(){
  const name = "User#1"

  return(

    <React.Fragment>
      <h3>User: {name}</h3>
    </React.Fragment>
  )
}

export default User;