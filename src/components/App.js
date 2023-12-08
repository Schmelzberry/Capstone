import React from "react";
import Header from "./Header";
import ArtistList from "./ArtistList";


function App() {
  return (
    <React.Fragment>
      <Header />
      <h2>Welcome to Ohp!</h2>
      <h2>Let's start by signing up.</h2>
      <ArtistList />
    </React.Fragment>
  );
}

export default App;
