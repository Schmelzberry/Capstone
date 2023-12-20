import React, { useEffect, useState } from "react";
import { auth, db } from './../firebase.js';

function User() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser && db)  {
        const userId = auth.currentUser.uid;
        try {
          const userDoc = await db.collection("users").doc(userId).get();
          if (userDoc.exists) {
            setUserInfo(userDoc.data());
          } else {
            console.log("User document not found");
          }
        } catch (error) {
          console.error("Error fetching user data", error);
        }
      }
    };

    fetchUserData();
  }, [auth.currentUser, db]); 

  return (
    <React.Fragment>
      {userInfo ? (
        <div>
          <h3>Username: {userInfo.displayName}</h3>
          <h3>Email: {userInfo.email}</h3>
          <h3>Photo: {userInfo.photoURL}</h3>
          <h3>UserId: {userInfo.uid}</h3>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </React.Fragment>
  );
}

export default User;





// import React from "react";
// import { auth } from './../firebase.js';



// function User(){

//   return(

//     <React.Fragment>
//       <h3>Username: {auth.UserInfo.displayName}</h3>
//       <h3>Email: {auth.UserInfo.email}</h3>
//       <h3>Photo: {auth.UserInfo.photoURL}</h3>
//       <h3>UserId: {auth.UserInfo.uid}</h3>
//     </React.Fragment>
//   )
// }

// export default User;