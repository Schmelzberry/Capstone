import React from "react";
import Header from "./Header";
import SignIn from "./SignIn";
import ViewControl from "./ViewControl";
import Album from "./Album"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* ROUTES */}
        <Route path="/sign-in" element={<SignIn 
        />} />


        <Route path="/" element={<ViewControl 
        />} />

        <Route path="/album" element={<Album 
        />} />
    
      </Routes>
    </Router>
  );
}

export default App;
