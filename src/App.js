import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./components/home-components/Home";
import Login from "./components/Login/login";
import Register from "./components/Login/Register";
function App() {
  return (

    <Router>
      <Home/>
      <Routes>
        <Route path = "/Login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
