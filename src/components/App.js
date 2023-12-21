import React from "react";
import Header from "./Header";
import SignIn from "./SignIn";
import ViewControl from "./ViewControl";
import Album from "./Album"
import HeroPage from "./Hero";
import BookArtist from "./BookArtist"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* ROUTES */}

        <Route path="/" element={<HeroPage 
        />} />

        <Route path="/sign-in" element={<SignIn 
        />} />

        <Route path="/view-control" element={<ViewControl 
        />} />

        <Route path="/album" element={<Album 
        />} />
        
        <Route path="/book-artist" element={<BookArtist
        />} />
    
      </Routes>
    </Router>
  );
}

export default App;
