import React from "react";
import Header from "./Header";
import ViewControl from "./ViewControl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
    <React.Fragment>
      <Routes>
        <Route path="/sign-in" element={<SignIn />}
      <Header />
      <ViewControl />
      </Routes>
    </React.Fragment>
    </Router>
  );
}

export default App;
