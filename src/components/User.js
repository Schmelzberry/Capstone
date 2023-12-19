import React from "react";
import { auth } from './../firebase.js';



function User(){

  return(

    <React.Fragment>
      <h3>User: {auth.UserInfo.displayName}</h3>
    </React.Fragment>
  )
}

export default User;