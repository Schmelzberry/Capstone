import React from "react";
import Header from "./Header";
import SignIn from "./SignIn";
import User from "./User";
import ViewControl from "./ViewControl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* ROUTES */}
        <Route path="/sign-in" element={<SignIn 
        />} />

        <Route path="/user" element={<User 
        />} />

        <Route path="/" element={<ViewControl 
        />} />
    
      </Routes>
    </Router>
  );
}

export default App;
